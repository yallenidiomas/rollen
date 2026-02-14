// --- 1. CONFIGURAÇÕES E SISTEMA DE SOM ---

// Cria um único contexto de áudio
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Armazena os sons
const soundBuffers = {};
let currentHoldSource = null;

const soundMap = {
    'click': './click.mp3',
    'touch': './touch.mp3',
    'hold':  './hold.mp3',
    'shoot': './shoot.mp3',
    'start': './start.mp3',
    'crit':  './crit.mp3',
    'fumble':'./fumble.mp3',
    'col0': './collide1.mp3',
    'col1': './collide2.mp3',
    'col2': './collide3.mp3',
    'col3': './collide4.mp3',
    'col4': './collide5.mp3'
};

async function preloadSounds() {
    for (const [key, url] of Object.entries(soundMap)) {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
            soundBuffers[key] = audioBuffer;
        } catch (error) {
            console.warn(`Erro som: ${key}`, error);
        }
    }
}
preloadSounds();

function playSound(type, collisionIndex = null) {
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    let bufferKey = type;
    if (type === 'collides' && collisionIndex !== null) bufferKey = 'col' + collisionIndex;
    const buffer = soundBuffers[bufferKey];
    if (!buffer) return;

    const source = audioCtx.createBufferSource();
    const gainNode = audioCtx.createGain();
    source.buffer = buffer;

    if (type === 'roll') gainNode.gain.value = 1.0;
    else if (type === 'shoot') gainNode.gain.value = 0.3;
    else if (type === 'touch' || type === 'click') gainNode.gain.value = 0.4;
    else if (type === 'collides') gainNode.gain.value = 0.8;
    else gainNode.gain.value = 1.0;

    source.playbackRate.value = 0.95 + Math.random() * 0.1;
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'hold') {
        if (currentHoldSource) { try { currentHoldSource.stop(); } catch(e){} }
        source.loop = true;
        currentHoldSource = source;
    }
    source.start(0);
}

function stopHoldSound() {
    if (currentHoldSource) {
        try { currentHoldSource.stop(); currentHoldSource = null; } catch (e) {}
    }
}

// --- DADOS VISUAIS ---
const avatars = {
    master: '<img src="master.png" class="avatar-img" alt="Mestre">',
    monster: '<img src="monster.png" class="avatar-img" alt="Monstro">',
    boss: '<img src="boss.png" class="avatar-img" alt="Chefe">',
    familiar: '<img src="familiar.png" class="avatar-img" alt="Familiar">',
    humanf: '<img src="humanf.png" class="avatar-img" alt="Humana">',
    humanm: '<img src="humanm.png" class="avatar-img" alt="Humano">',
    bhumanm: '<img src="bhumanm.png" class="avatar-img" alt="Humano">',
    bhumanf: '<img src="bhumanf.png" class="avatar-img" alt="Humana">',
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

const diceConfigs = { 4: {color: 0xef5350}, 6: {color: 0xffca28}, 8: {color: 0x66bb6a}, 10: {color: 0x42a5f5}, 12: {color: 0xab47bc}, 20: {color: 0xffffff} };
const diceTypes = [4, 6, 8, 10, 12, 20];

// Variáveis Globais (Inicialização Segura)
let campaign = { name: "Aventura", characters: [], globalLog: [] };
let activeCharIndex = 0;
let selectedAvatarKey = 'master';
let diceObjects = []; 
let magicEffects = [];
let hasCritHappened = false;
let currentSpecialSound = null;
let world, scene, camera, renderer;
let isRolling = false;
let pressTimer = null;
let pressPower = 0;
let isPressing = false;
let sparkleTexture = null;
let walls = { left: null, right: null, top: null, bottom: null };
let isGameRunning = false;
let clock = new THREE.Clock();
let rollMode = 'normal'; 

// --- 2. INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
    // Tenta carregar dados. Se falhar, reseta.
    try { loadData(); } catch (e) { console.error("Save corrompido, resetando.", e); localStorage.clear(); }
    
    renderDiceButtons(); 
    renderAvatarSelection(); 
    setupEventListeners(); 
    setupColorPicker(); 
    setupModPicker();
    
    try { initPhysicsAndGraphics(); animate(); } catch (error) { console.error("Erro 3D:", error); }
});

