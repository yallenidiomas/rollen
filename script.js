// --- 1. CONFIGURAÇÕES E DADOS ---

// --- 1. CONFIGURAÇÕES E DADOS ---

// --- SISTEMA DE SOM (CORRIGIDO PARA MOBILE) ---
// --- SISTEMA DE SOM ---
// --- SISTEMA DE SOM (ARQUIVOS LOCAIS) ---
// --- SISTEMA DE SOM ---
// --- SISTEMA DE SOM COM MULTI-CAMADAS ---
// --- 2. SISTEMA DE SOM PROFISSIONAL (WEB AUDIO API) ---
// Cria um único contexto de áudio para todo o app (resolve o "pisca-pisca" no iOS)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Armazena os sons decodificados na memória (sem delay)
const soundBuffers = {};
let currentHoldSource = null; // Para controlar o som de 'hold'

// Mapeamento dos arquivos
const soundMap = {
    'click': './click.mp3',
    'touch': './touch.mp3',
    'hold':  './hold.mp3',
    'shoot': './shoot.mp3',
    'start': './start.mp3',
    'crit':  './crit.mp3',
    'fumble':'./fumble.mp3',
    // Colisões
    'col0': './collide1.mp3',
    'col1': './collide2.mp3',
    'col2': './collide3.mp3',
    'col3': './collide4.mp3',
    'col4': './collide5.mp3'
};

// Função para carregar e decodificar todos os sons de uma vez
async function preloadSounds() {
    for (const [key, url] of Object.entries(soundMap)) {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
            soundBuffers[key] = audioBuffer;
        } catch (error) {
            console.warn(`Erro ao carregar som: ${key} (${url})`, error);
        }
    }
}

// Inicia o carregamento
preloadSounds();

// Função Principal de Tocar
function playSound(type, collisionIndex = null) {
    // 1. Desbloqueio para iOS (Auto-resume)
    // Se o contexto estiver suspenso (comum no primeiro toque), reativa
    if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
    }

    // Define qual buffer tocar
    let bufferKey = type;
    
    // Se for colisão, usa o índice específico (col0 a col4)
    if (type === 'collides' && collisionIndex !== null) {
        bufferKey = 'col' + collisionIndex;
    }

    const buffer = soundBuffers[bufferKey];
    if (!buffer) return; // Se não carregou ainda, ignora

    // 2. Criação da Fonte (Source) e Volume (Gain)
    const source = audioCtx.createBufferSource();
    const gainNode = audioCtx.createGain();
    
    source.buffer = buffer;

    // 3. Configuração de Volume por Tipo
    if (type === 'roll') gainNode.gain.value = 1.0;
    else if (type === 'shoot') gainNode.gain.value = 0.3;
    else if (type === 'touch' || type === 'click') gainNode.gain.value = 0.4;
    else if (type === 'collides') gainNode.gain.value = 0.8; // Colisões mais altas
    else gainNode.gain.value = 1.0;

    // 4. Variação de Tom (Pitch) para naturalidade
    // Varia entre 0.95 e 1.05
    source.playbackRate.value = 0.95 + Math.random() * 0.1;

    // 5. Conexões
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // 6. Lógica Especial: HOLD (Loop)
    if (type === 'hold') {
        if (currentHoldSource) {
            try { currentHoldSource.stop(); } catch(e){}
        }
        source.loop = true;
        currentHoldSource = source;
    }

    // Tocar agora
    source.start(0);
}

// Função para parar o som de carregar
function stopHoldSound() {
    if (currentHoldSource) {
        try {
            currentHoldSource.stop(); // Para o som suavemente
            currentHoldSource = null;
        } catch (e) {
            // Ignora erro se o som já tiver parado
        }
    }
}
// (O restante do código continua igual: const avatars = { ... )

const avatars = {
    master: '<img src="master.png" class="avatar-img" alt="Mestre">',
    monster: '<img src="monster.png" class="avatar-img" alt="Monstro">',
    boss: '<img src="boss.png" class="avatar-img" alt="Chefe">',
    familiar: '<img src="familiar.png" class="avatar-img" alt="Familiar">',
    humanf: '<img src="humanf.png" class="avatar-img" alt="Humana">',
    humanm: '<img src="humanm.png" class="avatar-img" alt="Humano">',
    dragonbornf: '<img src="dragonbornf.png" class="avatar-img" alt="Dracona">',
    dragonbornm: '<img src="dragonbornm.png" class="avatar-img" alt="Dracono">',
    elfdrowf: '<img src="elfdrowf.png" class="avatar-img" alt="Drow F">',
    elfdrowm: '<img src="elfdrowm.png" class="avatar-img" alt="Drow M">',
    elfhighf: '<img src="elfhighf.png" class="avatar-img" alt="High Elfa">',
    elfhighm: '<img src="elfhighm.png" class="avatar-img" alt="High Elfo">',
    elfwoodf: '<img src="elfwoodf.png" class="avatar-img" alt="Elfo da Floresta F">',
    elfwoodm: '<img src="elfwoodm.png" class="avatar-img" alt="Elfo da Floresta M">',
    gnomef: '<img src="gnomef.png" class="avatar-img" alt="Gnoma">',
    gnomem: '<img src="gnomem.png" class="avatar-img" alt="Gnomo">',
    tieflingf: '<img src="tieflingf.png" class="avatar-img" alt="Tiefling F">',
    tieflingm: '<img src="tieflingm.png" class="avatar-img" alt="Tiefling M">',
    halfelff: '<img src="halfelff.png" class="avatar-img" alt="Meia Elfa">',
    halfelfm: '<img src="halfelfm.png" class="avatar-img" alt="Meio Elfo">',
    halforcf: '<img src="halforcf.png" class="avatar-img" alt="Orc F">',
    halforcm: '<img src="halforcm.png" class="avatar-img" alt="Orc M">'
};

