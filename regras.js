// regras.js - O Grimório de Conhecimento
// Este arquivo contém apenas os textos de regras e magias.

const rulesData = [
    // --- CONDIÇÕES E REGRAS BÁSICAS ---
// =================================================================
    // --- APÊNDICE A: CONDIÇÕES ---
    // =================================================================
    // =================================================================
    // --- REGRAS DE COMBATE ---
    // =================================================================
    {
        id: "cmb-critico",
        title: "Sucesso Crítico (Nat 20)",
        category: "action",
        text: "Quando você tira um 20 natural no dado:<ul><li>O ataque acerta <strong>automaticamente</strong>, não importa a CA do alvo.</li><li>Você rola todos os dados de dano do ataque <strong>duas vezes</strong> e os soma. O bônus fixo (Modificador) é adicionado apenas uma vez ao final.</li></ul>"
    },
    {
        id: "cmb-falha",
        title: "Falha Crítica (Nat 1)",
        category: "action",
        text: "Quando você tira um 1 natural no dado, o ataque <strong>erra automaticamente</strong>, independentemente de bônus ou da CA do alvo."
    },
    {
        id: "cmb-resistencia",
        title: "Resistência e Vulnerabilidade",
        category: "action",
        text: "<ul><li><strong>Resistência:</strong> Você divide o dano desse tipo por 2 (arredondado para baixo).</li><li><strong>Vulnerabilidade:</strong> Você multiplica o dano desse tipo por 2.</li><li>Múltiplas resistências ao mesmo tipo de dano não se acumulam.</li></ul>"
    },
    {
        id: "cmb-morte",
        title: "Testes Contra a Morte",
        category: "action",
        text: "Ao iniciar seu turno com 0 PV:<ul><li>Jogue um d20 (sem modificadores).</li><li><strong>10 ou mais:</strong> 1 Sucesso.</li><li><strong>9 ou menos:</strong> 1 Falha.</li><li><strong>Nat 20:</strong> Recupera 1 PV e volta à consciência.</li><li><strong>Nat 1:</strong> Conta como 2 falhas.</li><li>Com 3 sucessos você estabiliza; com 3 falhas você <strong>morre</strong>.</li></ul>"
    },
    {
        id: "cmb-oportunidade",
        title: "Ataque de Oportunidade",
        category: "action",
        text: "Ocorre quando uma criatura que você pode ver sai do seu alcance corpo-a-corpo sem usar a ação <strong>Desengajar</strong>. Você usa sua <strong>Reação</strong> para realizar um ataque corpo-a-corpo contra ela imediatamente antes de ela sair do alcance."
    },
    {
        id: "cond-agarrado",
        title: "Agarrado (Grappled)",
        category: "condition",
        text: "<ul><li>O deslocamento de uma criatura agarrada se torna <strong>0</strong>.</li><li>A condição encerra caso a criatura que a agarrou fique <strong>Incapacitada</strong>.</li><li>Encerra-se também se um efeito (como <i>Onda Trovejante</i>) remover a criatura do alcance de quem a agarrou.</li></ul>"
    },
    {
        id: "cond-amedrontado",
        title: "Amedrontado (Frightened)",
        category: "condition",
        text: "<ul><li>Sofre <strong>Desvantagem</strong> em testes de habilidade e jogadas de ataque enquanto a fonte do medo estiver em sua linha de visão.</li><li>A criatura não pode se mover voluntariamente para mais perto da fonte do medo.</li></ul>"
    },
    {
        id: "cond-atordoado",
        title: "Atordoado (Stunned)",
        category: "condition",
        text: "<ul><li>Está <strong>Incapacitada</strong>, não pode se mover e fala apenas hesitantemente.</li><li>Falha automaticamente em testes de resistência de <strong>Força</strong> ou <strong>Destreza</strong>.</li><li>Jogadas de ataque contra a criatura possuem <strong>Vantagem</strong>.</li></ul>"
    },
    {
        id: "cond-caido",
        title: "Caído (Prone)",
        category: "condition",
        text: "<ul><li>A única opção de movimento é <strong>rastejar</strong>, a menos que se levante.</li><li>A criatura sofre <strong>Desvantagem</strong> nas suas jogadas de ataque.</li><li>Ataques contra ela têm <strong>Vantagem</strong> se o atacante estiver a 1,5m. Se estiver mais longe, o atacante tem <strong>Desvantagem</strong>.</li></ul>"
    },
    {
        id: "cond-cego",
        title: "Cego (Blinded)",
        category: "condition",
        text: "<ul><li>Falha automaticamente em qualquer teste que requeira visão.</li><li>Jogadas de ataque contra a criatura possuem <strong>Vantagem</strong>.</li><li>Os ataques da criatura sofrem <strong>Desvantagem</strong>.</li></ul>"
    },
    {
        id: "cond-enfeiticado",
        title: "Enfeitiçado (Charmed)",
        category: "condition",
        text: "<ul><li>Não pode atacar quem a enfeitiçou ou usá-lo como alvo de efeitos nocivos.</li><li>Quem a enfeitiçou possui <strong>Vantagem</strong> em testes de habilidade para interagir socialmente com ela.</li></ul>"
    },
    {
        id: "cond-envenenado",
        title: "Envenenado (Poisoned)",
        category: "condition",
        text: "Uma criatura envenenada sofre <strong>Desvantagem</strong> em jogadas de ataque e testes de habilidade."
    },
    {
        id: "cond-exaustao",
        title: "Exaustão (Exhaustion)",
        category: "condition",
        text: "Medida em 6 níveis. Os efeitos são cumulativos:<br><br><strong>1:</strong> Desvantagem em testes de habilidade<br><strong>2:</strong> Deslocamento reduzido à metade<br><strong>3:</strong> Desvantagem em ataques e resistências<br><strong>4:</strong> PV Máximo reduzido à metade<br><strong>5:</strong> Deslocamento reduzido a 0<br><strong>6:</strong> 💀 <strong>MORTE</strong><br><br><i>Descanso longo com comida/água reduz 1 nível.</i>"
    },
    {
        id: "cond-impedido",
        title: "Impedido (Restrained)",
        category: "condition",
        text: "<ul><li>Deslocamento se torna <strong>0</strong>.</li><li>Ataques contra a criatura têm <strong>Vantagem</strong>.</li><li>Ataques da criatura e testes de resistência de <strong>Destreza</strong> sofrem <strong>Desvantagem</strong>.</li></ul>"
    },
    {
        id: "cond-incapacitado",
        title: "Incapacitado (Incapacitated)",
        category: "condition",
        text: "Uma criatura incapacitada não pode realizar <strong>Ações</strong> ou <strong>Reações</strong>."
    },
    {
        id: "cond-inconsciente",
        title: "Inconsciente (Unconscious)",
        category: "condition",
        text: "<ul><li>Está <strong>Incapacitada</strong>, não pode se mover ou falar e não tem ciência dos arredores.</li><li>Larga o que estiver segurando e fica <strong>Caída</strong>.</li><li>Falha automática em saves de Força/Destreza.</li><li>Ataques contra ela têm <strong>Vantagem</strong> e são <strong>Críticos automáticos</strong> se o atacante estiver a 1,5m.</li></ul>"
    },
    {
        id: "cond-invisivel",
        title: "Invisível (Invisible)",
        category: "condition",
        text: "<ul><li>Impossível de ser vista sem ajuda de magia. Considerada em <strong>escuridão densa</strong> para se esconder.</li><li>Ataques contra ela sofrem <strong>Desvantagem</strong>.</li><li>Ataques da criatura possuem <strong>Vantagem</strong>.</li></ul>"
    },
    {
        id: "cond-paralisado",
        title: "Paralisado (Paralyzed)",
        category: "condition",
        text: "<ul><li>Está <strong>Incapacitada</strong> e não pode se mover ou falar.</li><li>Falha automática em saves de Força/Destreza.</li><li>Ataques contra ela têm <strong>Vantagem</strong> e são <strong>Críticos automáticos</strong> se o atacante estiver a 1,5m.</li></ul>"
    },
    {
        id: "cond-petrificado",
        title: "Petrificado (Petrified)",
        category: "condition",
        text: "<ul><li>Transformada em substância sólida inanimada (pedra). Peso aumenta 10x e para de envelhecer.</li><li>Está <strong>Incapacitada</strong>, não pode se mover ou falar.</li><li>Tem <strong>Resistência</strong> a todos os tipos de dano e imunidade a veneno/doença.</li><li>Ataques contra ela têm <strong>Vantagem</strong>. Falha automática em saves de Força/Destreza.</li></ul>"
    },
    {
        id: "cond-surdo",
        title: "Surdo (Deafened)",
        category: "condition",
        text: "Uma criatura surda falha automaticamente em qualquer teste de habilidade que requeira o uso da audição."
    },
    // =================================================================
    // --- AÇÕES EM COMBATE ---
    // =================================================================
    {
        id: "act-atacar",
        title: "Atacar (Attack)",
        category: "action",
        text: "<ul><li>Realize um ataque corpo-a-corpo ou à distância.</li><li>Se você possui a característica <strong>Ataque Extra</strong>, esta ação permite realizar múltiplos ataques.</li><li>Inclui manobras como <strong>Agarrar</strong> ou <strong>Empurrar</strong> substituindo um dos ataques.</li></ul>"
    },
    {
        id: "act-magia",
        title: "Conjurar Magia (Cast a Spell)",
        category: "action",
        text: "Conjure uma magia com tempo de execução de <strong>1 Ação</strong>. Lembre-se: se conjurar uma magia de nível com sua Ação Bônus, você só pode usar sua Ação para um <strong>Truque</strong>."
    },
    {
        id: "act-disparada",
        title: "Disparada (Dash)",
        category: "action",
        text: "Você ganha deslocamento adicional para o turno atual. O aumento é igual ao seu deslocamento após aplicar todos os modificadores."
    },
    {
        id: "act-desengajar",
        title: "Desengajar (Disengage)",
        category: "action",
        text: "Seu movimento não provoca <strong>Ataques de Oportunidade</strong> pelo resto do turno atual."
    },
    {
        id: "act-esquivar",
        title: "Esquivar (Dodge)",
        category: "action",
        text: "Até o início do seu próximo turno:<ul><li>Ataques contra você têm <strong>Desvantagem</strong> (se você puder ver o atacante).</li><li>Você tem <strong>Vantagem</strong> em testes de resistência de <strong>Destreza</strong>.</li></ul>"
    },
    {
        id: "act-ajuda",
        title: "Ajuda (Help)",
        category: "action",
        text: "Escolha uma criatura a até 1,5m de você. Você concede <strong>Vantagem</strong> no próximo teste de habilidade ou jogada de ataque que ela realizar antes do início do seu próximo turno."
    },
    {
        id: "act-esconder",
        title: "Esconder (Hide)",
        category: "action",
        text: "Realize um teste de <strong>Destreza (Furtividade)</strong> contestado pela Sabedoria (Percepção) passiva dos inimigos para tentar não ser visto ou ouvido."
    },
    {
        id: "act-prontidao",
        title: "Prontidão (Ready)",
        category: "action",
        text: "Prepare uma reação para um gatilho específico (Ex: 'Se o orc passar pela porta, eu atiro'). Se o gatilho ocorrer, você usa sua <strong>Reação</strong> para agir."
    },
    {
        id: "act-procurar",
        title: "Procurar (Search)",
        category: "action",
        text: "Dedique sua atenção a encontrar algo. O mestre pode exigir um teste de <strong>Sabedoria (Percepção)</strong> ou <strong>Inteligência (Investigação)</strong>."
    },
    {
        id: "act-objeto",
        title: "Usar Objeto (Use an Object)",
        category: "action",
        text: "Usado quando você interage com um segundo objeto no turno ou quando o objeto exige uma ação própria (como beber uma poção ou usar um Kit de Venenos)."
    },
    {
        id: "act-agarrar",
        title: "Agarrar (Grapple)",
        category: "action",
        text: "Substitui um ataque. Realize um teste de <strong>Atletismo</strong> contestado pelo Atletismo ou Acrobacia do alvo. O alvo deve ser no máximo uma categoria maior que você."
    },
    {
        id: "act-empurrar",
        title: "Empurrar (Shove)",
        category: "action",
        text: "Substitui um ataque. Teste de <strong>Atletismo</strong> contestado por Atletismo ou Acrobacia do alvo. Se vencer, você escolhe entre derrubar o alvo <strong>Caído</strong> ou empurrá-lo <strong>1,5 metro</strong> para longe."
    },
    // =================================================================
    // --- AMBIENTE E EXPLORAÇÃO ---
    // =================================================================
    {
        id: "env-cobertura",
        title: "Cobertura (Cover)",
        category: "env",
        text: "<ul><li><strong>Meia Cobertura (+2):</strong> Alvo tem +2 na CA e testes de Destreza.</li><li><strong>Três Quartos (+5):</strong> Alvo tem +5 na CA e testes de Destreza.</li><li><strong>Cobertura Total:</strong> O alvo não pode ser atingido diretamente por ataques ou magias.</li></ul>"
    },
    {
        id: "env-luz",
        title: "Luz e Visão",
        category: "env",
        text: "<ul><li><strong>Luz Plena:</strong> Visão normal.</li><li><strong>Penumbra:</strong> Criaturas têm <strong>Desvantagem</strong> em testes de Percepção (Sabedoria) baseados em visão.</li><li><strong>Escuridão:</strong> Criaturas sofrem a condição <strong>Cego</strong> ao tentar ver algo nessa área.</li></ul>"
    },
    {
        id: "env-queda",
        title: "Dano de Queda",
        category: "env",
        text: "Uma criatura sofre <strong>1d6 de dano de concussão</strong> para cada 3 metros de queda (máximo de 20d6) e termina a queda na condição <strong>Caído</strong>."
    },
    {
        id: "env-terreno",
        title: "Terreno Difícil",
        category: "env",
        text: "Mover-se em terreno difícil (neve, lama, entulho) custa <strong>1,5 metro adicional</strong> para cada 1,5 metro percorrido. Basicamente, você se move à metade do seu deslocamento."
    },
    // =================================================================
    // --- MAGIAS: NÍVEL 0 (TRUQUES) ---
    // =================================================================
    {
        id: "spell-amizade", title: "Amizade", category: "spell",
        meta: "Truque Encantamento | 1 ação | Pessoal | S, M | Conc. 1 min",
        text: "Vantagem em testes de Carisma contra uma criatura não hostil. Ao final, ela percebe que foi influenciada e fica hostil."
    },
    {
        id: "spell-ataque-certeiro", title: "Ataque Certeiro", category: "spell",
        meta: "Truque Adivinhação | 1 ação | 9m | S | Conc. 1 rodada",
        text: "Vantagem na primeira jogada de ataque contra o alvo no seu próximo turno."
    },
    {
        id: "spell-bordao", title: "Bordão Místico", category: "spell",
        meta: "Truque Transmutação | Bônus | Toque | V, S, M | 1 min",
        text: "Imbui uma clava ou bordão. Use sua habilidade de conjuração para ataque/dano. O dano se torna 1d8 e a arma vira mágica."
    },
    {
        id: "spell-chama-sagrada", title: "Chama Sagrada", category: "spell",
        meta: "Truque Evocação | 1 ação | 18m | V, S | Instantânea",
        text: "Alvo faz teste de Destreza (sem cobertura). Falha: <strong>1d8 radiante</strong>. Aumenta em 1d8 nos níveis 5, 11 e 17."
    },
    {
        id: "spell-chicote-espinhos", title: "Chicote de Espinhos", category: "spell",
        meta: "Truque Transmutação | 1 ação | 9m | V, S, M | Instantânea",
        text: "Ataque corpo-a-corpo com magia (alcance 9m). Acerto: <strong>1d6 perfurante</strong> e puxa criatura Grande ou menor 3m para perto. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-consertar", title: "Consertar", category: "spell",
        meta: "Truque Transmutação | 1 min | Toque | V, S, M | Instantânea",
        text: "Repara uma quebra ou fissura não maior que 30cm em um objeto."
    },
    {
        id: "spell-criar-chamas", title: "Criar Chamas", category: "spell",
        meta: "Truque Conjuração | 1 ação | Pessoal | V, S | 10 min",
        text: "Chama na mão emite luz (3m/3m). Pode arremessar (9m): ataque à distância, <strong>1d8 fogo</strong>. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-druidismo", title: "Druidismo", category: "spell",
        meta: "Truque Transmutação | 1 ação | 9m | V, S | Instantânea",
        text: "Efeitos sensoriais da natureza: prever clima, fazer flor brotar, som de animal, sopro de vento, acender/apagar vela."
    },
    {
        id: "spell-espirro-acido", title: "Espirro Ácido", category: "spell",
        meta: "Truque Conjuração | 1 ação | 18m | V, S | Instantânea",
        text: "Uma criatura ou duas a 1,5m uma da outra. Teste de Destreza ou <strong>1d6 ácido</strong>. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-estabilizar", title: "Estabilizar", category: "spell",
        meta: "Truque Necromancia | 1 ação | Toque | V, S | Instantânea",
        text: "Estabiliza uma criatura com 0 PV. Não afeta mortos-vivos/constructos."
    },
    {
        id: "spell-globos-luz", title: "Globos de Luz", category: "spell",
        meta: "Truque Evocação | 1 ação | 36m | V, S, M | Conc. 1 min",
        text: "Cria até 4 luzes ou uma forma humanoide. Ilumina 3m (penumbra). Movem-se 18m com ação bônus."
    },
    {
        id: "spell-ilusao-menor", title: "Ilusão Menor", category: "spell",
        meta: "Truque Ilusão | 1 ação | 9m | V, M | 1 min",
        text: "Som ou imagem de objeto (até 1,5m cúbico). Investigação (Int) contra sua CD revela ser ilusão."
    },
    {
        id: "spell-luz", title: "Luz", category: "spell",
        meta: "Truque Evocação | 1 ação | Toque | V, M | 1 hora",
        text: "Objeto emite luz plena 6m + penumbra 6m. Pode ser coberto. Criatura hostil pode evitar com teste de Destreza."
    },
    {
        id: "spell-maos-magicas", title: "Mãos Mágicas", category: "spell",
        meta: "Truque Conjuração | 1 ação | 9m | V, S | 1 min",
        text: "Mão espectral flutua. Pode manipular objetos, abrir portas, guardar itens. Não ataca nem ativa itens mágicos. Carrega até 5kg."
    },
    {
        id: "spell-mensagem", title: "Mensagem", category: "spell",
        meta: "Truque Transmutação | 1 ação | 36m | V, S, M | 1 rodada",
        text: "Aponta e sussurra. Alvo ouve e pode responder. Atravessa sólidos (exceto chumbo e barreiras grossas)."
    },
    {
        id: "spell-orientacao", title: "Orientação", category: "spell",
        meta: "Truque Adivinhação | 1 ação | Toque | V, S | Conc. 1 min",
        text: "Alvo adiciona <strong>1d4</strong> a um teste de habilidade à escolha dele."
    },
    {
        id: "spell-prestidigitacao", title: "Prestidigitação", category: "spell",
        meta: "Truque Transmutação | 1 ação | 3m | V, S | 1 hora",
        text: "Efeitos menores: faíscas, brisa, som, sabor, limpar/sujar, aquecer/esfriar, criar bugiganga temporária."
    },
    {
        id: "spell-prot-laminas", title: "Proteção contra Lâminas", category: "spell",
        meta: "Truque Abjuração | 1 ação | Pessoal | V, S | 1 rodada",
        text: "Resistência a concussão, cortante e perfurante de ataques com armas até o final do seu próximo turno."
    },
    {
        id: "spell-raio-fogo", title: "Raio de Fogo", category: "spell",
        meta: "Truque Evocação | 1 ação | 36m | V, S | Instantânea",
        text: "Ataque à distância com magia. Acerto: <strong>1d10 fogo</strong>. Incendeia objetos. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-raio-gelo", title: "Raio de Gelo", category: "spell",
        meta: "Truque Evocação | 1 ação | 18m | V, S | Instantânea",
        text: "Ataque à distância com magia. Acerto: <strong>1d8 frio</strong> e reduz deslocamento em 3m. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-rajada-veneno", title: "Rajada de Veneno", category: "spell",
        meta: "Truque Conjuração | 1 ação | 3m | V, S | Instantânea",
        text: "Teste de Constituição. Falha: <strong>1d12 veneno</strong>. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-rajada-mistica", title: "Rajada Mística", category: "spell",
        meta: "Truque Evocação | 1 ação | 36m | V, S | Instantânea",
        text: "Ataque à distância com magia. Acerto: <strong>1d10 energia</strong>. Cria mais feixes nos níveis 5, 11 e 17 (ataques separados)."
    },
    {
        id: "spell-resistencia", title: "Resistência", category: "spell",
        meta: "Truque Abjuração | 1 ação | Toque | V, S, M | Conc. 1 min",
        text: "Alvo adiciona <strong>1d4</strong> a um teste de resistência à escolha dele."
    },
    {
        id: "spell-taumaturgia", title: "Taumaturgia", category: "spell",
        meta: "Truque Transmutação | 1 ação | 9m | V | 1 min",
        text: "Manifestações divinas: voz alta, tremores, sons, abrir/fechar portas, alterar cor dos olhos."
    },
    {
        id: "spell-toque-arrepiante", title: "Toque Arrepiante", category: "spell",
        meta: "Truque Necromancia | 1 ação | 36m | V, S | 1 rodada",
        text: "Ataque à distância. Acerto: <strong>1d8 necrótico</strong> e alvo não pode recuperar PV. Mortos-vivos têm desvantagem para te atacar. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-toque-chocante", title: "Toque Chocante", category: "spell",
        meta: "Truque Evocação | 1 ação | Toque | V, S | Instantânea",
        text: "Ataque corpo-a-corpo (Vantagem se alvo usa metal). Acerto: <strong>1d8 elétrico</strong> e alvo perde a reação. Aumenta nos níveis 5, 11 e 17."
    },
    {
        id: "spell-zombaria", title: "Zombaria Viciosa", category: "spell",
        meta: "Truque Encantamento | 1 ação | 18m | V | Instantânea",
        text: "Teste de Sabedoria. Falha: <strong>1d4 psíquico</strong> e desvantagem no próximo ataque. Aumenta nos níveis 5, 11 e 17."
    },

    // =================================================================
    // --- MAGIAS: NÍVEL 1 ---
    // =================================================================
    {
        id: "spell-alarme", title: "Alarme", category: "spell",
        meta: "1º Nível Abjuração | 1 min | 9m | V, S, M | 8 horas",
        text: "Protege área cúbica de 6m. Alerta mental ou sonoro quando criatura Miúda ou maior entra."
    },
    {
        id: "spell-amizade-animal", title: "Amizade Animal", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 9m | V, S, M | 24 horas",
        text: "Besta com Int < 4 faz teste de Sabedoria ou fica enfeitiçada."
    },
    {
        id: "spell-area-escorregadia", title: "Área Escorregadia", category: "spell",
        meta: "1º Nível Conjuração | 1 ação | 18m | V, S, M | 1 min",
        text: "Quadrado de 3m vira terreno difícil. Criaturas na área fazem teste de Destreza ou caem no chão."
    },
    {
        id: "spell-armadura-arcana", title: "Armadura Arcana", category: "spell",
        meta: "1º Nível Abjuração | 1 ação | Toque | V, S, M | 8 horas",
        text: "Alvo sem armadura tem CA base definida como 13 + Mod. Destreza."
    },
    {
        id: "spell-armadura-agathys", title: "Armadura de Agathys", category: "spell",
        meta: "1º Nível Abjuração | 1 ação | Pessoal | V, S, M | 1 hora",
        text: "Ganha 5 PV temporários. Quem te acerta no corpo-a-corpo sofre 5 frio. Aumenta em +5 por nível superior."
    },
    {
        id: "spell-bencao", title: "Bênção", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "Até 3 criaturas somam <strong>1d4</strong> em ataques e testes de resistência."
    },
    {
        id: "spell-bom-fruto", title: "Bom Fruto", category: "spell",
        meta: "1º Nível Transmutação | 1 ação | Toque | V, S, M | Instantânea",
        text: "Cria 10 frutos. Cada um cura 1 PV e sustenta por um dia."
    },
    {
        id: "spell-bracos-hadar", title: "Braços de Hadar", category: "spell",
        meta: "1º Nível Conjuração | 1 ação | Pessoal (3m) | V, S | Instantânea",
        text: "Criaturas a 3m fazem teste de Força. Falha: <strong>2d6 necrótico</strong> e sem reações. Sucesso: metade do dano."
    },
    {
        id: "spell-bruxaria", title: "Bruxaria (Hex)", category: "spell",
        meta: "1º Nível Encantamento | Bônus | 18m | V, S, M | Conc. 1 hora",
        text: "Causa <strong>1d6 necrótico</strong> extra ao acertar. Desvantagem em uma habilidade escolhida. Se alvo morre, pode transferir."
    },
    {
        id: "spell-comando", title: "Comando", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 18m | V | 1 rodada",
        text: "Teste de Sabedoria. Falha: obedece uma ordem de uma palavra (Aproxime-se, Largue, Fuja, Deite-se, Parado)."
    },
    {
        id: "spell-compreender-idiomas", title: "Compreender Idiomas", category: "spell",
        meta: "1º Nível Adivinhação | 1 ação | Pessoal | V, S, M | 1 hora",
        text: "Entende sentido literal de idiomas falados e escritos (se tocar)."
    },
    {
        id: "spell-constricao", title: "Constrição", category: "spell",
        meta: "1º Nível Conjuração | 1 ação | 27m | V, S | Conc. 1 min",
        text: "Quadrado de 6m vira terreno difícil. Teste de Força ou fica impedido."
    },
    {
        id: "spell-convocar-familiar", title: "Convocar Familiar", category: "spell",
        meta: "1º Nível Conjuração | 1 hora | 3m | V, S, M | Instantânea",
        text: "Ganha um companheiro animal (espírito). Pode ver pelos olhos dele, entregar magias de toque, etc."
    },
    {
        id: "spell-criar-destruir-agua", title: "Criar ou Destruir Água", category: "spell",
        meta: "1º Nível Transmutação | 1 ação | 9m | V, S, M | Instantânea",
        text: "Cria ou destrói até 30 litros de água ou neblina num cubo de 9m."
    },
    {
        id: "spell-curar-ferimentos", title: "Curar Ferimentos", category: "spell",
        meta: "1º Nível Evocação | 1 ação | Toque | V, S | Instantânea",
        text: "Recupera <strong>1d8 + mod. conjuração</strong> PV. Aumenta 1d8 por nível superior."
    },
    {
        id: "spell-destruicao-colerica", title: "Destruição Colérica", category: "spell",
        meta: "1º Nível Evocação | Bônus | Pessoal | V | Conc. 1 min",
        text: "Próximo acerto com arma causa +1d6 psíquico. Teste de Sabedoria ou amedrontado."
    },
    {
        id: "spell-detectar-magia", title: "Detectar Magia", category: "spell",
        meta: "1º Nível Adivinhação | 1 ação | Pessoal | V, S | Conc. 10 min",
        text: "Sente presença de magia a 9m. Pode ver auras e escolas."
    },
    {
        id: "spell-disfarcar-se", title: "Disfarçar-se", category: "spell",
        meta: "1º Nível Ilusão | 1 ação | Pessoal | V, S | 1 hora",
        text: "Altera sua aparência (incluindo roupas). Investigação contra CD revela."
    },
    {
        id: "spell-duelo-compelido", title: "Duelo Compelido", category: "spell",
        meta: "1º Nível Encantamento | Bônus | 9m | V | Conc. 1 min",
        text: "Teste de Sabedoria. Falha: desvantagem contra outros e difícil de se afastar de você."
    },
    {
        id: "spell-enfeiticar-pessoa", title: "Enfeitiçar Pessoa", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 9m | V, S | 1 hora",
        text: "Humanoide faz teste de Sabedoria (Vantagem se em combate). Falha: Enfeitiçado (amigável)."
    },
    {
        id: "spell-escudo-arcano", title: "Escudo Arcano (Shield)", category: "spell",
        meta: "1º Nível Abjuração | Reação | Pessoal | V, S | 1 rodada",
        text: "Ganha <strong>+5 na CA</strong> até seu próximo turno e imunidade a Mísseis Mágicos."
    },
    {
        id: "spell-escudo-fe", title: "Escudo da Fé", category: "spell",
        meta: "1º Nível Abjuração | Bônus | 18m | V, S, M | Conc. 10 min",
        text: "Alvo ganha +2 na CA."
    },
    {
        id: "spell-fogo-fadas", title: "Fogo das Fadas", category: "spell",
        meta: "1º Nível Evocação | 1 ação | 18m | V | Conc. 1 min",
        text: "Cubo de 6m. Teste de Destreza ou fica brilhando. Ataques contra alvo têm Vantagem. Anula invisibilidade."
    },
    {
        id: "spell-identificacao", title: "Identificação", category: "spell",
        meta: "1º Nível Adivinhação | 1 min | Toque | V, S, M (Pérola 100po) | Instantânea",
        text: "Revela propriedades mágicas de um item ou magias afetando uma criatura."
    },
    {
        id: "spell-imagem-silenciosa", title: "Imagem Silenciosa", category: "spell",
        meta: "1º Nível Ilusão | 1 ação | 18m | V, S, M | Conc. 10 min",
        text: "Cria imagem visual (sem som/cheiro) em cubo de 4,5m. Pode mover."
    },
    {
        id: "spell-infligir-ferimentos", title: "Infligir Ferimentos", category: "spell",
        meta: "1º Nível Necromancia | 1 ação | Toque | V, S | Instantânea",
        text: "Ataque corpo-a-corpo com magia. Acerto: <strong>3d10 necrótico</strong>."
    },
    {
        id: "spell-maos-flamejantes", title: "Mãos Flamejantes", category: "spell",
        meta: "1º Nível Evocação | 1 ação | Pessoal (Cone 4,5m) | V, S | Instantânea",
        text: "Teste de Destreza. Falha: <strong>3d6 fogo</strong>. Sucesso: metade."
    },
    {
        id: "spell-marca-cacador", title: "Marca do Caçador", category: "spell",
        meta: "1º Nível Adivinhação | Bônus | 27m | V | Conc. 1 hora",
        text: "Causa +1d6 dano extra ao alvo. Vantagem em Percepção/Sobrevivência para achá-lo."
    },
    {
        id: "spell-misseis-magicos", title: "Mísseis Mágicos", category: "spell",
        meta: "1º Nível Evocação | 1 ação | 36m | V, S | Instantânea",
        text: "Cria 3 dardos que acertam automaticamente. Cada um causa <strong>1d4+1 força</strong>."
    },
    {
        id: "spell-onda-trovejante", title: "Onda Trovejante", category: "spell",
        meta: "1º Nível Evocação | 1 ação | Pessoal (Cubo 4,5m) | V, S | Instantânea",
        text: "Teste de Constituição. Falha: <strong>2d8 trovejante</strong> e empurrado 3m. Sucesso: metade."
    },
    {
        id: "spell-orbe-cromatica", title: "Orbe Cromática", category: "spell",
        meta: "1º Nível Evocação | 1 ação | 27m | V, S, M (Diamante 50po) | Instantânea",
        text: "Ataque à distância com magia. Escolha o elemento. Dano: <strong>3d8</strong>."
    },
    {
        id: "spell-palavra-curativa", title: "Palavra Curativa", category: "spell",
        meta: "1º Nível Evocação | Bônus | 18m | V | Instantânea",
        text: "Cura <strong>1d4 + mod. conjuração</strong> PV. Alcance à distância."
    },
    {
        id: "spell-perdicao", title: "Perdição (Bane)", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "3 alvos fazem teste de Carisma. Falha: subtraem <strong>1d4</strong> de ataques e testes de resistência."
    },
    {
        id: "spell-protecao-bem-mal", title: "Proteção Bem e Mal", category: "spell",
        meta: "1º Nível Abjuração | 1 ação | Toque | V, S, M | Conc. 10 min",
        text: "Protege contra aberrações, celestiais, corruptores, fadas, mortos-vivos (Desvantagem para atacar o alvo)."
    },
    {
        id: "spell-queda-suave", title: "Queda Suave", category: "spell",
        meta: "1º Nível Transmutação | Reação | 18m | V, M | 1 min",
        text: "Até 5 criaturas caindo não sofrem dano de queda."
    },
    {
        id: "spell-raio-adoecente", title: "Raio Adoecente", category: "spell",
        meta: "1º Nível Necromancia | 1 ação | 18m | V, S | Instantânea",
        text: "Ataque à distância. Acerto: <strong>2d8 veneno</strong>. Teste de Constituição ou envenenado."
    },
    {
        id: "spell-raio-bruxa", title: "Raio de Bruxa", category: "spell",
        meta: "1º Nível Evocação | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "Ataque à distância. Acerto: <strong>1d12 elétrico</strong>. Pode usar ação para causar dano automático todo turno."
    },
    {
        id: "spell-raio-guiador", title: "Raio Guiador", category: "spell",
        meta: "1º Nível Evocação | 1 ação | 36m | V, S | 1 rodada",
        text: "Ataque à distância. Acerto: <strong>4d6 radiante</strong> e o próximo ataque contra o alvo tem Vantagem."
    },
    {
        id: "spell-repreensao-infernal", title: "Repreensão Infernal", category: "spell",
        meta: "1º Nível Evocação | Reação | 18m | V, S | Instantânea",
        text: "Quando sofre dano. Atacante faz teste de Destreza. Falha: <strong>2d10 fogo</strong>. Sucesso: metade."
    },
    {
        id: "spell-riso-tasha", title: "Riso Histérico de Tasha", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "Teste de Sabedoria. Falha: cai na gargalhada, fica incapacitado/caído."
    },
    {
        id: "spell-santuario", title: "Santuário", category: "spell",
        meta: "1º Nível Abjuração | Bônus | 9m | V, S, M | 1 min",
        text: "Inimigos devem passar em teste de Sabedoria para atacar o alvo protegido."
    },
    {
        id: "spell-sono", title: "Sono", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 27m | V, S, M | 1 min",
        text: "Afeta <strong>5d8 PV</strong> de criaturas. Adormece as que têm menos PV atual, sem teste de resistência."
    },
    {
        id: "spell-sussurros-dissonantes", title: "Sussurros Dissonantes", category: "spell",
        meta: "1º Nível Encantamento | 1 ação | 18m | V | Instantânea",
        text: "Teste de Sabedoria. Falha: <strong>3d6 psíquico</strong> e foge com reação. Sucesso: metade."
    },
    {
        id: "spell-vitalidade-falsa", title: "Vitalidade Falsa", category: "spell",
        meta: "1º Nível Necromancia | 1 ação | Pessoal | V, S, M | 1 hora",
        text: "Ganha <strong>1d4 + 4</strong> PV temporários."
    },

    // =================================================================
    // --- MAGIAS: NÍVEL 2 ---
    // =================================================================
    {
        id: "spell-acalmar-emocoes", title: "Acalmar Emoções", category: "spell",
        meta: "2º Nível Encantamento | 1 ação | 18m | V, S | Conc. 1 min",
        text: "Humanoides em 6m (Carisma save). Falha: suprime amedrontado/enfeitiçado OU torna hostil indiferente."
    },
    {
        id: "spell-ajuda", title: "Ajuda", category: "spell",
        meta: "2º Nível Abjuração | 1 ação | 9m | V, S, M | 8 horas",
        text: "3 criaturas ganham +5 PV máximos e atuais. Aumenta +5 por nível superior."
    },
    {
        id: "spell-alterar-se", title: "Alterar-se", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | Pessoal | V, S | Conc. 1 hora",
        text: "Muda forma: Adaptação Aquática, Mudar Aparência ou Armas Naturais (+1, <strong>1d6</strong> dano)."
    },
    {
        id: "spell-aprimorar-habilidade", title: "Aprimorar Habilidade", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | Toque | V, S, M | Conc. 1 hora",
        text: "Vantagem em testes de uma habilidade escolhida. 'Vigor do Urso' também dá <strong>2d6</strong> PV temporários."
    },
    {
        id: "spell-arma-espiritual", title: "Arma Espiritual", category: "spell",
        meta: "2º Nível Evocação | Bônus | 18m | V, S | 1 min",
        text: "Cria arma flutuante. Ataque corpo-a-corpo com magia: <strong>1d8 + mod</strong> energia. Bônus para mover e atacar."
    },
    {
        id: "spell-arma-magica", title: "Arma Mágica", category: "spell",
        meta: "2º Nível Transmutação | Bônus | Toque | V, S | Conc. 1 hora",
        text: "Arma não-mágica se torna mágica com bônus +1 ataque/dano."
    },
    {
        id: "spell-arrombar", title: "Arrombar (Knock)", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | 18m | V | Instantânea",
        text: "Abre fechadura mundana ou mágica. Emite som alto a 90m."
    },
    {
        id: "spell-augurio", title: "Augúrio", category: "spell",
        meta: "2º Nível Adivinhação | 1 min | Pessoal | V, S, M (25po) | Instantânea",
        text: "Previsão para os próximos 30 min: Êxito, Fracasso, Ambos ou Nada."
    },
    {
        id: "spell-aumentar-reduzir", title: "Aumentar/Reduzir", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "Aumentar: Vantagem Força, +<strong>1d4</strong> dano. Reduzir: Desvantagem Força, -<strong>1d4</strong> dano."
    },
    {
        id: "spell-boca-encantada", title: "Boca Encantada", category: "spell",
        meta: "2º Nível Ilusão | 1 min | 9m | V, S, M (10po) | Permanente",
        text: "Objeto recita mensagem de até 25 palavras quando gatilho ocorrer."
    },
    {
        id: "spell-cegueira-surdez", title: "Cegueira/Surdez", category: "spell",
        meta: "2º Nível Necromancia | 1 ação | 9m | V | 1 min",
        text: "Teste de Constituição. Falha: Cego ou Surdo. Repete teste ao final de cada turno."
    },
    {
        id: "spell-chama-continua", title: "Chama Contínua", category: "spell",
        meta: "2º Nível Evocação | 1 ação | Toque | V, S, M (50po) | Permanente",
        text: "Chama que ilumina como tocha mas não queima nem gasta oxigênio."
    },
    {
        id: "spell-coroa-loucura", title: "Coroa da Loucura", category: "spell",
        meta: "2º Nível Encantamento | 1 ação | 36m | V, S | Conc. 1 min",
        text: "Humanoide (Sabedoria save). Falha: ataca criatura que você escolher. Gasta sua ação para manter."
    },
    {
        id: "spell-crescer-espinhos", title: "Crescer Espinhos", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | 45m | V, S, M | Conc. 10 min",
        text: "Área de 6m vira terreno difícil. Causa <strong>2d4 perfurante</strong> para cada 1,5m que mover nela."
    },
    {
        id: "spell-despedacar", title: "Despedaçar (Shatter)", category: "spell",
        meta: "2º Nível Evocação | 1 ação | 18m | V, S, M | Instantânea",
        text: "Esfera de 3m. Teste de Constituição: <strong>3d8 trovejante</strong>. Desvantagem para inorgânicos."
    },
    {
        id: "spell-detectar-pensamentos", title: "Detectar Pensamentos", category: "spell",
        meta: "2º Nível Adivinhação | 1 ação | Pessoal | V, S, M | Conc. 1 min",
        text: "Lê pensamentos superficiais a 9m. Pode sondar fundo (Sabedoria save)."
    },
    {
        id: "spell-escuridao", title: "Escuridão", category: "spell",
        meta: "2º Nível Evocação | 1 ação | 18m | V, M | Conc. 10 min",
        text: "Esfera de 4,5m de escuridão mágica. Visão no escuro não funciona. Bloqueia luz não-mágica."
    },
    {
        id: "spell-esfera-flamejante", title: "Esfera Flamejante", category: "spell",
        meta: "2º Nível Conjuração | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Bola de fogo de 1,5m. Causa <strong>2d6 fogo</strong> a quem termina turno perto. Move 9m com bônus."
    },
    {
        id: "spell-esquentar-metal", title: "Esquentar Metal", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Objeto de metal brilha. <strong>2d8 fogo</strong> (sem save) para quem toca. Se segurando: Con save ou larga/desvantagem."
    },
    {
        id: "spell-flecha-melf", title: "Flecha Ácida de Melf", category: "spell",
        meta: "2º Nível Evocação | 1 ação | 36m | V, S, M | Instantânea",
        text: "Ataque à distância. Acerto: <strong>4d4 ácido</strong> + <strong>2d4</strong> fim do turno. Erro: metade do inicial."
    },
    {
        id: "spell-forca-fantasmagorica", title: "Força Fantasmagórica", category: "spell",
        meta: "2º Nível Ilusão | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Cria ilusão na mente do alvo (Inteligência save). Alvo racionaliza interações e pode sofrer <strong>1d6 psíquico</strong>."
    },
    {
        id: "spell-imobilizar-pessoa", title: "Imobilizar Pessoa", category: "spell",
        meta: "2º Nível Encantamento | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Humanoide faz teste de Sabedoria. Falha: Paralisado. Repete teste ao final de cada turno."
    },
    {
        id: "spell-lamina-flamejante", title: "Lâmina Flamejante", category: "spell",
        meta: "2º Nível Evocação | Bônus | Pessoal | V, S, M | Conc. 10 min",
        text: "Cria cimitarra de fogo na mão. Ataque corpo-a-corpo com magia: <strong>3d6 fogo</strong>."
    },
    {
        id: "spell-levitacao", title: "Levitação", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | 18m | V, S, M | Conc. 10 min",
        text: "Ergue criatura ou objeto (até 250kg) 6m. Con save para negar. Ataques não mudam altitude."
    },
    {
        id: "spell-localizar-objeto", title: "Localizar Objeto", category: "spell",
        meta: "2º Nível Adivinhação | 1 ação | Pessoal | V, S, M | Conc. 10 min",
        text: "Sente direção de objeto a até 300m. Bloqueado por chumbo."
    },
    {
        id: "spell-lufada-vento", title: "Lufada de Vento", category: "spell",
        meta: "2º Nível Evocação | 1 ação | Pessoal (Linha 18m) | V, S, M | Conc. 1 min",
        text: "Vento forte empurra criaturas 4,5m (Força save). Dispersa gás e apaga velas."
    },
    {
        id: "spell-marca-punicao", title: "Marca da Punição", category: "spell",
        meta: "2º Nível Evocação | Bônus | Pessoal | V | Conc. 1 min",
        text: "Próximo acerto: +<strong>2d6 radiante</strong>. Alvo brilha e não pode ficar invisível."
    },
    {
        id: "spell-mensageiro-animal", title: "Mensageiro Animal", category: "spell",
        meta: "2º Nível Encantamento | 1 ação | 9m | V, S, M | 24 horas",
        text: "Animal miúdo viaja para entregar mensagem de 25 palavras."
    },
    {
        id: "spell-nublar", title: "Nublar (Blur)", category: "spell",
        meta: "2º Nível Ilusão | 1 ação | Pessoal | V | Conc. 1 min",
        text: "Corpo fica turvo. Ataques contra você têm Desvantagem (se visão for necessária)."
    },
    {
        id: "spell-nuvem-adagas", title: "Nuvem de Adagas", category: "spell",
        meta: "2º Nível Conjuração | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Cubo de 1,5m. Causa <strong>4d4 cortante</strong> a quem entra ou começa turno (sem save)."
    },
    {
        id: "spell-oracao-curativa", title: "Oração Curativa", category: "spell",
        meta: "2º Nível Evocação | 10 min | 9m | V | Instantânea",
        text: "Cura até 6 criaturas em <strong>2d8 + mod</strong>."
    },
    {
        id: "spell-passos-sem-pegadas", title: "Passos Sem Pegadas", category: "spell",
        meta: "2º Nível Abjuração | 1 ação | Pessoal | V, S, M | Conc. 1 hora",
        text: "+10 Furtividade para você e aliados a 9m. Não deixa rastros."
    },
    {
        id: "spell-patas-aranha", title: "Patas de Aranha", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | Toque | V, S, M | Conc. 1 hora",
        text: "Anda em paredes e tetos com mãos livres. Ganha deslocamento de escalada."
    },
    {
        id: "spell-pele-arvore", title: "Pele de Árvore", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | Toque | V, S, M | Conc. 1 hora",
        text: "CA do alvo não pode ser menor que 16."
    },
    {
        id: "spell-protecao-veneno", title: "Proteção contra Veneno", category: "spell",
        meta: "2º Nível Abjuração | 1 ação | Toque | V, S | 1 hora",
        text: "Cura veneno ativo. Dá resistência a veneno e vantagem nos testes."
    },
    {
        id: "spell-raio-ardente", title: "Raio Ardente", category: "spell",
        meta: "2º Nível Evocação | 1 ação | 36m | V, S | Instantânea",
        text: "Dispara 3 raios. Ataque à distância para cada: <strong>2d6 fogo</strong>."
    },
    {
        id: "spell-raio-enfraquecimento", title: "Raio do Enfraquecimento", category: "spell",
        meta: "2º Nível Necromancia | 1 ação | 18m | V, S | Conc. 1 min",
        text: "Ataque à distância. Acerto: Metade do dano com armas de Força (Con save repete)."
    },
    {
        id: "spell-raio-lunar", title: "Raio Lunar", category: "spell",
        meta: "2º Nível Evocação | 1 ação | 36m | V, S, M | Conc. 1 min",
        text: "Cilindro de luz (1,5m raio). Causa <strong>2d10 radiante</strong> (Con save). Metamorfos revertem."
    },
    {
        id: "spell-reflexos", title: "Reflexos (Mirror Image)", category: "spell",
        meta: "2º Nível Ilusão | 1 ação | Pessoal | V, S | 1 min",
        text: "Cria 3 duplicatas. Ataques podem acertar cópias (CA 10+Des). Role d20 para ver se acerta você."
    },
    {
        id: "spell-repouso-tranquilo", title: "Repouso Tranquilo", category: "spell",
        meta: "2º Nível Necromancia | 1 ação | Toque | V, S, M | 10 dias",
        text: "Corpo não entra em decomposição e não vira morto-vivo. Estende prazo para reviver."
    },
    {
        id: "spell-restauracao-menor", title: "Restauração Menor", category: "spell",
        meta: "2º Nível Abjuração | 1 ação | Toque | V, S | Instantânea",
        text: "Cura uma condição: cego, surdo, paralisado ou envenenado."
    },
    {
        id: "spell-sentido-bestial", title: "Sentido Bestial", category: "spell",
        meta: "2º Nível Adivinhação | 1 ação | Toque | S | Conc. 1 hora",
        text: "Vê e ouve através dos sentidos de uma besta voluntária."
    },
    {
        id: "spell-silencio", title: "Silêncio", category: "spell",
        meta: "2º Nível Ilusão | 1 ação | 36m | V, S | Conc. 10 min",
        text: "Esfera de 6m. Nenhum som passa. Imune a dano trovejante. Impede magias Verbais."
    },
    {
        id: "spell-sugestao", title: "Sugestão", category: "spell",
        meta: "2º Nível Encantamento | 1 ação | 9m | V, M | Conc. 8 horas",
        text: "Sugere curso de ação (Sabedoria save). Deve soar razoável."
    },
    {
        id: "spell-teia", title: "Teia", category: "spell",
        meta: "2º Nível Conjuração | 1 ação | 18m | V, S, M | Conc. 1 hora",
        text: "Cubo de 6m de teias. Terreno difícil e obscurecimento leve. Teste de Destreza ou impedido. Inflamável."
    },
    {
        id: "spell-tranca-arcana", title: "Tranca Arcana", category: "spell",
        meta: "2º Nível Abjuração | 1 ação | Toque | V, S, M (25po) | Permanente",
        text: "Tranca magicamente porta ou baú. CD para arrombar aumenta em 10."
    },
    {
        id: "spell-truque-corda", title: "Truque de Corda", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | Toque | V, S, M | 1 hora",
        text: "Corda sobe e abre espaço extradimensional invisível para 8 pessoas."
    },
    {
        id: "spell-ver-invisivel", title: "Ver o Invisível", category: "spell",
        meta: "2º Nível Adivinhação | 1 ação | Pessoal | V, S, M | 1 hora",
        text: "Vê criaturas invisíveis e no Plano Etéreo."
    },
    {
        id: "spell-vinculo-protetor", title: "Vínculo Protetor", category: "spell",
        meta: "2º Nível Abjuração | 1 ação | Toque | V, S, M (50po) | 1 hora",
        text: "Alvo ganha +1 CA, +1 Saves e Resistência a tudo. Você toma o mesmo dano que ele."
    },
    {
        id: "spell-visao-escuro", title: "Visão no Escuro", category: "spell",
        meta: "2º Nível Transmutação | 1 ação | Toque | V, S, M | 8 horas",
        text: "Alvo ganha visão no escuro de 18m."
    },
    {
        id: "spell-zona-verdade", title: "Zona da Verdade", category: "spell",
        meta: "2º Nível Encantamento | 1 ação | 18m | V, S | 10 min",
        text: "Esfera 4,5m. Carisma save ou não pode mentir deliberadamente. Você sabe se passou."
    },
    // =================================================================
    // --- MAGIAS: NÍVEL 3 ---
    // =================================================================
    {
        id: "spell-ampliar-plantas", title: "Ampliar Plantas", category: "spell",
        meta: "3º Nível Transmutação | 1 ação/8h | 45m | V, S | Instantânea",
        text: "Cria supercrescimento (terreno difícil, 4:1) ou fertiliza a terra por 1 ano (dobra colheita)."
    },
    {
        id: "spell-andar-na-agua", title: "Andar Na Água", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | 9m | V, S, M | 1 hora",
        text: "Até 10 criaturas podem andar sobre líquidos como se fossem chão sólido. Traz submersos à tona."
    },
    {
        id: "spell-animar-mortos", title: "Animar Mortos", category: "spell",
        meta: "3º Nível Necromancia | 1 min | 3m | V, S, M | Instantânea",
        text: "Cria zumbi ou esqueleto de um cadáver. Você comanda mentalmente (bônus). Controle dura 24h."
    },
    {
        id: "spell-arma-elemental", title: "Arma Elemental", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | Toque | V, S | Conc. 1 hora",
        text: "Arma não-mágica ganha +1 ataque e <strong>1d4</strong> dano elemental (ácido, frio, fogo, raio, trovão)."
    },
    {
        id: "spell-aura-vitalidade", title: "Aura de Vitalidade", category: "spell",
        meta: "3º Nível Evocação | 1 ação | Pessoal (9m) | V | Conc. 1 min",
        text: "Aura de 9m. Com ação bônus, cura <strong>2d6</strong> PV em uma criatura na aura."
    },
    {
        id: "spell-bola-fogo", title: "Bola de Fogo (Fireball)", category: "spell",
        meta: "3º Nível Evocação | 1 ação | 45m | V, S, M | Instantânea",
        text: "Esfera de 6m. Teste de Destreza: <strong>8d6 fogo</strong>. Sucesso: metade. Incendeia objetos."
    },
    {
        id: "spell-circulo-magico", title: "Círculo Mágico", category: "spell",
        meta: "3º Nível Abjuração | 1 min | 3m | V, S, M (100po) | 1 hora",
        text: "Cria cilindro que prende ou bloqueia Celestiais, Corruptores, Elementais, Fadas ou Mortos-vivos."
    },
    {
        id: "spell-clarividencia", title: "Clarividência", category: "spell",
        meta: "3º Nível Adivinhação | 10 min | 1,5km | V, S, M (100po) | Conc. 10 min",
        text: "Cria sensor invisível para ver ou ouvir em local familiar ou óbvio. Pode alternar sentido com ação."
    },
    {
        id: "spell-conjurar-animais", title: "Conjurar Animais", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | 18m | V, S | Conc. 1 hora",
        text: "Invoca fadas em forma de bestas: 1 (ND 2), 2 (ND 1), 4 (ND 1/2) ou 8 (ND 1/4)."
    },
    {
        id: "spell-conjurar-rajada", title: "Conjurar Rajada", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | Pessoal (Cone 18m) | V, S, M | Instantânea",
        text: "Dispara munição/arma que se multiplica. Teste de Destreza: <strong>3d8</strong> dano (tipo da arma)."
    },
    {
        id: "spell-contramagica", title: "Contramágica (Counterspell)", category: "spell",
        meta: "3º Nível Abjuração | Reação | 18m | S | Instantânea",
        text: "Interrompe magia. Automático se 3º nível ou menos. Se maior, teste de atributo (CD 10 + nível)."
    },
    {
        id: "spell-convocar-relampagos", title: "Convocar Relâmpagos", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | 36m | V, S | Conc. 10 min",
        text: "Cria nuvem. Ação para cair raio (1,5m raio). Teste de Destreza: <strong>3d10 elétrico</strong>."
    },
    {
        id: "spell-criar-alimentos", title: "Criar Alimentos", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | 9m | V, S | Instantânea",
        text: "Cria 25kg de comida e 100L de água (sustenta 15 humanoides ou 5 montarias por 24h)."
    },
    {
        id: "spell-destruicao-cegante", title: "Destruição Cegante", category: "spell",
        meta: "3º Nível Evocação | Bônus | Pessoal | V | Conc. 1 min",
        text: "Próximo ataque com arma: +<strong>3d8 radiante</strong>. Teste de Constituição ou fica Cego."
    },
    {
        id: "spell-dificultar-deteccao", title: "Dificultar Detecção", category: "spell",
        meta: "3º Nível Abjuração | 1 ação | Toque | V, S, M (25po) | 8 horas",
        text: "Esconde alvo de adivinhação e sensores mágicos."
    },
    {
        id: "spell-dissipar-magia", title: "Dissipar Magia", category: "spell",
        meta: "3º Nível Abjuração | 1 ação | 36m | V, S | Instantânea",
        text: "Encerra magias no alvo (3º nível ou menos automático; superior exige teste de atributo CD 10+nível)."
    },
    {
        id: "spell-enviar-mensagem", title: "Enviar Mensagem (Sending)", category: "spell",
        meta: "3º Nível Evocação | 1 ação | Ilimitado | V, S, M | 1 rodada",
        text: "Envia mensagem de 25 palavras a qualquer distância (até outros planos). Alvo pode responder."
    },
    {
        id: "spell-espiritos-guardioes", title: "Espíritos Guardiões", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | Pessoal (4,5m) | V, S, M | Conc. 10 min",
        text: "Aura de espíritos causa <strong>3d8 radiante/necrótico</strong> (Sabedoria save metade). Metade do deslocamento na área."
    },
    {
        id: "spell-falar-mortos", title: "Falar com Os Mortos", category: "spell",
        meta: "3º Nível Necromancia | 1 ação | 3m | V, S, M | 10 min",
        text: "Cadáver responde 5 perguntas (sabe o que sabia em vida). Não traz alma de volta."
    },
    {
        id: "spell-flecha-relampejante", title: "Flecha Relampejante", category: "spell",
        meta: "3º Nível Transmutação | Bônus | Pessoal | V, S | Conc. 1 min",
        text: "Ataque à distância vira raio: <strong>4d8 elétrico</strong> no alvo, <strong>2d8</strong> em criaturas a 3m (Dex save)."
    },
    {
        id: "spell-fome-hadar", title: "Fome de Hadar", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | 45m | V, S, M | Conc. 1 min",
        text: "Esfera de 6m de escuridão e frio. Início do turno: <strong>2d6 frio</strong>. Fim do turno: <strong>2d6 ácido</strong> (Dex save)."
    },
    {
        id: "spell-forjar-morte", title: "Forjar Morte", category: "spell",
        meta: "3º Nível Necromancia | 1 ação | Toque | V, S, M | 1 hora",
        text: "Alvo parece morto (catatônico, cego, 0 deslocamento). Resistência a tudo exceto psíquico."
    },
    {
        id: "spell-forma-gasosa", title: "Forma Gasosa", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | Toque | V, S, M | Conc. 1 hora",
        text: "Vira nuvem (voo 3m, resistência a não-mágico). Passa em frestas. Não ataca/fala."
    },
    {
        id: "spell-glifo-vigilancia", title: "Glifo de Vigilância", category: "spell",
        meta: "3º Nível Abjuração | 1 hora | Toque | V, S, M (200po) | Até dissipar",
        text: "Inscreve glifo explosivo (<strong>5d8</strong>) ou de magia. Ativa por gatilho definido."
    },
    {
        id: "spell-idiomas", title: "Idiomas (Tongues)", category: "spell",
        meta: "3º Nível Adivinhação | 1 ação | Toque | V, M | 1 hora",
        text: "Alvo entende qualquer língua e é compreendido por quem fala pelo menos um idioma."
    },
    {
        id: "spell-imagem-maior", title: "Imagem Maior", category: "spell",
        meta: "3º Nível Ilusão | 1 ação | 36m | V, S, M | Conc. 10 min",
        text: "Cria ilusão completa (visual, som, cheiro, temperatura) em cubo de 6m. Pode mover."
    },
    {
        id: "spell-lentidao", title: "Lentidão (Slow)", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | 36m | V, S, M | Conc. 1 min",
        text: "Cubo de 12m, até 6 alvos. Sabedoria save. Metade deslocamento, -2 CA, sem reações, 1 ação OU bônus apenas."
    },
    {
        id: "spell-luz-dia", title: "Luz do Dia", category: "spell",
        meta: "3º Nível Evocação | 1 ação | 18m | V, S | 1 hora",
        text: "Esfera de 18m de luz plena + 18m penumbra. Dissipa escuridão mágica de 3º nível ou menos."
    },
    {
        id: "spell-manto-cruzado", title: "Manto do Cruzado", category: "spell",
        meta: "3º Nível Evocação | 1 ação | Pessoal (9m) | V | Conc. 1 min",
        text: "Aura de 9m. Aliados causam +<strong>1d4 radiante</strong> em ataques com arma."
    },
    {
        id: "spell-medo", title: "Medo", category: "spell",
        meta: "3º Nível Ilusão | 1 ação | Pessoal (Cone 9m) | V, S, M | Conc. 1 min",
        text: "Teste de Sabedoria. Falha: Amedrontado, larga itens e foge. Só repete teste se não te ver."
    },
    {
        id: "spell-mesclar-rochas", title: "Mesclar-se Às Rochas", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | Toque | V, S | 8 horas",
        text: "Entra em pedra grande. Invisível e indetectável. Ouve com desvantagem."
    },
    {
        id: "spell-montaria-fantasmagorica", title: "Montaria Fantasmagórica", category: "spell",
        meta: "3º Nível Ilusão | 1 min | 9m | V, S | 1 hora",
        text: "Cria criatura quase real (CA 10, PV, 30m deslocamento). Some se sofrer dano."
    },
    {
        id: "spell-muralha-vento", title: "Muralha de Vento", category: "spell",
        meta: "3º Nível Evocação | 1 ação | 36m | V, S, M | Conc. 1 min",
        text: "Parede de vento (15m x 4,5m). Bloqueia projéteis pequenos e gás. Dano: <strong>3d8 concussão</strong> (Força save)."
    },
    {
        id: "spell-nevasca", title: "Nevasca (Sleet Storm)", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | 45m | V, S, M | Conc. 1 min",
        text: "Cilindro 12m raio. Escuridão densa, terreno difícil. Dex save ou cai. Con save ou perde concentração."
    },
    {
        id: "spell-nevoa-fetida", title: "Névoa Fétida", category: "spell",
        meta: "3º Nível Conjuração | 1 ação | 27m | V, S, M | Conc. 1 min",
        text: "Esfera de 6m. Escuridão densa. Con save ou perde ação (vomitando)."
    },
    {
        id: "spell-padrao-hipnotico", title: "Padrão Hipnótico", category: "spell",
        meta: "3º Nível Ilusão | 1 ação | 36m | S, M | Conc. 1 min",
        text: "Cubo de 9m. Teste de Sabedoria. Falha: Enfeitiçado, incapacitado e deslocamento 0."
    },
    {
        id: "spell-palavra-massa", title: "Palavra Curativa Em Massa", category: "spell",
        meta: "3º Nível Evocação | Bônus | 18m | V | Instantânea",
        text: "Cura 6 criaturas em <strong>1d4 + mod</strong>. Alcance à distância."
    },
    {
        id: "spell-pequena-cabana", title: "Pequena Cabana de Leomund", category: "spell",
        meta: "3º Nível Evocação | 1 min | Pessoal | V, S, M | 8 horas",
        text: "Domo impenetrável e opaco por fora. Acomoda 9 criaturas. Clima confortável dentro."
    },
    {
        id: "spell-piscar", title: "Piscar (Blink)", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | Pessoal | V, S | 1 min",
        text: "Final do turno: role d20. Se 11+, vai para Plano Etéreo (some). Volta no início do próximo turno."
    },
    {
        id: "spell-protecao-energia", title: "Proteção contra Energia", category: "spell",
        meta: "3º Nível Abjuração | 1 ação | Toque | V, S | Conc. 1 hora",
        text: "Concede resistência a Ácido, Frio, Fogo, Elétrico ou Trovão."
    },
    {
        id: "spell-relampago", title: "Relâmpago (Lightning Bolt)", category: "spell",
        meta: "3º Nível Evocação | 1 ação | Pessoal (Linha 30m) | V, S, M | Instantânea",
        text: "Linha de 30m. Teste de Destreza: <strong>8d6 elétrico</strong>. Sucesso: metade."
    },
    {
        id: "spell-remover-maldicao", title: "Remover Maldição", category: "spell",
        meta: "3º Nível Abjuração | 1 ação | Toque | V, S | Instantânea",
        text: "Remove todas as maldições de uma criatura ou objeto. Rompe sintonia com item amaldiçoado."
    },
    {
        id: "spell-respirar-agua", title: "Respirar Na Água", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | 9m | V, S, M | 24 horas",
        text: "Até 10 criaturas podem respirar embaixo d'água."
    },
    {
        id: "spell-revivificar", title: "Revivificar", category: "spell",
        meta: "3º Nível Necromancia | 1 ação | Toque | V, S, M (300po) | Instantânea",
        text: "Traz de volta criatura morta no último minuto com 1 PV."
    },
    {
        id: "spell-rogar-maldicao", title: "Rogar Maldição", category: "spell",
        meta: "3º Nível Necromancia | 1 ação | Toque | V, S | Conc. 1 min",
        text: "Sabedoria save. Falha: desvantagem em atributo, ou em ataque contra você, ou perde ação, ou toma +<strong>1d8</strong> dano."
    },
    {
        id: "spell-sinal-esperanca", title: "Sinal de Esperança", category: "spell",
        meta: "3º Nível Abjuração | 1 ação | 9m | V, S | Conc. 1 min",
        text: "Aliados ganham vantagem em Sabedoria/Morte saves e cura máxima."
    },
    {
        id: "spell-toque-vampirico", title: "Toque Vampírico", category: "spell",
        meta: "3º Nível Necromancia | 1 ação | Pessoal | V, S | Conc. 1 min",
        text: "Ataque corpo-a-corpo com magia: <strong>3d6 necrótico</strong>. Cura metade do dano."
    },
    {
        id: "spell-velocidade", title: "Velocidade (Haste)", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Dobro de deslocamento, +2 CA, Vantagem em Destreza, 1 ação extra (limitada). Fadiga ao acabar."
    },
    {
        id: "spell-voo", title: "Voo (Fly)", category: "spell",
        meta: "3º Nível Transmutação | 1 ação | Toque | V, S, M | Conc. 10 min",
        text: "Alvo ganha deslocamento de voo de 18m."
    },
    // =================================================================
    // --- MAGIAS: NÍVEL 4 ---
    // =================================================================
    {
        id: "spell-adivinhacao", title: "Adivinhação", category: "spell",
        meta: "4º Nível Adivinhação | 1 ação | Pessoal | V, S, M (25po) | Instantânea",
        text: "Faz uma pergunta a uma entidade divina sobre um evento em até 7 dias. Resposta curta/enigmática."
    },
    {
        id: "spell-arca-leomund", title: "Arca Secreta de Leomund", category: "spell",
        meta: "4º Nível Conjuração | 1 ação | Toque | V, S, M (5050po) | Instantânea",
        text: "Esconde um baú no Plano Etéreo. Pode revocar a qualquer momento. Chance de perda após 60 dias."
    },
    {
        id: "spell-assassino-fantasmagorico", title: "Assassino Fantasmagórico", category: "spell",
        meta: "4º Nível Ilusão | 1 ação | 36m | V, S | Conc. 1 min",
        text: "Cria pesadelo na mente do alvo. Sabedoria save. Falha: Amedrontado. Final do turno (se falhar de novo): <strong>4d10 psíquico</strong>."
    },
    {
        id: "spell-aura-pureza", title: "Aura de Pureza", category: "spell",
        meta: "4º Nível Abjuração | 1 ação | Pessoal (9m) | V | Conc. 10 min",
        text: "Imunidade a doenças, resistência a veneno e vantagem contra condições mentais para aliados a 9m."
    },
    {
        id: "spell-aura-vida", title: "Aura de Vida", category: "spell",
        meta: "4º Nível Abjuração | 1 ação | Pessoal (9m) | V | Conc. 10 min",
        text: "Resistência a necrótico. Aliados com 0 PV recuperam 1 PV no início do turno deles."
    },
    {
        id: "spell-banimento", title: "Banimento (Banishment)", category: "spell",
        meta: "4º Nível Abjuração | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "Carisma save. Nativo: vai para semiplano (incapacitado). Extraplanar: volta ao plano natal (permanente se durar 1 min)."
    },
    {
        id: "spell-cao-fiel", title: "Cão Fiel de Mordenkainen", category: "spell",
        meta: "4º Nível Conjuração | 1 ação | 9m | V, S, M | 8 horas",
        text: "Cão invisível guarda área. Late se intrusos se aproximarem. Morde: <strong>4d8 perfurante</strong>."
    },
    {
        id: "spell-compulsao", title: "Compulsão", category: "spell",
        meta: "4º Nível Encantamento | 1 ação | 9m | V, S | Conc. 1 min",
        text: "Criaturas falham em Sabedoria save e são forçadas a se mover em uma direção escolhida por você."
    },
    {
        id: "spell-confusao", title: "Confusão", category: "spell",
        meta: "4º Nível Encantamento | 1 ação | 27m | V, S, M | Conc. 1 min",
        text: "Esfera de 3m. Sabedoria save. Falha: rola d10 para comportamento aleatório (atacar perto, fugir, nada, etc)."
    },
    {
        id: "spell-conjurar-elementais-menores", title: "Conjurar Elementais Menores", category: "spell",
        meta: "4º Nível Conjuração | 1 min | 27m | V, S | Conc. 1 hora",
        text: "Invoca elementais: 1 (ND 2), 2 (ND 1), 4 (ND 1/2) ou 8 (ND 1/4). Obedecem comandos."
    },
    {
        id: "spell-conjurar-seres-floresta", title: "Conjurar Seres da Floresta", category: "spell",
        meta: "4º Nível Conjuração | 1 ação | 18m | V, S, M | Conc. 1 hora",
        text: "Invoca fadas: 1 (ND 2), 2 (ND 1), 4 (ND 1/2) ou 8 (ND 1/4). Obedecem comandos."
    },
    {
        id: "spell-controlar-agua", title: "Controlar a Água", category: "spell",
        meta: "4º Nível Transmutação | 1 ação | 90m | V, S, M | Conc. 10 min",
        text: "Controla cubo de 30m: Inundação, Dividir, Redirecionar Fluxo ou Redemoinho (dano e presas)."
    },
    {
        id: "spell-destruicao-estonteante", title: "Destruição Estonteante", category: "spell",
        meta: "4º Nível Evocação | Bônus | Pessoal | V | Conc. 1 min",
        text: "Próximo ataque: +<strong>4d6 psíquico</strong>. Sabedoria save ou desvantagem em ataques/testes e sem reação."
    },
    {
        id: "spell-dominar-besta", title: "Dominar Besta", category: "spell",
        meta: "4º Nível Encantamento | 1 ação | 18m | V, S | Conc. 1 min",
        text: "Besta faz Sabedoria save (vantagem se em combate). Falha: obedece comandos mentais."
    },
    {
        id: "spell-escudo-fogo", title: "Escudo de Fogo", category: "spell",
        meta: "4º Nível Evocação | 1 ação | Pessoal | V, S, M | 10 min",
        text: "Ganha resistência (Frio ou Fogo). Quem te acerta no corpo-a-corpo sofre <strong>2d8</strong> (Fogo ou Frio)."
    },
    {
        id: "spell-esfera-resiliente", title: "Esfera Resiliente de Otiluke", category: "spell",
        meta: "4º Nível Evocação | 1 ação | 9m | V, S, M | Conc. 1 min",
        text: "Destreza save ou fica preso em esfera indestrutível. Nada entra ou sai. Pode rolar."
    },
    {
        id: "spell-fabricar", title: "Fabricar", category: "spell",
        meta: "4º Nível Transmutação | 10 min | 36m | V, S | Instantânea",
        text: "Converte matéria-prima em produtos manufaturados (ex: árvores em ponte). Requer ferramentas para itens complexos."
    },
    {
        id: "spell-guardiao-fe", title: "Guardião da Fé", category: "spell",
        meta: "4º Nível Conjuração | 1 ação | 9m | V | 8 horas",
        text: "Guardião imóvel. Inimigo a 3m faz Destreza save: <strong>20 radiante</strong> (ou metade). Some após causar 60 dano."
    },
    {
        id: "spell-inseto-gigante", title: "Inseto Gigante", category: "spell",
        meta: "4º Nível Transmutação | 1 ação | 9m | V, S | Conc. 10 min",
        text: "Transforma insetos normais em gigantes (Centopeias, Aranhas, Vespas, Escorpiões) que obedecem você."
    },
    {
        id: "spell-invisibilidade-maior", title: "Invisibilidade Maior", category: "spell",
        meta: "4º Nível Ilusão | 1 ação | Toque | V, S | Conc. 1 min",
        text: "Torna criatura invisível. A invisibilidade NÃO termina se atacar ou conjurar magia."
    },
    {
        id: "spell-localizar-criatura", title: "Localizar Criatura", category: "spell",
        meta: "4º Nível Adivinhação | 1 ação | Pessoal | V, S, M | Conc. 1 hora",
        text: "Sente direção de criatura específica ou tipo a até 300m. Água corrente bloqueia."
    },
    {
        id: "spell-malogro", title: "Malogro (Blight)", category: "spell",
        meta: "4º Nível Necromancia | 1 ação | 9m | V, S | Instantânea",
        text: "Constituição save. Falha: <strong>8d8 necrótico</strong> (metade se passar). Dano máximo em plantas/elementais de planta."
    },
    {
        id: "spell-metamorfose", title: "Metamorfose (Polymorph)", category: "spell",
        meta: "4º Nível Transmutação | 1 ação | 18m | V, S, M | Conc. 1 hora",
        text: "Transforma criatura em Besta (ND igual ou menor). Ganha os PV da forma. Retorna se cair a 0 PV."
    },
    {
        id: "spell-moldar-rochas", title: "Moldar Rochas", category: "spell",
        meta: "4º Nível Transmutação | 1 ação | Toque | V, S, M | Instantânea",
        text: "Modela pedra (até 1,5m cúbico). Pode criar passagens, armas, baús, etc."
    },
    {
        id: "spell-movimentacao-livre", title: "Movimentação Livre", category: "spell",
        meta: "4º Nível Abjuração | 1 ação | Toque | V, S, M | 1 hora",
        text: "Alvo ignora terreno difícil, magias de redução de mov, paralisia e impedimento. Não sofre penalidade na água."
    },
    {
        id: "spell-muralha-fogo", title: "Muralha de Fogo", category: "spell",
        meta: "4º Nível Evocação | 1 ação | 36m | V, S, M | Conc. 1 min",
        text: "Parede ou anel de fogo. Causa <strong>5d8 fogo</strong> ao conjurar e a quem terminar turno perto ou atravessar."
    },
    {
        id: "spell-olho-arcano", title: "Olho Arcano", category: "spell",
        meta: "4º Nível Adivinhação | 1 ação | 9m | V, S, M | Conc. 1 hora",
        text: "Cria olho invisível flutuante (visão no escuro). Você recebe visualmente o que ele vê. Move 9m/ação."
    },
    {
        id: "spell-pele-pedra", title: "Pele de Pedra", category: "spell",
        meta: "4º Nível Abjuração | 1 ação | Toque | V, S, M (100po) | Conc. 1 hora",
        text: "Concede resistência a concussão, cortante e perfurante não-mágicos."
    },
    {
        id: "spell-porta-dimensional", title: "Porta Dimensional", category: "spell",
        meta: "4º Nível Conjuração | 1 ação | 150m | V | Instantânea",
        text: "Teletransporta você e uma criatura voluntária para local visualizado ou descrito. Se ocupado: <strong>4d6 força</strong>."
    },
    {
        id: "spell-protecao-morte", title: "Proteção contra a Morte", category: "spell",
        meta: "4º Nível Abjuração | 1 ação | Toque | V, S | 8 horas",
        text: "Se alvo cair a 0 PV, fica com 1 PV (uma vez). Nega efeitos de morte instantânea."
    },
    {
        id: "spell-santuario-mordenkainen", title: "Santuário Particular", category: "spell",
        meta: "4º Nível Abjuração | 10 min | 36m | V, S, M | 24 horas",
        text: "Protege área de até 30m: impede som, visão, adivinhação, teletransporte e viagem planar."
    },
    {
        id: "spell-tempestade-gelo", title: "Tempestade de Gelo", category: "spell",
        meta: "4º Nível Evocação | 1 ação | 90m | V, S, M | Instantânea",
        text: "Cilindro de 6m raio. Destreza save: <strong>2d8 concussão</strong> + <strong>4d6 frio</strong>. Terreno difícil."
    },
    {
        id: "spell-tentaculos-evard", title: "Tentáculos Negros de Evard", category: "spell",
        meta: "4º Nível Conjuração | 1 ação | 27m | V, S, M | Conc. 1 min",
        text: "Área de 6m difícil. Destreza save ou <strong>3d6 concussão</strong> e impedido. Dano no início do turno."
    },
    {
        id: "spell-terreno-alucinogeno", title: "Terreno Alucinógeno", category: "spell",
        meta: "4º Nível Ilusão | 10 min | 90m | V, S, M | 24 horas",
        text: "Muda aparência, som e cheiro de terreno natural. Tato permanece igual. Inteligência para perceber."
    },
    {
        id: "spell-vinha-esmagadora", title: "Vinha Esmagadora", category: "spell",
        meta: "4º Nível Conjuração | Bônus | 9m | V, S | Conc. 1 min",
        text: "Cria vinha. Destreza save ou puxa criatura 6m. Pode repetir puxão com ação bônus."
    },
    // =================================================================
    // --- MAGIAS: NÍVEL 5 ---
    // =================================================================
    {
        id: "spell-aljava-veloz", title: "Aljava Veloz", category: "spell",
        meta: "5º Nível Transmutação | Bônus | Toque | V, S, M | Conc. 1 min",
        text: "Aljava produz munição infinita. Ação bônus: dois ataques à distância extras com a arma."
    },
    {
        id: "spell-ancora-planar", title: "Âncora Planar", category: "spell",
        meta: "5º Nível Abjuração | 1 hora | 18m | V, S, M (1000po) | 24 horas",
        text: "Obriga extraplanar (Celestial, Elemental, Fada, Corruptor) a servir. Carisma save nega. Duração aumenta com nível."
    },
    {
        id: "spell-animar-objetos", title: "Animar Objetos", category: "spell",
        meta: "5º Nível Transmutação | 1 ação | 36m | V, S | Conc. 1 min",
        text: "Anima até 10 objetos. Eles atacam com bônus +8 a +4 e dano <strong>1d4+4</strong> a <strong>2d12+4</strong> dependendo do tamanho."
    },
    {
        id: "spell-caminhar-arvores", title: "Caminhar Em Árvores", category: "spell",
        meta: "5º Nível Conjuração | 1 ação | Pessoal | V, S | Conc. 1 min",
        text: "Entra em árvore e sai em outra do mesmo tipo a até 150m. Uma vez por turno."
    },
    {
        id: "spell-circulo-poder", title: "Círculo de Poder", category: "spell",
        meta: "5º Nível Abjuração | 1 ação | Pessoal (9m) | V | Conc. 10 min",
        text: "Aura de 9m. Aliados têm Vantagem em saves contra magia e evasão (sucesso em save de dano = 0 dano)."
    },
    {
        id: "spell-circulo-teletransporte", title: "Círculo de Teletransporte", category: "spell",
        meta: "5º Nível Conjuração | 1 min | 3m | V, M (50po) | 1 rodada",
        text: "Cria portal para um círculo permanente conhecido no mesmo plano."
    },
    {
        id: "spell-coluna-chamas", title: "Coluna de Chamas", category: "spell",
        meta: "5º Nível Evocação | 1 ação | 18m | V, S, M | Instantânea",
        text: "Cilindro (3m raio x 12m altura). Destreza save: <strong>4d6 fogo + 4d6 radiante</strong> (ou metade)."
    },
    {
        id: "spell-comunhao", title: "Comunhão", category: "spell",
        meta: "5º Nível Adivinhação | 1 min | Pessoal | V, S, M | 1 min",
        text: "Faz 3 perguntas 'Sim/Não' à sua divindade."
    },
    {
        id: "spell-comunhao-natureza", title: "Comunhão com a Natureza", category: "spell",
        meta: "5º Nível Adivinhação | 1 min | Pessoal | V, S | Instantânea",
        text: "Sente terreno num raio de 4,5km (ar livre) ou 150m (caverna). Revela águas, monstros, cidades, etc."
    },
    {
        id: "spell-cone-frio", title: "Cone de Frio", category: "spell",
        meta: "5º Nível Evocação | 1 ação | Pessoal (Cone 18m) | V, S, M | Instantânea",
        text: "Cone de 18m. Constituição save. Falha: <strong>8d8 frio</strong>. Sucesso: metade."
    },
    {
        id: "spell-conhecimento-lendario", title: "Conhecimento Lendário", category: "spell",
        meta: "5º Nível Adivinhação | 10 min | Pessoal | V, S, M (250po) | Instantânea",
        text: "Revela lendas e folclore sobre pessoa, lugar ou objeto importante."
    },
    {
        id: "spell-conjurar-elemental", title: "Conjurar Elemental", category: "spell",
        meta: "5º Nível Conjuração | 1 min | 27m | V, S, M | Conc. 1 hora",
        text: "Invoca elemental (ND 5) de ar, terra, fogo ou água. Se perder concentração, ele fica hostil."
    },
    {
        id: "spell-conjurar-saraivada", title: "Conjurar Saraivada", category: "spell",
        meta: "5º Nível Conjuração | 1 ação | 45m | V, S, M | Instantânea",
        text: "Cilindro de 12m raio e 6m altura. Destreza save: <strong>8d8</strong> dano (tipo da arma/munição)."
    },
    {
        id: "spell-consagrar", title: "Consagrar", category: "spell",
        meta: "5º Nível Evocação | 24 horas | Toque | V, S, M (1000po) | Permanente",
        text: "Área de 18m. Bloqueia extraplanares/mortos-vivos. Adiciona efeito (Medo, Silêncio, Proteção, etc)."
    },
    {
        id: "spell-contato-extraplanar", title: "Contato Extraplanar", category: "spell",
        meta: "5º Nível Adivinhação | 1 min | Pessoal | V | 1 min",
        text: "Faz 5 perguntas a entidade. Teste de Inteligência CD 15 ou fica insano e sofre <strong>6d6 psíquico</strong>."
    },
    {
        id: "spell-criacao", title: "Criação", category: "spell",
        meta: "5º Nível Ilusão | 1 min | 9m | V, S, M | Especial",
        text: "Cria objeto de matéria vegetal ou mineral (cubo 1,5m). Duração varia pelo material (Adamante: 1 min, Vegetal: 1 dia)."
    },
    {
        id: "spell-criar-passagem", title: "Criar Passagem", category: "spell",
        meta: "5º Nível Transmutação | 1 ação | 9m | V, S, M | 1 hora",
        text: "Abre túnel de 1,5m x 2,1m x 6m em madeira, gesso ou pedra."
    },
    {
        id: "spell-cupula-antivida", title: "Cúpula Antivida", category: "spell",
        meta: "5º Nível Abjuração | 1 ação | Pessoal (3m) | V, S | Conc. 1 hora",
        text: "Barreira móvel de 3m. Impede aproximação de criaturas vivas. Termina se você forçar contato."
    },
    {
        id: "spell-curar-massa", title: "Curar Ferimentos Em Massa", category: "spell",
        meta: "5º Nível Evocação | 1 ação | 18m | V, S | Instantânea",
        text: "Esfera de 9m. Cura 6 criaturas em <strong>3d8 + mod</strong>. Não afeta mortos-vivos."
    },
    {
        id: "spell-despertar", title: "Despertar", category: "spell",
        meta: "5º Nível Transmutação | 8 horas | Toque | V, S, M (1000po) | Instantânea",
        text: "Dá inteligência 10 a uma besta ou planta. Ela fica enfeitiçada por 30 dias."
    },
    {
        id: "spell-despistar", title: "Despistar", category: "spell",
        meta: "5º Nível Ilusão | 1 ação | Pessoal | S | Conc. 1 hora",
        text: "Você fica invisível e cria um duplo ilusório que você controla e vê/ouve por ele."
    },
    {
        id: "spell-destruicao-banidora", title: "Destruição Banidora", category: "spell",
        meta: "5º Nível Abjuração | Bônus | Pessoal | V | Conc. 1 min",
        text: "Próximo ataque: +<strong>5d10 energia</strong>. Se deixar alvo com 50 PV ou menos, bane ele."
    },
    {
        id: "spell-dissipar-bem-mal", title: "Dissipar o Bem e Mal", category: "spell",
        meta: "5º Nível Abjuração | 1 ação | Pessoal | V, S, M | Conc. 1 min",
        text: "Desvantagem para extraplanares te atacarem. Pode dissipar possessão/encantamento ou banir criatura (toque)."
    },
    {
        id: "spell-dominar-pessoa", title: "Dominar Pessoa", category: "spell",
        meta: "5º Nível Encantamento | 1 ação | 18m | V, S | Conc. 1 min",
        text: "Humanoide faz Sabedoria save. Falha: obedece comandos mentais. Dano permite novo save."
    },
    {
        id: "spell-imobilizar-monstro", title: "Imobilizar Monstro", category: "spell",
        meta: "5º Nível Encantamento | 1 ação | 27m | V, S, M | Conc. 1 min",
        text: "Qualquer criatura (exceto morto-vivo). Sabedoria save ou Paralisado. Novo save no fim do turno."
    },
    {
        id: "spell-ligacao-rarry", title: "Ligação Telepática de Rary", category: "spell",
        meta: "5º Nível Adivinhação | 1 ação | 9m | V, S, M | 1 hora",
        text: "Cria elo telepático entre até 8 criaturas. Comunicação a qualquer distância (mesmo plano)."
    },
    {
        id: "spell-mao-bigby", title: "Mão de Bigby", category: "spell",
        meta: "5º Nível Evocação | 1 ação | 36m | V, S, M | Conc. 1 min",
        text: "Mão gigante. Esmagar (2d6+mod), Empurrar, Interpor (cobertura) ou Socar (<strong>4d8 energia</strong>)."
    },
    {
        id: "spell-missao", title: "Missão (Geas)", category: "spell",
        meta: "5º Nível Encantamento | 1 min | 18m | V | 30 dias",
        text: "Impõe ordem. Se desobedecer: <strong>5d10 psíquico</strong> (1x/dia). Sabedoria save nega."
    },
    {
        id: "spell-modificar-memoria", title: "Modificar Memória", category: "spell",
        meta: "5º Nível Encantamento | 1 ação | 9m | V, S | Conc. 1 min",
        text: "Altera ou apaga até 10 minutos de memória das últimas 24h. Sabedoria save."
    },
    {
        id: "spell-muralha-energia", title: "Muralha de Energia", category: "spell",
        meta: "5º Nível Evocação | 1 ação | 36m | V, S, M | Conc. 10 min",
        text: "Cria barreira invisível e indestrutível. Nada passa. Pode ser esfera ou painéis."
    },
    {
        id: "spell-muralha-pedra", title: "Muralha de Pedra", category: "spell",
        meta: "5º Nível Conjuração | 1 ação | 36m | V, S, M | Conc. 10 min",
        text: "Cria parede de pedra física (15cm espessura). Se concentrar 10 min, vira permanente."
    },
    {
        id: "spell-nevoa-mortal", title: "Névoa Mortal (Cloudkill)", category: "spell",
        meta: "5º Nível Conjuração | 1 ação | 36m | V, S | Conc. 10 min",
        text: "Esfera de 6m. Constituição save. Falha: <strong>5d8 veneno</strong>. Sucesso: metade. Move 3m/turno."
    },
    {
        id: "spell-onda-destrutiva", title: "Onda Destrutiva", category: "spell",
        meta: "5º Nível Evocação | 1 ação | Pessoal (9m) | V | Instantânea",
        text: "Constituição save. Falha: <strong>5d6 trovejante + 5d6 radiante/necrótico</strong> e derrubado."
    },
    {
        id: "spell-praga", title: "Praga", category: "spell",
        meta: "5º Nível Necromancia | 1 ação | Toque | V, S | 7 dias",
        text: "Ataque corpo-a-corpo. Inflige doença (ex: cegueira, vulnerabilidade). Requer 3 falhas de Con save."
    },
    {
        id: "spell-praga-insetos", title: "Praga de Insetos", category: "spell",
        meta: "5º Nível Conjuração | 1 ação | 90m | V, S, M | Conc. 10 min",
        text: "Esfera de 6m. Terreno difícil, visão obscurecida. Constituição save: <strong>4d10 perfurante</strong>."
    },
    {
        id: "spell-reencarnacao", title: "Reencarnação", category: "spell",
        meta: "5º Nível Transmutação | 1 hora | Toque | V, S, M (1000po) | Instantânea",
        text: "Traz morto de volta em um corpo novo de raça aleatória."
    },
    {
        id: "spell-restauracao-maior", title: "Restauração Maior", category: "spell",
        meta: "5º Nível Abjuração | 1 ação | Toque | V, S, M (100po) | Instantânea",
        text: "Remove exaustão, charme, petrificação, maldição, redução de atributo ou de PV."
    },
    {
        id: "spell-reviver-mortos", title: "Reviver Os Mortos (Raise Dead)", category: "spell",
        meta: "5º Nível Necromancia | 1 hora | Toque | V, S, M (500po) | Instantânea",
        text: "Ressuscita morto há até 10 dias. Cura venenos não-mágicos. Penalidade -4 nas jogadas por 4 dias."
    },
    {
        id: "spell-similaridade", title: "Similaridade", category: "spell",
        meta: "5º Nível Ilusão | 1 ação | 9m | V, S | 8 horas",
        text: "Disfarça aparência de qualquer número de criaturas. Sem concentração."
    },
    {
        id: "spell-sonho", title: "Sonho", category: "spell",
        meta: "5º Nível Ilusão | 1 min | Especial | V, S, M | 8 horas",
        text: "Invade sonho de alvo. Pode conversar ou causar pesadelo (<strong>3d6 psíquico</strong> e nega descanso)."
    },
    {
        id: "spell-telecinesia", title: "Telecinésia", category: "spell",
        meta: "5º Nível Transmutação | 1 ação | 18m | V, S | Conc. 10 min",
        text: "Move criatura (teste resistido de atributo) ou objeto (até 500kg). Mantém preso."
    },
    {
        id: "spell-videncia", title: "Vidência (Scrying)", category: "spell",
        meta: "5º Nível Adivinhação | 10 min | Pessoal | V, S, M (1000po) | Conc. 10 min",
        text: "Espiona alvo no mesmo plano. Sabedoria save (modificadores aplicam)."
    },

    // =================================================================
    // --- MAGIAS: NÍVEL 6 ---
    // =================================================================
    {
        id: "spell-aliado-planar", title: "Aliado Planar", category: "spell",
        meta: "6º Nível Conjuração | 10 min | 18m | V, S | Instantânea",
        text: "Solicita ajuda de entidade divina (Celestial, Elemental, etc). Exige pagamento por serviço."
    },
    {
        id: "spell-ataque-visual", title: "Ataque Visual (Eyebite)", category: "spell",
        meta: "6º Nível Necromancia | 1 ação | Pessoal | V, S | Conc. 1 min",
        text: "Olhar causa efeito a cada turno: Adormecer, Apavorar ou Adoecer (Sabedoria save)."
    },
    {
        id: "spell-banquete-herois", title: "Banquete dos Heróis", category: "spell",
        meta: "6º Nível Conjuração | 10 min | 9m | V, S, M (1000po) | Instantânea",
        text: "12 criaturas ganham imune a veneno/medo, vantagem em Wis saves e <strong>+2d10 PV</strong> máx por 24h."
    },
    {
        id: "spell-barreira-laminas", title: "Barreira de Lâminas", category: "spell",
        meta: "6º Nível Evocação | 1 ação | 24m | V, S | Conc. 10 min",
        text: "Muralha de lâminas. Cobertura 3/4. Destreza save: <strong>6d10 cortante</strong> (ou metade)."
    },
    {
        id: "spell-caminhar-vento", title: "Caminhar No Vento", category: "spell",
        meta: "6º Nível Transmutação | 1 min | 9m | V, S, M | 8 horas",
        text: "Transforma você e até 10 aliados em nuvens (voo 90m). 1 minuto para voltar ao normal."
    },
    {
        id: "spell-carne-pedra", title: "Carne Para Pedra", category: "spell",
        meta: "6º Nível Transmutação | 1 ação | 18m | V, S, M | Conc. 1 min",
        text: "Constituição save. Falha: começa a petrificar. 3 falhas = Petrificado (permanente)."
    },
    {
        id: "spell-circulo-morte", title: "Círculo da Morte", category: "spell",
        meta: "6º Nível Necromancia | 1 ação | 45m | V, S, M (500po) | Instantânea",
        text: "Esfera de 18m. Constituição save. Falha: <strong>8d6 necrótico</strong>. Sucesso: metade."
    },
    {
        id: "spell-conjurar-fada", title: "Conjurar Fada", category: "spell",
        meta: "6º Nível Conjuração | 1 min | 27m | V, S | Conc. 1 hora",
        text: "Invoca fada (ND 6). Se perder concentração, ela fica hostil."
    },
    {
        id: "spell-contingencia", title: "Contingência", category: "spell",
        meta: "6º Nível Evocação | 10 min | Pessoal | V, S, M (1500po) | 10 dias",
        text: "Prepara uma magia de até 5º nível para disparar automaticamente em você sob condição específica."
    },
    {
        id: "spell-corrente-relampagos", title: "Corrente de Relâmpagos", category: "spell",
        meta: "6º Nível Evocação | 1 ação | 45m | V, S, M | Instantânea",
        text: "Alvo e mais 3 num raio de 9m. Destreza save: <strong>10d8 elétrico</strong> (ou metade)."
    },
    {
        id: "spell-criar-mortos-vivos", title: "Criar Mortos-Vivos", category: "spell",
        meta: "6º Nível Necromancia | 1 min | 3m | V, S, M (150po/corpo) | Instantânea",
        text: "Cria 3 Carniçais. Controle dura 24h. Níveis superiores criam Lívidos ou Múmias."
    },
    {
        id: "spell-cura-completa", title: "Cura Completa (Heal)", category: "spell",
        meta: "6º Nível Evocação | 1 ação | 18m | V, S | Instantânea",
        text: "Recupera <strong>70 PV</strong> e remove cegueira, surdez e doenças."
    },
    {
        id: "spell-danca-otto", title: "Dança Irresistível de Otto", category: "spell",
        meta: "6º Nível Encantamento | 1 ação | 9m | V | Conc. 1 min",
        text: "Alvo começa a dançar (sem save inicial). Desvantagem em ataques/Dex saves. Ação para fazer Wis save."
    },
    {
        id: "spell-desintegrar", title: "Desintegrar", category: "spell",
        meta: "6º Nível Transmutação | 1 ação | 18m | V, S, M | Instantânea",
        text: "Destreza save. Falha: <strong>10d6 + 40 energia</strong>. Se cair a 0 PV, vira pó. Destrói criações de energia."
    },
    {
        id: "spell-doenca-plena", title: "Doença Plena (Harm)", category: "spell",
        meta: "6º Nível Necromancia | 1 ação | 18m | V, S | Instantânea",
        text: "Constituição save. Falha: <strong>14d6 necrótico</strong> e reduz PV máximo. Sucesso: metade."
    },
    {
        id: "spell-encontrar-caminho", title: "Encontrar o Caminho", category: "spell",
        meta: "6º Nível Adivinhação | 1 min | Pessoal | V, S, M (100po) | Conc. 1 dia",
        text: "Sabe a rota mais direta para um local fixo e conhecido no mesmo plano."
    },
    {
        id: "spell-esfera-congelante", title: "Esfera Congelante de Otiluke", category: "spell",
        meta: "6º Nível Evocação | 1 ação | 90m | V, S, M | Instantânea",
        text: "Explosão de 18m raio. Constituição save: <strong>10d6 frio</strong>. Congela água."
    },
    {
        id: "spell-globo-invulnerabilidade", title: "Globo de Invulnerabilidade", category: "spell",
        meta: "6º Nível Abjuração | 1 ação | Pessoal (3m) | V, S, M | Conc. 1 min",
        text: "Bloqueia qualquer magia de 5º nível ou inferior de entrar na área."
    },
    {
        id: "spell-ilusao-programada", title: "Ilusão Programada", category: "spell",
        meta: "6º Nível Ilusão | 1 ação | 36m | V, S, M (25po) | Permanente",
        text: "Cria ilusão que ativa sob gatilho específico. Dura 5 minutos quando ativa."
    },
    {
        id: "spell-invocacao-drawmij", title: "Invocação Instantânea de Drawmij", category: "spell",
        meta: "6º Nível Conjuração | 1 min | Toque | V, S, M (1000po) | Até dissipar",
        text: "Marca item. Quebre a safira para teleportar o item para sua mão de qualquer lugar."
    },
    {
        id: "spell-mover-terra", title: "Mover Terra", category: "spell",
        meta: "6º Nível Transmutação | 1 ação | 36m | V, S, M | Conc. 2 horas",
        text: "Remodela terra, areia ou argila. Cria valas, colinas ou muralhas."
    },
    {
        id: "spell-muralha-espinhos", title: "Muralha de Espinhos", category: "spell",
        meta: "6º Nível Conjuração | 1 ação | 36m | V, S, M | Conc. 10 min",
        text: "Barreira de espinhos. Dano ao conjurar e ao mover: <strong>7d8 perfurante</strong> (Dex save metade)."
    },
    {
        id: "spell-muralha-gelo", title: "Muralha de Gelo", category: "spell",
        meta: "6º Nível Evocação | 1 ação | 36m | V, S, M | Conc. 10 min",
        text: "Parede de gelo. Ao surgir: <strong>10d6 frio</strong>. Atravessar depois: <strong>5d6 frio</strong>."
    },
    {
        id: "spell-palavra-recordacao", title: "Palavra de Recordação", category: "spell",
        meta: "6º Nível Conjuração | 1 ação | 1,5m | V | Instantânea",
        text: "Teletransporta você e 5 aliados para um santuário preparado anteriormente."
    },
    {
        id: "spell-portal-arcano", title: "Portal Arcano", category: "spell",
        meta: "6º Nível Conjuração | 1 ação | 150m | V, S | Conc. 10 min",
        text: "Cria dois portais conectados que duram 10 min. Visão bloqueada, transporte instantâneo."
    },
    {
        id: "spell-proibicao", title: "Proibição (Forbiddance)", category: "spell",
        meta: "6º Nível Abjuração | 10 min | Toque | V, S, M (1000po) | 1 dia",
        text: "Protege área enorme contra teletransporte/planares. Causa <strong>5d10 radiante/necrótico</strong> em extraplanares."
    },
    {
        id: "spell-proteger-fortaleza", title: "Proteger Fortaleza", category: "spell",
        meta: "6º Nível Abjuração | 10 min | Toque | V, S, M | 24 horas",
        text: "Enche área de armadilhas mágicas: névoa, trancas, teias, sugestão, etc."
    },
    {
        id: "spell-raio-solar", title: "Raio Solar (Sunbeam)", category: "spell",
        meta: "6º Nível Evocação | 1 ação | Pessoal (Linha 18m) | V, S, M | Conc. 1 min",
        text: "Linha de luz solar. Constituição save: <strong>6d8 radiante</strong> e cego. Pode disparar todo turno."
    },
    {
        id: "spell-recipiente-arcano", title: "Recipiente Arcano (Magic Jar)", category: "spell",
        meta: "6º Nível Necromancia | 1 min | Pessoal | V, S, M (500po) | Até dissipar",
        text: "Sua alma entra num objeto e pode possuir corpos humanoides."
    },
    {
        id: "spell-sugestao-massa", title: "Sugestão Em Massa", category: "spell",
        meta: "6º Nível Encantamento | 1 ação | 18m | V, M | 24 horas",
        text: "Sugere curso de ação para até 12 criaturas. Sabedoria save. Dura 24h sem concentração."
    },
    {
        id: "spell-teletransporte-arvores", title: "Teletransporte Por Árvores", category: "spell",
        meta: "6º Nível Conjuração | 1 ação | 3m | V, S | 1 rodada",
        text: "Cria portal em uma árvore para outra árvore conhecida no mesmo plano."
    },
    {
        id: "spell-visao-verdade", title: "Visão da Verdade", category: "spell",
        meta: "6º Nível Adivinhação | 1 ação | Toque | V, S, M (25po) | 1 hora",
        text: "Concede Visão Verdadeira (vê invisível, ilusões, metamorfos, etéreo) a 36m."
    },
    // =================================================================
    // --- MAGIAS: NÍVEL 7 ---
    // =================================================================
    {
        id: "spell-bola-fogo-controlavel", title: "Bola de Fogo Controlável", category: "spell",
        meta: "7º Nível Evocação | 1 ação | 45m | V, S, M | Conc. 1 min",
        text: "Esfera de fogo que pode esperar para explodir. Dano base <strong>12d6</strong> + <strong>1d6</strong> por turno de espera."
    },
    {
        id: "spell-conjurar-celestial", title: "Conjurar Celestial", category: "spell",
        meta: "7º Nível Conjuração | 1 min | 27m | V, S | Conc. 1 hora",
        text: "Invoca celestial (ND 4). Se perder concentração, ele não some e pode ficar hostil."
    },
    {
        id: "spell-dedo-morte", title: "Dedo da Morte", category: "spell",
        meta: "7º Nível Necromancia | 1 ação | 18m | V, S | Instantânea",
        text: "Constituição save. Falha: <strong>7d8 + 30 necrótico</strong>. Se matar humanoide, ergue Zumbi permanente."
    },
    {
        id: "spell-espada-mordenkainen", title: "Espada de Mordenkainen", category: "spell",
        meta: "7º Nível Evocação | 1 ação | 18m | V, S, M (250po) | Conc. 1 min",
        text: "Espada de energia. Ataque com magia (ação + bônus): <strong>3d10 energia</strong>."
    },
    {
        id: "spell-forma-eterea", title: "Forma Etérea", category: "spell",
        meta: "7º Nível Transmutação | 1 ação | Pessoal | V, S | 8 horas",
        text: "Entra no Plano Etéreo. Move-se através de objetos e criaturas. Invisível e inaudível para o plano material."
    },
    {
        id: "spell-inverter-gravidade", title: "Inverter a Gravidade", category: "spell",
        meta: "7º Nível Transmutação | 1 ação | 30m | V, S, M | Conc. 1 min",
        text: "Cilindro de 30m altura. Criaturas caem para cima. Se não agarrar algo (Dex save), caem no topo."
    },
    {
        id: "spell-isolamento", title: "Isolamento (Sequester)", category: "spell",
        meta: "7º Nível Transmutação | 1 ação | Toque | V, S, M (5000po) | Até dissipar",
        text: "Torna alvo invisível e inatingível por adivinhação. Criaturas entram em animação suspensa."
    },
    {
        id: "spell-mansao-mordenkainen", title: "Mansão Magnífica", category: "spell",
        meta: "7º Nível Conjuração | 1 min | 90m | V, S, M | 24 horas",
        text: "Cria mansão extradimensional com comida e servos invisíveis para 100 pessoas."
    },
    {
        id: "spell-miragem", title: "Miragem (Mirage Arcane)", category: "spell",
        meta: "7º Nível Ilusão | 10 min | Visão | V, S | 10 dias",
        text: "Altera terreno visual, sonora e tátilmente em área de 1,5km. Pode tornar terreno difícil ou criar estruturas."
    },
    {
        id: "spell-palavra-divina", title: "Palavra Divina", category: "spell",
        meta: "7º Nível Evocação | Bônus | 9m | V | Instantânea",
        text: "Efeito por PV atual: <50 Surdo, <40 Cego/Surdo, <30 Atordoado, <20 Morto. Bane extraplanares (Carisma save)."
    },
    {
        id: "spell-prisao-energia", title: "Prisão de Energia (Forcecage)", category: "spell",
        meta: "7º Nível Evocação | 1 ação | 30m | V, S, M (1500po) | 1 hora",
        text: "Jaula (com barras) ou Caixa (sólida) de energia. Indestrutível. Bloqueia teletransporte/viagem planar (Carisma save)."
    },
    {
        id: "spell-projetar-imagem", title: "Projetar Imagem", category: "spell",
        meta: "7º Nível Ilusão | 1 ação | 750km | V, S, M | Conc. 1 dia",
        text: "Cria cópia ilusória sua. Você pode ver, ouvir e falar através dela."
    },
    {
        id: "spell-rajada-prismatica", title: "Rajada Prismática", category: "spell",
        meta: "7º Nível Evocação | 1 ação | Pessoal (Cone 18m) | V, S | Instantânea",
        text: "8 raios aleatórios. Causa <strong>10d6</strong> (fogo, ácido, elétrico, veneno, frio) ou condições (pedra, outro plano)."
    },
    {
        id: "spell-regeneracao", title: "Regeneração", category: "spell",
        meta: "7º Nível Transmutação | 1 min | Toque | V, S, M | 1 hora",
        text: "Cura <strong>4d8+15</strong>. Recupera 1 PV por rodada. Regenera membros decepados em 2 min."
    },
    {
        id: "spell-ressurreicao", title: "Ressurreição", category: "spell",
        meta: "7º Nível Necromancia | 1 hora | Toque | V, S, M (1000po) | Instantânea",
        text: "Revive morto há até 100 anos. Cura tudo, exceto velhice. Penalidade -4 em tudo por 4 dias."
    },
    {
        id: "spell-simbolo", title: "Símbolo", category: "spell",
        meta: "7º Nível Abjuração | 1 min | Toque | V, S, M (1000po) | Até dissipar",
        text: "Inscreve glifo poderoso. Gatilho causa: Morte (10d10), Dor, Loucura, Sono, Medo, etc."
    },
    {
        id: "spell-simulacro", title: "Simulacro", category: "spell",
        meta: "7º Nível Ilusão | 12 horas | Toque | V, S, M (1500po) | Até dissipar",
        text: "Cria cópia de gelo/neve de criatura. Metade dos PV, não recupera magias. Obedece comandos."
    },
    {
        id: "spell-teletransporte", title: "Teletransporte", category: "spell",
        meta: "7º Nível Conjuração | 1 ação | 3m | V | Instantânea",
        text: "Leva você e 8 criaturas para qualquer lugar no mesmo plano. Chance de erro baseada em familiaridade."
    },
    {
        id: "spell-tempestade-fogo", title: "Tempestade de Fogo", category: "spell",
        meta: "7º Nível Evocação | 1 ação | 45m | V, S | Instantânea",
        text: "10 cubos de 3m. Destreza save: <strong>7d10 fogo</strong>. Escolhe quem não é afetado (plantas/criaturas)."
    },
    {
        id: "spell-viagem-planar", title: "Viagem Planar", category: "spell",
        meta: "7º Nível Conjuração | 1 ação | Toque | V, S, M (250po) | Instantânea",
        text: "Transporta grupo para outro plano. Ou bane criatura hostil (ataque + Carisma save)."
    },

    // =================================================================
    // --- MAGIAS: NÍVEL 8 ---
    // =================================================================
    {
        id: "spell-antipatia-simpatia", title: "Antipatia/Simpatia", category: "spell",
        meta: "8º Nível Encantamento | 1 hora | 18m | V, S, M | 10 dias",
        text: "Objeto/Área atrai (Simpatia) ou repele (Antipatia) tipo de criatura específico (Sabedoria save)."
    },
    {
        id: "spell-aura-sagrada", title: "Aura Sagrada", category: "spell",
        meta: "8º Nível Abjuração | 1 ação | Pessoal (9m) | V, S, M (1000po) | Conc. 1 min",
        text: "Vantagem em saves para aliados. Inimigos têm Desvantagem. Corruptores/Mortos-vivos podem ficar cegos."
    },
    {
        id: "spell-campo-antimagia", title: "Campo Antimagia", category: "spell",
        meta: "8º Nível Abjuração | 1 ação | Pessoal (3m) | V, S, M | Conc. 1 hora",
        text: "Esfera de 3m onde magia não funciona. Itens mágicos viram mundanos, invocações somem."
    },
    {
        id: "spell-clone", title: "Clone", category: "spell",
        meta: "8º Nível Necromancia | 1 hora | Toque | V, S, M (3000po) | Instantânea",
        text: "Cria clone inerte. Se original morrer, alma vai para o clone. Clone cresce em 120 dias."
    },
    {
        id: "spell-controlar-clima", title: "Controlar o Clima", category: "spell",
        meta: "8º Nível Transmutação | 10 min | Pessoal (8km) | V, S, M | Conc. 8 horas",
        text: "Altera precipitação, temperatura e vento gradualmente."
    },
    {
        id: "spell-dominar-monstro", title: "Dominar Monstro", category: "spell",
        meta: "8º Nível Encantamento | 1 ação | 18m | V, S | Conc. 1 hora",
        text: "Qualquer criatura faz Sabedoria save (vantagem se em combate). Falha: Controle mental total."
    },
    {
        id: "spell-enfraquecer-intelecto", title: "Enfraquecer Intelecto (Feeblemind)", category: "spell",
        meta: "8º Nível Encantamento | 1 ação | 45m | V, S, M | Instantânea",
        text: "<strong>4d6 psíquico</strong>. Inteligência save. Falha: Int e Car viram 1. Não conjura, não fala. Repete save a cada 30 dias."
    },
    {
        id: "spell-explosao-solar", title: "Explosão Solar (Sunburst)", category: "spell",
        meta: "8º Nível Evocação | 1 ação | 45m | V, S, M | Instantânea",
        text: "Esfera de 18m. Constituição save. Falha: <strong>12d6 radiante</strong> e Cego. Desvantagem para limos/mortos-vivos."
    },
    {
        id: "spell-formas-animais", title: "Formas Animais", category: "spell",
        meta: "8º Nível Transmutação | 1 ação | 9m | V, S | Conc. 24 horas",
        text: "Transforma grupo de criaturas em bestas (ND 4). Mantém Int/Wis/Cha."
    },
    {
        id: "spell-labirinto", title: "Labirinto", category: "spell",
        meta: "8º Nível Conjuração | 1 ação | 18m | V, S | Conc. 10 min",
        text: "Bane criatura para semiplano. Sem save inicial. Ação para escapar (Teste Inteligência CD 20)."
    },
    {
        id: "spell-limpar-mente", title: "Limpar a Mente (Mind Blank)", category: "spell",
        meta: "8º Nível Abjuração | 1 ação | Toque | V, S | 24 horas",
        text: "Imune a dano psíquico, leitura de mente, adivinhação e encantamento."
    },
    {
        id: "spell-loquacidade", title: "Loquacidade (Glibness)", category: "spell",
        meta: "8º Nível Transmutação | 1 ação | Pessoal | V | 1 hora",
        text: "Testes de Carisma resultam em no mínimo 15 no dado. Magias de verdade sempre indicam sinceridade."
    },
    {
        id: "spell-nuvem-incendiaria", title: "Nuvem Incendiária", category: "spell",
        meta: "8º Nível Conjuração | 1 ação | 45m | V, S | Conc. 1 min",
        text: "Nuvem de 6m move 3m/turno. Destreza save: <strong>10d8 fogo</strong>."
    },
    {
        id: "spell-palavra-poder-atordoar", title: "Palavra de Poder Atordoar", category: "spell",
        meta: "8º Nível Encantamento | 1 ação | 18m | V | Instantânea",
        text: "Se alvo tem 150 PV ou menos, fica Atordoado. Con save no fim de cada turno para encerrar."
    },
    {
        id: "spell-semiplano", title: "Semiplano", category: "spell",
        meta: "8º Nível Conjuração | 1 ação | 18m | V | 1 hora",
        text: "Cria porta para sala vazia de 9x9m ou conecta a semiplano conhecido."
    },
    {
        id: "spell-telepatia", title: "Telepatia", category: "spell",
        meta: "8º Nível Adivinhação | 1 ação | Ilimitado | V, S, M | 24 horas",
        text: "Elo mental com criatura no mesmo plano. Permite compartilhar palavras e sentidos."
    },
    {
        id: "spell-terremoto", title: "Terremoto", category: "spell",
        meta: "8º Nível Evocação | 1 ação | 150m | V, S, M | Conc. 1 min",
        text: "Área de 30m. Treme chão, abre fissuras, destrói estruturas (50 dano/turno). Quebra concentração."
    },
    {
        id: "spell-tsunami", title: "Tsunami", category: "spell",
        meta: "8º Nível Conjuração | 1 min | Visão | V, S | Conc. 6 rodadas",
        text: "Parede de água (90m x 90m). Força save: <strong>6d10 concussão</strong>. Empurra criaturas."
    },

    // =================================================================
    // --- MAGIAS: NÍVEL 9 ---
    // =================================================================
    {
        id: "spell-alterar-forma", title: "Alterar Forma (Shapechange)", category: "spell",
        meta: "9º Nível Transmutação | 1 ação | Pessoal | V, S, M (1500po) | Conc. 1 hora",
        text: "Vira qualquer criatura (ND <= Nível). Mantém mente/classes. Pode mudar de forma a cada turno."
    },
    {
        id: "spell-aprisionamento", title: "Aprisionamento", category: "spell",
        meta: "9º Nível Abjuração | 1 min | 9m | V, S, M (500po/dado de vida) | Até dissipar",
        text: "Prende alvo para sempre (Enterrar, Acorrentar, Gema, Dormir). Condição especial para libertar."
    },
    {
        id: "spell-chuva-meteoros", title: "Chuva de Meteoros", category: "spell",
        meta: "9º Nível Evocação | 1 ação | 1,5km | V, S | Instantânea",
        text: "4 esferas de 12m raio. Destreza save. Falha: <strong>20d6 fogo + 20d6 concussão</strong>. Sucesso: metade."
    },
    {
        id: "spell-cura-completa-massa", title: "Cura Completa em Massa", category: "spell",
        meta: "9º Nível Evocação | 1 ação | 18m | V, S | Instantânea",
        text: "Distribui <strong>700 PV</strong> entre criaturas. Cura doenças, cegueira e surdez."
    },
    {
        id: "spell-desejo", title: "Desejo (Wish)", category: "spell",
        meta: "9º Nível Conjuração | 1 ação | Pessoal | V | Instantânea",
        text: "Copia qualquer magia de nível 8 ou menor sem componentes. Ou altera a realidade (risco de perder a magia)."
    },
    {
        id: "spell-encarnacao-fantasmagorica", title: "Encarnação Fantasmagórica (Weird)", category: "spell",
        meta: "9º Nível Ilusão | 1 ação | 36m | V, S | Conc. 1 min",
        text: "Área de 9m. Sabedoria save. Falha: Medo e <strong>4d10 psíquico</strong> por turno."
    },
    {
        id: "spell-metamorfose-verdadeira", title: "Metamorfose Verdadeira", category: "spell",
        meta: "9º Nível Transmutação | 1 ação | 9m | V, S, M | Conc. 1 hora",
        text: "Transforma Criatura<->Objeto ou Criatura<->Criatura. Permanente se concentrar por 1 hora."
    },
    {
        id: "spell-muralha-prismatica", title: "Muralha Prismática", category: "spell",
        meta: "9º Nível Abjuração | 1 ação | 18m | V, S | 10 min",
        text: "7 camadas de luz. Causa dano massivo (<strong>10d6</strong> por camada) e condições (pedra, cegueira, banimento)."
    },
    {
        id: "spell-palavra-poder-curar", title: "Palavra de Poder Curar", category: "spell",
        meta: "9º Nível Evocação | 1 ação | Toque | V, S | Instantânea",
        text: "Cura TODOS os PV. Remove enfeitiçado, amedrontado, paralisado e atordoado. Levanta se caído."
    },
    {
        id: "spell-palavra-poder-matar", title: "Palavra de Poder Matar", category: "spell",
        meta: "9º Nível Encantamento | 1 ação | 18m | V | Instantânea",
        text: "Se alvo tiver 100 PV ou menos, morre instantaneamente. Sem teste de resistência."
    },
    {
        id: "spell-parar-tempo", title: "Parar o Tempo (Time Stop)", category: "spell",
        meta: "9º Nível Transmutação | 1 ação | Pessoal | V | Instantânea",
        text: "Você ganha <strong>1d4 + 1</strong> turnos seguidos. Termina se você afetar outra criatura."
    },
    {
        id: "spell-portal", title: "Portal (Gate)", category: "spell",
        meta: "9º Nível Conjuração | 1 ação | 18m | V, S, M (5000po) | Conc. 1 min",
        text: "Abre portal para outro plano. Pode invocar criatura pelo nome (ela aparece ao lado)."
    },
    {
        id: "spell-projecao-astral", title: "Projeção Astral", category: "spell",
        meta: "9º Nível Necromancia | 1 hora | 3m | V, S, M (1100po) | Especial",
        text: "Projeta corpos astrais de você e 8 aliados. Corpos físicos ficam em êxtase. Cordão de prata."
    },
    {
        id: "spell-ressurreicao-verdadeira", title: "Ressurreição Verdadeira", category: "spell",
        meta: "9º Nível Necromancia | 1 hora | Toque | V, S, M (25000po) | Instantânea",
        text: "Revive morto há até 200 anos. Cria corpo novo se necessário. Remove todas as doenças/maldições."
    },
    {
        id: "spell-sexto-sentido", title: "Sexto Sentido (Foresight)", category: "spell",
        meta: "9º Nível Adivinhação | 1 min | Toque | V, S, M | 8 horas",
        text: "Alvo não pode ser surpreendido. Vantagem em tudo. Inimigos têm Desvantagem para atacá-lo."
    },
    {
        id: "spell-tempestade-vinganca", title: "Tempestade da Vingança", category: "spell",
        meta: "9º Nível Conjuração | 1 ação | Visão | V, S | Conc. 1 min",
        text: "Nuvem de 108m raio. Cada turno um efeito: Trovão (2d6), Ácido (1d6), Raios (10d6), Granizo (2d6), Frio (1d6)."
    },
    // =================================================================
    // --- CLASSES DO JOGO ---
    // =================================================================
    // =================================================================
    // --- CLASSES COMPLETAS ---
    // =================================================================
   // =================================================================
    // --- CLASSE: BÁRBARO ---
    // =================================================================
    {
        id: "cls-bar-1",
        title: "Visão Geral",
        parentClass: "Bárbaro",
        category: "class",
        text: "Guerreiros poderosos movidos por forças primordiais que se manifestam como Fúria. Avançam no perigo para proteger suas comunidades, unindo ferocidade, reflexos sobre-humanos e sentidos aguçados."
    },
    {
        id: "cls-bar-2",
        title: "Traços Principais",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Força</li><li><strong>Dado de Vida:</strong> d12 por nível</li><li><strong>Salvaguardas:</strong> Força e Constituição</li><li><strong>Perícias:</strong> Escolha 2 (Adestrar Animais, Atletismo, Intimidação, Natureza, Percepção ou Sobrevivência)</li><li><strong>Armas:</strong> Simples e Marciais</li><li><strong>Armaduras:</strong> Leves, Médias e Escudos</li></ul>"
    },
    {
        id: "cls-bar-3",
        title: "Fúria (Rage)",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 1 | Ação Bônus",
        text: "Dura 10 min. Recupera 1 uso em Descanso Curto e todos no Longo. Benefícios:<ul><li><strong>Resistência:</strong> A dano de Concussão, Perfurante e Cortante.</li><li><strong>Dano de Fúria:</strong> Bônus no dano com Força conforme o nível.</li><li><strong>Vantagem:</strong> Em testes e salvaguardas de Força.</li><li><strong>Limitação:</strong> Não pode manter Concentração ou conjurar magias.</li><li><strong>Manutenção:</strong> No seu turno, a fúria se estende se você: Atacar, forçar um inimigo a fazer um Save, ou usar uma Ação Bônus para estendê-la.</li></ul>"
    },
    {
        id: "cls-bar-4",
        title: "Defesa sem Armadura",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 1",
        text: "Enquanto não usar armadura, sua CA é <strong>10 + Mod. Destreza + Mod. Constituição</strong>. Pode usar escudo e manter o benefício."
    },
    {
        id: "cls-bar-5",
        title: "Maestria em Armas",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 1",
        text: "Escolha 2 tipos de armas (Simples ou Marciais) para usar suas propriedades de maestria. Pode trocar as escolhas após um Descanso Longo."
    },
    {
        id: "cls-bar-6",
        title: "Sentido de Perigo",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 2",
        text: "Você tem <strong>Vantagem</strong> em salvaguardas de Destreza contra efeitos visíveis, a menos que esteja Incapacitado."
    },
    {
        id: "cls-bar-7",
        title: "Ataque Descuidado",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 2",
        text: "No primeiro ataque do turno, você pode ganhar <strong>Vantagem</strong> em ataques baseados em Força. Em troca, ataques contra você também têm Vantagem até o seu próximo turno."
    },
    {
        id: "cls-bar-8",
        title: "Conhecimento Primal",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 3",
        text: "Ganha uma perícia extra. Enquanto em Fúria, você pode fazer testes de <strong>Acrobacia, Intimidação, Percepção, Furtividade ou Sobrevivência</strong> usando Força no lugar do atributo normal."
    },
    {
        id: "cls-bar-9",
        title: "Ataque Extra",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 5",
        text: "Pode atacar <strong>duas vezes</strong> em vez de uma sempre que usar a ação Atacar no seu turno."
    },
    {
        id: "cls-bar-10",
        title: "Movimento Rápido",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 5",
        text: "Seu deslocamento aumenta em <strong>3 metros (10 feet)</strong> se não estiver usando Armadura Pesada."
    },
    {
        id: "cls-bar-11",
        title: "Instinto Feral e Bote",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 7",
        text: "<ul><li><strong>Vantagem</strong> em Iniciativa.</li><li><strong>Bote Instintivo:</strong> Ao entrar em Fúria (Ação Bônus), pode se mover até metade do deslocamento.</li></ul>"
    },
    {
        id: "cls-bar-12",
        title: "Golpe Brutal",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 9",
        text: "Ao usar Ataque Descuidado, você pode abrir mão da Vantagem em um ataque para causar <strong>+1d10 de dano</strong> e aplicar um efeito:<ul><li><strong>Empurrão:</strong> Move o alvo 4,5m e você pode segui-lo.</li><li><strong>Reduzir Velocidade:</strong> Reduz o movimento do alvo em 4,5m.</li></ul>"
    },
    {
        id: "cls-bar-13",
        title: "Fúria Relutante",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 11",
        text: "Se cair a 0 PV em Fúria, faça Save de Con CD 10. Sucesso: volta com <strong>PV = 2x seu nível</strong>. CD aumenta em 5 a cada uso até descansar."
    },
    {
        id: "cls-bar-14",
        title: "Fúria Persistente",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 15",
        text: "Ao rolar Iniciativa, recupera todos os usos de Fúria (1x/Descanso Longo). A Fúria agora dura 10 min sem precisar de manutenção constante."
    },
    {
        id: "cls-bar-15",
        title: "Poder Indomável",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 18",
        text: "Se o resultado de um teste ou save de Força for menor que seu valor de atributo Força, você pode usar o valor do atributo como resultado."
    },
    {
        id: "cls-bar-16",
        title: "Campeão Primal",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Nível 20",
        text: "Seus valores de <strong>Força e Constituição aumentam em 4</strong>. O limite máximo para esses atributos agora é 25."
    },
    {
        id: "cls-bar-17",
        title: "Berserker: Frenesi",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Enquanto em fúria, o primeiro ataque com Ataque Descuidado causa dano extra: <strong>d6s iguais ao seu bônus de dano de fúria</strong>."
    },
    {
        id: "cls-bar-18",
        title: "Berserker: Fúria Inconsciente",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Subclasse Nível 6",
        text: "Você tem <strong>Imunidade</strong> às condições Enfeitiçado e Amedrontado enquanto estiver em Fúria."
    },
    {
        id: "cls-bar-19",
        title: "Berserker: Retaliação",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Subclasse Nível 10",
        text: "Se sofrer dano de criatura a 1,5m, pode usar sua <strong>Reação</strong> para realizar um ataque corpo-a-corpo contra ela."
    },
    {
        id: "cls-bar-20",
        title: "Berserker: Presença Intimidadora",
        parentClass: "Bárbaro",
        category: "class",
        meta: "Subclasse Nível 14",
        text: "Ação Bônus: Criaturas emanação de 9m fazem Save de Sabedoria ou ficam <strong>Amedrontadas</strong> por 1 min. Pode gastar fúria para usar novamente."
    },
    // =================================================================
    // --- CLASSE: BARDO ---
    // =================================================================
    {
        id: "cls-brd-1",
        title: "Visão Geral",
        parentClass: "Bardo",
        category: "class",
        text: "Mestres em inspirar aliados e debilitar inimigos através de música, dança e versos. Acreditam que o multiverso foi criado através de palavras e buscam aproveitar os ecos dessas Palavras de Criação que ressoam em todos os planos."
    },
    {
        id: "cls-brd-2",
        title: "Traços Principais",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Carisma</li><li><strong>Dado de Vida:</strong> d8 por nível</li><li><strong>Salvaguardas:</strong> Destreza e Carisma</li><li><strong>Perícias:</strong> Escolha 3 quaisquer</li><li><strong>Armas:</strong> Simples</li><li><strong>Ferramentas:</strong> 3 Instrumentos Musicais</li><li><strong>Armaduras:</strong> Leves</li></ul>"
    },
    {
        id: "cls-brd-3",
        title: "Inspiração Bárdica",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 1 | Ação Bônus",
        text: "Como ação bônus, dê um dado de <strong>1d6</strong> a uma criatura a até 18m.<ul><li><strong>Uso:</strong> Quando a criatura falha em um teste de d20, ela rola o dado e soma ao resultado, podendo transformar falha em sucesso.</li><li><strong>Duração:</strong> 1 hora.</li><li><strong>Quantidade:</strong> Igual ao seu Mod. Carisma. Recupera todos em Descanso Longo.</li><li><strong>Evolução:</strong> d8 (Nív 5), d10 (Nív 10), d12 (Nív 15).</li></ul>"
    },
    {
        id: "cls-brd-4",
        title: "Conjuração (Spellcasting)",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 1",
        text: "Você utiliza artes bardicas para moldar a realidade.<ul><li><strong>Truques:</strong> Começa com 2. Pode trocar um ao subir de nível.</li><li><strong>Magias Preparadas:</strong> Você escolhe quais magias da lista de Bardo conhece. O número aumenta conforme a tabela da classe.</li><li><strong>Atributo:</strong> Carisma define a CD e o bônus de ataque.</li><li><strong>Foco:</strong> Pode usar um Instrumento Musical como foco arcano.</li></ul>"
    },
    {
        id: "cls-brd-5",
        title: "Especialização (Expertise)",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 2 e 9",
        text: "Escolha duas de suas perícias proficientes. Seu bônus de proficiência é <strong>dobrado</strong> para qualquer teste que use essas perícias. No nível 9, escolha mais duas."
    },
    {
        id: "cls-brd-6",
        title: "Pau para Toda Obra",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 2",
        text: "Você pode adicionar <strong>metade do seu Bônus de Proficiência</strong> (arredondado para baixo) em qualquer teste de habilidade que você ainda não possua proficiência."
    },
    {
        id: "cls-brd-7",
        title: "Fonte de Inspiração",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 5",
        text: "Você agora recupera todos os usos de Inspiração Bárdica ao finalizar um <strong>Descanso Curto ou Longo</strong>. Além disso, pode gastar um espaço de magia para recuperar um uso de Inspiração imediatamente."
    },
    {
        id: "cls-brd-8",
        title: "Contra-encanto (Countercharm)",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 7 | Reação",
        text: "Se você ou uma criatura a até 9m falhar em um salvamento contra <strong>Enfeitiçado ou Amedrontado</strong>, você pode usar sua Reação para permitir que o alvo jogue o dado novamente com <strong>Vantagem</strong>."
    },
    {
        id: "cls-brd-9",
        title: "Segredos Mágicos",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 10",
        text: "Sua erudição permite aprender magias de outras fontes. Você pode escolher suas magias preparadas das listas de <strong>Bardo, Clérigo, Druida e Mago</strong>. Elas contam como magias de Bardo para você."
    },
    {
        id: "cls-brd-10",
        title: "Inspiração Superior",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 18",
        text: "Ao rolar Iniciativa, se você tiver menos de dois usos de Inspiração Bárdica restando, você recupera usos até ter <strong>dois</strong>."
    },
    {
        id: "cls-brd-11",
        title: "Palavras de Criação",
        parentClass: "Bardo",
        category: "class",
        meta: "Nível 20",
        text: "Você sempre tem as magias <i>Palavra de Poder Curar</i> e <i>Palavra de Poder Matar</i> preparadas. Ao conjurar qualquer uma delas, você pode atingir um <strong>segundo alvo</strong> se ele estiver a até 3m do primeiro."
    },
    {
        id: "cls-brd-12",
        title: "Lore: Palavras de Corte",
        parentClass: "Bardo",
        category: "class",
        meta: "Subclasse Nível 3 | Reação",
        text: "Quando uma criatura que você vê a até 18m rola dano ou um teste de habilidade/ataque com sucesso, você pode gastar um uso de Inspiração. Role o dado e <strong>subtraia</strong> do resultado deles."
    },
    {
        id: "cls-brd-13",
        title: "Lore: Descobertas Mágicas",
        parentClass: "Bardo",
        category: "class",
        meta: "Subclasse Nível 6",
        text: "Você aprende duas magias extras de qualquer lista (Clérigo, Druida ou Mago). Elas devem ser de um nível que você possa conjurar e sempre estarão preparadas."
    },
    {
        id: "cls-brd-14",
        title: "Lore: Perícia Inigualável",
        parentClass: "Bardo",
        category: "class",
        meta: "Subclasse Nível 14",
        text: "Ao falhar em um teste ou ataque, você pode gastar uma Inspiração e somar ao resultado. Se ainda assim falhar, a Inspiração <strong>não é gasta</strong>."
    },
    // =================================================================
    // --- CLASSE: CLÉRIGO ---
    // =================================================================
    {
        id: "cls-clr-1",
        title: "Visão Geral",
        parentClass: "Clérigo",
        category: "class",
        text: "Os Clérigos extraem poder dos reinos dos deuses e utilizam-no para realizar milagres. Abençoados por uma divindade ou entidade imortal, canalizam a magia divina para fortalecer aliados e combater inimigos. Nem todos os membros de um templo são Clérigos; apenas aqueles que conseguem comandar o poder direto dos deuses o são."
    },
    {
        id: "cls-clr-2",
        title: "Traços Principais",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Sabedoria</li><li><strong>Dado de Vida:</strong> d8 por nível</li><li><strong>Salvaguardas:</strong> Sabedoria e Carisma</li><li><strong>Perícias:</strong> Escolha 2 (História, Intuição, Medicina, Persuasão ou Religião)</li><li><strong>Armas:</strong> Simples</li><li><strong>Armaduras:</strong> Leves, Médias e Escudos</li><li><strong>Equipamento Inicial:</strong> (A) Camisa de Malha, Escudo, Maça, Símbolo Sagrado, Pacote de Sacerdote e 7 PO ou (B) 110 PO.</li></ul>"
    },
    {
        id: "cls-clr-3",
        title: "Conjuração (Spellcasting)",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 1",
        text: "Poder mágico derivado de oração e meditação.<ul><li><strong>Truques:</strong> Começa com 3. Pode trocar um ao terminar um Descanso Longo.</li><li><strong>Magias Preparadas:</strong> Pode trocar a sua lista de magias sempre que terminar um Descanso Longo.</li><li><strong>Atributo:</strong> Sabedoria define a CD e o bônus de ataque.</li><li><strong>Foco:</strong> Utiliza um Símbolo Sagrado como foco de conjuração.</li></ul>"
    },
    {
        id: "cls-clr-4",
        title: "Ordem Divina",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 1",
        text: "Dedique-se a um papel sagrado:<ul><li><strong>Protetor:</strong> Ganha proficiência com Armas Marciais e treino com Armaduras Pesadas.</li><li><strong>Taumaturgo:</strong> Aprende um truque extra e adiciona o Mod. Sabedoria em testes de Inteligência (Arcana ou Religião).</li></ul>"
    },
    {
        id: "cls-clr-5",
        title: "Canalizar Divindade",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 2 | Ação Mágica",
        text: "Recupera um uso em Descanso Curto e todos no Longo. Opções iniciais:<ul><li><strong>Centelha Divina:</strong> Alvo a 9m. Cure <strong>1d8 + Sab</strong> ou force um Con Save para causar dano Necrótico ou Radiante igual ao valor. Escala para 2d8 (Niv 7), 3d8 (Niv 13) e 4d8 (Niv 18).</li><li><strong>Expulsar Mortos-Vivos:</strong> Mortos-vivos a 9m fazem Wis Save. Falha: ficam Amedrontados e Incapacitados por 1 min, fugindo de si.</li></ul>"
    },
    {
        id: "cls-clr-6",
        title: "Queimar Mortos-Vivos",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 5",
        text: "Ao usar Expulsar Mortos-Vivos, role dados <strong>d8 iguais ao seu Mod. Sabedoria</strong>. Aqueles que falharem no save sofrem este valor como dano Radiante."
    },
    {
        id: "cls-clr-7",
        title: "Golpes Abençoados",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 7",
        text: "Escolha uma opção:<ul><li><strong>Ataque Divino:</strong> 1x por turno, cause <strong>+1d8</strong> de dano Necrótico ou Radiante ao atingir com arma.</li><li><strong>Conjuração Potente:</strong> Adicione o seu Mod. Sabedoria ao dano de qualquer truque de Clérigo.</li></ul>"
    },
    {
        id: "cls-clr-8",
        title: "Intervenção Divina",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 10 | Ação Mágica",
        text: "Invoque o seu deus. Escolha qualquer magia de Clérigo de nível 5 ou inferior (sem reação). Conjure-a instantaneamente sem gastar espaço de magia ou componentes. Recupera em Descanso Longo."
    },
    {
        id: "cls-clr-9",
        title: "Intervenção Divina Maior",
        parentClass: "Clérigo",
        category: "class",
        meta: "Nível 20",
        text: "Ao usar Intervenção Divina, pode escolher a magia <strong>Desejo (Wish)</strong>. Se o fizer, recupera a habilidade após 2d4 Descansos Longos."
    },
    {
        id: "cls-clr-10",
        title: "Vida: Discípulo da Vida",
        parentClass: "Clérigo",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Sempre que usar uma magia de nível para curar, o alvo recupera <strong>+2 + nível da magia</strong> pontos de vida extras."
    },
    {
        id: "cls-clr-11",
        title: "Vida: Preservar a Vida",
        parentClass: "Clérigo",
        category: "class",
        meta: "Subclasse Nível 3 | Canalizar Divindade",
        text: "Como Ação Mágica, cure um valor igual a <strong>5x o seu nível de Clérigo</strong>. Distribua entre criaturas feridas (Bloodied) a até 9m. Não pode curar acima de metade do HP máximo delas."
    },
    {
        id: "cls-clr-12",
        title: "Vida: Curandeiro Abençoado",
        parentClass: "Clérigo",
        category: "class",
        meta: "Subclasse Nível 6",
        text: "Ao curar outros com magias de nível, você também recupera <strong>2 + nível da magia</strong> pontos de vida."
    },
    {
        id: "cls-clr-13",
        title: "Vida: Cura Suprema",
        parentClass: "Clérigo",
        category: "class",
        meta: "Subclasse Nível 17",
        text: "Ao rolar dados para curar com magias ou Canalizar Divindade, não jogue os dados: utilize o <strong>valor máximo</strong> possível (ex: 2d6 curam 12)."
    },
    // =================================================================
    // --- CLASSE: DRUIDA ---
    // =================================================================
    {
        id: "cls-dru-1",
        title: "Visão Geral",
        parentClass: "Druida",
        category: "class",
        text: "Membros de ordens antigas que evocam as forças da natureza. Aproveitando a magia de animais, plantas e dos quatro elementos, os Druidas podem curar, transformar-se em feras e controlar o poder destrutivo da natureza para combater ameaças ao equilíbrio do mundo."
    },
    {
        id: "cls-dru-2",
        title: "Traços Principais",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Sabedoria</li><li><strong>Dado de Vida:</strong> d8 por nível</li><li><strong>Salvaguardas:</strong> Inteligência e Sabedoria</li><li><strong>Perícias:</strong> Escolha 2 (Arcana, Adestrar Animais, Intuição, Medicina, Natureza, Percepção, Religião ou Sobrevivência)</li><li><strong>Armas:</strong> Simples</li><li><strong>Ferramentas:</strong> Kit de Herbalismo</li><li><strong>Armaduras:</strong> Leves e Escudos (Tradicionalmente não usam metal)</li></ul>"
    },
    {
        id: "cls-dru-3",
        title: "Conjuração (Spellcasting)",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 1",
        text: "Estudo das forças místicas da natureza.<ul><li><strong>Truques:</strong> Começa com 2. Pode trocar um ao subir de nível.</li><li><strong>Magias Preparadas:</strong> Você escolhe sua lista da lista de Druida. Pode trocá-la em Descanso Longo.</li><li><strong>Atributo:</strong> Sabedoria define a CD e o bônus de ataque.</li><li><strong>Foco:</strong> Utiliza um Foco Druídico (ex: ramo de visco).</li></ul>"
    },
    {
        id: "cls-dru-4",
        title: "Druídico e Falar com Animais",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 1",
        text: "Você conhece o Druídico, a linguagem secreta dos druidas. Além disso, você sempre tem a magia <strong>Falar com Animais</strong> preparada."
    },
    {
        id: "cls-dru-5",
        title: "Ordem Primal",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 1",
        text: "Escolha uma função sagrada:<ul><li><strong>Mago:</strong> Aprende um truque extra e adiciona seu Mod. Sabedoria em testes de Inteligência (Arcana ou Natureza).</li><li><strong>Guardião:</strong> Treino em Armaduras Médias e proficiência com Armas Marciais.</li></ul>"
    },
    {
        id: "cls-dru-6",
        title: "Forma Selvagem (Wild Shape)",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 2 | Ação Bônus",
        text: "Assume a forma de uma fera que você conheça.<ul><li><strong>Uso:</strong> 2 vezes (recupera 1 em Descanso Curto, todas no Longo).</li><li><strong>Duração:</strong> Horas iguais a metade do seu nível.</li><li><strong>Regras:</strong> Você ganha <strong>PV Temporários</strong> iguais ao seu nível de Druida. Suas estatísticas mentais e proficiências permanecem. Não pode conjurar magias.</li><li><strong>Limites (CR):</strong> Nív 2 (CR 1/4), Nív 4 (CR 1/2), Nív 8 (CR 1, permite voo).</li></ul>"
    },
    {
        id: "cls-dru-7",
        title: "Companheiro Selvagem",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 2",
        text: "Você pode gastar um uso de Forma Selvagem ou um espaço de magia para conjurar <strong>Encontrar Familiar</strong> como uma fada, sem gastar componentes materiais."
    },
    {
        id: "cls-dru-8",
        title: "Ressurgência Selvagem",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 5",
        text: "Uma vez por turno:<ul><li>Se não tiver usos de Forma Selvagem, gaste um espaço de magia para ganhar 1 uso.</li><li>Gaste um uso de Forma Selvagem para recuperar um espaço de magia de nível 1 (1x/Descanso Longo).</li></ul>"
    },
    {
        id: "cls-dru-9",
        title: "Fúria Elemental",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 7",
        text: "Escolha uma opção:<ul><li><strong>Conjuração Potente:</strong> Soma Mod. Sabedoria ao dano dos Truques.</li><li><strong>Ataque Primal:</strong> 1x por turno, seu ataque (arma ou fera) causa <strong>+1d8</strong> de dano de Fogo, Frio, Raio ou Trovão. Aumenta para 2d8 no Nív 15.</li></ul>"
    },
    {
        id: "cls-dru-10",
        title: "Magias de Fera",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 18",
        text: "Você agora pode conjurar magias enquanto estiver em Forma Selvagem, exceto magias que exijam componentes materiais caros ou consumíveis."
    },
    {
        id: "cls-dru-11",
        title: "Arquidruida",
        parentClass: "Druida",
        category: "class",
        meta: "Nível 20",
        text: "<ul><li>Recupera 1 Forma Selvagem ao rolar Iniciativa.</li><li>Pode converter usos de Forma Selvagem em espaços de magia (cada uso vale 2 níveis de magia).</li><li>Seu corpo envelhece apenas 1 ano para cada 10 anos reais.</li></ul>"
    },
    {
        id: "cls-dru-12",
        title: "Terra: Auxílio da Terra",
        parentClass: "Druida",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Como Ação Mágica, gaste uma Forma Selvagem para criar uma explosão de flores e espinhos (raio 3m) a até 18m. Inimigos fazem Con Save ou sofrem <strong>2d6 Necrótico</strong>. Um aliado na área recupera <strong>2d6 PV</strong>."
    },
    {
        id: "cls-dru-13",
        title: "Terra: Recuperação Natural",
        parentClass: "Druida",
        category: "class",
        meta: "Subclasse Nível 6",
        text: "Pode conjurar uma magia de Círculo sem gastar espaço (1x/Descanso Longo). Além disso, em Descanso Curto, pode recuperar espaços de magia cujos níveis somados sejam metade do seu nível de Druida."
    },
    {
        id: "cls-dru-14",
        title: "Terra: Proteção e Santuário",
        parentClass: "Druida",
        category: "class",
        meta: "Subclasse Nível 10 e 14",
        text: "Imunidade a Envenenado e resistência elemental. No nível 14, pode criar um cubo de 4,5m de árvores espectrais que dá <strong>Meia Cobertura</strong> a aliados."
    },
    // =================================================================
    // --- CLASSE: GUERREIRO ---
    // =================================================================
    {
        id: "cls-gtr-1",
        title: "Visão Geral",
        parentClass: "Guerreiro",
        category: "class",
        text: "Mestres do campo de batalha, cavaleiros, soldados de elite ou mercenários. Os Guerreiros possuem uma proeza inigualável com armas e armaduras. Eles combinam habilidade generalista com especializações profundas, tornando-os combatentes superiores em qualquer situação."
    },
    {
        id: "cls-gtr-2",
        title: "Traços Principais",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Força ou Destreza</li><li><strong>Dado de Vida:</strong> d10 por nível</li><li><strong>Salvaguardas:</strong> Força e Constituição</li><li><strong>Perícias:</strong> Escolha 2 (Acrobacia, Adestrar Animais, Atletismo, História, Intuição, Intimidação, Persuasão, Percepção ou Sobrevivência)</li><li><strong>Armas:</strong> Simples e Marciais</li><li><strong>Armaduras:</strong> Todas as Armaduras e Escudos</li></ul>"
    },
    {
        id: "cls-gtr-3",
        title: "Estilo de Luta e Maestria",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Estilo de Luta:</strong> Você ganha um talento (feat) de Estilo de Luta. Pode trocá-lo ao subir de nível.</li><li><strong>Maestria em Armas:</strong> Você pode usar as propriedades de maestria de <strong>três tipos</strong> de armas à sua escolha. Pode trocar as escolhas após um Descanso Longo.</li></ul>"
    },
    {
        id: "cls-gtr-4",
        title: "Retomar o Fôlego (Second Wind)",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 1 | Ação Bônus",
        text: "Como ação bônus, você recupera <strong>1d10 + Nível de Guerreiro</strong> pontos de vida.<ul><li><strong>Usos:</strong> Começa com 2. Recupera 1 uso em Descanso Curto e todos no Longo.</li><li><strong>Evolução:</strong> O número de usos aumenta conforme você sobe de nível (veja tabela da classe).</li></ul>"
    },
    {
        id: "cls-gtr-5",
        title: "Surto de Ação (Action Surge)",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 2",
        text: "Você pode forçar seus limites. No seu turno, você ganha <strong>uma ação adicional</strong>.<ul><li><strong>Restrição:</strong> Esta ação adicional NÃO pode ser usada para a ação <strong>Mágica</strong>.</li><li><strong>Uso:</strong> 1 vez por Descanso Curto ou Longo (2 vezes no Nível 17).</li></ul>"
    },
    {
        id: "cls-gtr-6",
        title: "Mente Tática",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 2",
        text: "Quando você falha em um teste de habilidade, pode gastar um uso do seu <strong>Retomar o Fôlego</strong>. Em vez de curar, role <strong>1d10</strong> e some ao teste. Se o teste ainda assim falhar, o uso do Retomar o Fôlego <strong>não é gasto</strong>."
    },
    {
        id: "cls-gtr-7",
        title: "Manobra Tática (Tactical Shift)",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 5",
        text: "Sempre que você ativar seu Retomar o Fôlego (Ação Bônus), você pode se mover até <strong>metade do seu deslocamento</strong> sem provocar Ataques de Oportunidade."
    },
    {
        id: "cls-gtr-8",
        title: "Ataque Extra",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 5, 11 e 20",
        text: "Você pode atacar múltiplas vezes sempre que usar a ação de Atacar.<ul><li><strong>Nível 5:</strong> 2 ataques.</li><li><strong>Nível 11:</strong> 3 ataques.</li><li><strong>Nível 20:</strong> 4 ataques.</li></ul>"
    },
    {
        id: "cls-gtr-9",
        title: "Indomável",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 9",
        text: "Se falhar em uma salvaguarda (Save), você pode jogá-la novamente com um bônus igual ao seu <strong>nível de Guerreiro</strong>. Se usar, deve usar o novo resultado. Recupera em Descanso Longo."
    },
    {
        id: "cls-gtr-10",
        title: "Mestre Tático",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 9",
        text: "Ao atacar com uma arma que você domine, pode trocar a propriedade de maestria dela por <strong>Empurrar (Push), Sap (Debilitar) ou Lentidão (Slow)</strong> para aquele ataque específico."
    },
    {
        id: "cls-gtr-11",
        title: "Ataques Estudados",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 13",
        text: "Se você errar um ataque contra uma criatura, você ganha <strong>Vantagem</strong> na próxima jogada de ataque contra ela até o final do seu próximo turno."
    },
    {
        id: "cls-gtr-12",
        title: "Campeão: Crítico Aprimorado",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Seus ataques com armas e golpes desarmados causam um Acerto Crítico se você rolar <strong>19 ou 20</strong> no d20. No nível 15, isso aumenta para <strong>18, 19 ou 20</strong>."
    },
    {
        id: "cls-gtr-13",
        title: "Campeão: Atleta Notável",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Você tem <strong>Vantagem</strong> em jogadas de Iniciativa e testes de Atletismo. Além disso, após um Crítico, pode se mover metade do seu deslocamento sem sofrer ataques de oportunidade."
    },
    {
        id: "cls-gtr-14",
        title: "Campeão: Guerreiro Heróico",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Subclasse Nível 10",
        text: "O fervor da batalha te guia. Durante o combate, você ganha <strong>Inspiração Heróica</strong> sempre que começar o seu turno sem ela."
    },
    {
        id: "cls-gtr-15",
        title: "Campeão: Sobrevivente",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Subclasse Nível 18",
        text: "<ul><li><strong>Desafiar a Morte:</strong> Vantagem em saves de Morte. Um 18-20 no dado conta como um 20 (recupera 1 PV).</li><li><strong>Recuperação Heróica:</strong> No início do seu turno, recupera <strong>5 + Mod. Constituição</strong> de vida se estiver ferido (Bloodied).</li></ul>"
    },
    {
        id: "cls-gtr-16",
        title: "Indomável Aprimorado",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 17 e 18",
        text: "Você agora possui <strong>três usos</strong> de Indomável por Descanso Longo. No nível 18, sua subclasse atinge o potencial máximo (como o <i>Sobrevivente</i> do Campeão)."
    },
    {
        id: "cls-gtr-17",
        title: "Talento Épico (Epic Boon)",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 19",
        text: "Você ganha um <strong>Talento de Dádiva Épica</strong> de sua escolha. Recomenda-se a <i>Dádiva da Proeza em Combate</i>, que permite transformar um erro em acerto uma vez por turno."
    },
    {
        id: "cls-gtr-18",
        title: "Três Ataques Extras",
        parentClass: "Guerreiro",
        category: "class",
        meta: "Nível 20",
        text: "Você atinge o ápice da velocidade marcial. Agora você pode realizar <strong>quatro ataques</strong> sempre que utilizar a ação Atacar no seu turno."
    },
    // =================================================================
    // --- CLASSE: MONGE ---
    // =================================================================
    {
        id: "cls-mon-1",
        title: "Visão Geral",
        parentClass: "Monge",
        category: "class",
        text: "Mestres da disciplina mental e combate desarmado. Transformam seus próprios corpos em armas vivas através do controle de sua energia interior (Pontos de Foco)."
    },
    {
        id: "cls-mon-2",
        title: "Traços Principais",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributos:</strong> Destreza e Sabedoria</li><li><strong>Dado de Vida:</strong> d8</li><li><strong>Salvaguardas:</strong> Força e Destreza</li><li><strong>Armas:</strong> Simples e Marciais com a propriedade 'Leve'</li><li><strong>Armaduras:</strong> Nenhuma</li></ul>"
    },
    {
        id: "cls-mon-3",
        title: "Artes Marciais",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 1 | Dado: d6",
        text: "Enquanto estiver desarmado ou com armas de monge:<ul><li>Pode usar <strong>Destreza</strong> no lugar de Força para ataques e dano.</li><li>Pode realizar um <strong>Ataque Desarmado</strong> como Ação Bônus.</li><li>O dano desarmado começa em <strong>1d6</strong> e escala com o nível.</li></ul>"
    },
    {
        id: "cls-mon-4",
        title: "Foco do Monge",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 2 | Pontos de Foco",
        text: "Você ganha Pontos de Foco (igual ao seu nível). Gaste-os para:<ul><li><strong>Rajada de Golpes (1 Foco):</strong> Dois ataques desarmados como bônus.</li><li><strong>Defesa Paciente:</strong> Desengajar como bônus (ou gastar 1 Foco para Esquivar e Desengajar).</li><li><strong>Passo do Vento:</strong> Disparada como bônus (ou gastar 1 Foco para Disparada, Desengajar e dobrar o Salto).</li></ul>"
    },
    {
        id: "cls-mon-5",
        title: "Metabolismo Sobrenatural",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 2",
        text: "Ao rolar Iniciativa, você pode recuperar todos os seus Pontos de Foco e curar vida igual ao seu <strong>Nível + dado de Artes Marciais</strong> (1x por Descanso Longo)."
    },
    {
        id: "cls-mon-6",
        title: "Defletir Ataques",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 3 | Reação",
        text: "Reduz dano físico (concussão, corte, perfuração) em <strong>1d10 + Destreza + Nível</strong>. Se reduzir a 0, pode gastar 1 Foco para devolver o ataque (distância ou corpo-a-corpo)."
    },
    {
        id: "cls-mon-7",
        title: "Queda Suave",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 4 | Reação",
        text: "Você pode reduzir o dano de queda em um valor igual a <strong>5 vezes o seu nível</strong> de monge."
    },
    {
        id: "cls-mon-8",
        title: "Ataque Extra e Atordoante",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 5",
        text: "<ul><li>Ataca duas vezes por ação.</li><li><strong>Golpe Atordoante:</strong> Gaste 1 Foco ao acertar. O alvo faz Save de Con ou fica <strong>Atordoado</strong> até o início do seu próximo turno. Se passar, a velocidade dele cai pela metade.</li></ul>"
    },
    {
        id: "cls-mon-9",
        title: "Ataques Energizados",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 6",
        text: "Seus ataques desarmados podem causar dano de <strong>Força</strong> em vez do dano normal, superando resistências a dano não-mágico."
    },
    {
        id: "cls-mon-10",
        title: "Evasão",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 7",
        text: "Quando um efeito exige save de Destreza para metade do dano, você sofre <strong>zero dano</strong> se passar e apenas metade se falhar."
    },
    {
        id: "cls-mon-11",
        title: "Movimentação Acrobática",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 9",
        text: "Você ganha a habilidade de se mover por <strong>superfícies verticais e sobre líquidos</strong> no seu turno sem cair."
    },
    {
        id: "cls-mon-12",
        title: "Auto-Restauração",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 10",
        text: "Ao final do seu turno, você remove as condições <strong>Enfeitiçado, Amedrontado ou Envenenado</strong> de si mesmo automaticamente. Além disso, não sofre exaustão por falta de comida ou água."
    },
    {
        id: "cls-mon-13",
        title: "Defletir Energia",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 13",
        text: "Sua habilidade de Defletir Ataques agora funciona contra <strong>qualquer tipo de dano</strong> (fogo, frio, energia, etc.), não apenas físico."
    },
    {
        id: "cls-mon-14",
        title: "Sobrevivente Disciplinado",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 14",
        text: "Você ganha proficiência em <strong>TODAS as salvaguardas (Saves)</strong>. Além disso, pode gastar 1 Foco para jogar o dado novamente se falhar em um save."
    },
    {
        id: "cls-mon-15",
        title: "Foco Perfeito",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 15",
        text: "Ao rolar Iniciativa, se tiver 3 pontos de foco ou menos, você recupera até ter <strong>4 pontos</strong> imediatamente."
    },
    {
        id: "cls-mon-16",
        title: "Defesa Superior",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 18",
        text: "No início do seu turno, gaste 3 Foco para ganhar <strong>Resistência a todos os danos</strong> (exceto Força) por 1 minuto ou até cair."
    },
    {
        id: "cls-mon-17",
        title: "Corpo e Mente",
        parentClass: "Monge",
        category: "class",
        meta: "Nível 20",
        text: "Seus valores de <strong>Destreza e Sabedoria aumentam em 4</strong>, até um máximo de 25."
    },
    {
        id: "cls-mon-18",
        title: "Mão Aberta: Técnica",
        parentClass: "Monge",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Ao usar Rajada de Golpes, aplique um efeito:<ul><li><strong>Derrubar:</strong> Dex Save ou fica Caído (Prone).</li><li><strong>Empurrar:</strong> Str Save ou voa 4,5m para longe.</li><li><strong>Cambalear:</strong> O alvo não pode realizar reações.</li></ul>"
    },
    {
        id: "cls-mon-19",
        title: "Mão Aberta: Palma Vibrante",
        parentClass: "Monge",
        category: "class",
        meta: "Subclasse Nível 17",
        text: "Gaste 4 Foco para iniciar vibrações letais. Com uma ação (ou trocando um ataque), force um Con Save: falha causa <strong>10d12 de dano de Força</strong>. Sucesso causa metade."
    },
    // =================================================================
    // --- CLASSE: PALADINO ---
    // =================================================================
    {
        id: "cls-pal-1",
        title: "Visão Geral",
        parentClass: "Paladino",
        category: "class",
        text: "Guerreiros devotos unidos por juramentos sagrados para enfrentar as forças da aniquilação. Combinam perícia marcial com o poder divino para curar feridos, banir o mal e proteger os inocentes. O juramento é uma fonte de poder que transforma um guerreiro em um campeão abençoado."
    },
    {
        id: "cls-pal-2",
        title: "Traços Principais",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributos:</strong> Força e Carisma</li><li><strong>Dado de Vida:</strong> d10 por nível</li><li><strong>Salvaguardas:</strong> Sabedoria e Carisma</li><li><strong>Perícias:</strong> Escolha 2 (Atletismo, Intuição, Intimidação, Medicina, Persuasão ou Religião)</li><li><strong>Armas:</strong> Simples e Marciais</li><li><strong>Armaduras:</strong> Todas as Armaduras e Escudos</li></ul>"
    },
    {
        id: "cls-pal-3",
        title: "Mãos Curadoras (Lay on Hands)",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 1 | Ação Bônus",
        text: "Você tem uma reserva de cura igual a <strong>5x seu nível de Paladino</strong>.<ul><li>Como <strong>Ação Bônus</strong>, toque uma criatura e gaste pontos da reserva para curá-la.</li><li>Pode gastar 5 pontos para remover a condição <strong>Envenenado</strong> do alvo.</li><li>A reserva recupera totalmente em um Descanso Longo.</li></ul>"
    },
    {
        id: "cls-pal-4",
        title: "Conjuração (Spellcasting)",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 1",
        text: "Diferente das regras antigas, o Paladino agora conjura desde o Nível 1.<ul><li><strong>Magias Preparadas:</strong> Você escolhe da lista de Paladino. Pode trocá-las em um Descanso Longo.</li><li><strong>Atributo:</strong> Carisma define a CD e o ataque mágico.</li><li><strong>Foco:</strong> Usa um Símbolo Sagrado.</li></ul>"
    },
    {
        id: "cls-pal-5",
        title: "Maestria em Armas",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 1",
        text: "Você domina as propriedades de maestria de <strong>dois tipos de armas</strong> que possua proficiência. Pode trocar as escolhas após um Descanso Longo."
    },
    {
        id: "cls-pal-6",
        title: "Estilo de Luta",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 2",
        text: "Ganha um talento de Estilo de Luta. A opção <strong>Guerreiro Abençoado</strong> permite aprender dois truques (cantrips) da lista do Clérigo, usando Carisma."
    },
    {
        id: "cls-pal-7",
        title: "Destruição do Paladino (Smite)",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 2",
        text: "Você sempre tem a magia <i>Destruição Divina (Divine Smite)</i> preparada. Além disso, pode conjurá-la <strong>uma vez por dia sem gastar espaço de magia</strong>."
    },
    {
        id: "cls-pal-8",
        title: "Canalizar Divindade: Sentido Divino",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 3 | Ação Bônus",
        text: "Gasta 1 uso de Canalizar Divindade. Por 10 min, você sabe a localização e tipo de <strong>Celestiais, Corruptores e Mortos-Vivos</strong> a até 18m, além de detectar locais ou itens consagrados/desecrados."
    },
    {
        id: "cls-pal-9",
        title: "Ataque Extra",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 5",
        text: "Você pode atacar <strong>duas vezes</strong> em vez de uma sempre que usar a ação Atacar no seu turno."
    },
    {
        id: "cls-pal-10",
        title: "Montaria Fiel",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 5",
        text: "Você sempre tem a magia <i>Encontrar Montaria</i> preparada. Pode conjurá-la <strong>uma vez sem gastar espaço de magia</strong> (recupera em Descanso Longo)."
    },
    {
        id: "cls-pal-11",
        title: "Aura de Proteção",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 6 | Passiva",
        text: "Você e aliados a até 3m de você ganham um bônus em <strong>todas as salvaguardas</strong> igual ao seu <strong>Modificador de Carisma</strong> (mínimo +1). A aura não funciona se você estiver Incapacitado."
    },
    {
        id: "cls-pal-12",
        title: "Abjurar Inimigos",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 9 | Ação Mágica",
        text: "Gasta 1 Canalizar Divindade. Alvos (até seu Mod. Carisma) a 18m fazem Save de Sabedoria. Falha: ficam <strong>Amedrontados</strong> por 1 min. Enquanto assim, só podem se mover, agir ou usar bônus (escolha um)."
    },
    {
        id: "cls-pal-13",
        title: "Aura de Coragem",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 10 | Passiva",
        text: "Você e aliados em sua Aura de Proteção são <strong>imunes à condição Amedrontado</strong>."
    },
    {
        id: "cls-pal-14",
        title: "Golpes Radiantes",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 11 | Passiva",
        text: "Seus ataques com armas corpo-a-corpo ou golpes desarmados causam <strong>+1d8 de dano Radiante</strong> extra em cada acerto."
    },
    {
        id: "cls-pal-15",
        title: "Toque Restaurador",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 14",
        text: "Ao usar Mãos Curadoras, você pode gastar 5 pontos da reserva para remover uma das seguintes condições: <strong>Cego, Enfeitiçado, Surdo, Amedrontado, Paralisado ou Atordoado</strong>."
    },
    {
        id: "cls-pal-16",
        title: "Expansão da Aura",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 18",
        text: "O alcance da sua Aura de Proteção (e consequentemente de Coragem e outras) aumenta para <strong>9 metros (30 feet)</strong>."
    },
    {
        id: "cls-pal-17",
        title: "Talento Épico (Epic Boon)",
        parentClass: "Paladino",
        category: "class",
        meta: "Nível 19",
        text: "Você ganha um Talento de Dádiva Épica. Recomenda-se a <i>Dádiva da Visão Verdadeira</i>."
    },
    {
        id: "cls-pal-18",
        title: "Devoção: Arma Sagrada",
        parentClass: "Paladino",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Ao Atacar, gaste 1 Canalizar Divindade para imbuir sua arma. Por 10 min: soma <strong>Mod. Carisma nos ataques</strong>, causa dano Radiante e emite luz (6m)."
    },
    {
        id: "cls-pal-19",
        title: "Devoção: Aura de Devoção",
        parentClass: "Paladino",
        category: "class",
        meta: "Subclasse Nível 7",
        text: "Você e aliados em sua aura são <strong>imunes à condição Enfeitiçado</strong>."
    },
    {
        id: "cls-pal-20",
        title: "Devoção: Nimbo Sagrado",
        parentClass: "Paladino",
        category: "class",
        meta: "Subclasse Nível 20",
        text: "Ação Bônus: Por 10 min, você emana luz solar.<ul><li>Inimigos que começam o turno na aura sofrem dano Radiante (<strong>Carisma + Proficiência</strong>).</li><li>Você tem <strong>Vantagem</strong> em saves contra Mortos-Vivos e Corruptores.</li></ul>"
    },
    // =================================================================
    // --- CLASSE: PATRULHEIRO (RANGER) ---
    // =================================================================
    {
        id: "cls-ran-1",
        title: "Visão Geral",
        parentClass: "Patrulheiro",
        category: "class",
        text: "Sentinelas das fronteiras que vigiam a natureza contra monstros e tiranos. Combinam perícia marcial, magias primordiais e habilidades de sobrevivência extrema para caçar seus alvos com foco letal."
    },
    {
        id: "cls-ran-2",
        title: "Traços Principais",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributos:</strong> Destreza e Sabedoria</li><li><strong>Dado de Vida:</strong> d10 por nível</li><li><strong>Salvaguardas:</strong> Força e Destreza</li><li><strong>Perícias:</strong> Escolha 3 (Adestrar Animais, Atletismo, Intuição, Investigação, Natureza, Percepção, Furtividade ou Sobrevivência)</li><li><strong>Armas:</strong> Simples e Marciais</li><li><strong>Armaduras:</strong> Leves, Médias e Escudos</li></ul>"
    },
    {
        id: "cls-ran-3",
        title: "Inimigo Favorito (Favored Enemy)",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 1",
        text: "Você sempre tem a magia <i>Marca do Caçador (Hunter's Mark)</i> preparada.<ul><li><strong>Uso Grátis:</strong> Pode conjurá-la <strong>duas vezes</strong> sem gastar espaço de magia (recupera em Descanso Longo).</li><li>O número de usos grátis aumenta conforme o nível.</li></ul>"
    },
    {
        id: "cls-ran-4",
        title: "Conjuração (Spellcasting)",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 1",
        text: "Agora você conjura desde o nível 1.<ul><li><strong>Magias Preparadas:</strong> Escolha da lista de Patrulheiro. Pode trocá-las após um Descanso Longo.</li><li><strong>Atributo:</strong> Sabedoria define a CD e o bônus de ataque.</li><li><strong>Foco:</strong> Usa um Foco Druídico (ex: ramo de visco).</li></ul>"
    },
    {
        id: "cls-ran-5",
        title: "Maestria em Armas",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 1",
        text: "Você domina as propriedades de maestria de <strong>dois tipos de armas</strong> à sua escolha. Pode trocar as escolhas após um Descanso Longo."
    },
    {
        id: "cls-ran-6",
        title: "Explorador Hábil (Deft Explorer)",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 2",
        text: "<ul><li><strong>Especialização:</strong> Escolha uma de suas perícias para dobrar o bônus de proficiência.</li><li><strong>Idiomas:</strong> Você aprende dois idiomas adicionais.</li></ul>"
    },
    {
        id: "cls-ran-7",
        title: "Estilo de Luta",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 2",
        text: "Ganha um talento de Estilo de Luta. A opção <strong>Guerreiro Druídico</strong> permite aprender dois truques (cantrips) da lista do Druida, usando Sabedoria."
    },
    {
        id: "cls-ran-8",
        title: "Ataque Extra",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 5",
        text: "Você pode atacar <strong>duas vezes</strong> em vez de uma sempre que usar a ação Atacar no seu turno."
    },
    {
        id: "cls-ran-9",
        title: "Errante (Roving)",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 6",
        text: "Seu deslocamento aumenta em <strong>3 metros (10 feet)</strong> enquanto não usar armadura pesada. Você também ganha deslocamento de <strong>Escalada e Natação</strong> igual ao seu caminhar."
    },
    {
        id: "cls-ran-10",
        title: "Especialização Adicional",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 9",
        text: "Escolha mais <strong>duas perícias</strong> nas quais você possui proficiência para ganhar Especialização (dobrar bônus)."
    },
    {
        id: "cls-ran-11",
        title: "Incansável (Tireless)",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 10",
        text: "<ul><li><strong>PV Temporários:</strong> Com uma ação mágica, ganhe <strong>1d8 + Mod. Sabedoria</strong> de vida temporária (vários usos por dia).</li><li><strong>Recuperação:</strong> Sempre que terminar um Descanso Curto, seu nível de <strong>Exaustão</strong> diminui em 1.</li></ul>"
    },
    {
        id: "cls-ran-12",
        title: "Caçador Implacável",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 13",
        text: "Sofrer dano não pode mais quebrar sua <strong>Concentração</strong> na magia <i>Marca do Caçador</i>."
    },
    {
        id: "cls-ran-13",
        title: "Véu da Natureza",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 14 | Ação Bônus",
        text: "Você pode usar uma Ação Bônus para se tornar <strong>Invisível</strong> até o final do seu próximo turno. Pode usar isso um número de vezes igual ao seu Mod. Sabedoria por Descanso Longo."
    },
    {
        id: "cls-ran-14",
        title: "Caçador Preciso",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 17",
        text: "Você tem <strong>Vantagem</strong> em todas as jogadas de ataque contra a criatura que estiver sob o efeito da sua <i>Marca do Caçador</i>."
    },
    {
        id: "cls-ran-15",
        title: "Sentidos Ferais",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 18",
        text: "Você ganha <strong>Percepção s Cegas (Blindsight)</strong> com alcance de 9 metros (30 feet)."
    },
    {
        id: "cls-ran-16",
        title: "Talento Épico (Epic Boon)",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 19",
        text: "Ganha um Talento de Dádiva Épica. Recomenda-se a <i>Dádiva da Viagem Dimensional</i> (Teletransporte curto após atacar)."
    },
    {
        id: "cls-ran-17",
        title: "Matador de Inimigos",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Nível 20",
        text: "O dado de dano extra da sua <i>Marca do Caçador</i> aumenta de 1d6 para <strong>1d10</strong>."
    },
    {
        id: "cls-ran-18",
        title: "Caçador: Presa do Caçador",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Escolha uma opção (pode trocar após descanso):<ul><li><strong>Matador de Colossos:</strong> +1d8 de dano se o alvo já estiver ferido.</li><li><strong>Quebrador de Hordas:</strong> 1 ataque extra contra inimigo a 1,5m do alvo original.</li></ul>"
    },
    {
        id: "cls-ran-19",
        title: "Caçador: Conhecimento do Caçador",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Enquanto um alvo estiver marcado por sua <i>Marca do Caçador</i>, você sabe instantaneamente se ele possui <strong>Imunidades, Resistências ou Vulnerabilidades</strong> e quais são elas."
    },
    {
        id: "cls-ran-20",
        title: "Caçador: Defesa Superior",
        parentClass: "Patrulheiro",
        category: "class",
        meta: "Subclasse Nível 15 | Reação",
        text: "Ao sofrer dano, use sua Reação para ganhar <strong>Resistência</strong> contra aquele ataque e contra todos os outros ataques do mesmo tipo de dano até o fim do turno atual."
    },
    // =================================================================
    // --- CLASSE: LADINO ---
    // =================================================================
    {
        id: "cls-lad-1",
        title: "Visão Geral",
        parentClass: "Ladino",
        category: "class",
        text: "Mestres da furtividade e especialistas em encontrar soluções para qualquer problema. Os Ladinos priorizam ataques precisos em vez de força bruta, explorando as fraquezas dos inimigos e usando sua agilidade para entrar e sair de perigos sem serem vistos."
    },
    {
        id: "cls-lad-2",
        title: "Traços Principais",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Destreza</li><li><strong>Dado de Vida:</strong> d8 por nível</li><li><strong>Salvaguardas:</strong> Destreza e Inteligência</li><li><strong>Perícias:</strong> Escolha 4 (Acrobacia, Atletismo, Atuação, Enganação, Furtividade, Intimidação, Intuição, Investigação, Percepção, Persuasão ou Prestidigitação)</li><li><strong>Armas:</strong> Simples, Armas de Acuidade (Finesse) e de Distância</li><li><strong>Ferramentas:</strong> Ferramentas de Ladrão</li><li><strong>Armaduras:</strong> Leves</li></ul>"
    },
    {
        id: "cls-lad-3",
        title: "Especialização (Expertise)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 1 e 6",
        text: "Escolha duas perícias proficientes (ou uma e as Ferramentas de Ladrão). Seu bônus de proficiência é <strong>dobrado</strong> nelas. No nível 6, escolha mais duas."
    },
    {
        id: "cls-lad-4",
        title: "Ataque Furtivo (Sneak Attack)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 1",
        text: "Uma vez por turno, cause <strong>1d6 de dano extra</strong> se acertar um ataque com arma de Acuidade ou de Distância e tiver <strong>Vantagem</strong>.<ul><li><strong>Sem Vantagem:</strong> Você ainda pode causar o dano se um aliado estiver a 1,5m do alvo e você não tiver Desvantagem.</li><li><strong>Evolução:</strong> O dano aumenta conforme a tabela (ex: 2d6 no Nív 3, 3d6 no Nív 5).</li></ul>"
    },
    {
        id: "cls-lad-5",
        title: "Gíria de Ladrão (Thieves' Cant)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 1",
        text: "Você conhece a linguagem secreta dos criminosos e um idioma adicional à sua escolha."
    },
    {
        id: "cls-lad-6",
        title: "Maestria em Armas",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 1",
        text: "Você domina as propriedades de maestria de <strong>dois tipos de armas</strong> (ex: Adaga e Arco Curto). Pode trocar as escolhas após um Descanso Longo."
    },
    {
        id: "cls-lad-7",
        title: "Ação Astuta (Cunning Action)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 2 | Ação Bônus",
        text: "Sua agilidade permite que você realize as ações de <strong>Disparada, Desengajar ou Esconder-se</strong> como uma Ação Bônus em cada um de seus turnos."
    },
    {
        id: "cls-lad-8",
        title: "Mira Estável (Steady Aim)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 3 | Ação Bônus",
        text: "Como ação bônus, ganhe <strong>Vantagem</strong> no seu próximo ataque neste turno. <strong>Restrição:</strong> Você só pode usar isso se não tiver se movido, e seu deslocamento vira 0 até o fim do turno."
    },
    {
        id: "cls-lad-9",
        title: "Golpe Astuto (Cunning Strike)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 5 | Nova Mecânica 2024",
        text: "Ao usar seu Ataque Furtivo, você pode <strong>trocar</strong> dados de dano (d6) por efeitos. A CD é 8 + Des + Prof.<ul><li><strong>Envenenar (Custo 1d6):</strong> Alvo faz Save de Con ou fica Envenenado por 1 min. (Requer Kit de Venenos).</li><li><strong>Tropeçar (Custo 1d6):</strong> Alvo Grande ou menor faz Save de Des ou fica Caído.</li><li><strong>Recuar (Custo 1d6):</strong> Você se move até metade do seu deslocamento sem provocar ataques de oportunidade.</li></ul>"
    },
    {
        id: "cls-lad-10",
        title: "Esquiva Sobrenatural",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 5 | Reação",
        text: "Quando um atacante que você pode ver atinge você, use sua reação para <strong>reduzir o dano pela metade</strong>."
    },
    {
        id: "cls-lad-11",
        title: "Evasão",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 7",
        text: "Em efeitos de área que pedem Save de Destreza: sucesso causa <strong>zero dano</strong> e falha causa apenas metade."
    },
    {
        id: "cls-lad-12",
        title: "Talento Confiável (Reliable Talent)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 7 | Atualizado 2024",
        text: "Sempre que fizer um teste de perícia ou ferramenta em que tenha proficiência, qualquer resultado <strong>9 ou menor no d20 conta como um 10</strong>."
    },
    {
        id: "cls-lad-13",
        title: "Golpe Astuto Aprimorado",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 11",
        text: "Você pode usar até <strong>dois efeitos</strong> de Golpe Astuto no mesmo Ataque Furtivo, pagando o custo de dados de cada um."
    },
    {
        id: "cls-lad-14",
        title: "Golpes Obscuros (Devious Strikes)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 14",
        text: "Novas opções poderosas para seu Golpe Astuto:<ul><li><strong>Atordoar (Custo 2d6):</strong> Save de Con ou o alvo só pode fazer Ação, Bônus ou Movimento (um dos três).</li><li><strong>Nocaute (Custo 6d6):</strong> Save de Con ou o alvo fica <strong>Inconsciente</strong> por 1 min.</li><li><strong>Ofuscar (Custo 3d6):</strong> Save de Des ou o alvo fica <strong>Cego</strong> até o fim do próximo turno dele.</li></ul>"
    },
    {
        id: "cls-lad-15",
        title: "Mente Escorregadia",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 15",
        text: "Sua mente é difícil de controlar. Você ganha proficiência em salvaguardas de <strong>Sabedoria e Carisma</strong>."
    },
    {
        id: "cls-lad-16",
        title: "Elusivo",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 18",
        text: "Você é tão esquivo que nenhuma jogada de ataque tem <strong>Vantagem</strong> contra você, a menos que você esteja Incapacitado."
    },
    {
        id: "cls-lad-17",
        title: "Talento Épico (Epic Boon)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 19",
        text: "Ganha um Talento de Dádiva Épica. Recomenda-se a <i>Dádiva do Espírito Noturno</i> (Invisibilidade em penumbra/escuridão)."
    },
    {
        id: "cls-lad-18",
        title: "Sorte Invejável (Stroke of Luck)",
        parentClass: "Ladino",
        category: "class",
        meta: "Nível 20",
        text: "Se você falhar em um teste de d20 (ataque ou perícia), você pode transformar o resultado em um <strong>20 Natural</strong>. Recupera em Descanso Curto ou Longo."
    },
    {
        id: "cls-lad-19",
        title: "Ladrão: Mãos Rápidas e Escalador",
        parentClass: "Ladino",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "<ul><li><strong>Mãos Rápidas:</strong> Ação Bônus para usar Ferramentas de Ladrão, bater carteiras ou usar a ação <strong>Utilizar Objeto/Item Mágico</strong>.</li><li><strong>Trabalho em Segundo Andar:</strong> Ganha velocidade de escalada e usa Destreza para calcular a distância de saltos.</li></ul>"
    },
    {
        id: "cls-lad-20",
        title: "Ladrão: Reflexos de Ladrão",
        parentClass: "Ladino",
        category: "class",
        meta: "Subclasse Nível 17",
        text: "Você pode realizar <strong>dois turnos</strong> durante a primeira rodada de qualquer combate. O primeiro turno ocorre na sua iniciativa normal e o segundo na sua iniciativa -10."
    },
    // =================================================================
    // --- CLASSE: FEITICEIRO ---
    // =================================================================
    {
        id: "cls-fei-1",
        title: "Visão Geral",
        parentClass: "Feiticeiro",
        category: "class",
        text: "Portadores de uma magia intrínseca, gravada em seu próprio ser. Seja por linhagem dracônica, exposição a planos exóticos ou uma anomalia mágica, o Feiticeiro não estuda a magia: ele É a magia. Seu desafio é aprender a controlar essa força bruta que clama para ser libertada."
    },
    {
        id: "cls-fei-2",
        title: "Traços Principais",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Carisma</li><li><strong>Dado de Vida:</strong> d6 por nível</li><li><strong>Salvaguardas:</strong> Constituição e Carisma</li><li><strong>Perícias:</strong> Escolha 2 (Arcana, Enganação, Intuição, Intimidação, Persuasão ou Religião)</li><li><strong>Armas:</strong> Simples</li><li><strong>Armaduras:</strong> Nenhuma</li></ul>"
    },
    {
        id: "cls-fei-3",
        title: "Conjuração (Spellcasting)",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 1",
        text: "Sua magia flui de dentro de você.<ul><li><strong>Truques:</strong> Começa com 4. Pode trocar um ao subir de nível.</li><li><strong>Magias Preparadas:</strong> Começa com 2 magias de nível 1. O número aumenta conforme a tabela (ex: 6 no nível 3).</li><li><strong>Atributo:</strong> Carisma define a CD e o ataque mágico.</li><li><strong>Foco:</strong> Usa um Foco Arcano (cristal, cajado, etc).</li></ul>"
    },
    {
        id: "cls-fei-4",
        title: "Feitiçaria Inata (Innate Sorcery)",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 1 | Ação Bônus",
        text: "Como ação bônus, você libera a magia fervilhante em seu sangue por 1 minuto. Enquanto ativa:<ul><li>A CD das suas magias de Feiticeiro aumenta em <strong>+1</strong>.</li><li>Você tem <strong>Vantagem</strong> nas jogadas de ataque de magias de Feiticeiro.</li><li>Uso: 2 vezes por Descanso Longo.</li></ul>"
    },
    {
        id: "cls-fei-5",
        title: "Fonte de Magia (Sorcery Points)",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 2 | Pontos de Feitiçaria",
        text: "Você ganha Pontos de Feitiçaria (SP) que podem ser usados para criar espaços de magia ou alimentar sua Metamagia.<ul><li><strong>Conversão:</strong> Pode gastar espaços de magia para ganhar SP (igual ao nível da magia) ou gastar SP para criar espaços de magia (até nível 5).</li><li>Recupera todos os pontos em um Descanso Longo.</li></ul>"
    },
    {
        id: "cls-fei-6",
        title: "Metamagia",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 2, 10 e 17",
        text: "Você aprende <strong>duas opções</strong> de Metamagia para alterar suas magias.<ul><li><strong>Magia Acelerada (2 SP):</strong> Muda o tempo de conjuração de 1 ação para Ação Bônus.</li><li><strong>Magia Duplicada (1 SP):</strong> Aumenta o nível efetivo de uma magia que atinge alvos extras.</li><li><strong>Magia Sutil (1 SP):</strong> Conjura sem componentes verbais ou somáticos.</li><li>Ganha mais opções nos níveis 10 e 17.</li></ul>"
    },
    {
        id: "cls-fei-7",
        title: "Restauração Feiticeira",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 5",
        text: "Ao finalizar um <strong>Descanso Curto</strong>, você recupera Pontos de Feitiçaria igual a <strong>metade do seu nível</strong> de Feiticeiro (1x por Descanso Longo)."
    },
    {
        id: "cls-fei-8",
        title: "Feitiçaria Encarnada",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 7",
        text: "Enquanto sua <strong>Feitiçaria Inata</strong> estiver ativa:<ul><li>Você pode usar até <strong>duas Metamagias</strong> na mesma magia.</li><li>Se não tiver usos de Feitiçaria Inata, pode gastar 2 SP para ativá-la novamente.</li></ul>"
    },
    {
        id: "cls-fei-9",
        title: "Talento Épico (Epic Boon)",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 19",
        text: "Ganha um Talento de Dádiva Épica. Recomenda-se a <i>Dádiva da Viagem Dimensional</i> ou <i>Dádiva da Memória Arcana</i>."
    },
    {
        id: "cls-fei-10",
        title: "Apoteose Arcana",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Nível 20",
        text: "Enquanto sua Feitiçaria Inata estiver ativa, você pode usar uma Metamagia por turno sem gastar Pontos de Feitiçaria."
    },
    {
        id: "cls-fei-11",
        title: "Dracônico: Resiliência Dracônica",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "O sangue do dragão fortalece seu corpo:<ul><li>Seu HP máximo aumenta em 3, e sobe +1 por nível.</li><li>Enquanto sem armadura, sua CA base é <strong>10 + Mod. Destreza + Mod. Carisma</strong>.</li></ul>"
    },
    {
        id: "cls-fei-12",
        title: "Dracônico: Afinidade Elemental",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Subclasse Nível 6",
        text: "Escolha um tipo de dano: Ácido, Frio, Fogo, Elétrico ou Veneno.<ul><li>Você ganha <strong>Resistência</strong> a esse tipo de dano.</li><li>Ao causar dano desse tipo com uma magia, adicione seu <strong>Mod. Carisma</strong> ao dano.</li></ul>"
    },
    {
        id: "cls-fei-13",
        title: "Dracônico: Asas de Dragão",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Subclasse Nível 14 | Ação Bônus",
        text: "Você pode manifestar asas dracônicas. Ganha <strong>velocidade de voo de 18m</strong> por 1 hora. Se acabar, pode gastar 3 SP para usar de novo sem descansar."
    },
    {
        id: "cls-fei-14",
        title: "Dracônico: Companheiro Dragão",
        parentClass: "Feiticeiro",
        category: "class",
        meta: "Subclasse Nível 18",
        text: "Você pode conjurar a magia <i>Invocar Dragão</i> uma vez por dia <strong>sem gastar espaço de magia</strong>. Se o fizer, a magia não exige Concentração e dura 1 minuto."
    },
    // =================================================================
    // --- CLASSE: BRUXO (WARLOCK) ---
    // =================================================================
    {
        id: "cls-bru-1",
        title: "Visão Geral",
        parentClass: "Bruxo",
        category: "class",
        text: "Buscadores de conhecimento oculto que tecem pactos com entidades poderosas. Diferente dos magos que estudam ou feiticeiros que nascem com poder, o Bruxo barganha por ele. Seus patronos variam de demônios e fadas a entidades insondáveis do Além, cada um oferecendo segredos arcanos em troca de serviços ou lealdade."
    },
    {
        id: "cls-bru-2",
        title: "Traços Principais",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Carisma</li><li><strong>Dado de Vida:</strong> d8 por nível</li><li><strong>Salvaguardas:</strong> Sabedoria e Carisma</li><li><strong>Perícias:</strong> Escolha 2 (Arcana, Enganação, História, Intimidação, Investigação, Natureza ou Religião)</li><li><strong>Armas:</strong> Simples</li><li><strong>Armaduras:</strong> Leves</li><li><strong>Equipamento Inicial:</strong> (A) Armadura de Couro, Foice, 2 Adagas, Foco Arcano, Livro de Saber Oculto, Pacote de Estudioso e 15 PO ou (B) 100 PO.</li></ul>"
    },
    {
        id: "cls-bru-3",
        title: "Invocações Místicas",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 1 | Essência da Classe",
        text: "Você descobre fragmentos de conhecimento proibido que concedem habilidades únicas.<ul><li><strong>Início:</strong> Você começa com <strong>uma invocação</strong> no Nível 1.</li><li><strong>Evolução:</strong> O número aumenta conforme o nível (2 no Nív 2, 3 no Nív 3, até 10 no Nív 18).</li><li><strong>Troca:</strong> Sempre que subir de nível, você pode trocar uma invocação por outra.</li><li><strong>Dádivas:</strong> As antigas 'Dádivas do Pacto' (Lâmina, Corrente, Tomo) agora são invocações disponíveis desde o nível 1.</li></ul>"
    },
    {
        id: "cls-bru-4",
        title: "Magia de Pacto (Pact Magic)",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 1",
        text: "Diferente de outras classes, seus espaços de magia são únicos:<ul><li><strong>Nível Máximo:</strong> Seus espaços são sempre do nível mais alto que você pode conjurar (conforme a tabela).</li><li><strong>Recuperação:</strong> Você recupera todos os espaços gastos em um <strong>Descanso Curto ou Longo</strong>.</li><li><strong>Atributo:</strong> Carisma define a CD e o bônus de ataque.</li></ul>"
    },
    {
        id: "cls-bru-5",
        title: "Astúcia Mágica (Magical Cunning)",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 2 | Ritual de 1 Minuto",
        text: "Você pode realizar um rito esotérico por 1 minuto para recuperar <strong>metade dos seus espaços de magia de pacto</strong> (arredondado para cima). Recupera o uso desta habilidade após um Descanso Longo."
    },
    {
        id: "cls-bru-6",
        title: "Contatar Patrono",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 9",
        text: "Você agora pode se comunicar diretamente com seu patrono. Você sempre tem a magia <i>Contatar Outro Plano</i> preparada. Você pode conjurá-la <strong>sem gastar espaço de magia</strong> e passa automaticamente no teste de Inteligência da magia (1x por Descanso Longo)."
    },
    {
        id: "cls-bru-7",
        title: "Arcano Místico (Mystic Arcanum)",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 11, 13, 15 e 17",
        text: "Seu patrono lhe concede segredos de alta magia que não usam espaços comuns. Escolha uma magia de cada nível (6º, 7º, 8º e 9º). Você pode conjurar cada uma <strong>uma vez por Descanso Longo</strong> sem gastar espaços de magia."
    },
    {
        id: "cls-bru-8",
        title: "Mestre Místico (Eldritch Master)",
        parentClass: "Bruxo",
        category: "class",
        meta: "Nível 20",
        text: "Sua conexão com seu patrono é absoluta. Sempre que usar sua <strong>Astúcia Mágica</strong>, você agora recupera <strong>TODOS</strong> os seus espaços de magia de pacto de uma vez."
    },
    {
        id: "cls-bru-9",
        title: "Invocação: Pacto da Lâmina",
        parentClass: "Bruxo",
        category: "class",
        meta: "Invocação Nível 1 | Ação Bônus",
        text: "Conjura uma arma mágica ou vincula-se a uma existente.<ul><li><strong>Char:</strong> Use <strong>Carisma</strong> para ataques e dano no lugar de Força/Des.</li><li><strong>Dano:</strong> Pode escolher causar dano Necrótico, Psíquico ou Radiante no acerto.</li><li><strong>Proficiência:</strong> Você é proficiente com a arma enquanto vinculada.</li></ul>"
    },
    {
        id: "cls-bru-10",
        title: "Invocação: Pacto do Tomo",
        parentClass: "Bruxo",
        category: "class",
        meta: "Invocação Nível 1",
        text: "Um livro de sombras que concede:<ul><li><strong>Magias Extras:</strong> Escolha 3 truques e 2 magias de nível 1 (Rituais) de qualquer lista. Eles contam como magias de Bruxo para você.</li><li><strong>Foco:</strong> O livro serve como foco arcano.</li></ul>"
    },
    {
        id: "cls-bru-11",
        title: "Invocação: Pacto da Corrente",
        parentClass: "Bruxo",
        category: "class",
        meta: "Invocação Nível 1",
        text: "Você aprende <i>Encontrar Familiar</i> e pode conjurá-lo como uma Ação Mágica sem gastar espaços.<ul><li><strong>Formas Especiais:</strong> Pode escolher formas como Diabrete, Pseudodragão, Quasit ou Esqueleto.</li><li><strong>Ataque:</strong> Quando você ataca, pode trocar um de seus ataques para que o familiar use a Reação dele para atacar.</li></ul>"
    },
    {
        id: "cls-bru-12",
        title: "Invocação: Explosão Agonizante",
        parentClass: "Bruxo",
        category: "class",
        meta: "Requisito: Truque de Dano",
        text: "Adicione seu <strong>Modificador de Carisma</strong> ao dano de um truque de bruxo que cause dano (geralmente <i>Explosão Mística</i>)."
    },
    {
        id: "cls-bru-13",
        title: "Invocação: Visão do Diabo",
        parentClass: "Bruxo",
        category: "class",
        meta: "Invocação",
        text: "Você enxerga normalmente na <strong>escuridão mágica e não-mágica</strong> até 36 metros."
    },
    {
        id: "cls-bru-14",
        title: "Invocação: Mente Mística",
        parentClass: "Bruxo",
        category: "class",
        meta: "Invocação",
        text: "Você tem <strong>Vantagem</strong> em salvaguardas de Constituição para manter <strong>Concentração</strong> em magias."
    },
    {
        id: "cls-bru-15",
        title: "Patrono: O Corruptor (Fiend)",
        parentClass: "Bruxo",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Seu pacto é com um senhor das profundezas.<ul><li><strong>Bênção do Obscuro:</strong> Ao reduzir um inimigo a 0 PV (ou estar a 3m de quem o fez), ganhe <strong>PV Temporários</strong> iguais a Carisma + Nível de Bruxo.</li><li><strong>Sorte do Próprio Corruptor (Nív 6):</strong> Adicione <strong>1d10</strong> em um teste de habilidade ou salvaguarda após ver o resultado (1x/Descanso Curto).</li></ul>"
    },
    {
        id: "cls-bru-16",
        title: "Corruptor: Resiliência Infernal",
        parentClass: "Bruxo",
        category: "class",
        meta: "Subclasse Nível 10",
        text: "Após cada descanso, escolha um tipo de dano. Você ganha <strong>Resistência</strong> a esse dano até escolher outro. Dano de armas mágicas ou de prata ignora isso."
    },
    {
        id: "cls-bru-17",
        title: "Corruptor: Arremessar pelo Inferno",
        parentClass: "Bruxo",
        category: "class",
        meta: "Subclasse Nível 14",
        text: "Ao acertar um ataque, o alvo faz Save de Carisma. Falha: some e viaja por paisagens de pesadelo. No fim do seu próximo turno, ele volta e sofre <strong>8d10 de dano Psíquico</strong> (se não for um corruptor) e fica Incapacitado (1x/Descanso Longo)."
    },
    // =================================================================
    // --- CLASSE: MAGO ---
    // =================================================================
    {
        id: "cls-mag-1",
        title: "Visão Geral",
        parentClass: "Mago",
        category: "class",
        text: "Estudiosos supremos cujos poderes derivam do exame exaustivo das leis da magia. Onde outros veem mistério, o Mago vê fórmulas, geometria e teoria. Equipados com seus livros de magias, eles buscam segredos perdidos em ruínas antigas para dominar o tecido da realidade."
    },
    {
        id: "cls-mag-2",
        title: "Traços Principais",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 1",
        text: "<ul><li><strong>Atributo Primário:</strong> Inteligência</li><li><strong>Dado de Vida:</strong> d6 por nível</li><li><strong>Salvaguardas:</strong> Inteligência e Sabedoria</li><li><strong>Perícias:</strong> Escolha 2 (Arcana, História, Intuição, Investigação, Medicina, Natureza ou Religião)</li><li><strong>Armas:</strong> Simples</li><li><strong>Armaduras:</strong> Nenhuma</li><li><strong>Equipamento Inicial:</strong> (A) 2 Adagas, Foco Arcano (Cajado), Robe, Livro de Magias, Pacote de Estudioso e 5 PO ou (B) 55 PO.</li></ul>"
    },
    {
        id: "cls-mag-3",
        title: "Livro de Magias (Spellbook)",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 1 | Essencial",
        text: "O repositório de todo o seu conhecimento arcano.<ul><li><strong>Início:</strong> Contém 6 magias de nível 1 à sua escolha.</li><li><strong>Evolução:</strong> A cada nível de Mago, você adiciona <strong>2 novas magias</strong> ao livro gratuitamente.</li><li><strong>Cópia:</strong> Você pode transcrever magias de pergaminhos ou outros livros. Custa <strong>2 horas e 50 PO</strong> por nível da magia.</li><li><strong>Foco:</strong> Você pode usar o próprio livro como foco arcano para suas magias.</li></ul>"
    },
    {
        id: "cls-mag-4",
        title: "Conjuração (Spellcasting)",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 1",
        text: "Você prepara magias do seu livro para usar durante o dia.<ul><li><strong>Truques:</strong> Começa com 3. Pode trocar um ao terminar um Descanso Longo.</li><li><strong>Magias Preparadas:</strong> Escolha do seu livro um número de magias conforme a tabela da classe.</li><li><strong>Atributo:</strong> Inteligência define a CD e o bônus de ataque.</li></ul>"
    },
    {
        id: "cls-mag-5",
        title: "Adepto de Rituais",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 1",
        text: "Você pode conjurar qualquer magia do seu livro que possua a marca <strong>Ritual</strong> sem precisar prepará-la, desde que tenha o livro em mãos. Isso não gasta espaços de magia, mas adiciona 10 minutos ao tempo de conjuração."
    },
    {
        id: "cls-mag-6",
        title: "Recuperação Arcana",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 1 | 1x por dia",
        text: "Ao finalizar um <strong>Descanso Curto</strong>, você pode recuperar espaços de magia gastos. O nível somado dos espaços deve ser igual ou menor que <strong>metade do seu nível de Mago</strong> (arredondado para cima). Espaços de nível 6 ou superior não podem ser recuperados assim."
    },
    {
        id: "cls-mag-7",
        title: "Estudioso (Scholar)",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 2",
        text: "Sua especialização acadêmica floresce. Escolha uma das seguintes perícias em que você seja proficiente: <strong>Arcana, História, Investigação, Medicina, Natureza ou Religião</strong>. Você ganha <strong>Especialização</strong> (dobra o bônus) nela."
    },
    {
        id: "cls-mag-8",
        title: "Memorizar Magia",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 5 | Nova em 2024",
        text: "Sempre que terminar um <strong>Descanso Curto</strong>, você pode estudar seu livro e <strong>trocar uma</strong> de suas magias preparadas por outra magia de nível equivalente que esteja no seu livro."
    },
    {
        id: "cls-mag-9",
        title: "Maestria em Magia",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 18",
        text: "Escolha uma magia de nível 1 e uma de nível 2 do seu livro que tenham tempo de execução de 1 ação. Você agora pode conjurá-las em seu nível mais baixo <strong>sem gastar espaços de magia</strong>. Você pode trocar essas escolhas após um Descanso Longo."
    },
    {
        id: "cls-mag-10",
        title: "Talento Épico (Epic Boon)",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 19",
        text: "Ganha um Talento de Dádiva Épica. Recomenda-se a <i>Dádiva da Memória Arcana</i> ou <i>Dádiva da Recuperação de Magia</i>."
    },
    {
        id: "cls-mag-11",
        title: "Magias de Assinatura",
        parentClass: "Mago",
        category: "class",
        meta: "Nível 20",
        text: "Escolha duas magias de 3º nível no seu livro. Você sempre as tem preparadas. Você pode conjurar cada uma delas em 3º nível <strong>uma vez sem gastar espaço</strong> (recupera em Descanso Curto ou Longo)."
    },
    {
        id: "cls-mag-12",
        title: "Evocador: Sábio da Evocação",
        parentClass: "Mago",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Você aprende duas magias de Evocação de nível 1 ou 2 gratuitamente. Além disso, sempre que ganhar acesso a um novo nível de círculos de magia, você pode adicionar <strong>uma magia de Evocação extra</strong> daquele nível ao seu livro gratuitamente."
    },
    {
        id: "cls-mag-13",
        title: "Evocador: Truque Potente",
        parentClass: "Mago",
        category: "class",
        meta: "Subclasse Nível 3",
        text: "Seus truques de dano afetam até quem escapa. Se você errar o ataque ou o alvo passar no salvamento do truque, o alvo sofre <strong>metade do dano</strong> do truque, mas nenhum outro efeito adicional."
    },
    {
        id: "cls-mag-14",
        title: "Evocador: Esculpir Magias",
        parentClass: "Mago",
        category: "class",
        meta: "Subclasse Nível 6",
        text: "Você cria bolsões de segurança em suas explosões. Ao conjurar uma magia de Evocação em área, escolha criaturas ali (até <strong>1 + nível da magia</strong>). Elas <strong>passam automaticamente</strong> no save e não sofrem dano algum."
    },
    {
        id: "cls-mag-15",
        title: "Evocador: Evocação Poderosa",
        parentClass: "Mago",
        category: "class",
        meta: "Subclasse Nível 10",
        text: "Sua mente aguçada aumenta a força de seus feitiços. Adicione seu <strong>Modificador de Inteligência</strong> a uma rolagem de dano de qualquer magia de Mago da escola de Evocação."
    },
    {
        id: "cls-mag-16",
        title: "Evocador: Sobrecarga (Overchannel)",
        parentClass: "Mago",
        category: "class",
        meta: "Subclasse Nível 14",
        text: "Ao conjurar uma magia de Mago (nível 1 a 5) que cause dano, você pode causar o <strong>dano máximo</strong> possível.<ul><li><strong>1º uso:</strong> Sem penalidade.</li><li><strong>Reuso:</strong> Sofre <strong>2d12 de dano Necrótico</strong> por nível da magia imediatamente após o uso. Esse dano aumenta em 1d12 a cada reuso subsequente antes de um Descanso Longo e ignora resistências.</li></ul>"
    },
]