// --- PERSISTÊNCIA (BLINDADA) ---
function saveData() {
    try {
        const modInput = document.getElementById("modInput");
        if (modInput && campaign.characters[activeCharIndex]) {
            campaign.characters[activeCharIndex].modifier = parseInt(modInput.value) || 0;
        }
        const data = { campaign, activeCharIndex, isGameRunning };
        localStorage.setItem("rollen_save_v1", JSON.stringify(data));
    } catch (e) { console.error("Erro ao salvar", e); }
}

function loadData() {
    const saved = localStorage.getItem("rollen_save_v1");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.campaign) {
                // Restaura e valida estrutura
                campaign = data.campaign;
                if (!Array.isArray(campaign.characters)) campaign.characters = [];
                if (!Array.isArray(campaign.globalLog)) campaign.globalLog = [];
                
                activeCharIndex = data.activeCharIndex || 0; 
                isGameRunning = data.isGameRunning || false;
                
                if (isGameRunning && campaign.characters.length > 0) {
                    document.getElementById("setupModal").style.display = "none";
                    document.getElementById("appContainer").style.display = "flex";
                    setTimeout(() => refreshCanvasSize(), 50);
                    renderTabs();
                    // Fix seleção
                    const savedIndex = activeCharIndex; 
                    activeCharIndex = -1; 
                    setTimeout(() => switchTab(savedIndex), 100);
                } else {
                    // Se não tem jogo rodando, garante modal aberto
                    document.getElementById("setupModal").style.display = "flex";
                    updateModalCharList();
                }
            }
        } catch (e) { console.error("Erro loadData", e); }
    }
}

// --- UI ---
function updateModalCharList() {
    const list = document.getElementById("charListPreview"); 
    if(!list) return;
    list.innerHTML = "";
    
    // Garante que characters existe
    if (!campaign.characters) campaign.characters = [];

    campaign.characters.forEach(char => {
        const li = document.createElement("li");
        li.innerHTML = `<div class="preview-avatar" style="border-color:${char.color}">${char.avatar}</div><span style="color:${char.color}; font-weight:bold;">${char.name}</span>`;
        list.appendChild(li);
    });

    // Habilita botão se tiver personagens
    const btnStart = document.getElementById("startCampaignBtn");
    if(btnStart) btnStart.disabled = (campaign.characters.length === 0);
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
        };
        container.appendChild(div);
    });
}