const diceConfigs = { 
    4: {color: 0xef5350}, 6: {color: 0xffca28}, 8: {color: 0x66bb6a}, 
    10: {color: 0x42a5f5}, 12: {color: 0xab47bc}, 20: {color: 0xffffff} 
};
const diceTypes = [4, 6, 8, 10, 12, 20];

// Variáveis Globais
let campaign = { name: "", characters: [] };
let activeCharIndex = 0;
let selectedAvatarKey = 'master';
let diceObjects = []; 
let magicEffects = [];
let hasCritHappened = false; // <--- NOVA VARIÁVEL DE CONTROLE
let currentSpecialSound = null;   // Guarda o áudio tocando para podermos cortar ele
let world, scene, camera, renderer;
let isRolling = false;
let pressTimer = null;
let pressPower = 0;
let isPressing = false;
let sparkleTexture = null;
let walls = { left: null, right: null, top: null, bottom: null };
let isGameRunning = false;
let clock = new THREE.Clock();

// --- 2. INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
    renderDiceButtons(); 
    renderAvatarSelection(); 
    setupEventListeners(); 
    setupColorPicker(); 
    setupModPicker();
    loadData();
    try { initPhysicsAndGraphics(); animate(); } catch (error) { console.error("Erro 3D:", error); }
});

// --- PERSISTÊNCIA ---
function saveData() {
    const modInput = document.getElementById("modInput");
    if (modInput && campaign.characters[activeCharIndex]) {
        campaign.characters[activeCharIndex].modifier = parseInt(modInput.value) || 0;
    }
    const data = { campaign, activeCharIndex, isGameRunning };
    localStorage.setItem("rollen_save_v1", JSON.stringify(data));
}

function loadData() {
    const saved = localStorage.getItem("rollen_save_v1");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.campaign && data.campaign.characters.length > 0) {
                campaign = data.campaign; 
                activeCharIndex = data.activeCharIndex || 0; 
                isGameRunning = true;
                
                document.getElementById("setupModal").style.display = "none";
                document.getElementById("appContainer").style.display = "flex";
                
                updateModalCharList();
                setTimeout(() => refreshCanvasSize(), 50);
                renderTabs();
                
                // Correção do Bug de Seleção Inicial
                const savedIndex = activeCharIndex; 
                activeCharIndex = -1; 
                setTimeout(() => { 
                    if (campaign.characters.length > 0) switchTab(savedIndex); 
                }, 100);
            }
        } catch (e) { console.error(e); }
    }
}

// --- UI ---
function updateModalCharList() {
    const list = document.getElementById("charListPreview"); list.innerHTML = "";
    campaign.characters.forEach(char => {
        const li = document.createElement("li");
        li.innerHTML = `<div class="preview-avatar" style="border-color:${char.color}">${char.avatar}</div><span style="color:${char.color}; font-weight:bold;">${char.name}</span>`;
        list.appendChild(li);
    });
}

function renderDiceButtons() {
    const container = document.getElementById("diceSelector"); if (!container) return; container.innerHTML = "";
    diceTypes.forEach(d => {
        const btn = document.createElement("button"); btn.className = "dice-btn"; btn.id = `btn-d${d}`;
        btn.innerHTML = `D${d} <span class="dice-count" id="count-d${d}">0</span>`;
        btn.onclick = () => addDice(d); container.appendChild(btn);
    });
}

function renderAvatarSelection() {
    const container = document.getElementById("avatarGrid"); 
    if (!container) return; 
    container.innerHTML = "";
    
    Object.keys(avatars).forEach(key => {
        const div = document.createElement("div"); 
        div.className = `avatar-option ${key === selectedAvatarKey ? 'selected' : ''}`;
        div.innerHTML = avatars[key];
        
        div.onclick = () => {
            document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected'); 
            selectedAvatarKey = key;
            // CORREÇÃO: Removemos playSound('click'). O Detector Global tocará 'touch'.
        };
        container.appendChild(div);
    });
}

function setupColorPicker() {
    const input = document.getElementById("charColorInput");
    const wrapper = document.querySelector(".color-picker-wrapper");
    if (input && wrapper) {
        const updateColorUI = () => {
            const color = input.value;
            wrapper.style.backgroundColor = color;
        };
        input.addEventListener("input", updateColorUI);
        updateColorUI(); 
    }
}

