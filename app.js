const STORAGE_KEY = 'condominio_quebec_db_v16';

const SEED_DB = {
  condominio: {
    nome: 'Condomínio Residencial Quebec',
    cnpj: '20.410.595/0001-60',
    endereco: 'Rua Ênio Pereira de Carvalho, 383',
    logo_url: '',
    galeria: [
      {
        id: 'gal_1',
        titulo: 'Portaria Principal — Residencial Quebec',
        legenda: 'Fachada oficial no padrão verde claro e branco',
        imagem: 'entrada-real-quebec.jpg'
      }
    ]
  },
  avisos: [
    {
      id: 'av_avcb',
      titulo: 'AVCB Atualizado — Auto de Vistoria do Corpo de Bombeiros (Validade 5 Anos)',
      mensagem: 'O Condomínio Residencial Quebec está com o AVCB (Nº PRJ20260161622) devidamente regularizado e emitido pelo Corpo de Bombeiros Militar de Minas Gerais, certificando 8.077,09 m² de área liberada com validade de 5 anos (até 19/08/2031).',
      data: 'Validade: 5 Anos (Até 19/08/2031)',
      prioridade: 'Segurança & Bombeiros',
      autor: 'Administração'
    },
    {
      id: 'av_1',
      titulo: 'Dedetização Semestral nas Áreas Comuns (Feito em Outubro)',
      mensagem: 'O serviço completo de dedetização e controle de pragas do condomínio possui periodicidade SEMESTRAL, tendo sido realizado em Outubro em todas as áreas externas, caixas de passagem, ralos e jardins dos Blocos 01 ao 11.',
      data: 'Periodicidade Semestral • Feito em Outubro',
      prioridade: 'Dedetização & Saúde',
      autor: 'Administração'
    },
    {
      id: 'av_extintores',
      titulo: 'Recarga de Extintores — Manutenção Anual (Novembro)',
      mensagem: 'A recarga e manutenção preventiva de todos os extintores de incêndio (Pó Químico ABC e CO2) dos Blocos 01 ao 11 é realizada ANUALMENTE no mês de Novembro.',
      data: 'Manutenção Anual • Novembro',
      prioridade: 'Prevenção de Incêndio',
      autor: 'Administração'
    },
    {
      id: 'av_2',
      titulo: 'Limpeza Preventiva das Caixinhas de Esgoto e Gordura',
      mensagem: 'A equipe de manutenção realiza a limpeza periódica das caixinhas de esgoto e gordura de todos os blocos (01 ao 11). Solicitamos não descartar óleo de cozinha, restos de alimentos ou lenços umedecidos nas tubulações.',
      data: 'Manutenção Preventiva • Blocos 01 a 11',
      prioridade: 'Limpeza Caixa de Gordura',
      autor: 'Administração'
    },
    {
      id: 'av_3',
      titulo: 'Estacionamento e Garagens (Veículos, Motocicletas e Bicicletas)',
      mensagem: 'Conforme o Regimento Interno (Art. 17 a 20) e deliberação em Assembleia, as vagas de garagem demarcadas destinam-se ao estacionamento de veículos, motocicletas e também bicicletas (alocadas dentro dos limites da vaga respectiva de cada unidade). As áreas debaixo das escadas devem permanecer livres.',
      data: 'Regimento Interno em Vigor',
      prioridade: 'Estacionamento & Garagem',
      autor: 'Administração'
    }
  ],
  fechamentos: [
    {
      id: 'fech_1',
      mes_referencia: 'Fechamento Mensal — Setembro / Outubro',
      responsavel: 'Síndico Celson Batista Rodrigues Filho',
      data_publicacao: '30/10',
      observacoes: 'Balancete oficial das contas Sicoob e Cora (Saldo inicial R$ 6.736,94 • Receitas R$ 19.802,20 • Despesas e Obras R$ 19.826,62 • Saldo final R$ 8.462,52).',
      arquivo_nome: 'Fechamento_Mensal_Condominio_Quebec.pdf',
      arquivo_url: 'fechamento-mensal-quebec.pdf',
      planilha_url: 'fechamento-mensal-quebec.xlsx'
    }
  ],
  atas: [
    {
      id: 'ata_real_2025',
      titulo: 'Ata da Assembleia Geral Extraordinária — 28/08/2025',
      tipo: 'Assembleia Geral Extraordinária',
      data: '28/08/2025',
      numero: 'Registro Cartório Nº 31691 • Livro B-88 Fls. 78/79',
      responsavel: 'Síndico Celson Batista Rodrigues Filho & Sub-Síndico Sidney Barcelos Loiola',
      resumo: 'Documento oficial registrado no 1º Ofício de Registro de Títulos e Documentos de Itaúna/MG: eleição por unanimidade do Síndico e Sub-Síndico, regularização bancária, normas de estacionamento (veículos, motos e bicicletas) e autorização de manutenções.',
      arquivo_nome: 'Ata_Assembleia_28_08_2025_Registrada_Cartorio.pdf',
      arquivo_url: 'ata-assembleia-28-08-2025.pdf'
    },
    {
      id: 'regimento_interno_quebec',
      titulo: 'Regimento Interno Oficial — Condomínio Residencial Quebec',
      tipo: 'Regimento Interno',
      data: 'Registrado em Cartório (20/06/2014)',
      numero: 'Cartório RTDPJ Itaúna/MG • Protocolo Nº 23121 • Registro Nº 21712 • Livro A-21 Pág. 167',
      responsavel: 'Condomínio Residencial Quebec',
      resumo: 'Regulamento Interno completo do Condomínio Residencial Quebec: direitos e deveres dos condôminos, regras de silêncio e convivência, uso do Salão de Festas e Área de Lazer (Art. 31), uso das vagas de estacionamento para carros, motos e bicicletas (Art. 17 a 20) e normas sobre animais domésticos.',
      arquivo_nome: 'Regimento_Interno_Condominio_Quebec.pdf',
      arquivo_url: 'regimento-interno-quebec.pdf'
    }
  ],
  melhorias: [
    {
      id: 'mel_avcb_2026',
      titulo: 'AVCB Atualizado — Auto de Vistoria do Corpo de Bombeiros (Validade 5 Anos)',
      categoria: 'Manutenção Preventiva',
      status: 'Concluído',
      data: 'Validade: 5 Anos (Até 19/08/2031)',
      descricao: 'Certificação oficial emitida pelo Corpo de Bombeiros Militar de Minas Gerais (AVCB Nº PRJ20260161622 • Chave 1A07-F31B-C188-0CD4), atestando que os 8.077,09 m² do Condomínio Residencial Quebec cumprem todas as normas estaduais de Segurança Contra Incêndio e Pânico (PSCIP).',
      destaque_nota: '🚒 AVCB Atualizado — Validade de 5 anos (Emitido em 19/08/2026 • Válido até 19/08/2031).',
      imagem: 'mel-avcb-bombeiros.jpg',
      fotos: [
        { url: 'mel-avcb-bombeiros.jpg', fase: '', legenda: 'Certificado oficial AVCB — Corpo de Bombeiros Militar de Minas Gerais (Validade até 19/08/2031).' }
      ]
    },
    {
      id: 'mel_lixeira_2025',
      titulo: 'Revitalização da Lixeira Coletiva',
      categoria: 'Revitalização & Obras',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Reforma e revitalização completa da lixeira coletiva: retirada de entulhos acumulados, pintura externa em cinza escuro, nova porta metálica sinalizada ("Depósito de Lixo — Proibido Colocar Entulho"), construção de muro branco de proteção visual, suporte para saquinhos e jardim.',
      destaque_nota: 'Antes e Depois: organização total, higiene e fim do descarte irregular.',
      imagem: 'mel-lixeira-depois.jpg',
      fotos: [
        { url: 'mel-lixeira-antes.jpg', fase: 'Antes', legenda: 'Antes: Área aberta com acúmulo de madeira, papelão e entulhos.' },
        { url: 'mel-lixeira-depois.jpg', fase: 'Depois', legenda: 'Depois: Depósito revitalizado, pintado, sinalizado e protegido por muro novo.' }
      ]
    },
    {
      id: 'mel_lazer_2025',
      titulo: 'Revitalização da Área de Lazer',
      categoria: 'Revitalização & Obras',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Revitalização completa do Salão de Festas e espaço gourmet: remoção das pichações, nova pintura, instalação de grades de proteção e estruturação total. Agora disponibilizamos aos moradores uma área completa, equipada com churrasqueira, freezer, televisão, fogão e outros itens!',
      destaque_nota: '✨ Agora disponibilizamos uma área de lazer completa com churrasqueira, freezer, televisão, fogão e outros!',
      imagem: 'mel-lazer-depois-obra.jpg',
      fotos: [
        { url: 'mel-lazer-antes.jpg', fase: 'Antes', legenda: 'Antes: Paredes da churrasqueira e área de lazer com pichações.' },
        { url: 'mel-lazer-depois-obra.jpg', fase: 'Depois', legenda: 'Depois: Área revitalizada, pintada e equipada com churrasqueira, freezer, televisão e outros.' }
      ]
    },
    {
      id: 'mel_grama_2025',
      titulo: 'Projeto Grama Mais Verde',
      categoria: 'Jardinagem & Paisagismo',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Implantação do Projeto Grama Mais Verde nos taludes e jardins do Condomínio Residencial Quebec: aquisição dos paletes de grama natural, plantio nos barrancos, irrigação diária e placas de preservação ("Não Pise na Grama").',
      destaque_nota: 'Mais verde, valorização visual e conservação das áreas comuns.',
      imagem: 'mel-grama-depois-talude.jpg',
      fotos: [
        { url: 'mel-grama-depois-talude.jpg', fase: '', legenda: 'Gramado verdinho e fechado nos taludes do condomínio.' },
        { url: 'mel-grama-depois-placa.jpg', fase: '', legenda: 'Cuidado com o gramado e placa educativa "Não Pise na Grama".' },
        { url: 'mel-grama-durante-irrigacao.jpg', fase: '', legenda: 'Irrigação e cuidado diário com a grama.' },
        { url: 'mel-grama-antes-plantio.jpg', fase: '', legenda: 'Etapa de assentamento dos tapetes de grama.' },
        { url: 'mel-grama-antes-paletes.jpg', fase: '', legenda: 'Chegada dos paletes de grama natural no condomínio.' }
      ]
    },
    {
      id: 'mel_parquinho_2025',
      titulo: 'Revitalização do Parquinho Infantil',
      categoria: 'Revitalização & Obras',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Revitalização e manutenção dos brinquedos do parquinho infantil: estrutura de madeira com escorregador, rampa de escalada, ponte, balanços e fixação com concreto do gira-gira azul.',
      destaque_nota: 'Mais segurança e lazer para as crianças do condomínio.',
      imagem: 'mel-parquinho-antes-madeira.jpg',
      fotos: [
        { url: 'mel-parquinho-antes-madeira.jpg', fase: '', legenda: 'Parquinho infantil de madeira com escorregador e ponte.' },
        { url: 'mel-parquinho-antes-estrutura.jpg', fase: '', legenda: 'Estrutura completa com rampa de escalada e balanços.' },
        { url: 'mel-parquinho-durante-giragira.jpg', fase: '', legenda: 'Fixação da base de concreto do gira-gira azul e balanços.' }
      ]
    },
    {
      id: 'mel_extintores_2025',
      titulo: 'Troca e Recarga de Extintores (Manutenção Anual — Novembro)',
      categoria: 'Manutenção Preventiva',
      status: 'Concluído',
      data: 'Anual • Novembro',
      descricao: 'Manutenção preventiva anual de segurança contra incêndio realizada no mês de Novembro: retirada dos extintores antigos, higienização dos abrigos nos blocos e instalação dos extintores recarregados, lacrados e inspecionados pelo INMETRO (Pó Químico Seco ABC e CO2).',
      destaque_nota: '📅 Recarga de Extintores: Manutenção ANUAL realizada em NOVEMBRO.',
      imagem: 'mel-extintores-depois-novos.jpg',
      fotos: [
        { url: 'mel-extintores-antes-caixa.jpg', fase: 'Antes', legenda: 'Antes: Abrigo precisando de higienização e extintor antigo.' },
        { url: 'mel-extintores-depois-novos.jpg', fase: 'Depois', legenda: 'Depois: Chegada dos novos extintores lacrados (ABC e CO2).' },
        { url: 'mel-extintores-antes-antigo.jpg', fase: 'Antes', legenda: 'Antes: Retirada dos extintores antigos para substituição.' }
      ]
    },
    {
      id: 'mel_bloco2_2025',
      titulo: 'Pintura do Bloco 02 (Em breve pintaremos os outros blocos)',
      categoria: 'Revitalização & Obras',
      status: 'Em Andamento',
      data: 'Desde 2025 • Cronograma Contínuo',
      descricao: 'Revitalização da pintura externa e lateral do Bloco 02 no padrão verde e branco do Residencial Quebec, acompanhada da nova placa identificadora "02 BLOCO".',
      destaque_nota: '📌 Importante: Pintura do Bloco 02 realizada — em breve pintaremos os outros blocos!',
      imagem: 'mel-bloco2-frente.jpg',
      fotos: [
        { url: 'mel-bloco2-frente.jpg', fase: '', legenda: 'Fachada frontal do Bloco 02 pintada em verde e branco com placa nova.' },
        { url: 'mel-bloco2-lateral.jpg', fase: '', legenda: 'Pintura lateral do Bloco 02 concluída.' }
      ]
    },
    {
      id: 'mel_iluminacao_2025',
      titulo: 'Melhorias na Iluminação do Condomínio',
      categoria: 'Revitalização & Obras',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Instalação e manutenção de refletores LED no topo dos postes de iluminação dos pátios, corredores externos e áreas de estacionamento, garantindo mais claridade e segurança à noite.',
      destaque_nota: 'Pátios e estacionamentos mais claros e seguros no período noturno.',
      imagem: 'mel-iluminacao-1.jpg',
      fotos: [
        { url: 'mel-iluminacao-1.jpg', fase: '', legenda: 'Instalação de novos refletores LED nos postes entre os blocos.' },
        { url: 'mel-iluminacao-2.jpg', fase: '', legenda: 'Manutenção elétrica nos postes próximos às garagens.' }
      ]
    },
    {
      id: 'mel_fechamento_bueiro_2025',
      titulo: 'Fechamento e Sinalização de Bueiro',
      categoria: 'Manutenção Preventiva',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Instalação de tela/grade metálica reforçada para fechamento seguro de bueiro no pátio, com pintura de demarcação em amarelo de segurança para evitar acidentes com pedestres, crianças e veículos.',
      destaque_nota: 'Prevenção de acidentes e sinalização visível na via interna.',
      imagem: 'mel-fechamento-bueiro.jpg',
      fotos: [
        { url: 'mel-fechamento-bueiro.jpg', fase: '', legenda: 'Fechamento de bueiro com grade metálica e pintura amarela de segurança.' }
      ]
    },
    {
      id: 'mel_caixas_gordura_2025',
      titulo: 'Limpeza das Caixinhas de Gordura',
      categoria: 'Manutenção Preventiva',
      status: 'Concluído',
      data: 'Desde 2025 • Manutenção Periódica',
      descricao: 'Execução periódica de abertura, higienização completa, retirada de resíduos sólidos e desobstrução das caixinhas de gordura dos blocos, evitando mau cheiro e retorno nas tubulações.',
      destaque_nota: 'Manutenção preventiva essencial para todos os blocos.',
      imagem: 'mel-caixa-gordura.jpg',
      fotos: [
        { url: 'mel-caixa-gordura.jpg', fase: '', legenda: 'Caixinha de gordura aberta e higienizada durante manutenção preventiva.' }
      ]
    },
    {
      id: 'mel_dedetizacao_2025',
      titulo: 'Dedetização do Condomínio (Semestral — Feito em Outubro)',
      categoria: 'Manutenção Preventiva',
      status: 'Concluído',
      data: 'Semestral • Feito em Outubro',
      descricao: 'Serviço profissional de dedetização e controle preventivo de pragas (baratas, formigas, escorpiões, insetos e roedores) realizado SEMESTRALMENTE com EPI completo nos ralos, caixas de passagem, jardins e áreas comuns dos Blocos 01 ao 11.',
      destaque_nota: '📅 Dedetização: Periodicidade SEMESTRAL — Realizado em OUTUBRO.',
      imagem: 'mel-dedetizacao-real-1.jpg',
      fotos: [
        { url: 'mel-dedetizacao-real-1.jpg', fase: '', legenda: 'Profissional executando a dedetização preventiva nas galerias e áreas comuns.' },
        { url: 'mel-dedetizacao-real-2.jpg', fase: '', legenda: 'Aplicação técnica diretamente nas caixas de passagem dos blocos.' },
        { url: 'mel-dedetizacao.jpg', fase: '', legenda: 'Prevenção de pragas para proteção da saúde e estrutura.' }
      ]
    },
    {
      id: 'mel_portaria_uniforme_2025',
      titulo: 'Portaria Diurna Uniformizada',
      categoria: 'Segurança & Portaria',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Padronização da portaria diurna e colaboradores com uniforme oficial verde ("Quebec Condomínio Residencial"), trazendo identificação imediata, organização e atendimento profissional.',
      destaque_nota: 'Equipe uniformizada e identificada na portaria diurna.',
      imagem: 'mel-portaria-uniforme.jpg',
      fotos: [
        { url: 'mel-portaria-uniforme.jpg', fase: '', legenda: 'Porteiro diurno uniformizado com a camisa oficial do Residencial Quebec.' },
        { url: 'mel-equipe-uniformizada.jpg', fase: '', legenda: 'Equipe uniformizada atuando na conservação do condomínio.' }
      ]
    },
    {
      id: 'mel_facial_portaria_2025',
      titulo: 'Reconhecimento Facial na Portaria e Controle de Acesso',
      categoria: 'Segurança & Portaria',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Modernização do controle de acesso na portaria com reconhecimento facial, manutenção do motor do portão eletrônico, instalação de caixas metálicas de proteção, câmeras e placas de segurança.',
      destaque_nota: 'Mais segurança e praticidade na entrada dos moradores.',
      imagem: 'mel-portao-manutencao.jpg',
      fotos: [
        { url: 'mel-portao-manutencao.jpg', fase: '', legenda: 'Manutenção do motor do portão e placas de sinalização na portaria.' },
        { url: 'mel-controle-caixa-aberta.jpg', fase: '', legenda: 'Instalação de caixa metálica protetora para equipamento de acesso.' },
        { url: 'mel-controle-caixa-fechada.jpg', fase: '', legenda: 'Caixa de proteção instalada na parede.' },
        { url: 'mel-extintores-depois-placas.jpg', fase: '', legenda: 'Novas câmeras e placas de sinalização para as áreas comuns.' }
      ]
    },
    {
      id: 'mel_decoracao_entrada_2025',
      titulo: 'Decoração da Entrada do Condomínio',
      categoria: 'Comunidade & Eventos',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Cuidado especial e ornamentação temática no jardim da entrada do condomínio, contando com iluminação em refletores verdes, personagens decorativos, decoração natalina e placa informativa da gestão.',
      destaque_nota: 'Entrada acolhedora e bem cuidada para moradores e visitantes.',
      imagem: 'mel-decoracao-entrada-1.jpg',
      fotos: [
        { url: 'mel-decoracao-entrada-1.jpg', fase: '', legenda: 'Decoração natalina diurna no jardim da entrada.' },
        { url: 'mel-decoracao-entrada-2.jpg', fase: '', legenda: 'Decoração especial iluminada à noite no jardim da entrada.' },
        { url: 'mel-grama-depois-natal.jpg', fase: '', legenda: 'Iluminação natalina noturna na entrada do Residencial Quebec.' }
      ]
    },
    {
      id: 'mel_semana_criancas_2025',
      titulo: 'Ação Semana das Crianças',
      categoria: 'Comunidade & Eventos',
      status: 'Concluído',
      data: 'Desde 2025',
      descricao: 'Comemoração especial da Semana das Crianças realizada para os pequenos moradores do Quebec: sessão de cinema no telão à noite, bolo confeitado, cachorro-quente, refrigerante, pintura facial, desenhos para colorir e saquinhos de lembrancinhas.',
      destaque_nota: 'Momento de alegria e confraternização para as crianças do condomínio.',
      imagem: 'mel-criancas-bolo.jpg',
      fotos: [
        { url: 'mel-criancas-bolo.jpg', fase: '', legenda: 'Comemoração com bolo e refrigerantes para as crianças.' },
        { url: 'mel-criancas-cinema.jpg', fase: '', legenda: 'Sessão de cinema no telão à noite.' },
        { url: 'mel-criancas-pipoca.jpg', fase: '', legenda: 'Crianças reunidas assistindo ao filme com lanche.' },
        { url: 'mel-criancas-lembrancinhas.jpg', fase: '', legenda: 'Saquinhos de doces e lembrancinhas preparados para as crianças.' },
        { url: 'mel-criancas-pintura-rosto.jpg', fase: '', legenda: 'Pintura facial artística de borboleta.' },
        { url: 'mel-criancas-pintura-heroi.jpg', fase: '', legenda: 'Pintura facial infantil.' },
        { url: 'mel-parquinho-depois-cercado.jpg', fase: '', legenda: 'Brincadeiras e pintura facial ao ar livre.' },
        { url: 'mel-criancas-desenhos.jpg', fase: '', legenda: 'Oficina de desenhos e pintura com canetinhas.' },
        { url: 'mel-criancas-jardim.jpg', fase: '', legenda: 'Registro das crianças na área verde do condomínio.' },
        { url: 'mel-lazer-fogao.jpg', fase: '', legenda: 'Preparo do cachorro-quente para a festa das crianças.' }
      ]
    }
  ],
  reclamacoes: [],
  servicos: []
};