function setupColorPicker() {
    const input = document.getElementById("charColorInput");
    const wrapper = document.querySelector(".color-picker-wrapper");
    if (input && wrapper) {
        const updateColorUI = () => { wrapper.style.backgroundColor = input.value; };
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
    const formEl = document.getElementById("resultFormula"); 
    const totalEl = document.getElementById("resultTotal");
    if (formEl) formEl.innerHTML = txt; 
    if (totalEl) { 
        totalEl.innerText = total; 
        const char = campaign.characters[activeCharIndex]; 
        if(char) totalEl.style.color = '#ffffff'; 
    }
}

// --- CAMPANHA E PERSONAGENS ---
function openAddCharModal() {
    const modal = document.getElementById("setupModal"); 
    const btn = document.getElementById("startCampaignBtn");
    
    updateModalCharList(); // Atualiza lista
    
    // Texto do botão depende se o jogo já roda
    if (isGameRunning) { 
        btn.innerText = "VOLTAR AO JOGO"; 
        btn.disabled = false; 
    } else { 
        btn.innerText = "INICIAR JORNADA"; 
        btn.disabled = campaign.characters.length === 0; 
    }
    
    modal.style.display = "flex";
    playSound('click');
}

function addCharacterPreview() {
    try {
        const nameInput = document.getElementById("charNameInput"); 
        const colorInput = document.getElementById("charColorInput");
        
        if (!nameInput || !colorInput) return; // Segurança
        
        const name = nameInput.value.trim(); 
        const color = colorInput.value;
        
        if (!name) return; // Nome vazio ignora

        const char = { 
            name, 
            color, 
            avatar: avatars[selectedAvatarKey] || avatars['master'], 
            turnCount: 1, 
            history: [], 
            modifier: 0, 
            rollMode: 'normal' 
        };

        // Garante array
        if (!campaign.characters) campaign.characters = [];
        campaign.characters.push(char); 
        
        saveData(); 
        updateModalCharList();
        
        // Reset Visual
        nameInput.value = ""; 
        selectedAvatarKey = 'master'; 
        renderAvatarSelection();
        playSound('click');
        
    } catch(e) {
        console.error("Erro ao adicionar:", e);
        alert("Erro ao adicionar personagem. Tente 'Reiniciar Jornada' nas configurações.");
    }
}

function startCampaign() {
    campaign.name = document.getElementById("campaignNameInput").value || "Aventura";
    isGameRunning = true; // Marca jogo como rodando
    saveData();
    
    document.getElementById("setupModal").style.display = "none";
    document.getElementById("appContainer").style.display = "flex";
    
    setTimeout(() => refreshCanvasSize(), 50); 
    renderTabs(); 
    
    // Seleciona primeiro char
    activeCharIndex = -1; 
    setTimeout(() => { if (campaign.characters.length > 0) switchTab(0); }, 100);
}

function renderTabs() {
    const c = document.getElementById("charTabsContainer"); 
    if(!c) return;
    c.innerHTML = "";
    
    if (!campaign.characters) campaign.characters = [];

    campaign.characters.forEach((char, i) => {
        const t = document.createElement("div"); 
        t.className = `char-tab ${i===activeCharIndex?'active':''}`;
        t.innerHTML = `<div class="tab-avatar">${char.avatar}</div> ${char.name}`; 
        t.style.borderColor = char.color; 
        if(i===activeCharIndex) { t.style.color = char.color; const svg = t.querySelector('svg'); if(svg) svg.style.fill = char.color; }
        t.onclick = () => switchTab(i);
        
        // Drag
        t.draggable = true;
        t.ondragstart = (e) => { e.dataTransfer.setData("text/plain", i); t.style.opacity = "0.5"; };
        t.ondragend = () => { t.style.opacity = "1"; };
        t.ondragover = (e) => { e.preventDefault(); };
        t.ondrop = (e) => {
            e.preventDefault(); const fromIndex = parseInt(e.dataTransfer.getData("text/plain")); const toIndex = i;
            if (fromIndex !== toIndex) {
                const movedChar = campaign.characters.splice(fromIndex, 1)[0]; campaign.characters.splice(toIndex, 0, movedChar);
                if (activeCharIndex === fromIndex) activeCharIndex = toIndex;
                else if (activeCharIndex > fromIndex && activeCharIndex <= toIndex) activeCharIndex--;
                else if (activeCharIndex < fromIndex && activeCharIndex >= toIndex) activeCharIndex++;
                saveData(); renderTabs();
            }
        };
        c.appendChild(t);
    });
    const addBtn = document.createElement("button"); addBtn.className = "add-char-tab"; addBtn.innerText = "+"; addBtn.onclick = openAddCharModal; c.appendChild(addBtn);
}

function switchTab(i) {
    if(i === activeCharIndex && campaign.characters.length > 0 && document.getElementById("appContainer").style.display !== 'none') return;
    
    const modInput = document.getElementById("modInput");
    const modDisplay = document.getElementById("modDisplay");

    if (activeCharIndex >= 0 && activeCharIndex < campaign.characters.length) {
        const oldChar = campaign.characters[activeCharIndex];
        if (modInput) oldChar.modifier = parseInt(modInput.value) || 0;
        oldChar.rollMode = rollMode; 
        if(oldChar.history && oldChar.history.some(h => h.turn === oldChar.turnCount)) oldChar.turnCount++;
    }

    activeCharIndex = i; 
    const char = campaign.characters[activeCharIndex];

    if (char) {
        const val = char.modifier || 0;
        if (modInput) modInput.value = val;
        if (modDisplay) modDisplay.innerText = (val > 0 ? "+" : "") + val;
        setRollMode(char.rollMode || 'normal');
    }

    renderTabs(); clearDice(); updateHistoryUI(); saveData();

    const avatarDisplay = document.getElementById("currentAvatarDisplay");
    if (avatarDisplay && char) { 
        avatarDisplay.innerHTML = char.avatar; 
        avatarDisplay.style.borderColor = char.color; 
        const svg = avatarDisplay.querySelector('svg'); if(svg) svg.style.fill = char.color; 
    }
    const resTotal = document.getElementById("resultTotal"); if(resTotal && char) resTotal.style.color = char.color;
}

// --- MENU ---
function toggleSettings() { 
    const menu = document.getElementById("settingsMenu"); 
    menu.style.display = (menu.style.display === "none") ? "flex" : "none"; 
    playSound('click');
}
function resetJourney() { 
    if(confirm("Tem certeza? Isso apagará TUDO.")) { 
        localStorage.removeItem("rollen_save_v1"); 
        location.reload(); 
    } 
    playSound('click');
}
function resetCampaignHistory() { 
    if(confirm("Zerar histórico?")) { 
        campaign.characters.forEach(char => { char.history = []; char.turnCount = 1; }); 
        campaign.globalLog = []; // Limpa log global também
        updateHistoryUI(); toggleSettings(); saveData(); alert("Histórico limpo!"); 
    } 
    playSound('click');
}

// --- 3D FÍSICA (Mantido Igual) ---
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
        const width = container.clientWidth; const height = container.clientHeight;
        renderer.setSize(width, height); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        camera.aspect = width / height; camera.updateProjectionMatrix();
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
        const { geometry, shape, angularDamping } = createDiceGeometry(sides, 1.0);
        const material = new THREE.MeshPhysicalMaterial({ color: color, metalness: 0.2, roughness: 0.1, clearcoat: 1.0, clearcoatRoughness: 0.1, flatShading: true, transparent: true, opacity: 1.0 }); 
        const mesh = new THREE.Mesh(geometry, material); mesh.castShadow = true; mesh.receiveShadow = false; scene.add(mesh);
        const body = new CANNON.Body({ mass: 5, shape: shape, linearDamping: 0.5, angularDamping: angularDamping, material: world.defaultContactMaterial.materials[1] });
        body.position.set((Math.random()-0.5)*2, 8, (Math.random()-0.5)*2); body.quaternion.set(Math.random(), Math.random(), Math.random(), Math.random());
        body.addEventListener("collide", handleDiceCollision);
        world.addBody(body); diceObjects.push({ mesh, body, type: sides, stopped: false });
        updateDiceButtonUI(sides, 1); clearMagicEffects();
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
    sprite.position.copy(diceObj.mesh.position); sprite.position.y += 0.8; scene.add(sprite);
    magicEffects.push({ mainSprite: sprite, life: 0, maxLife: 100, color: color, particles: [] });
    if (diceObj.type === 20) {
        if (value === 20) {
            hasCritHappened = true; playSound('crit');
            document.body.classList.remove("nat1-effect"); document.body.classList.add("crit-success-flash", "shake-effect");
            setTimeout(() => { document.body.classList.remove("crit-success-flash", "shake-effect"); }, 4000);
        } else if (value === 1 && !hasCritHappened) {
            playSound('fumble'); document.body.classList.add("nat1-effect", "shake-effect");
            setTimeout(() => { if (!hasCritHappened) document.body.classList.remove("nat1-effect", "shake-effect"); }, 4000);
        }
    }
}
function clearMagicEffects() { magicEffects.forEach(effect => { scene.remove(effect.mainSprite); effect.particles.forEach(p => scene.remove(p.mesh)); }); magicEffects = []; }
let chargeAnimId = null; let lastFrameTime = 0;