function updateDiceButtonUI(type, change, reset) {
    const badge = document.getElementById(`count-d${type}`); const btn = document.getElementById(`btn-d${type}`);
    if (!badge || !btn) return;
    if (reset) { badge.innerText = "0"; badge.style.display = "none"; btn.classList.remove("selected"); return; }
    let val = parseInt(badge.innerText) || 0; val += change;
    badge.innerText = val; badge.style.display = val > 0 ? "flex" : "none";
    if (val > 0) btn.classList.add("selected");
}

function updateResultDisplay(txt, total) {
    const formEl = document.getElementById("resultFormula"); const totalEl = document.getElementById("resultTotal");
    if (formEl) formEl.innerText = txt;
    if (totalEl) { totalEl.innerText = total; const char = campaign.characters[activeCharIndex]; if(char) totalEl.style.color = '#ffffff'; }
}

// --- CAMPANHA E PERSONAGENS ---
function openAddCharModal() {
    const modal = document.getElementById("setupModal"); const btn = document.getElementById("startCampaignBtn");
    updateModalCharList();
    if (isGameRunning) { btn.innerText = "VOLTAR AO JOGO"; btn.disabled = false; } else { btn.innerText = "INICIAR JOGO"; btn.disabled = campaign.characters.length === 0; }
    modal.style.display = "flex";
    playSound('click');
}

function addCharacterPreview() {
    const nameInput = document.getElementById("charNameInput"); const colorInput = document.getElementById("charColorInput");
    const name = nameInput.value; const color = colorInput.value;
    if (!name) return;
    const char = { name, color, avatar: avatars[selectedAvatarKey], turnCount: 1, history: [], modifier: 0 };
    campaign.characters.push(char); saveData(); updateModalCharList();
    nameInput.value = ""; 
    // Reset Color
    colorInput.value = "#ef5350"; 
    document.querySelector(".color-picker-wrapper").style.backgroundColor = "#ef5350";
    
    document.getElementById("startCampaignBtn").disabled = false; selectedAvatarKey = 'master'; renderAvatarSelection();
    playSound('click');
}

function startCampaign() {
    campaign.name = document.getElementById("campaignNameInput").value || "Aventura";
    saveData();
    document.getElementById("setupModal").style.display = "none";
    document.getElementById("appContainer").style.display = "flex";
    setTimeout(() => refreshCanvasSize(), 50); 
    renderTabs(); 
    // Correção Bug Avatar Branco
    activeCharIndex = -1; 
    setTimeout(() => { if (campaign.characters.length > 0) switchTab(0); }, 100);
}

function renderTabs() {
    const c = document.getElementById("charTabsContainer"); 
    c.innerHTML = "";
    
    campaign.characters.forEach((char, i) => {
        const t = document.createElement("div"); 
        t.className = `char-tab ${i===activeCharIndex?'active':''}`;
        t.innerHTML = `<div class="tab-avatar">${char.avatar}</div> ${char.name}`; 
        t.style.borderColor = char.color; 
        
        if(i===activeCharIndex) { 
            t.style.color = char.color; 
            const svg = t.querySelector('svg'); 
            if(svg) svg.style.fill = char.color; 
        }
        
        // CORREÇÃO: Removemos o playSound daqui. O Detector Global cuidará disso.
        t.onclick = () => switchTab(i);
        
        // Drag and Drop
        t.draggable = true;
        t.ondragstart = (e) => { e.dataTransfer.setData("text/plain", i); t.style.opacity = "0.5"; };
        t.ondragend = () => { t.style.opacity = "1"; };
        t.ondragover = (e) => { e.preventDefault(); t.style.background = "#4e342e"; };
        t.ondragleave = () => { t.style.background = (i === activeCharIndex) ? "linear-gradient(to bottom, #5d4037, #3e2723)" : "linear-gradient(to bottom, #3e2723, #2a1b0e)"; };
        t.ondrop = (e) => {
            e.preventDefault(); const fromIndex = parseInt(e.dataTransfer.getData("text/plain")); const toIndex = i;
            if (fromIndex !== toIndex) {
                const movedChar = campaign.characters.splice(fromIndex, 1)[0]; campaign.characters.splice(toIndex, 0, movedChar);
                if (activeCharIndex === fromIndex) activeCharIndex = toIndex;
                else if (activeCharIndex > fromIndex && activeCharIndex <= toIndex) activeCharIndex--;
                else if (activeCharIndex < fromIndex && activeCharIndex >= toIndex) activeCharIndex++;
                saveData(); renderTabs();
                // O Detector Global tocará o som de click/touch aqui automaticamente
            }
        };
        c.appendChild(t);
    });
    
    // Botão "+"
    const addBtn = document.createElement("button"); 
    addBtn.className = "add-char-tab"; 
    addBtn.innerText = "+"; 
    // CORREÇÃO: Removemos o som manual daqui também
    addBtn.onclick = openAddCharModal; 
    c.appendChild(addBtn);
}