let state = {
  condominio: { galeria: [], logo_url: '' },
  avisos: [],
  fechamentos: [],
  atas: [],
  melhorias: [],
  reclamacoes: [],
  servicos: [],
  currentMelhoriaFilter: 'Todas',
  currentServicoCat: 'Todas',
  isAdminLogged: false
};

document.addEventListener('DOMContentLoaded', async () => {
  renderBlocks11Grid();
  await loadDatabase();
  renderAll();
  if (window.location.hash === '#admin') {
    switchTab('admin');
  }
});

function renderBlocks11Grid() {
  const container = document.getElementById('blocksInteractiveGrid');
  if (!container) return;

  const blocos = Array.from({ length: 11 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `Bloco ${num}`;
  });

  container.innerHTML = blocos.map((nomeBloco, idx) => `
    <div class="block-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectBlockInfo('${nomeBloco}', this)">
      <strong>${nomeBloco}</strong>
      <span>Aptos 01 a 16</span>
    </div>
  `).join('');
}

function selectBlockInfo(blockName, el) {
  document.querySelectorAll('.block-pill-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  const banner = document.getElementById('blockDetailBanner');
  if (banner) {
    banner.innerHTML = `
      <span><strong>${escapeHtml(blockName)}:</strong> Apartamentos 01 ao 16 • Limpeza preventiva, caixinhas de esgoto e CFTV ativos.</span>
      <button class="btn btn-sm btn-outline" onclick="switchTab('reclamacoes')">Solicitar reparo</button>
    `;
  }
}

async function loadDatabase() {
  try {
    const res = await fetch('/api/bootstrap');
    if (res.ok) {
      const data = await res.json();
      state.condominio = data.condominio || SEED_DB.condominio;
      state.avisos = (data.avisos && data.avisos.length > 0) ? data.avisos : SEED_DB.avisos;
      state.fechamentos = (data.fechamentos && data.fechamentos.length > 0) ? data.fechamentos : SEED_DB.fechamentos;
      state.atas = (data.atas && data.atas.length >= 2) ? data.atas : SEED_DB.atas;
      state.melhorias = (data.melhorias && data.melhorias.length >= 15 && data.melhorias[0].fotos)
        ? data.melhorias
        : SEED_DB.melhorias;
      state.reclamacoes = data.reclamacoes || SEED_DB.reclamacoes;
      state.servicos = data.servicos || SEED_DB.servicos;
      saveLocalBackup();
      return;
    }
  } catch (e) {}

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.condominio = parsed.condominio || SEED_DB.condominio;
      state.avisos = (parsed.avisos && parsed.avisos.length > 0) ? parsed.avisos : SEED_DB.avisos;
      state.fechamentos = (parsed.fechamentos && parsed.fechamentos.length > 0) ? parsed.fechamentos : SEED_DB.fechamentos;
      state.atas = (parsed.atas && parsed.atas.length > 0) ? parsed.atas : SEED_DB.atas;
      state.melhorias = (parsed.melhorias && parsed.melhorias.length > 0) ? parsed.melhorias : SEED_DB.melhorias;
      state.reclamacoes = parsed.reclamacoes || SEED_DB.reclamacoes;
      state.servicos = parsed.servicos || SEED_DB.servicos;
    } catch (err) {
      Object.assign(state, JSON.parse(JSON.stringify(SEED_DB)));
    }
  } else {
    Object.assign(state, JSON.parse(JSON.stringify(SEED_DB)));
    saveLocalBackup();
  }
}