function startCharging() {
    if (diceObjects.length === 0 || isRolling) return;
    isPressing = true; clearMagicEffects(); pressPower = 0.3; playSound('hold');
    const bar = document.getElementById("powerBar"); const btn = document.getElementById("rollBtn");
    if (chargeAnimId) cancelAnimationFrame(chargeAnimId);
    const TARGET_DURATION = 1000; const MAX_POWER = 1.5; const POWER_RANGE = MAX_POWER - 0.3; 
    lastFrameTime = performance.now();
    const animateCharge = (currentTime) => {
        if (!isPressing) return;
        const deltaTime = currentTime - lastFrameTime; lastFrameTime = currentTime;
        pressPower += (POWER_RANGE / TARGET_DURATION) * deltaTime;
        if (pressPower >= MAX_POWER) pressPower = MAX_POWER;
        const percent = Math.min((pressPower / MAX_POWER) * 100, 100);
        bar.style.width = percent + "%";
        if (percent >= 100) btn.classList.add("charged");
        if (pressPower < MAX_POWER) chargeAnimId = requestAnimationFrame(animateCharge);
    };
    chargeAnimId = requestAnimationFrame(animateCharge);
}

function releaseRoll() {
    if (!isPressing) return;
    isPressing = false;
    if (chargeAnimId) { cancelAnimationFrame(chargeAnimId); chargeAnimId = null; }
    stopHoldSound();
    document.getElementById("powerBar").style.width = "0%"; document.getElementById("rollBtn").classList.remove("charged");
    if (diceObjects.length > 0 && !isRolling) { playSound('shoot'); rollAllDice(pressPower); }
    pressPower = 0;
}