function switchTab(i) {
    // Se clicar na mesma aba, não faz nada
    if(i === activeCharIndex && campaign.characters.length > 0) return;

    const modInput = document.getElementById("modInput");
    const modDisplay = document.getElementById("modDisplay");

    // 1. SALVA os dados do personagem ATUAL antes de mudar o índice
    if (activeCharIndex >= 0 && activeCharIndex < campaign.characters.length) {
        const oldChar = campaign.characters[activeCharIndex];
        if (modInput) {
            oldChar.modifier = parseInt(modInput.value) || 0;
        }
        
        // Lógica de incremento de turno (opcional, mantida do seu código)
        if(oldChar.history.some(h => h.turn === oldChar.turnCount)) {
            oldChar.turnCount++;
        }
    }

    // 2. TROCA o índice para o novo personagem
    activeCharIndex = i; 
    const char = campaign.characters[activeCharIndex];

    // 3. CARREGA os dados do NOVO personagem para a interface
    if (char) {
        const val = char.modifier || 0;
        if (modInput) modInput.value = val;
        if (modDisplay) modDisplay.innerText = (val > 0 ? "+" : "") + val;
    }

    // 4. ATUALIZA o restante da UI
    renderTabs(); 
    clearDice(); 
    updateHistoryUI(); 
    saveData();

    // Atualiza o Avatar Central
    const avatarDisplay = document.getElementById("currentAvatarDisplay");
    if (avatarDisplay) { 
        avatarDisplay.innerHTML = char.avatar; 
        avatarDisplay.style.borderColor = char.color; 
        const svg = avatarDisplay.querySelector('svg'); 
        if(svg) svg.style.fill = char.color; 
    }

    // Atualiza a cor do resultado
    const resTotal = document.getElementById("resultTotal"); 
    if(resTotal) resTotal.style.color = char.color;
}

// --- MENU ---
function toggleSettings() { 
    const menu = document.getElementById("settingsMenu"); 
    menu.style.display = (menu.style.display === "none") ? "flex" : "none"; 
    playSound('click');
}
function resetJourney() { 
    if(confirm("Tem certeza?")) { localStorage.removeItem("rollen_save_v1"); location.reload(); } 
    playSound('click');
}
function resetCampaignHistory() { 
    if(confirm("Zerar histórico?")) { 
        campaign.characters.forEach(char => { char.history = []; char.turnCount = 1; }); 
        updateHistoryUI(); toggleSettings(); saveData(); alert("Histórico limpo!"); 
    } 
    playSound('click');
}