function saveLocalBackup() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    condominio: state.condominio,
    avisos: state.avisos,
    fechamentos: state.fechamentos,
    atas: state.atas,
    melhorias: state.melhorias,
    reclamacoes: state.reclamacoes,
    servicos: state.servicos
  }));
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.header-admin-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-btn').forEach(m => m.classList.remove('active'));

  const targetPanel = document.getElementById(`tab-${tabId}`);
  const targetBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`) || document.querySelector(`.header-admin-btn[data-tab="${tabId}"]`);
  const targetMob = document.querySelector(`.mobile-nav-btn[data-mob="${tabId}"]`);

  if (targetPanel) targetPanel.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');
  if (targetMob) targetMob.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAll() {
  renderBrandAndHeroPhoto();
  renderAvisosPublic();
  renderGallery();
  renderFechamentos();
  renderAtas();
  renderMelhorias();
  renderServicos();
  if (state.isAdminLogged) {
    renderAdminAll();
  }
}

function renderBrandAndHeroPhoto() {
  if (state.condominio?.logo_url) {
    const logoBox = document.getElementById('brandLogoBox');
    if (logoBox) {
      logoBox.innerHTML = `<img src="${escapeHtml(state.condominio.logo_url)}" alt="Logo Residencial Quebec" />`;
    }
  }
  const items = state.condominio?.galeria || SEED_DB.condominio.galeria;
  if (items.length > 0) {
    const heroImg = document.getElementById('heroEntranceImg');
    if (heroImg) {
      heroImg.src = items[0].imagem;
    }
  }
}

// ==========================================
// MURAL DE AVISOS (DEDETIZAÇÃO, LIMPEZA CAIXA DE ESGOTO, ETC.)
// ==========================================
function renderAvisosPublic() {
  const homeGrid = document.getElementById('homeAvisosGrid');
  const fullGrid = document.getElementById('avisosFullGrid');
  const list = state.avisos || [];

  const cardHtml = a => `
    <article class="aviso-card">
      <div>
        <div class="aviso-top">
          <span class="aviso-tag">${escapeHtml(a.prioridade || 'Comunicado')}</span>
          <span class="aviso-date">${escapeHtml(a.data || '')}</span>
        </div>
        <h3>${escapeHtml(a.titulo)}</h3>
        <p style="margin-top:0.45rem;">${escapeHtml(a.mensagem)}</p>
      </div>
    </article>
  `;

  if (homeGrid) {
    homeGrid.innerHTML = list.slice(0, 3).map(cardHtml).join('');
  }
  if (fullGrid) {
    fullGrid.innerHTML = list.length > 0
      ? list.map(cardHtml).join('')
      : `<div class="card">Nenhum aviso publicado no momento.</div>`;
  }
}

// ==========================================
// FECHAMENTO MENSAL — VISUALIZAÇÃO LIMPA DO PDF PELOS MORADORES
// ==========================================
function renderFechamentos() {
  const container = document.getElementById('fechamentosPublicContainer');
  if (!container) return;

  const list = (state.fechamentos && state.fechamentos.length > 0)
    ? state.fechamentos
    : SEED_DB.fechamentos;

  container.innerHTML = list.map(f => {
    const pdfUrl = f.arquivo_url || 'assets/fechamento-mensal-quebec.pdf';
    const fileName = f.arquivo_nome || 'Fechamento_Mensal_Condominio_Quebec.pdf';

    return `
      <div class="pdf-doc-card">
        <div class="pdf-doc-left">
          <div class="pdf-icon-box">PDF</div>
          <div class="pdf-doc-info">
            <h3>${escapeHtml(f.mes_referencia)}</h3>
            <p>${escapeHtml(f.observacoes || 'Prestação de contas mensal oficial das contas Sicoob e Cora.')}</p>
            <div class="pdf-doc-meta">
              <span>Responsável: <strong>${escapeHtml(f.responsavel || 'Síndico Celson Rodrigues')}</strong></span>
              <span>• Documento Oficial da Administração</span>
            </div>
          </div>
        </div>
        <div class="pdf-doc-actions">
          <button class="btn btn-primary btn-sm" onclick="viewFechamentoPdf('${escapeHtml(pdfUrl)}', '${escapeHtml(f.mes_referencia)}', '${escapeHtml(fileName)}')">
            Visualizar PDF na Tela
          </button>
          <a href="${escapeHtml(pdfUrl)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
            Abrir em Nova Guia ↗
          </a>
          <a href="${escapeHtml(pdfUrl)}" download="${escapeHtml(fileName)}" class="btn btn-outline btn-sm">
            Baixar PDF
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function viewFechamentoPdf(url, title, fileName) {
  const iframe = document.getElementById('fechamentoPdfIframe');
  const titleEl = document.getElementById('fechamentoViewerTitle');
  const openBtn = document.getElementById('fechamentoOpenTabBtn');
  const dlBtn = document.getElementById('fechamentoDownloadPdfBtn');

  if (iframe) iframe.src = url;
  if (titleEl) titleEl.textContent = `📄 Visualizando: ${title}`;
  if (openBtn) openBtn.href = url;
  if (dlBtn) {
    dlBtn.href = url;
    dlBtn.setAttribute('download', fileName || 'Fechamento_Mensal.pdf');
  }
  document.getElementById('fechamentoPdfViewerContainer')?.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// ATAS DE REUNIÃO — VISUALIZAÇÃO LIMPA DO PDF PELOS MORADORES
// ==========================================
function renderAtas() {
  const container = document.getElementById('atasListContainer');
  if (!container) return;

  const list = (state.atas && state.atas.length > 0) ? state.atas : SEED_DB.atas;

  container.innerHTML = list.map(a => {
    const pdfUrl = a.arquivo_url || 'assets/ata-assembleia-28-08-2025.pdf';
    const fileName = a.arquivo_nome || 'Ata_Assembleia_Condominio_Quebec.pdf';

    return `
      <div class="pdf-doc-card">
        <div class="pdf-doc-left">
          <div class="pdf-icon-box">PDF</div>
          <div class="pdf-doc-info">
            <h3>${escapeHtml(a.titulo)}</h3>
            <p>${escapeHtml(a.resumo)}</p>
            <div class="pdf-doc-meta">
              <span>Data: <strong>${escapeHtml(a.data)}</strong></span>
              <span>• ${escapeHtml(a.numero || 'Registrada em Cartório')}</span>
            </div>
          </div>
        </div>
        <div class="pdf-doc-actions">
          <button class="btn btn-primary btn-sm" onclick="viewAtaPdf('${escapeHtml(pdfUrl)}', '${escapeHtml(a.titulo)}', '${escapeHtml(fileName)}')">
            Visualizar PDF na Tela
          </button>
          <a href="${escapeHtml(pdfUrl)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
            Abrir em Nova Guia ↗
          </a>
          <a href="${escapeHtml(pdfUrl)}" download="${escapeHtml(fileName)}" class="btn btn-outline btn-sm">
            Baixar PDF
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function viewAtaPdf(url, title, fileName) {
  const iframe = document.getElementById('ataPdfIframe');
  const titleEl = document.getElementById('ataViewerTitle');
  const openBtn = document.getElementById('ataOpenTabBtn');
  const dlBtn = document.getElementById('ataDownloadPdfBtn');

  if (iframe) iframe.src = url;
  if (titleEl) titleEl.textContent = `📋 Visualizando: ${title}`;
  if (openBtn) openBtn.href = url;
  if (dlBtn) {
    dlBtn.href = url;
    dlBtn.setAttribute('download', fileName || 'Ata_Assembleia.pdf');
  }
  document.getElementById('ataPdfViewerContainer')?.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// GALERIA E MELHORIAS
// ==========================================
function renderGallery() {
  const gallery = document.getElementById('condoGallery');
  const section = document.getElementById('extraGallerySection');
  if (!gallery) return;
  const items = (state.condominio?.galeria || SEED_DB.condominio.galeria).slice(1);

  if (section) {
    section.style.display = items.length > 0 ? 'block' : 'none';
  }

  gallery.innerHTML = items.map(g => `
    <div class="gallery-item">
      <img src="${escapeHtml(g.imagem)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src=this.src.split('/').pop();}" alt="${escapeHtml(g.titulo)}" />
      <div class="gallery-caption">
        <strong>${escapeHtml(g.titulo)}</strong>
        <span>${escapeHtml(g.legenda)}</span>
      </div>
    </div>
  `).join('');
}

const melhoriaCardViewState = {};

function getPhaseBadgeClass(fase) {
  const f = (fase || '').toLowerCase();
  if (f.includes('antes')) return 'phase-antes';
  if (f.includes('durante')) return 'phase-durante';
  if (f.includes('depois')) return 'phase-depois';
  return 'phase-registro';
}

function filterMelhorias(catOrStatus, btn) {
  state.currentMelhoriaFilter = catOrStatus;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderMelhorias();
}

function selectMelhoriaPhoto(melId, index) {
  melhoriaCardViewState[melId] = { mode: 'single', index };
  renderMelhorias();
}

function toggleCompareMode(melId) {
  const current = melhoriaCardViewState[melId];
  if (current && current.mode === 'compare') {
    melhoriaCardViewState[melId] = { mode: 'single', index: 0 };
  } else {
    melhoriaCardViewState[melId] = { mode: 'compare', index: 0 };
  }
  renderMelhorias();
}

function openPhotoLightbox(url, title, fase, legenda) {
  const modal = document.getElementById('photoLightboxModal');
  const img = document.getElementById('lightboxMainImg');
  const badge = document.getElementById('lightboxPhaseBadge');
  const titleEl = document.getElementById('lightboxTitle');
  const capEl = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  img.src = url;
  img.onerror = function() {
    if (!this.dataset.tried) {
      this.dataset.tried = '1';
      this.src = 'assets/' + url.split('/').pop();
    }
  };
  if (badge) {
    if (fase) {
      badge.textContent = fase;
      badge.className = `phase-pill ${getPhaseBadgeClass(fase)}`;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
  if (titleEl) titleEl.textContent = title || '';
  if (capEl) capEl.textContent = legenda || '';
  modal.style.display = 'flex';
}

function closePhotoLightbox(e) {
  const modal = document.getElementById('photoLightboxModal');
  if (modal) modal.style.display = 'none';
}

function renderMelhorias() {
  const grid = document.getElementById('melhoriasGrid');
  if (!grid) return;

  const list = state.currentMelhoriaFilter === 'Todas'
    ? state.melhorias
    : state.melhorias.filter(m =>
        m.categoria === state.currentMelhoriaFilter || m.status === state.currentMelhoriaFilter
      );

  grid.innerHTML = list.map(m => {
    const badgeClass = m.status === 'Concluído' ? 'status-concluido' : 'status-andamento';
    const fotos = (Array.isArray(m.fotos) && m.fotos.length > 0)
      ? m.fotos
      : [{ url: m.imagem || 'entrada-real-quebec.jpg', fase: 'Depois', legenda: m.titulo }];

    const firstAntes = fotos.find(f => (f.fase || '').toLowerCase().includes('antes'));
    const firstDepois = fotos.find(f => (f.fase || '').toLowerCase().includes('depois'));
    const hasCompare = Boolean(firstAntes && firstDepois);

    if (!melhoriaCardViewState[m.id]) {
      melhoriaCardViewState[m.id] = {
        mode: hasCompare ? 'compare' : 'single',
        index: 0
      };
    }

    const viewState = melhoriaCardViewState[m.id];
    const activeIdx = Math.min(viewState.index || 0, fotos.length - 1);
    const activePhoto = fotos[activeIdx] || fotos[0];

    let stageHtml = '';
    if (hasCompare && viewState.mode === 'compare') {
      stageHtml = `
        <div class="melhoria-split-compare">
          <div class="melhoria-split-half" onclick="openPhotoLightbox('${escapeHtml(firstAntes.url)}', '${escapeHtml(m.titulo)}', '${escapeHtml(firstAntes.fase)}', '${escapeHtml(firstAntes.legenda)}')">
            <span class="phase-pill phase-antes">Antes</span>
            <img src="${escapeHtml(firstAntes.url)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='assets/'+this.src.split('/').pop();}" alt="Antes - ${escapeHtml(m.titulo)}" />
            <div class="melhoria-stage-caption">
              <span>${escapeHtml(firstAntes.legenda || 'Antes da melhoria')}</span>
            </div>
          </div>
          <div class="melhoria-split-half" onclick="openPhotoLightbox('${escapeHtml(firstDepois.url)}', '${escapeHtml(m.titulo)}', '${escapeHtml(firstDepois.fase)}', '${escapeHtml(firstDepois.legenda)}')">
            <span class="phase-pill phase-depois">Depois</span>
            <img src="${escapeHtml(firstDepois.url)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='assets/'+this.src.split('/').pop();}" alt="Depois - ${escapeHtml(m.titulo)}" />
            <div class="melhoria-stage-caption">
              <span>${escapeHtml(firstDepois.legenda || 'Depois da melhoria')}</span>
            </div>
          </div>
        </div>
      `;
    } else {
      const hasFase = Boolean(activePhoto.fase && activePhoto.fase.trim() !== '');
      const pClass = getPhaseBadgeClass(activePhoto.fase);
      stageHtml = `
        <div class="melhoria-img-stage" onclick="openPhotoLightbox('${escapeHtml(activePhoto.url)}', '${escapeHtml(m.titulo)}', '${escapeHtml(activePhoto.fase || '')}', '${escapeHtml(activePhoto.legenda)}')">
          ${hasFase ? `<span class="phase-pill ${pClass}">${escapeHtml(activePhoto.fase)}</span>` : ''}
          <img src="${escapeHtml(activePhoto.url)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='assets/'+this.src.split('/').pop();}" alt="${escapeHtml(m.titulo)}" />
          <div class="melhoria-stage-caption">
            <span>${escapeHtml(activePhoto.legenda || m.titulo)}</span>
            <span style="opacity:0.85; font-size:0.7rem; white-space:nowrap;">🔍 Ampliar</span>
          </div>
        </div>
      `;
    }

    const thumbsHtml = (fotos.length > 1 || hasCompare) ? `
      <div class="melhoria-thumbs-bar">
        ${fotos.map((f, idx) => {
          const isSelected = viewState.mode === 'single' && activeIdx === idx;
          const hasThumbFase = Boolean(f.fase && f.fase.trim() !== '');
          const dotClass = getPhaseBadgeClass(f.fase);
          const shortPhase = (f.fase || '').slice(0, 3).toUpperCase();
          return `
            <button type="button" class="melhoria-thumb-btn ${isSelected ? 'active' : ''}" onclick="selectMelhoriaPhoto('${m.id}', ${idx})" title="${escapeHtml(f.legenda || '')}">
              <img src="${escapeHtml(f.url)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='assets/'+this.src.split('/').pop();}" alt="Miniatura ${idx + 1}" />
              ${hasThumbFase ? `<span class="thumb-phase-dot ${dotClass}">${escapeHtml(shortPhase)}</span>` : ''}
            </button>
          `;
        }).join('')}
        ${hasCompare ? `
          <button type="button" class="compare-mode-btn ${viewState.mode === 'compare' ? 'active' : ''}" onclick="toggleCompareMode('${m.id}')">
            ⇄ Antes & Depois
          </button>
        ` : `<span style="margin-left:auto; font-size:0.72rem; color:var(--text-muted); font-weight:600;">📷 ${fotos.length} fotos</span>`}
      </div>
    ` : '';

    return `
      <article class="melhoria-card">
        ${stageHtml}
        ${thumbsHtml}
        <div class="melhoria-body">
          <div class="melhoria-meta">
            <span class="melhoria-cat-tag">${escapeHtml(m.categoria || 'Revitalização & Obras')}</span>
            <div style="display:flex; align-items:center; gap:0.45rem;">
              <span>${escapeHtml(m.data || 'Desde 2025')}</span>
              <span class="status-badge ${badgeClass}">${escapeHtml(m.status)}</span>
            </div>
          </div>
          <h3>${escapeHtml(m.titulo)}</h3>
          <p>${escapeHtml(m.descricao)}</p>
          ${m.destaque_nota ? `<div class="melhoria-note-highlight">${escapeHtml(m.destaque_nota)}</div>` : ''}
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// SERVIÇOS DOS MORADORES
// ==========================================
function filterServicosCat(cat, btn) {
  state.currentServicoCat = cat;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderServicos();
}

function renderServicos() {
  const grid = document.getElementById('servicosGrid');
  if (!grid) return;

  const query = (document.getElementById('searchServicosInput')?.value || '').toLowerCase().trim();
  const filtered = state.servicos.filter(s => {
    const matchCat = state.currentServicoCat === 'Todas' || s.categoria === state.currentServicoCat;
    const matchText =
      s.nome.toLowerCase().includes(query) ||
      s.servico.toLowerCase().includes(query) ||
      s.descricao.toLowerCase().includes(query) ||
      s.bloco.toLowerCase().includes(query);
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="card" style="grid-column:1 / -1; text-align:center; padding:2rem 1.5rem;">
        <strong style="display:block; color:var(--green-forest); font-size:1.05rem; margin-bottom:0.35rem;">
          ${state.servicos.length === 0 ? 'Nenhum serviço cadastrado ainda' : 'Nenhum serviço encontrado'}
        </strong>
        <span style="font-size:0.87rem; color:var(--text-body);">
          ${state.servicos.length === 0 ? 'Seja o primeiro morador a cadastrar seu serviço no formulário abaixo!' : 'Tente buscar por outro termo ou categoria.'}
        </span>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    const cleanPhone = (s.celular || '').replace(/\D/g, '');
    const waUrl = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(`Olá ${s.nome}! Vi seu serviço (${s.servico}) no Portal do Condomínio Quebec.`)}`;

    return `
      <article class="servico-card">
        <div>
          <div class="servico-top">
            <span class="morador-apt-badge">${escapeHtml(s.bloco)} • ${escapeHtml(s.apartamento)}</span>
            <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600;">${escapeHtml(s.categoria)}</span>
          </div>
          <h3>${escapeHtml(s.servico)}</h3>
          <div class="servico-provider">${escapeHtml(s.nome)}</div>
          <p class="servico-desc">${escapeHtml(s.descricao)}</p>
        </div>
        <div class="servico-footer">
          <span style="font-size:0.84rem; font-weight:600; color:var(--green-forest);">${escapeHtml(s.celular)}</span>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">WhatsApp</a>
        </div>
      </article>
    `;
  }).join('');
}

async function handleCreateServico(e) {
  e.preventDefault();
  const cpfVal = document.getElementById('srvCpf').value.trim();
  if (cpfVal.replace(/\D/g, '').length < 11) {
    showToast('Informe os 11 dígitos do CPF.');
    return;
  }

  const payload = {
    nome: document.getElementById('srvNome').value.trim(),
    cpf: cpfVal,
    celular: document.getElementById('srvCelular').value.trim(),
    bloco: document.getElementById('srvBloco').value,
    apartamento: document.getElementById('srvApto').value,
    categoria: document.getElementById('srvCategoria').value,
    servico: document.getElementById('srvTitulo').value.trim(),
    horario: document.getElementById('srvHorario').value.trim() || 'A combinar',
    descricao: document.getElementById('srvDescricao').value.trim()
  };

  try {
    const res = await fetch('/api/servicos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.servicos.unshift(await res.json());
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.servicos.unshift({ id: `srv_${Date.now()}`, ...payload });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formServicoMorador').reset();
  showToast('Serviço cadastrado com sucesso!');
}

// ==========================================
// Abertura de Chamados / RECLAMAÇÕES SIGILOSAS
// ==========================================
async function handleCreateReclamacao(e) {
  e.preventDefault();
  const protocolo = `QBC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const payload = {
    protocolo,
    nome: document.getElementById('recNome').value.trim(),
    celular: document.getElementById('recCelular').value.trim(),
    bloco: document.getElementById('recBloco').value,
    apartamento: document.getElementById('recApto').value,
    categoria: document.getElementById('recCategoria').value,
    urgencia: document.getElementById('recUrgencia').value,
    assunto: document.getElementById('recAssunto').value.trim(),
    mensagem: document.getElementById('recMensagem').value.trim()
  };

  try {
    const res = await fetch('/api/reclamacoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.reclamacoes.unshift(await res.json());
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    const now = new Date();
    state.reclamacoes.unshift({
      id: `rec_${Date.now()}`,
      ...payload,
      data: `${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`,
      status: 'Pendente',
      resposta_sindico: ''
    });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formReclamacao').reset();

  const box = document.getElementById('lastProtocolBox');
  const codeEl = document.getElementById('lastProtocolCode');
  if (box && codeEl) {
    codeEl.textContent = protocolo;
    box.style.display = 'block';
  }
  showToast(`Enviado com sigilo ao Síndico! Protocolo: ${protocolo}`);
}

function lookupProtocol() {
  const input = (document.getElementById('inputProtocolLookup')?.value || '').trim().toUpperCase().replace('#', '');
  const resultEl = document.getElementById('protocolLookupResult');
  if (!resultEl) return;

  const found = state.reclamacoes.find(r => (r.protocolo || '').toUpperCase() === input);
  if (!found) {
    resultEl.innerHTML = `<p style="font-size:0.84rem; color:#991b1b;">Protocolo não encontrado.</p>`;
    return;
  }

  resultEl.innerHTML = `
    <div class="reclamacao-item" style="margin-bottom:0;">
      <div class="reclamacao-header">
        <span class="protocolo-tag">#${escapeHtml(found.protocolo)}</span>
        <span class="status-badge status-concluido">${escapeHtml(found.status)}</span>
      </div>
      <strong style="font-size:0.9rem; color:var(--green-forest); display:block;">${escapeHtml(found.assunto)}</strong>
      ${found.resposta_sindico
        ? `<p style="margin-top:0.5rem; font-size:0.84rem; color:var(--green-deep);"><strong>Resposta do Síndico:</strong> ${escapeHtml(found.resposta_sindico)}</p>`
        : `<p style="margin-top:0.5rem; font-size:0.82rem; color:var(--text-muted);">Em análise pela administração.</p>`}
    </div>
  `;
}

// ==========================================
// PAINEL ADMINISTRATIVO DO SÍNDICO
// ==========================================
function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('adminUser').value.trim().toLowerCase();
  const p = document.getElementById('adminPass').value.trim();

  if ((u === 'celson' || u === 'celso' || u === 'sindico' || u === 'admin') && p === 'quebec383') {
    state.isAdminLogged = true;
    document.getElementById('adminLoginView').style.display = 'none';
    document.getElementById('adminDashboardView').style.display = 'block';
    renderAdminAll();
    showToast('Bem-vindo ao Painel do Síndico!');
  } else {
    showToast('Usuário ou senha incorretos. Acesso restrito à administração.');
  }
}

function handleAdminLogout() {
  state.isAdminLogged = false;
  document.getElementById('adminLoginView').style.display = 'block';
  document.getElementById('adminDashboardView').style.display = 'none';
}

function switchAdminSection(secId, btn) {
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
  const target = document.getElementById(secId);
  if (target) target.style.display = 'block';
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function renderAdminAll() {
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setTxt('admCountRec', state.reclamacoes.length);
  setTxt('admCountAvisos', state.avisos.length);
  setTxt('admCountAtas', state.atas.length);
  setTxt('admCountMel', state.melhorias.length);
  setTxt('admCountSrv', state.servicos.length);

  renderAdminReclamacoes();
  renderAdminAvisos();
  renderAdminFechamentos();
  renderAdminAtas();
  renderAdminMelhorias();
  renderAdminGallery();
  renderAdminServicos();
}

// 1. Admin Reclamações
function renderAdminReclamacoes() {
  const container = document.getElementById('adminReclamacoesList');
  if (!container) return;

  if (state.reclamacoes.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);">Nenhuma reclamação recebida.</p>`;
    return;
  }

  container.innerHTML = state.reclamacoes.map(r => `
    <div class="reclamacao-item">
      <div class="reclamacao-header">
        <div>
          <span class="protocolo-tag">#${escapeHtml(r.protocolo)}</span>
          <strong style="margin-left:0.4rem;">${escapeHtml(r.nome)}</strong>
          <span class="morador-apt-badge" style="margin-left:0.4rem;">${escapeHtml(r.bloco)} • ${escapeHtml(r.apartamento)}</span>
          <span style="font-size:0.8rem; color:var(--text-muted); margin-left:0.4rem;">${escapeHtml(r.celular)}</span>
        </div>
        <span style="font-size:0.76rem; color:var(--text-muted);">${escapeHtml(r.data)}</span>
      </div>
      <p style="font-weight:700; color:var(--green-forest); margin-bottom:0.2rem;">${escapeHtml(r.assunto)}</p>
      <p style="font-size:0.86rem; color:var(--text-body); margin-bottom:0.85rem;">${escapeHtml(r.mensagem)}</p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <select id="admStatus_${r.id}" class="form-control" style="width:auto;">
          <option value="Pendente" ${r.status === 'Pendente' ? 'selected' : ''}>Pendente</option>
          <option value="Em Análise" ${r.status === 'Em Análise' ? 'selected' : ''}>Em Análise</option>
          <option value="Resolvido" ${r.status === 'Resolvido' ? 'selected' : ''}>Resolvido</option>
        </select>
        <input type="text" id="admReply_${r.id}" class="form-control" style="flex:1; min-width:200px;" value="${escapeHtml(r.resposta_sindico || '')}" placeholder="Resposta do Síndico..." />
        <button class="btn btn-primary btn-sm" onclick="saveAdminReclamacao('${r.id}')">Salvar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteAdminReclamacao('${r.id}')">Excluir</button>
      </div>
    </div>
  `).join('');
}

async function saveAdminReclamacao(id) {
  const status = document.getElementById(`admStatus_${id}`).value;
  const resposta_sindico = document.getElementById(`admReply_${id}`).value.trim();
  const item = state.reclamacoes.find(r => r.id === id);
  if (!item) return;
  item.status = status;
  item.resposta_sindico = resposta_sindico;

  try {
    await fetch('/api/reclamacoes', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, resposta_sindico })
    });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('Resposta salva!');
}

async function deleteAdminReclamacao(id) {
  state.reclamacoes = state.reclamacoes.filter(r => r.id !== id);
  try {
    await fetch(`/api/reclamacoes?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('Reclamação removida.');
}

// 2. Admin Avisos (Dedetização, Caixa de Esgoto, etc.)
async function handleAdminCreateAviso(e) {
  e.preventDefault();
  const payload = {
    prioridade: document.getElementById('avisoPrioridade').value,
    titulo: document.getElementById('avisoTitulo').value.trim(),
    data: document.getElementById('avisoData').value.trim(),
    mensagem: document.getElementById('avisoMensagem').value.trim()
  };

  try {
    const res = await fetch('/api/avisos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.avisos.unshift(await res.json());
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.avisos.unshift({ id: `av_${Date.now()}`, ...payload });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formAdminAviso').reset();
  showToast('Aviso publicado no Mural!');
}

function renderAdminAvisos() {
  const el = document.getElementById('adminAvisosList');
  if (!el) return;
  el.innerHTML = state.avisos.map(a => `
    <div style="padding:0.8rem 0; border-bottom:1px solid var(--border-soft); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
      <div>
        <span class="aviso-tag">${escapeHtml(a.prioridade)}</span>
        <strong style="display:block; font-size:0.9rem; margin-top:0.25rem; color:var(--green-forest);">${escapeHtml(a.titulo)}</strong>
        <span style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(a.data)}</span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteAdminAviso('${a.id}')">Remover</button>
    </div>
  `).join('');
}

async function deleteAdminAviso(id) {
  state.avisos = state.avisos.filter(a => a.id !== id);
  try {
    await fetch(`/api/avisos?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('Aviso removido.');
}

// 3. Admin Fechamento Mensal (Upload de PDF)
function handleFechamentoFileSelect(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('fechArquivoNome').value = file.name;
    document.getElementById('fechArquivoUrl').value = e.target.result;
    document.getElementById('fechFileStatus').textContent = `✓ PDF selecionado: ${file.name}`;
  };
  reader.readAsDataURL(file);
}

async function handleAdminSaveFechamento(e) {
  e.preventDefault();
  const payload = {
    mes_referencia: document.getElementById('fechMes').value.trim(),
    observacoes: document.getElementById('fechObs').value.trim(),
    responsavel: 'Síndico Celson Batista Rodrigues Filho',
    arquivo_nome: document.getElementById('fechArquivoNome').value || 'Fechamento_Mensal.pdf',
    arquivo_url: document.getElementById('fechArquivoUrl').value || 'assets/fechamento-mensal-quebec.pdf'
  };

  try {
    const res = await fetch('/api/fechamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.fechamentos.unshift(await res.json());
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.fechamentos.unshift({ id: `fech_${Date.now()}`, ...payload });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formAdminFechamento').reset();
  document.getElementById('fechFileStatus').textContent = '';
  showToast('PDF do Fechamento Mensal publicado!');
}

function renderAdminFechamentos() {
  const el = document.getElementById('adminFechamentosList');
  if (!el) return;
  el.innerHTML = state.fechamentos.map(f => `
    <div style="padding:0.8rem 0; border-bottom:1px solid var(--border-soft); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
      <div>
        <strong style="font-size:0.9rem; color:var(--green-forest); display:block;">${escapeHtml(f.mes_referencia)}</strong>
        <span style="font-size:0.78rem; color:var(--text-muted);">📎 ${escapeHtml(f.arquivo_nome || 'PDF Oficial')}</span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteAdminFechamento('${f.id}')">Remover</button>
    </div>
  `).join('');
}

async function deleteAdminFechamento(id) {
  if (state.fechamentos.length <= 1) {
    showToast('Mantenha pelo menos um fechamento publicado.');
    return;
  }
  state.fechamentos = state.fechamentos.filter(f => f.id !== id);
  try {
    await fetch(`/api/fechamentos?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('Fechamento removido.');
}

// 4. Admin Atas (Upload de PDF)
function handleAtaFileSelect(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('ataArquivoNome').value = file.name;
    document.getElementById('ataArquivoUrl').value = e.target.result;
    document.getElementById('ataFileStatus').textContent = `✓ PDF selecionado: ${file.name}`;
  };
  reader.readAsDataURL(file);
}

async function handleAdminSaveAta(e) {
  e.preventDefault();
  const payload = {
    titulo: document.getElementById('ataTitulo').value.trim(),
    data: document.getElementById('ataData').value.trim(),
    numero: document.getElementById('ataNumero').value.trim() || 'Registrada em Cartório',
    resumo: document.getElementById('ataResumo').value.trim(),
    arquivo_nome: document.getElementById('ataArquivoNome').value || 'Ata_Assembleia.pdf',
    arquivo_url: document.getElementById('ataArquivoUrl').value || 'assets/ata-assembleia-28-08-2025.pdf'
  };

  try {
    const res = await fetch('/api/atas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.atas.unshift(await res.json());
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.atas.unshift({ id: `ata_${Date.now()}`, ...payload });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formAdminAta').reset();
  document.getElementById('ataFileStatus').textContent = '';
  showToast('Ata em PDF publicada!');
}

function renderAdminAtas() {
  const el = document.getElementById('adminAtasList');
  if (!el) return;
  el.innerHTML = state.atas.map(a => `
    <div style="padding:0.8rem 0; border-bottom:1px solid var(--border-soft); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
      <div>
        <strong style="font-size:0.9rem; color:var(--green-forest); display:block;">${escapeHtml(a.titulo)}</strong>
        <span style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(a.data)} • 📎 ${escapeHtml(a.arquivo_nome || 'PDF')}</span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteAdminAta('${a.id}')">Remover</button>
    </div>
  `).join('');
}

async function deleteAdminAta(id) {
  state.atas = state.atas.filter(a => a.id !== id);
  try {
    await fetch(`/api/atas?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('Ata removida.');
}

// 5. Admin Melhorias (Suporte a múltiplas fotos, adicionar ou substituir fotos e remover foto individual)
let pendingMelhoriaPhotos = [];

function previewMelhoriaPhoto(event) {
  const files = Array.from(event.target.files || []);
  pendingMelhoriaPhotos = [];
  const statusEl = document.getElementById('melUploadStatus');
  if (files.length === 0) {
    if (statusEl) statusEl.textContent = '';
    return;
  }

  let loadedCount = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      pendingMelhoriaPhotos.push(e.target.result);
      loadedCount++;
      if (loadedCount === files.length) {
        document.getElementById('melImagemData').value = pendingMelhoriaPhotos[0];
        if (statusEl) statusEl.textContent = `✓ ${files.length} foto(s) pronta(s) para salvar.`;
      }
    };
    reader.readAsDataURL(file);
  });
}

function renderExistingMelhoriaPhotosInForm(mel) {
  const box = document.getElementById('melExistingPhotosBox');
  const listEl = document.getElementById('melExistingPhotosList');
  if (!box || !listEl) return;

  const fotos = (mel && Array.isArray(mel.fotos) && mel.fotos.length > 0)
    ? mel.fotos
    : (mel?.imagem ? [{ url: mel.imagem, fase: '', legenda: mel.titulo }] : []);

  if (!mel || fotos.length === 0) {
    box.style.display = 'none';
    listEl.innerHTML = '';
    return;
  }

  box.style.display = 'block';
  listEl.innerHTML = fotos.map((f, idx) => `
    <div style="position:relative; width:72px; height:56px; border-radius:8px; overflow:hidden; border:1px solid var(--border-strong); background:#0f2419;">
      <img src="${escapeHtml(f.url)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src='assets/'+this.src.split('/').pop();}" style="width:100%; height:100%; object-fit:cover;" alt="Foto ${idx + 1}" />
      ${f.fase ? `<span style="position:absolute; bottom:2px; left:2px; background:rgba(0,0,0,0.75); color:#fff; font-size:0.55rem; padding:1px 4px; border-radius:4px; font-weight:700;">${escapeHtml(f.fase)}</span>` : ''}
      <button type="button" onclick="removeSinglePhotoFromMelhoria('${mel.id}', ${idx})" title="Remover esta foto" style="position:absolute; top:2px; right:2px; width:18px; height:18px; border-radius:50%; border:none; background:#b91c1c; color:#fff; font-size:0.65rem; font-weight:800; cursor:pointer; line-height:1;">✕</button>
    </div>
  `).join('');
}

async function removeSinglePhotoFromMelhoria(melId, photoIdx) {
  const m = state.melhorias.find(item => item.id === melId);
  if (!m) return;
  if (!Array.isArray(m.fotos) || m.fotos.length <= 1) {
    showToast('A melhoria precisa ter pelo menos 1 foto (ou substitua enviando outra).');
    return;
  }
  m.fotos.splice(photoIdx, 1);
  m.imagem = m.fotos[0].url;
  delete melhoriaCardViewState[melId];

  try {
    await fetch('/api/melhorias', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(m)
    });
  } catch (err) {}

  saveLocalBackup();
  renderAll();
  renderExistingMelhoriaPhotosInForm(m);
  showToast('Foto removida da melhoria!');
}

function editAdminMelhoria(id) {
  const m = state.melhorias.find(item => item.id === id);
  if (!m) return;
  pendingMelhoriaPhotos = [];
  const statusEl = document.getElementById('melUploadStatus');
  if (statusEl) statusEl.textContent = '';

  document.getElementById('melEditId').value = m.id;
  document.getElementById('melTitulo').value = m.titulo;
  if (document.getElementById('melCategoria')) {
    document.getElementById('melCategoria').value = m.categoria || 'Revitalização & Obras';
  }
  document.getElementById('melStatus').value = m.status || 'Concluído';
  document.getElementById('melData').value = m.data || 'Desde 2025';
  document.getElementById('melDescricao').value = m.descricao || '';
  if (document.getElementById('melDestaqueNota')) {
    document.getElementById('melDestaqueNota').value = m.destaque_nota || '';
  }
  document.getElementById('melImagemData').value = m.imagem || '';
  document.getElementById('btnCancelMelEdit').style.display = 'inline-flex';
  renderExistingMelhoriaPhotosInForm(m);
  document.getElementById('formMelhoriaHeading')?.scrollIntoView({ behavior: 'smooth' });
}

function resetMelhoriaForm() {
  document.getElementById('formAdminMelhoria').reset();
  document.getElementById('melEditId').value = '';
  document.getElementById('melImagemData').value = '';
  pendingMelhoriaPhotos = [];
  const statusEl = document.getElementById('melUploadStatus');
  if (statusEl) statusEl.textContent = '';
  const box = document.getElementById('melExistingPhotosBox');
  if (box) box.style.display = 'none';
  document.getElementById('btnCancelMelEdit').style.display = 'none';
}

async function handleAdminSaveMelhoria(e) {
  e.preventDefault();
  const editId = document.getElementById('melEditId').value;
  const faseEscolhida = document.getElementById('melFotoFase')?.value || '';
  const modoFoto = document.getElementById('melFotoModo')?.value || 'add';
  const tituloVal = document.getElementById('melTitulo').value.trim();

  const novasFotosObjs = pendingMelhoriaPhotos.map(url => ({
    url,
    fase: faseEscolhida,
    legenda: tituloVal
  }));

  if (editId) {
    const idx = state.melhorias.findIndex(m => m.id === editId);
    if (idx !== -1) {
      const atual = state.melhorias[idx];
      let fotosFinais = Array.isArray(atual.fotos) ? [...atual.fotos] : [];
      if (novasFotosObjs.length > 0) {
        fotosFinais = modoFoto === 'replace'
          ? novasFotosObjs
          : [...fotosFinais, ...novasFotosObjs];
      }
      const updated = {
        ...atual,
        titulo: tituloVal,
        categoria: document.getElementById('melCategoria')?.value || 'Revitalização & Obras',
        status: document.getElementById('melStatus').value,
        data: document.getElementById('melData').value.trim(),
        descricao: document.getElementById('melDescricao').value.trim(),
        destaque_nota: document.getElementById('melDestaqueNota')?.value.trim() || '',
        fotos: fotosFinais,
        imagem: fotosFinais[0]?.url || atual.imagem || 'mel-bloco2-frente.jpg'
      };
      state.melhorias[idx] = updated;
      delete melhoriaCardViewState[editId];
      try {
        await fetch('/api/melhorias', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated)
        });
      } catch (err) {}
    }
  } else {
    const fotosIniciais = novasFotosObjs.length > 0
      ? novasFotosObjs
      : [{ url: 'mel-bloco2-frente.jpg', fase: faseEscolhida, legenda: tituloVal }];
    const nova = {
      id: `mel_${Date.now()}`,
      titulo: tituloVal,
      categoria: document.getElementById('melCategoria')?.value || 'Revitalização & Obras',
      status: document.getElementById('melStatus').value,
      data: document.getElementById('melData').value.trim(),
      descricao: document.getElementById('melDescricao').value.trim(),
      destaque_nota: document.getElementById('melDestaqueNota')?.value.trim() || '',
      imagem: fotosIniciais[0].url,
      fotos: fotosIniciais
    };
    state.melhorias.unshift(nova);
    try {
      await fetch('/api/melhorias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nova)
      });
    } catch (err) {}
  }

  resetMelhoriaForm();
  saveLocalBackup();
  renderAll();
  showToast('Melhoria e fotos salvas com sucesso!');
}