function rollAllDice(forceMultiplier) {
    isRolling = true; hasCritHappened = false; clearMagicEffects(); 
    const force = forceMultiplier * 25; 
    updateResultDisplay("Rolando...", "?");
    diceObjects.forEach(d => { 
        d.stopped = false; d.body.wakeUp(); 
        d.body.velocity.set((Math.random()-0.5)*force, force*0.6+5, (Math.random()-0.5)*force); 
        d.body.angularVelocity.set((Math.random()-0.5)*60, (Math.random()-0.5)*60, (Math.random()-0.5)*60); 
    }); 
    checkDiceStopped();
}

function checkDiceStopped() { if (!isRolling) return; let allStopped = true; diceObjects.forEach(d => { if (d.body.velocity.norm() > 0.1 || d.body.angularVelocity.norm() > 0.1) allStopped = false; }); if (allStopped) setTimeout(calculateResults, 200); else requestAnimationFrame(checkDiceStopped); }

function calculateResults() {
    let total = 0; let parts = []; let d20Results = []; let isCritSuccess = false; let isCritFail = false;
    const modInput = document.getElementById("modInput"); let modifier = parseInt(modInput.value) || 0;
    const rolls = diceObjects.map(d => {
        const val = Math.floor(Math.random() * d.type) + 1;
        const data = { val, type: d.type, obj: d, ignored: false };
        if (d.type === 20) d20Results.push(data);
        return data;
    });

    if (rollMode !== 'normal' && d20Results.length >= 2) {
        if (rollMode === 'advantage') d20Results.sort((a, b) => b.val - a.val); else d20Results.sort((a, b) => a.val - b.val);
        for (let i = 1; i < d20Results.length; i++) d20Results[i].ignored = true;
    }

    rolls.forEach(res => {
        if (!res.ignored) {
            total += res.val;
            if (res.type === 20) { if (res.val === 20) isCritSuccess = true; if (res.val === 1) isCritFail = true; }
            parts.push(`${res.val} (D${res.type})`);
            res.obj.mesh.material.opacity = 1.0; res.obj.mesh.material.emissiveIntensity = 0; 
        } else {
            res.obj.mesh.material.opacity = 0.2; res.obj.mesh.material.color.setHex(0x333333);
            parts.push(`<span style="text-decoration: line-through; opacity: 0.5;">${res.val}</span>`);
        }
        showFloatingResult(res.obj, res.val);
    });

    total += modifier; 
    let formulaText = parts.join(" + "); 
    if (modifier !== 0) formulaText += ` ${modifier > 0 ? "+" : ""}${modifier} (Mod)`;

    isRolling = false; updateResultDisplay(formulaText, total);
    if (isCritSuccess) triggerCritEffect('success'); else if (isCritFail) triggerCritEffect('fail');

    const char = campaign.characters[activeCharIndex]; 
    if (char) { 
        char.modifier = modifier; 
        saveHistory(char, total, formulaText.replace(/<[^>]*>?/gm, '')); 
        
        if (!campaign.globalLog) campaign.globalLog = [];
        const d20Roll = rolls.find(r => r.type === 20 && !r.ignored);
        const d20Value = d20Roll ? d20Roll.val : null;

        campaign.globalLog.push({
            charName: char.name, charColor: char.color, formula: formulaText.replace(/<[^>]*>?/gm, ''), 
            total: total, rawD20: d20Value, 
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
    } 
    saveData();
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
function saveHistory(char, total, formula) { 
    if (!char.history) char.history = []; // Garante array
    let turn = char.history.find(h => h.turn === char.turnCount); 
    if (!turn) { turn = { turn: char.turnCount, rolls: [] }; char.history.push(turn); } 
    turn.rolls.push({ total, formula }); 
    updateHistoryUI(); 
}

function updateHistoryUI() { 
    const char = campaign.characters[activeCharIndex]; if(!char || !char.history) return; 
    const list = document.getElementById("historyList"); if(!list) return; 
    list.innerHTML = ""; 
    [...char.history].reverse().forEach(e => { 
        const h = document.createElement("li"); h.className = "turn-header"; h.innerHTML = `TURNO ${e.turn}`; list.appendChild(h); 
        e.rolls.forEach(r => { const li = document.createElement("li"); li.className = "roll-entry"; li.innerHTML = `<span class="roll-formula">${r.formula}</span> <span class="roll-equals">=</span> <span class="roll-total">${r.total}</span>`; list.appendChild(li); }); 
    }); 
}

function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    if (world) world.step(1/60, dt, 3); 
    diceObjects.forEach(d => { if (d.mesh && d.body) { d.mesh.position.copy(d.body.position); d.mesh.quaternion.copy(d.body.quaternion); } });
    for (let i = magicEffects.length - 1; i >= 0; i--) {
        const effect = magicEffects[i]; effect.life++;
        if (effect.life < 100) { effect.mainSprite.position.y += 0.015; if (effect.life < 20) { const p = effect.life / 20; effect.mainSprite.scale.set(p * 2.5, p * 2.5, 1); effect.mainSprite.material.opacity = p; } else if (effect.life > 80) effect.mainSprite.material.opacity = (100 - effect.life) / 20; }
        if (effect.life < 60 && Math.random() > 0.3) {
            const pMat = new THREE.SpriteMaterial({ map: sparkleTexture, transparent: true, color: effect.color, opacity: 0.8, blending: THREE.AdditiveBlending });
            const p = new THREE.Sprite(pMat); p.position.copy(effect.mainSprite.position); p.position.x += (Math.random() - 0.5) * 0.5; p.position.y -= 0.2; p.scale.set(0.3, 0.3, 1); scene.add(p);
            effect.particles.push({ mesh: p, age: 0 });
        }
        for (let j = effect.particles.length - 1; j >= 0; j--) {
            const p = effect.particles[j]; p.age++; p.mesh.position.y -= 0.005; p.mesh.material.opacity -= 0.03; p.mesh.scale.multiplyScalar(0.95);
            if (p.mesh.material.opacity <= 0) { scene.remove(p.mesh); effect.particles.splice(j, 1); }
        }
        if (effect.life >= 100 && effect.particles.length === 0) { scene.remove(effect.mainSprite); magicEffects.splice(i, 1); }
    }
    if (renderer && scene && camera) renderer.render(scene, camera);
}

// --- DETECTOR GLOBAL DE CLIQUES ---
document.addEventListener('click', (e) => {
    if (e.target.id === 'startCampaignBtn') { playSound('start'); return; }
    if (e.target.closest('.char-tab') || e.target.closest('.avatar-option')) { playSound('touch'); return; }
    if (e.target.closest('#rollBtn')) { return; }
    if (e.target.closest('button') || e.target.closest('.dice-btn') || e.target.closest('input') || e.target.closest('select') || e.target.closest('i')) playSound('click');
    setupModPicker();
});

function handleDiceCollision(e) {
    const velocity = Math.abs(e.contact.getImpactVelocityAlongNormal());
    if (velocity < 0.5) return;
    const now = Date.now();
    if (now - lastCollisionTime < 40) return; 
    lastCollisionTime = now;
    let soundIndex = 0;
    if (velocity < 2) soundIndex = 0; else if (velocity < 4) soundIndex = 1; else if (velocity < 6) soundIndex = 2; else if (velocity < 8) soundIndex = 3; else soundIndex = 4; 
    playSound('collides', soundIndex);
}

function setupModPicker() {
    const grid = document.getElementById("modGrid"); if (!grid) return; grid.innerHTML = "";
    for (let i = -10; i <= 10; i++) {
        const btn = document.createElement("button"); btn.className = "mod-btn"; btn.innerText = (i > 0 ? "+" : "") + i; btn.onclick = () => selectMod(i); grid.appendChild(btn);
    }
}

function toggleModPicker() {
    const modal = document.getElementById("modPickerModal"); const isOpening = modal.style.display === "none";
    modal.style.display = isOpening ? "flex" : "none";
    if (isOpening) { playSound('click'); highlightActiveMod(); }
}

function selectMod(val) {
    const input = document.getElementById("modInput"); const display = document.getElementById("modDisplay");
    input.value = val; display.innerText = (val > 0 ? "+" : "") + val;
    if (campaign.characters[activeCharIndex]) campaign.characters[activeCharIndex].modifier = val;
    saveData(); toggleModPicker(); playSound('touch');
}

function highlightActiveMod() {
    const currentVal = parseInt(document.getElementById("modInput").value) || 0;
    document.querySelectorAll('.mod-btn').forEach(btn => {
        const btnVal = parseInt(btn.innerText);
        btn.classList.toggle('active', btnVal === currentVal);
    });
}

function setRollMode(mode) {
    rollMode = mode; 
    if (campaign.characters[activeCharIndex]) campaign.characters[activeCharIndex].rollMode = mode;
    const btn = document.getElementById('cycleVantBtn'); if (!btn) return;
    btn.classList.remove('mode-norm', 'mode-adv', 'mode-dis');
    if (mode === 'normal') { btn.innerText = 'NORMAL'; btn.classList.add('mode-norm'); } else if (mode === 'advantage') { btn.innerText = 'VANTAGEM'; btn.classList.add('mode-adv'); } else if (mode === 'disadvantage') { btn.innerText = 'DESVANTAGEM'; btn.classList.add('mode-dis'); }
}

function cycleRollMode() {
    playSound('click'); 
    if (rollMode === 'normal') setRollMode('advantage'); else if (rollMode === 'advantage') setRollMode('disadvantage'); else setRollMode('normal');
}

function openGlobalLog() {
    const modal = document.getElementById("globalLogModal"); const list = document.getElementById("globalLogList");
    if (!campaign.globalLog) campaign.globalLog = [];
    let charStats = {};
    campaign.globalLog.forEach(entry => {
        if (entry.rawD20 !== null && entry.rawD20 !== undefined) {
            if (!charStats[entry.charName]) charStats[entry.charName] = { sum: 0, count: 0 };
            charStats[entry.charName].sum += entry.rawD20; charStats[entry.charName].count++;
        }
    });
    let bestAvg = -1; let worstAvg = 21; let luckyName = "--"; let unluckyName = "--";
    for (const [name, data] of Object.entries(charStats)) {
        if (data.count > 0) {
            const avg = data.sum / data.count;
            if (avg > bestAvg) { bestAvg = avg; luckyName = name; }
            if (avg < worstAvg) { worstAvg = avg; unluckyName = name; }
        }
    }
    document.getElementById("statLuckyName").innerText = luckyName; document.getElementById("statLuckyVal").innerText = bestAvg > -1 ? `Média: ${bestAvg.toFixed(1)}` : "Média: -";
    document.getElementById("statUnluckyName").innerText = unluckyName; document.getElementById("statUnluckyVal").innerText = worstAvg < 21 ? `Média: ${worstAvg.toFixed(1)}` : "Média: -";
    list.innerHTML = "";
    [...campaign.globalLog].reverse().forEach(entry => {
        const li = document.createElement("li"); li.className = "global-log-entry";
        let totalClass = "log-total"; if(entry.rawD20 === 20) totalClass += " log-crit-success"; if(entry.rawD20 === 1) totalClass += " log-crit-fail";
        li.innerHTML = `<div class="log-meta"><span class="log-char-name" style="color: ${entry.charColor}">${entry.charName}</span><span class="log-time">${entry.timestamp}</span></div><div class="log-result-box"><span class="${totalClass}">${entry.total}</span><span class="log-formula">${entry.formula}</span></div>`;
        list.appendChild(li);
    });
    modal.style.display = "flex"; playSound('click'); 
}

// --- FUNÇÕES DO GRIMÓRIO (As regras estão em regras.js) ---
function openCompendium() {
    const modal = document.getElementById("compendiumModal");
    if (modal) {
        modal.style.display = "flex";
        if (typeof rulesData !== 'undefined') renderRules(rulesData);
        playSound('click');
    }
}

// --- SUBSTITUA A FUNÇÃO renderRules ANTIGA POR ESTA NOVA LÓGICA ---

// Função auxiliar para extrair o nível numérico da magia para ordenação
function getLevelValue(rule) {
    if (rule.category !== 'spell') return -1; // Regras gerais aparecem primeiro
    if (rule.meta.includes('Truque')) return 0;
    
    // Procura por "1º", "2º", etc.
    const match = rule.meta.match(/(\d+)º/);
    return match ? parseInt(match[1]) : 0;
}

// Função para definir a prioridade de ordem dentro da classe
function getSortPriority(rule) {
    if (rule.title.includes("Visão Geral")) return 1;
    if (rule.title.includes("Traços Principais")) return 2;
    // Se tiver nível no meta, extrai o número (ex: "Nível 5" -> 10 + 5 = 15)
    const levelMatch = rule.meta ? rule.meta.match(/Nível (\d+)/) : null;
    if (levelMatch) return 10 + parseInt(levelMatch[1]);
    if (rule.meta && rule.meta.includes("Subclasse")) return 100; // Subclasses por último
    return 50;
}

function renderRules(data) {
    const list = document.getElementById("rulesList");
    if (!list) return;
    list.innerHTML = "";

    if (data.length === 0) {
        list.innerHTML = "<div style='text-align:center; color:#5d4037; margin-top:20px;'>Nenhum conhecimento encontrado...</div>";
        return;
    }

    // 1. ORDENAÇÃO MELHORADA
    const sortedData = [...data].sort((a, b) => {
        const catOrder = { 'condition': 1, 'action': 1, 'combat': 1, 'env': 1, 'class': 2, 'spell': 3 };
        
        // Primeiro por categoria principal
        if (catOrder[a.category] !== catOrder[b.category]) 
            return catOrder[a.category] - catOrder[b.category];
        
        // Se forem Classes, agrupa por Parent e depois por Prioridade (Nível)
        if (a.category === 'class') {
            if (a.parentClass !== b.parentClass) return a.parentClass.localeCompare(b.parentClass);
            return getSortPriority(a) - getSortPriority(b);
        }
        
        // Se forem Magias, ordena por nível e nome
        const levelA = typeof getLevelValue === 'function' ? getLevelValue(a) : 0;
        const levelB = typeof getLevelValue === 'function' ? getLevelValue(b) : 0;
        if (levelA !== levelB) return levelA - levelB;
        
        return a.title.localeCompare(b.title);
    });

    let currentSection = "";

    sortedData.forEach(rule => {
        let sectionLabel = "";
        let headerClass = "";

        if (rule.category === 'spell') {
            const level = getLevelValue(rule);
            sectionLabel = level === 0 ? "Truques (Nível 0)" : `Círculo ${level}º`;
            headerClass = `lvl-${level}`;
        } else if (rule.category === 'class') {
            sectionLabel = rule.parentClass;
            const safeName = sectionLabel.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
            headerClass = `header-${safeName}`;
        } else {
            sectionLabel = "Regras & Condições";
            headerClass = "lvl-general";
        }

        if (currentSection !== sectionLabel) {
            currentSection = sectionLabel;
            const h = document.createElement("div");
            h.className = `level-header ${headerClass}`;
            h.innerText = sectionLabel;
            list.appendChild(h);
        }

        const div = document.createElement("div");
        div.className = "rule-card";
        
        // Define a etiqueta lateral (Se for classe, usa o nome da classe)
        let tagName = translateCategory(rule.category);
        let tagExtraClass = "";
        
        if (rule.category === 'class') {
            tagName = rule.parentClass;
            const safeTag = tagName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
            tagExtraClass = `tag-${safeTag}`;
        }

        let metaHtml = rule.meta ? `<div style="font-size:0.75rem; color:#d84315; font-style:italic; margin-bottom:8px; border-bottom:1px dashed rgba(0,0,0,0.1); padding-bottom:4px;">${rule.meta}</div>` : "";

        div.innerHTML = `
            <div class="rule-title">
                ${rule.title}
                <span class="rule-tag ${tagExtraClass}" style="background:${rule.category === 'spell' ? '#7b1fa2' : ''}">${tagName}</span>
            </div>
            ${metaHtml}
            <div class="rule-desc">${rule.text}</div>
        `;
        list.appendChild(div);
    });
}
function translateCategory(cat) {
    if (cat === 'condition') return 'Condição'; if (cat === 'action') return 'Ação'; if (cat === 'combat') return 'Regra'; if (cat === 'spell') return 'Magia'; return cat;
}

function filterRules() {
    const input = document.getElementById("ruleSearch"); if (!input || typeof rulesData === 'undefined') return;
    const term = input.value.toLowerCase();
    const filtered = rulesData.filter(r => r.title.toLowerCase().includes(term) || r.text.toLowerCase().includes(term));
    renderRules(filtered);
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.cat-btn'); if(allBtn) allBtn.classList.add('active');
}

function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    const searchInput = document.getElementById("ruleSearch"); if (searchInput) searchInput.value = "";
    if (typeof rulesData === 'undefined') return;
    if (cat === 'all') renderRules(rulesData); else { const filtered = rulesData.filter(r => r.category === cat); renderRules(filtered); }
}