// --- 3D FÍSICA ---
function initPhysicsAndGraphics() {
    const container = document.getElementById("canvasContainer"); if (!container) return;
    scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8); dirLight.position.set(5, 20, 5); dirLight.castShadow = true; scene.add(dirLight);
    const fillLight = new THREE.PointLight(0xaaccff, 0.3); fillLight.position.set(-10, 5, -10); scene.add(fillLight);
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100); camera.position.set(0, 18, 0); camera.lookAt(0, 0, 0);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; container.appendChild(renderer.domElement);
    sparkleTexture = createSparkleTexture();
    world = new CANNON.World(); world.gravity.set(0, -40, 0); world.broadphase = new CANNON.NaiveBroadphase(); world.solver.iterations = 10;
    const matGround = new CANNON.Material(); const matDice = new CANNON.Material();
    world.addContactMaterial(new CANNON.ContactMaterial(matGround, matDice, { friction: 0.2, restitution: 0.7 }));
    world.addContactMaterial(new CANNON.ContactMaterial(matDice, matDice, { friction: 0.1, restitution: 0.7 }));
    const groundBody = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: matGround });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2); world.addBody(groundBody);
    walls.left = createWallBody(); walls.right = createWallBody(); walls.top = createWallBody(); walls.bottom = createWallBody();
}
function createWallBody() { const body = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(1, 10, 20)) }); world.addBody(body); return body; }
function updateWallPositions() {
    if (!camera || !renderer) return;
    const dist = camera.position.y; const vFOV = THREE.Math.degToRad(camera.fov);
    const visibleHeight = 2 * Math.tan(vFOV / 2) * dist; const visibleWidth = visibleHeight * camera.aspect;
    const margin = 0.90; const w = (visibleWidth / 2) * margin; const h = (visibleHeight / 2) * margin;
    walls.left.position.set(-w - 1, 0, 0); walls.left.shapes[0] = new CANNON.Box(new CANNON.Vec3(1, 10, h * 2));
    walls.right.position.set(w + 1, 0, 0); walls.right.shapes[0] = new CANNON.Box(new CANNON.Vec3(1, 10, h * 2));
    walls.top.position.set(0, 0, -h - 1); walls.top.shapes[0] = new CANNON.Box(new CANNON.Vec3(w * 2, 10, 1));
    walls.bottom.position.set(0, 0, h + 1); walls.bottom.shapes[0] = new CANNON.Box(new CANNON.Vec3(w * 2, 10, 1));
}
function refreshCanvasSize() {
    const container = document.getElementById("canvasContainer");
    if (container && camera && renderer) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        renderer.setSize(width, height);
        
        // OTIMIZAÇÃO CRÍTICA PARA MOBILE:
        // Limita a densidade de pixels a 1.5x. Telas retina costumam ser 3x ou 4x,
        // o que é exagero para 3D e deixa o celular lento.
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        // Mantém sua lógica de paredes
        if (typeof updateWallPositions === 'function') updateWallPositions();
    }
}
function createDiceGeometry(type, size) {
    const s = size; let visualGeo, physShape; let angularDamping = 0.5;
    switch(type) {
        case 4: visualGeo = new THREE.TetrahedronGeometry(s); physShape = new CANNON.Box(new CANNON.Vec3(s*0.5, s*0.5, s*0.5)); break;
        case 6: visualGeo = new THREE.BoxGeometry(s, s, s); physShape = new CANNON.Box(new CANNON.Vec3(s/2, s/2, s/2)); break;
        case 8: visualGeo = new THREE.OctahedronGeometry(s); physShape = new CANNON.Box(new CANNON.Vec3(s*0.5, s*0.5, s*0.5)); break;
        case 10: visualGeo = new THREE.DodecahedronGeometry(s); visualGeo.scale(0.8, 1.2, 0.8); physShape = new CANNON.Box(new CANNON.Vec3(s*0.4, s*0.6, s*0.4)); break;
        case 12: visualGeo = new THREE.DodecahedronGeometry(s); physShape = new CANNON.Sphere(s * 0.9); angularDamping = 0.8; break;
        case 20: visualGeo = new THREE.IcosahedronGeometry(s); physShape = new CANNON.Sphere(s * 0.9); angularDamping = 0.8; break;
        default: visualGeo = new THREE.BoxGeometry(s, s, s); physShape = new CANNON.Box(new CANNON.Vec3(s/2, s/2, s/2));
    }
    return { geometry: visualGeo, shape: physShape, angularDamping: angularDamping };
}
function addDice(sides) {
    if (!scene) return;
    const char = campaign.characters[activeCharIndex]; 
    const color = char ? char.color : diceConfigs[sides].color;
    
    try {
        // 1. Cria a parte Visual (Mesh)
        const { geometry, shape, angularDamping } = createDiceGeometry(sides, 1.0);
        const material = new THREE.MeshPhysicalMaterial({ color: color, metalness: 0.2, roughness: 0.1, clearcoat: 1.0, clearcoatRoughness: 0.1, flatShading: true });
        const mesh = new THREE.Mesh(geometry, material); 
        mesh.castShadow = true; 
        mesh.receiveShadow = false; 
        scene.add(mesh);
        
        // 2. Cria a parte Física (Body)
        const body = new CANNON.Body({ mass: 5, shape: shape, linearDamping: 0.5, angularDamping: angularDamping, material: world.defaultContactMaterial.materials[1] });
        body.position.set((Math.random()-0.5)*2, 8, (Math.random()-0.5)*2); 
        body.quaternion.set(Math.random(), Math.random(), Math.random(), Math.random());
        
        // --- AQUI ESTÁ A CONEXÃO MÁGICA ---
        // Dizemos ao dado: "Toda vez que você bater em algo, chame a função de som"
        body.addEventListener("collide", handleDiceCollision);
        
        world.addBody(body); 
        diceObjects.push({ mesh, body, type: sides, stopped: false });
        
        updateDiceButtonUI(sides, 1); 
        clearMagicEffects();
        
        // playSound('click'); // Sugestão: Deixe comentado/removido para evitar som duplo (o clique do botão já faz o som)
        
    } catch (e) { console.error("Erro no dado D" + sides, e); }
}

function createSparkleTexture() { const c = document.createElement('canvas'); c.width = 32; c.height = 32; const x = c.getContext('2d'); const g = x.createRadialGradient(16,16,0,16,16,16); g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(1,'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0,0,32,32); return new THREE.CanvasTexture(c); }
function createNumberLabel(text, colorHex) {
    const c = document.createElement('canvas'); const s = 256; c.width = s; c.height = s; const x = c.getContext('2d');
    const r = parseInt(colorHex.slice(1,3),16); const g = parseInt(colorHex.slice(3,5),16); const b = parseInt(colorHex.slice(5,7),16);
    const gr = x.createRadialGradient(s/2,s/2,20,s/2,s/2,110); gr.addColorStop(0,`rgba(${r},${g},${b},0.6)`); gr.addColorStop(1,`rgba(${r},${g},${b},0)`);
    x.fillStyle = gr; x.fillRect(0,0,s,s); x.font = "bold 110px Arial"; x.textAlign = "center"; x.textBaseline = "middle";
    x.shadowColor = "rgba(0,0,0,0.8)"; x.shadowBlur = 10; x.fillStyle = "#ffffff"; x.fillText(text,s/2,s/2);
    const m = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }); const sp = new THREE.Sprite(m); sp.scale.set(0.1,0.1,1); sp.renderOrder = 999; return sp;
}
function showFloatingResult(diceObj, value) {
    const char = campaign.characters[activeCharIndex]; 
    const color = char ? char.color : '#ffffff'; 

    const sprite = createNumberLabel(value.toString(), color); 
    sprite.position.copy(diceObj.mesh.position); 
    sprite.position.y += 0.8; 
    scene.add(sprite);
    
    magicEffects.push({ mainSprite: sprite, life: 0, maxLife: 100, color: color, particles: [] });

    // --- LÓGICA DE HIERARQUIA (20 > 1) ---
    if (diceObj.type === 20) {
        
        if (value === 20) {
            // === SUCESSO CRÍTICO (O REI) ===
            hasCritHappened = true; 

            // 1. TOCA O SOM DA VITÓRIA (Novo Sistema Blindado)
            // Não precisamos mais de 'sounds.crit.cloneNode()', apenas chamamos:
            playSound('crit');

            // 2. EFEITOS VISUAIS
            document.body.classList.remove("nat1-effect"); 
            document.body.classList.add("crit-success-flash", "shake-effect");
            
            setTimeout(() => {
                document.body.classList.remove("crit-success-flash", "shake-effect");
            }, 4000);

        } else if (value === 1) {
            // === FALHA CRÍTICA (O SÚDITO) ===
            
            // Só faz barulho se o Rei (20) NÃO estiver na mesa
            if (!hasCritHappened) {
                
                // Toca a Falha (Novo Sistema Blindado)
                playSound('fumble');

                document.body.classList.add("nat1-effect", "shake-effect");
                
                setTimeout(() => {
                    if (!hasCritHappened) {
                        document.body.classList.remove("nat1-effect", "shake-effect");
                    }
                }, 4000);
            }
        }
    }
}
function clearMagicEffects() { magicEffects.forEach(effect => { scene.remove(effect.mainSprite); effect.particles.forEach(p => scene.remove(p.mesh)); }); magicEffects = []; }
let chargeAnimId = null; // Variável para controlar o loop de animação da tela
let lastFrameTime = 0;