function renderAdminMelhorias() {
  const el = document.getElementById('adminMelhoriasList');
  if (!el) return;
  el.innerHTML = state.melhorias.map(m => {
    const qtdFotos = Array.isArray(m.fotos) ? m.fotos.length : 1;
    return `
      <div style="padding:0.8rem 0; border-bottom:1px solid var(--border-soft); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
        <div>
          <strong style="font-size:0.9rem; color:var(--green-forest); display:block;">${escapeHtml(m.titulo)}</strong>
          <span style="font-size:0.76rem; color:var(--text-muted);">${escapeHtml(m.categoria || '')} • ${escapeHtml(m.status)} • 📷 ${qtdFotos} foto(s)</span>
        </div>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-outline btn-sm" onclick="editAdminMelhoria('${m.id}')">Editar / Fotos</button>
          <button class="btn btn-danger btn-sm" onclick="deleteAdminMelhoria('${m.id}')">Excluir</button>
        </div>
      </div>
    `;
  }).join('');
}

async function deleteAdminMelhoria(id) {
  state.melhorias = state.melhorias.filter(m => m.id !== id);
  try {
    await fetch(`/api/melhorias?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (err) {}
  saveLocalBackup();
  renderAll();
  showToast('Melhoria removida.');
}

// 6. Admin Logo (Símbolo da Folha) e Fotos da Entrada
function handleUpdateBrandLogo(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async function(e) {
    state.condominio.logo_url = e.target.result;
    try {
      await fetch('/api/condominio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logo_url: state.condominio.logo_url })
      });
    } catch (err) {}
    saveLocalBackup();
    renderAll();
    showToast('Logo do cabeçalho atualizada!');
  };
  reader.readAsDataURL(file);
}

function handleGalleryFileSelect(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('galImagemData').value = e.target.result;
  };
  reader.readAsDataURL(file);
}

async function handleAdminAddGalleryPhoto(e) {
  e.preventDefault();
  const imgData = document.getElementById('galImagemData').value;
  if (!imgData) return;
  const nova = {
    id: `gal_${Date.now()}`,
    titulo: document.getElementById('galTitulo').value.trim(),
    legenda: document.getElementById('galLegenda').value.trim(),
    imagem: imgData
  };
  state.condominio.galeria = state.condominio.galeria || [];
  state.condominio.galeria.unshift(nova);
  try {
    await fetch('/api/condominio', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ galeria: state.condominio.galeria })
    });
  } catch (err) {}
  saveLocalBackup();
  renderAll();
  e.target.reset();
  showToast('Foto adicionada como destaque!');
}

function renderAdminGallery() {
  const el = document.getElementById('adminGalleryList');
  if (!el) return;
  el.innerHTML = (state.condominio?.galeria || []).map(g => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 0; border-bottom:1px solid var(--border-soft);">
      <div>
        <strong style="font-size:0.88rem; display:block;">${escapeHtml(g.titulo)}</strong>
        <span style="font-size:0.76rem; color:var(--text-muted);">${escapeHtml(g.legenda)}</span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteAdminGalleryPhoto('${g.id}')">Remover</button>
    </div>
  `).join('');
}

async function deleteAdminGalleryPhoto(id) {
  state.condominio.galeria = (state.condominio.galeria || []).filter(g => g.id !== id);
  saveLocalBackup();
  renderAll();
}

// 7. Admin Serviços
function renderAdminServicos() {
  const tbody = document.getElementById('adminServicosTableBody');
  if (!tbody) return;
  tbody.innerHTML = state.servicos.map(s => `
    <tr>
      <td><strong>${escapeHtml(s.nome)}</strong></td>
      <td><span class="protocolo-tag">${escapeHtml(s.cpf)}</span></td>
      <td>${escapeHtml(s.bloco)} • ${escapeHtml(s.apartamento)}</td>
      <td>${escapeHtml(s.celular)}</td>
      <td>${escapeHtml(s.servico)}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteAdminServico('${s.id}')">Remover</button></td>
    </tr>
  `).join('');
}

async function deleteAdminServico(id) {
  state.servicos = state.servicos.filter(s => s.id !== id);
  saveLocalBackup();
  renderAll();
}

function maskCPF(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  input.value = v;
}

function maskPhone(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 11);
  if (v.length > 10) {
    v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (v.length > 5) {
    v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (v.length > 2) {
    v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  }
  input.value = v;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