function startCharging() {
    if (diceObjects.length === 0 || isRolling) return;
    
    isPressing = true;
    clearMagicEffects();
    
    // Começa do zero ou valor mínimo
    pressPower = 0.3; 
    playSound('hold');

    const bar = document.getElementById("powerBar");
    const btn = document.getElementById("rollBtn");

    if (chargeAnimId) cancelAnimationFrame(chargeAnimId);

    // --- CONFIGURAÇÃO DE SINCRONIA ---
    const TARGET_DURATION = 1000; // 1.4 segundos (Tempo exato do seu som)
    const MAX_POWER = 1.5;
    const POWER_RANGE = MAX_POWER - 0.3; // Quanto falta pra encher (1.5 - 0.3 = 1.2)
    
    // Marca o tempo inicial de alta precisão
    lastFrameTime = performance.now();

    const animateCharge = (currentTime) => {
        if (!isPressing) return;

        // Calcula quanto tempo passou desde o último quadro (Delta Time)
        const deltaTime = currentTime - lastFrameTime;
        lastFrameTime = currentTime;

        // MATEMÁTICA:
        // Se queremos encher 1.2 de força em 1400ms...
        // Velocidade = 1.2 / 1400 = 0.00085 por milissegundo.
        // Multiplicamos pelo tempo que passou neste quadro.
        const increment = (POWER_RANGE / TARGET_DURATION) * deltaTime;

        pressPower += increment;

        // Trava no máximo
        if (pressPower >= MAX_POWER) pressPower = MAX_POWER;

        // Atualiza visual
        const percent = Math.min((pressPower / MAX_POWER) * 100, 100);
        bar.style.width = percent + "%";

        if (percent >= 100) btn.classList.add("charged");

        // Continua o loop se não encheu
        if (pressPower < MAX_POWER) {
            chargeAnimId = requestAnimationFrame(animateCharge);
        }
    };

    // Inicia o loop
    chargeAnimId = requestAnimationFrame(animateCharge);
}

function releaseRoll() {
    if (!isPressing) return;
    
    isPressing = false;
    
    if (chargeAnimId) {
        cancelAnimationFrame(chargeAnimId);
        chargeAnimId = null;
    }
    
    stopHoldSound();
    
    document.getElementById("powerBar").style.width = "0%";
    document.getElementById("rollBtn").classList.remove("charged");
    
    if (diceObjects.length > 0 && !isRolling) {
        playSound('shoot'); 
        rollAllDice(pressPower);
    }
    
    pressPower = 0;
}

// --- ROLAGEM DE DADOS (COM SOM E FÍSICA) ---
function rollAllDice(forceMultiplier) {
    isRolling = true; 
    hasCritHappened = false; // <--- RESETA AQUI (Ninguém tirou 20 ainda)
    clearMagicEffects(); 
      
    const force = forceMultiplier * 25; 
    updateResultDisplay("Rolando...", "?");
    
    diceObjects.forEach(d => { 
        d.stopped = false; 
        d.body.wakeUp(); 
        d.body.velocity.set((Math.random()-0.5)*force, force*0.6+5, (Math.random()-0.5)*force); 
        d.body.angularVelocity.set((Math.random()-0.5)*60, (Math.random()-0.5)*60, (Math.random()-0.5)*60); 
    }); 
    
    checkDiceStopped();
}

function checkDiceStopped() { if (!isRolling) return; let allStopped = true; diceObjects.forEach(d => { if (d.body.velocity.norm() > 0.1 || d.body.angularVelocity.norm() > 0.1) allStopped = false; }); if (allStopped) setTimeout(calculateResults, 200); else requestAnimationFrame(checkDiceStopped); }

function calculateResults() {
    let total = 0; let parts = []; let isCritSuccess = false; let isCritFail = false;
    const modInput = document.getElementById("modInput"); let modifier = 0; if (modInput) modifier = parseInt(modInput.value) || 0;
    diceObjects.forEach(d => { const val = Math.floor(Math.random() * d.type) + 1; total += val; parts.push(`${val} (D${d.type})`); if (d.type === 20) { if (val === 20) isCritSuccess = true; if (val === 1) isCritFail = true; } showFloatingResult(d, val); });
    total += modifier; let formulaText = parts.join(" + "); if (modifier !== 0) { const sign = modifier > 0 ? "+" : ""; formulaText += ` ${sign}${modifier} (Mod)`; }
    isRolling = false; updateResultDisplay(formulaText, total);
    if (isCritSuccess) triggerCritEffect('success'); if (isCritFail) triggerCritEffect('fail');
    const char = campaign.characters[activeCharIndex]; if (char) { char.modifier = modifier; saveHistory(char, total, formulaText); } saveData();
}
function triggerCritEffect(type) { const body = document.body; if (type === 'success') { body.classList.add('crit-success-flash'); setTimeout(() => body.classList.remove('crit-success-flash'), 1000); } else { body.classList.add('crit-fail-flash', 'shake-effect'); setTimeout(() => body.classList.remove('crit-fail-flash', 'shake-effect'), 500); } }
function clearDice() { 
    diceObjects.forEach(d => { scene.remove(d.mesh); world.removeBody(d.body); }); 
    diceObjects = []; clearMagicEffects(); 
    diceTypes.forEach(d => updateDiceButtonUI(d, 0, true)); 
    updateResultDisplay("Adicione dados...", "0"); 
    isRolling = false; 
    playSound('touch');
}
function saveHistory(char, total, formula) { let turn = char.history.find(h => h.turn === char.turnCount); if (!turn) { turn = { turn: char.turnCount, rolls: [] }; char.history.push(turn); } turn.rolls.push({ total, formula }); updateHistoryUI(); }

function updateHistoryUI() { 
    const char = campaign.characters[activeCharIndex]; 
    if(!char) return; 
    const list = document.getElementById("historyList"); 
    if(!list) return; 
    list.innerHTML = ""; 
    
    [...char.history].reverse().forEach(e => { 
        const h = document.createElement("li"); 
        h.className = "turn-header"; 
        h.innerHTML = `TURNO ${e.turn}`; 
        list.appendChild(h); 
        
        e.rolls.forEach(r => { 
            const li = document.createElement("li"); 
            li.className = "roll-entry"; 
            li.innerHTML = `<span class="roll-formula">${r.formula}</span> <span class="roll-equals">=</span> <span class="roll-total">${r.total}</span>`; 
            list.appendChild(li); 
        }); 
    }); 
}

function animate() {
    requestAnimationFrame(animate);

    // Calcula o tempo real que passou desde o último quadro
    const dt = clock.getDelta();

    if (world) {
        // CORREÇÃO DO SLOW MOTION:
        // O Cannon.js agora avança baseado no tempo real (dt), não frame a frame.
        // O '3' é o número máximo de passos para recuperar atraso (evita espirais de travamento).
        world.step(1/60, dt, 3); 
    }

    diceObjects.forEach(d => {
        if (d.mesh && d.body) {
            d.mesh.position.copy(d.body.position);
            d.mesh.quaternion.copy(d.body.quaternion);
        }
    });

    // --- SUA LÓGICA ORIGINAL DE EFEITOS (PRESERVADA) ---
    for (let i = magicEffects.length - 1; i >= 0; i--) {
        const effect = magicEffects[i];
        effect.life++;
        if (effect.life < 100) {
            effect.mainSprite.position.y += 0.015;
            if (effect.life < 20) {
                const p = effect.life / 20;
                effect.mainSprite.scale.set(p * 2.5, p * 2.5, 1);
                effect.mainSprite.material.opacity = p;
            } else if (effect.life > 80) {
                effect.mainSprite.material.opacity = (100 - effect.life) / 20;
            }
        }
        if (effect.life < 60 && Math.random() > 0.3) {
            const pMat = new THREE.SpriteMaterial({
                map: sparkleTexture,
                transparent: true,
                color: effect.color,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            const p = new THREE.Sprite(pMat);
            p.position.copy(effect.mainSprite.position);
            p.position.x += (Math.random() - 0.5) * 0.5;
            p.position.y -= 0.2;
            p.scale.set(0.3, 0.3, 1);
            scene.add(p);
            effect.particles.push({
                mesh: p,
                age: 0
            });
        }
        for (let j = effect.particles.length - 1; j >= 0; j--) {
            const p = effect.particles[j];
            p.age++;
            p.mesh.position.y -= 0.005;
            p.mesh.material.opacity -= 0.03;
            p.mesh.scale.multiplyScalar(0.95);
            if (p.mesh.material.opacity <= 0) {
                scene.remove(p.mesh);
                effect.particles.splice(j, 1);
            }
        }
        if (effect.life >= 100 && effect.particles.length === 0) {
            scene.remove(effect.mainSprite);
            magicEffects.splice(i, 1);
        }
    }
    // ---------------------------------------------------

    if (renderer && scene && camera) renderer.render(scene, camera);
}
// --- DETECTOR GLOBAL DE CLIQUES ---
// --- DETECTOR GLOBAL DE CLIQUES (CORRIGIDO) ---
document.addEventListener('click', (e) => {
    
    // 1. Botão INICIAR JOGO
    if (e.target.id === 'startCampaignBtn') {
        playSound('start');
        return;
    }

    // 2. ABAS DE PERSONAGEM e AVATARES
    if (e.target.closest('.char-tab') || e.target.closest('.avatar-option')) {
        playSound('touch'); 
        return; 
    }

    // 3. Botão ROLAR (Ignora som aqui, pois já tem lógica de carregar)
    if (e.target.closest('#rollBtn')) {
        return;
    }

    // --- 4. NOVO: BOTÕES DE DADOS E GERAIS (O QUE FALTAVA) ---
    // Verifica se clicou em QUALQUER botão, input, ícone ou seletor
    if (
        e.target.closest('button') || 
        e.target.closest('.dice-btn') || // Classe provável dos seus botões de dados
        e.target.closest('input') || 
        e.target.closest('select') || 
        e.target.closest('i')
    ) {
        // Toca o som de clique genérico
        playSound('click');
    }
    setupModPicker();
});
function setupEventListeners() { 
    const btn = document.getElementById("rollBtn"); 
    if (btn) { 
        btn.addEventListener("mousedown", startCharging); 
        btn.addEventListener("mouseup", releaseRoll); 
        btn.addEventListener("mouseleave", () => { if(isPressing) releaseRoll(); }); 
        btn.addEventListener("touchstart", (e) => { e.preventDefault(); startCharging(); }); 
        btn.addEventListener("touchend", (e) => { e.preventDefault(); releaseRoll(); }); 
    } 
    const addBtn = document.getElementById("addCharBtn"); if(addBtn) addBtn.onclick = addCharacterPreview; 
    const startBtn = document.getElementById("startCampaignBtn"); if(startBtn) startBtn.onclick = startCampaign; 
    const clearBtn = document.getElementById("clearBtn"); if(clearBtn) clearBtn.onclick = clearDice; 
    const histBtn = document.getElementById("toggleHistoryBtn"); if(histBtn) histBtn.onclick = () => document.getElementById("historyPanel").classList.toggle("open"); 
    window.addEventListener('resize', refreshCanvasSize); 
}
// --- INTELIGÊNCIA DE ÁUDIO DE COLISÃO ---
let lastCollisionTime = 0;

function handleDiceCollision(e) {
    // 1. Calcula a intensidade da batida
    // (O Cannon.js às vezes retorna valores negativos, por isso o Math.abs)
    const velocity = Math.abs(e.contact.getImpactVelocityAlongNormal());
    
    // Ignora toques muito leves (arrastar no chão)
    if (velocity < 0.5) return;

    // 2. Debounce (Evita "metralhadora" de sons)
    const now = Date.now();
    if (now - lastCollisionTime < 40) return; 
    lastCollisionTime = now;

    // 3. Escolhe o som baseado na força
    let soundIndex = 0;
    if (velocity < 2)       soundIndex = 0; // Toque leve
    else if (velocity < 4)  soundIndex = 1;
    else if (velocity < 6)  soundIndex = 2;
    else if (velocity < 8) soundIndex = 3;
    else                    soundIndex = 4; // Pancada forte

    // 4. TOCA O SOM (Usando o novo sistema blindado)
    // Passamos o tipo 'collides' e o índice calculado.
    // A função playSound agora cuida do volume e do desbloqueio do iOS.
    playSound('collides', soundIndex);
}
function setupModPicker() {
    const grid = document.getElementById("modGrid");
    if (!grid) return;
    grid.innerHTML = "";

    for (let i = -10; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.className = "mod-btn";
        btn.innerText = (i > 0 ? "+" : "") + i;
        btn.onclick = () => selectMod(i);
        grid.appendChild(btn);
    }
}

function toggleModPicker() {
    const modal = document.getElementById("modPickerModal");
    const isOpening = modal.style.display === "none";
    modal.style.display = isOpening ? "flex" : "none";
    
    if (isOpening) {
        playSound('click');
        highlightActiveMod();
    }
}

function selectMod(val) {
    const input = document.getElementById("modInput");
    const display = document.getElementById("modDisplay");
    
    input.value = val;
    display.innerText = (val > 0 ? "+" : "") + val;
    
    // Atualiza no objeto do personagem atual
    if (campaign.characters[activeCharIndex]) {
        campaign.characters[activeCharIndex].modifier = val;
    }
    
    saveData();
    toggleModPicker();
    playSound('touch');
}

function highlightActiveMod() {
    const currentVal = parseInt(document.getElementById("modInput").value) || 0;
    document.querySelectorAll('.mod-btn').forEach(btn => {
        const btnVal = parseInt(btn.innerText);
        btn.classList.toggle('active', btnVal === currentVal);
    });
}