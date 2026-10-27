const STORAGE_KEY = 'condominio_quebec_db_v2';

const SEED_DB = {
  avisos: [
    {
      id: 'av_1',
      titulo: 'Manutenção Preventiva dos Portões Eletrônicos e Interfonia',
      mensagem: 'Informamos que nesta quinta-feira, das 09h às 11h30, a equipe técnica realizará revisão preventiva no motor do portão principal e central de interfones.',
      data: '26/10/2026',
      prioridade: 'Importante',
      autor: 'Celson Rodrigues (Síndico)'
    },
    {
      id: 'av_2',
      titulo: 'Recadastramento de Veículos e Adesivos de Identificação',
      mensagem: 'Solicitamos aos moradores que mantenham atualizado o cadastro da vaga de garagem junto à administração para emissão da nova tag de controle.',
      data: '20/10/2026',
      prioridade: 'Informativo',
      autor: 'Celson Rodrigues (Síndico)'
    }
  ],
  melhorias: [
    {
      id: 'mel_1',
      titulo: 'Revitalização da Pintura Verde Claro & Branco e Demarcação de Vagas',
      categoria: 'Valorização & Conservação',
      status: 'Em Andamento',
      progresso: 80,
      data: 'Outubro/2026',
      investimento: 'R$ 19.800,00',
      impacto: 'Renovação da identidade visual verde claro e branco dos blocos, fachada principal na Rua Ênio Pereira de Carvalho, 383 e vagas numeradas.',
      descricao: 'Pintura das fachadas em verde claro e branco, muretas perimetrais, numeração refletiva das vagas de garagem e revitalização dos jardins dos blocos.',
      imagem: 'assets/fachada-quebec.png'
    },
    {
      id: 'mel_2',
      titulo: 'Modernização da Iluminação do Pátio e Blocos para LED de Alta Eficiência',
      categoria: 'Infraestrutura & Economia',
      status: 'Concluído',
      progresso: 100,
      data: 'Setembro/2026',
      investimento: 'R$ 8.450,00',
      impacto: 'Redução de 38% no consumo de energia das áreas comuns e maior visibilidade noturna no estacionamento e acesso aos blocos.',
      descricao: 'Substituição integral dos refletores do pátio de estacionamento, corredores dos blocos e portaria por luminárias LED 100W e sensores inteligentes de presença nas escadarias.',
      imagem: 'assets/blocos-patio.png'
    },
    {
      id: 'mel_3',
      titulo: 'Ampliação do Sistema de Monitoramento CFTV Full HD e Portaria',
      categoria: 'Segurança Patrimonial',
      status: 'Concluído',
      progresso: 100,
      data: 'Agosto/2026',
      investimento: 'R$ 12.200,00',
      impacto: 'Cobertura 24h dos acessos da Rua Ênio Pereira de Carvalho, 383, pátio de garagens e circulação interna.',
      descricao: 'Instalação de 16 novas câmeras infravermelho de alta definição com gravação em nuvem e nobreak dedicado para manter o sistema ativo mesmo em quedas de energia.',
      imagem: 'assets/convivencia-jardim.png'
    },
    {
      id: 'mel_4',
      titulo: 'Higienização Semestral dos Reservatórios e Revisão Hidráulica',
      categoria: 'Saúde & Manutenção',
      status: 'Concluído',
      progresso: 100,
      data: 'Julho/2026',
      investimento: 'R$ 4.100,00',
      impacto: 'Garantia de qualidade da água potável para todos os blocos com laudo microbiológico certificado.',
      descricao: 'Limpeza técnica, desinfecção e impermeabilização preventiva das caixas d’água superiores e inferiores de todos os blocos, com emissão de certificado sanitário.',
      imagem: 'assets/blocos-patio.png'
    },
    {
      id: 'mel_5',
      titulo: 'Implantação de Espaço Convivência, Bancos e Bicicletário Coberto',
      categoria: 'Qualidade de Vida',
      status: 'Planejado',
      progresso: 30,
      data: 'Previsão: Dezembro/2026',
      investimento: 'R$ 9.600,00 (Orçado)',
      impacto: 'Novo espaço organizado para bicicletas e bancos de convivência nos jardins entre os blocos verde claro e branco.',
      descricao: 'Projeto em fase de cotação final para instalação de suporte coberto para bicicletas e revitalização da área de convivência comum entre os blocos.',
      imagem: 'assets/convivencia-jardim.png'
    }
  ],
  atas: [
    {
      id: 'ata_1',
      titulo: 'Ata da Assembleia Geral Ordinária – Prestação de Contas 3º Trimestre e Obras',
      tipo: 'Assembleia Ordinária',
      data: '15/10/2026',
      numero: 'AGE/AGO Nº 04/2026',
      responsavel: 'Celson Rodrigues (Síndico)',
      resumo: 'Aprovação por unanimidade do balancete financeiro referente aos meses de julho, agosto e setembro de 2026; apresentação do cronograma de demarcação das vagas de garagem e revitalização da fachada na Rua Ênio Pereira de Carvalho, 383.',
      pautas: [
        '1. Leitura e aprovação da ata anterior sem ressalvas;',
        '2. Apresentação detalhada das receitas, despesas e fundo de reserva do 3º trimestre/2026;',
        '3. Deliberação sobre a pintura das faixas de estacionamento e identificação dos veículos;',
        '4. Apresentação do novo Portal Digital do Condomínio Quebec para comunicação, atas e guia de moradores.'
      ],
      status_documento: 'Registrada e Assinada'
    },
    {
      id: 'ata_2',
      titulo: 'Ata da Assembleia Geral Extraordinária – Segurança, CFTV e Normas de Silêncio',
      tipo: 'Assembleia Extraordinária',
      data: '18/08/2026',
      numero: 'AGE Nº 03/2026',
      responsavel: 'Celson Rodrigues (Síndico)',
      resumo: 'Deliberação e aprovação da compra dos novos equipamentos de câmeras Full HD para a portaria e pátio; reforço das diretrizes do Regimento Interno quanto ao horário de silêncio (22h às 07h) e uso das áreas comuns.',
      pautas: [
        '1. Análise de 3 orçamentos para modernização do CFTV do Condomínio Quebec;',
        '2. Aprovação da proposta vencedora sem necessidade de taxa extra (utilização de saldo de economia mensal);',
        '3. Alinhamento sobre recebimento de encomendas e entregas na portaria;',
        '4. Reforço das regras de convivência, horário de mudanças e controle de ruídos nos blocos.'
      ],
      status_documento: 'Registrada e Assinada'
    },
    {
      id: 'ata_3',
      titulo: 'Ata de Eleição de Síndico, Conselho Fiscal e Planejamento Anual de Gestão',
      tipo: 'Assembleia Ordinária',
      data: '12/03/2026',
      numero: 'AGO Nº 01/2026',
      responsavel: 'Celson Rodrigues (Síndico)',
      resumo: 'Ratificação do plano diretor da gestão do Síndico Celson Rodrigues, definição das metas de redução de inadimplência, manutenção preventiva predial e calendário anual de limpeza dos reservatórios.',
      pautas: [
        '1. Apresentação do diagnóstico estrutural dos blocos e áreas comuns;',
        '2. Aprovação da previsão orçamentária anual mantendo o equilíbrio da taxa condominial;',
        '3. Definição do calendário de manutenções preventivas (extintores, para-raios, caixas d’água e portões);',
        '4. Abertura de canal direto de ouvidoria para todos os condôminos.'
      ],
      status_documento: 'Registrada e Assinada'
    }
  ],
  reclamacoes: [
    {
      id: 'rec_1',
      protocolo: 'QBC-2026-4812',
      nome: 'Mariana Alves Costa',
      bloco: 'Bloco B',
      apartamento: '203',
      celular: '(37) 99812-4410',
      categoria: 'Manutenção / Iluminação',
      urgencia: 'Média',
      assunto: 'Sensor de presença do 2º andar do Bloco B oscilando',
      mensagem: 'Olá Celson, a lâmpada do hall do 2º pavimento do Bloco B está piscando à noite quando passamos pela escada. Parece ser mau contato no sensor.',
      data: '24/10/2026 às 19:40',
      status: 'Resolvido',
      privado: false,
      resposta_sindico: 'Olá Mariana! Muito obrigado pelo aviso. O eletricista de manutenção esteve no Bloco B no dia 25/10 às 10h e realizou a troca do sensor de presença por um novo. Tudo funcionando perfeitamente! — Celson Rodrigues.'
    },
    {
      id: 'rec_2',
      protocolo: 'QBC-2026-5109',
      nome: 'Roberto Henrique Silva',
      bloco: 'Bloco A',
      apartamento: '104',
      celular: '(37) 99934-1182',
      categoria: 'Garagem / Estacionamento',
      urgencia: 'Alta',
      assunto: 'Veículo visitante estacionado fora da faixa de manobra',
      mensagem: 'Gostaria de solicitar um reforço na orientação sobre carros de visitantes parados próximos à curva de manobra do pátio principal nos finais de semana.',
      data: '26/10/2026 às 14:15',
      status: 'Em Análise',
      privado: false,
      resposta_sindico: 'Prezado Roberto, já acionamos a equipe e emitimos comunicado geral. Além disso, a nova pintura de demarcação de solo desta semana incluirá faixa zebrada amarela proibindo parada na curva de manobra. — Celson Rodrigues.'
    },
    {
      id: 'rec_3',
      protocolo: 'QBC-2026-5290',
      nome: 'Fernanda Oliveira',
      bloco: 'Bloco C',
      apartamento: '301',
      celular: '(37) 99120-8873',
      categoria: 'Sugestão de Melhoria',
      urgencia: 'Baixa',
      assunto: 'Instalação de suporte para encomendas rápidas na portaria',
      mensagem: 'Parabéns pela gestão, Celson! Minha sugestão é colocarmos um armário ou prateleira organizada por bloco para facilitar a retirada de pacotes de compras online.',
      data: '27/10/2026 às 09:20',
      status: 'Pendente',
      privado: false,
      resposta_sindico: ''
    }
  ],
  servicos: [
    {
      id: 'srv_1',
      nome: 'Juliana Mendes Rocha',
      cpf: '114.829.346-10',
      celular: '(37) 99945-2218',
      bloco: 'Bloco A',
      apartamento: '202',
      categoria: 'Alimentação & Confeitaria',
      servico: 'Bolos Caseiros, Doces para Festas e Marmitas Fitness',
      descricao: 'Produção artesanal sob encomenda! Bolos de aniversário, brigadeiros gourmet e kits de marmitas congeladas semanais com entrega grátis aqui no Condomínio Quebec.',
      horario: 'Terça a Sábado • Encomendas pelo WhatsApp',
      verificado: true,
      data_cadastro: '10/10/2026'
    },
    {
      id: 'srv_2',
      nome: 'Carlos Eduardo Martins',
      cpf: '089.442.716-55',
      celular: '(37) 99871-6034',
      bloco: 'Bloco C',
      apartamento: '101',
      categoria: 'Manutenção & Reparos',
      servico: 'Eletricista Residencial, Montagem de Móveis e Marido de Aluguel',
      descricao: 'Troca de chuveiros, instalação de tomadas, ventiladores de teto, suportes de TV, fechaduras digitais e montagem de móveis em geral. Atendimento rápido para vizinhos!',
      horario: 'Segunda a Sábado (inclusive emergências)',
      verificado: true,
      data_cadastro: '12/10/2026'
    },
    {
      id: 'srv_3',
      nome: 'Camila Ferreira Santos',
      cpf: '132.675.906-21',
      celular: '(37) 99918-7740',
      bloco: 'Bloco B',
      apartamento: '304',
      categoria: 'Beleza & Estética',
      servico: 'Manicure, Pedicure, Alongamento em Gel e Design de Sobrancelhas',
      descricao: 'Atendimento com hora marcada no conforto do condomínio. Materiais 100% esterilizados em autoclave. Condições especiais para moradoras do Residencial Quebec.',
      horario: 'Terça a Sábado das 09h às 19h',
      verificado: true,
      data_cadastro: '15/10/2026'
    },
    {
      id: 'srv_4',
      nome: 'Rafael Ribeiro Nogueira',
      cpf: '105.338.296-84',
      celular: '(37) 99804-5591',
      bloco: 'Bloco D',
      apartamento: '201',
      categoria: 'Tecnologia & Informática',
      servico: 'Manutenção de Computadores, Notebooks e Configuração de Wi-Fi',
      descricao: 'Formatação com backup, instalação de SSD para deixar seu notebook rápido, remoção de vírus, configuração de roteadores Mesh e impressoras.',
      horario: 'Segunda a Sexta após as 18h | Sábados o dia todo',
      verificado: true,
      data_cadastro: '19/10/2026'
    },
    {
      id: 'srv_5',
      nome: 'Patrícia Gomes Andrade',
      cpf: '076.912.486-09',
      celular: '(37) 99962-3105',
      bloco: 'Bloco A',
      apartamento: '302',
      categoria: 'Educação & Aulas',
      servico: 'Reforço Escolar (Ensino Fundamental) e Aulas de Inglês',
      descricao: 'Pedagoga formada com 8 anos de experiência. Acompanhamento de tarefas escolares, preparação para provas de Matemática/Português e inglês conversação.',
      horario: 'Manhã e Tarde (Seg a Sex)',
      verificado: true,
      data_cadastro: '22/10/2026'
    }
  ]
};

let state = {
  avisos: [],
  melhorias: [],
  atas: [],
  reclamacoes: [],
  servicos: [],
  currentMelhoriaFilter: 'Todas',
  currentServicoCat: 'Todas',
  isAdminLogged: false,
  apiOnline: false
};

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
  await loadDatabase();
  renderAll();
});

async function loadDatabase() {
  try {
    const res = await fetch('/api/bootstrap');
    if (res.ok) {
      const data = await res.json();
      state.avisos = data.avisos || SEED_DB.avisos;
      state.melhorias = data.melhorias || SEED_DB.melhorias;
      state.atas = data.atas || SEED_DB.atas;
      state.reclamacoes = data.reclamacoes || SEED_DB.reclamacoes;
      state.servicos = data.servicos || SEED_DB.servicos;
      state.apiOnline = true;
      saveLocalBackup();
      updateApiIndicator(true);
      return;
    }
  } catch (e) {
    // Fallback para LocalStorage caso aberto diretamente via arquivo
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.avisos = parsed.avisos || SEED_DB.avisos;
      state.melhorias = parsed.melhorias || SEED_DB.melhorias;
      state.atas = parsed.atas || SEED_DB.atas;
      state.reclamacoes = parsed.reclamacoes || SEED_DB.reclamacoes;
      state.servicos = parsed.servicos || SEED_DB.servicos;
    } catch (err) {
      Object.assign(state, JSON.parse(JSON.stringify(SEED_DB)));
    }
  } else {
    Object.assign(state, JSON.parse(JSON.stringify(SEED_DB)));
    saveLocalBackup();
  }
  updateApiIndicator(false);
}

function saveLocalBackup() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    avisos: state.avisos,
    melhorias: state.melhorias,
    atas: state.atas,
    reclamacoes: state.reclamacoes,
    servicos: state.servicos
  }));
}

function updateApiIndicator(online) {
  const textEl = document.getElementById('apiStatusText');
  if (!textEl) return;
  textEl.textContent = online
    ? 'Back-end Ruby + Banco de Dados Ativo'
    : 'Banco de Dados Local Sincronizado';
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4200);
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));

  const targetPanel = document.getElementById(`tab-${tabId}`);
  const targetBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);

  if (targetPanel) targetPanel.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAll() {
  updateBadgesAndKPIs();
  renderNoticeBar();
  renderMelhorias();
  renderAtas();
  renderReclamacoes();
  renderServicos();
  if (state.isAdminLogged) {
    renderAdminAll();
  }
}

function updateBadgesAndKPIs() {
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setTxt('badgeMelhorias', state.melhorias.length);
  setTxt('badgeAtas', state.atas.length);
  setTxt('badgeReclamacoes', state.reclamacoes.length);
  setTxt('badgeServicos', state.servicos.length);

  setTxt('kpiMelhorias', state.melhorias.length);
  setTxt('kpiAtas', state.atas.length);
  setTxt('kpiReclamacoes', `${state.reclamacoes.length} Reg.`);
  setTxt('kpiServicos', state.servicos.length);

  setTxt('admCountRec', state.reclamacoes.length);
  setTxt('admCountAtas', state.atas.length);
  setTxt('admCountMel', state.melhorias.length);
  setTxt('admCountSrv', state.servicos.length);
}

function renderNoticeBar() {
  if (!state.avisos || state.avisos.length === 0) return;
  const latest = state.avisos[0];
  const txt = document.getElementById('latestNoticeText');
  if (txt) {
    txt.innerHTML = `<strong>${escapeHtml(latest.titulo)}:</strong> ${escapeHtml(latest.mensagem)} <em>(${escapeHtml(latest.data)})</em>`;
  }
}

// ==========================================
// RENDERIZAÇÃO DE MELHORIAS
// ==========================================
function filterMelhorias(status, btn) {
  state.currentMelhoriaFilter = status;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderMelhorias();
}

function renderMelhorias() {
  const grid = document.getElementById('melhoriasGrid');
  if (!grid) return;

  const list = state.currentMelhoriaFilter === 'Todas'
    ? state.melhorias
    : state.melhorias.filter(m => m.status === state.currentMelhoriaFilter);

  if (list.length === 0) {
    grid.innerHTML = `<div class="card" style="grid-column: 1 / -1; text-align:center; color:var(--text-muted);">Nenhuma melhoria encontrada neste filtro.</div>`;
    return;
  }

  grid.innerHTML = list.map(m => {
    const badgeClass = m.status === 'Concluído'
      ? 'status-concluido'
      : m.status === 'Em Andamento'
        ? 'status-andamento'
        : 'status-planejado';

    return `
      <article class="melhoria-card">
        <div class="melhoria-img">
          <img src="${escapeHtml(m.imagem)}" alt="${escapeHtml(m.titulo)}" />
        </div>
        <div class="melhoria-body">
          <div class="melhoria-meta">
            <span>📅 ${escapeHtml(m.data)}</span>
            <span class="status-badge ${badgeClass}">${escapeHtml(m.status)}</span>
          </div>
          <h3>${escapeHtml(m.titulo)}</h3>
          <p>${escapeHtml(m.descricao)}</p>
          <div style="font-size:0.8rem; color:var(--primary); font-weight:600; margin-bottom:0.65rem;">
            💰 Investimento / Previsão: ${escapeHtml(m.investimento || 'Sob consulta')}
          </div>
          <div class="progress-wrap">
            <div class="progress-labels">
              <span>Execução da Etapa</span>
              <span>${m.progresso}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${m.progresso}%"></div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// RENDERIZAÇÃO DE ATAS DE REUNIÕES
// ==========================================
function renderAtas() {
  const container = document.getElementById('atasListContainer');
  if (!container) return;

  const query = (document.getElementById('searchAtasInput')?.value || '').toLowerCase().trim();
  const filtered = state.atas.filter(a =>
    a.titulo.toLowerCase().includes(query) ||
    a.resumo.toLowerCase().includes(query) ||
    a.data.toLowerCase().includes(query) ||
    (a.numero || '').toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center; color:var(--text-muted);">Nenhuma ata encontrada para a pesquisa informada.</div>`;
    return;
  }

  container.innerHTML = filtered.map(a => `
    <article class="ata-card">
      <div class="ata-info">
        <div class="ata-tags">
          <span class="protocolo-tag">${escapeHtml(a.numero || 'ATA OFICIAL')}</span>
          <span class="status-badge status-concluido">📅 ${escapeHtml(a.data)}</span>
          <span class="status-badge status-planejado">${escapeHtml(a.tipo)}</span>
        </div>
        <h3>${escapeHtml(a.titulo)}</h3>
        <p>${escapeHtml(a.resumo)}</p>
        <div class="ata-pautas">
          <strong style="display:block; margin-bottom:0.4rem; color:var(--bg-dark);">Principais Pautas e Deliberações:</strong>
          <ul>
            ${(a.pautas || []).map(p => `<li>✔️ ${escapeHtml(p)}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.6rem; min-width:190px;">
        <button class="btn btn-primary btn-sm" onclick="openAtaModal('${a.id}')">
          📄 Ler / Imprimir Ata Oficial
        </button>
        <span style="font-size:0.76rem; color:var(--text-muted); text-align:center;">
          Assinado por:<br/><strong>${escapeHtml(a.responsavel || 'Celson Rodrigues')}</strong>
        </span>
      </div>
    </article>
  `).join('');
}

function openAtaModal(ataId) {
  const ata = state.atas.find(a => a.id === ataId);
  if (!ata) return;

  const body = document.getElementById('ataModalBody');
  body.innerHTML = `
    <div style="border-bottom:2px solid var(--bg-dark); padding-bottom:1rem; margin-bottom:1.25rem;">
      <span style="font-size:0.78rem; font-weight:700; color:var(--accent); text-transform:uppercase;">
        Condomínio Residencial Quebec • Rua Ênio Pereira de Carvalho, 383 - Itaúna/MG
      </span>
      <h2 style="font-size:1.35rem; color:var(--bg-dark); margin-top:0.3rem;">${escapeHtml(ata.titulo)}</h2>
      <div style="display:flex; gap:1rem; font-size:0.84rem; color:var(--text-muted); margin-top:0.4rem; flex-wrap:wrap;">
        <span><strong>Documento:</strong> ${escapeHtml(ata.numero)}</span>
        <span><strong>Data:</strong> ${escapeHtml(ata.data)}</span>
        <span><strong>Síndico Responsável:</strong> ${escapeHtml(ata.responsavel)}</span>
      </div>
    </div>

    <h4 style="margin-bottom:0.4rem; color:var(--bg-dark);">1. Resumo das Deliberações</h4>
    <p style="font-size:0.92rem; color:var(--text-main); margin-bottom:1.25rem;">${escapeHtml(ata.resumo)}</p>

    <h4 style="margin-bottom:0.5rem; color:var(--bg-dark);">2. Ordem do Dia / Pautas Aprovadas</h4>
    <ul style="padding-left:1.2rem; margin-bottom:1.5rem; font-size:0.9rem; color:var(--text-main);">
      ${(ata.pautas || []).map(p => `<li style="margin-bottom:0.35rem;">${escapeHtml(p)}</li>`).join('')}
    </ul>

    <div style="background:#f8fafc; border:1px solid var(--border); padding:1rem; border-radius:8px; font-size:0.84rem;">
      <strong>Autenticação Digital da Gestão:</strong><br/>
      Documento publicado no Portal Oficial do Condomínio Residencial Quebec (CEP 35681-312, Parque Jardim Santanense, Itaúna - MG) sob responsabilidade da gestão do Síndico <strong>Celson Rodrigues</strong>.
    </div>
  `;

  document.getElementById('ataModal').classList.add('open');
}

function closeAtaModal() {
  document.getElementById('ataModal').classList.remove('open');
}

// ==========================================
// RECLAMAÇÕES E OUVIDORIA (COM ARMAZENAMENTO)
// ==========================================
async function handleCreateReclamacao(e) {
  e.preventDefault();

  const payload = {
    protocolo: `QBC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    nome: document.getElementById('recNome').value.trim(),
    celular: document.getElementById('recCelular').value.trim(),
    bloco: document.getElementById('recBloco').value,
    apartamento: document.getElementById('recApto').value.trim(),
    categoria: document.getElementById('recCategoria').value,
    urgencia: document.getElementById('recUrgencia').value,
    assunto: document.getElementById('recAssunto').value.trim(),
    mensagem: document.getElementById('recMensagem').value.trim(),
    privado: document.getElementById('recPrivado').checked
  };

  try {
    const res = await fetch('/api/reclamacoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const saved = await res.json();
      state.reclamacoes.unshift(saved);
    } else {
      throw new Error('Fallback local');
    }
  } catch (err) {
    const now = new Date();
    const dataStr = `${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
    state.reclamacoes.unshift({
      id: `rec_${Date.now()}`,
      ...payload,
      data: dataStr,
      status: 'Pendente',
      resposta_sindico: ''
    });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formReclamacao').reset();
  showToast(`✅ Reclamação armazenada com sucesso! Protocolo: ${payload.protocolo}`);
}

function renderReclamacoes() {
  const container = document.getElementById('reclamacoesListContainer');
  if (!container) return;

  const statusFilter = document.getElementById('filterRecStatus')?.value || 'Todos';
  const list = statusFilter === 'Todos'
    ? state.reclamacoes
    : state.reclamacoes.filter(r => r.status === statusFilter);

  if (list.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center; color:var(--text-muted);">Nenhuma ocorrência encontrada neste filtro.</div>`;
    return;
  }

  container.innerHTML = list.map(r => {
    const badgeClass = r.status === 'Resolvido'
      ? 'status-resolvido'
      : r.status === 'Em Análise'
        ? 'status-analise'
        : 'status-pendente';

    const autorPublico = r.privado
      ? `Morador Verificado (${escapeHtml(r.bloco)}) • Identificação restrita ao Síndico`
      : `${escapeHtml(r.nome)} • ${escapeHtml(r.bloco)} - Apto ${escapeHtml(r.apartamento)}`;

    return `
      <article class="reclamacao-item">
        <div class="reclamacao-header">
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <span class="protocolo-tag">#${escapeHtml(r.protocolo)}</span>
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">${escapeHtml(r.categoria)}</span>
          </div>
          <span class="status-badge ${badgeClass}">${escapeHtml(r.status)}</span>
        </div>

        <h4 style="font-size:1.02rem; color:var(--bg-dark); margin-bottom:0.35rem;">${escapeHtml(r.assunto)}</h4>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:0.65rem;">${escapeHtml(r.mensagem)}</p>

        <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:var(--text-light); flex-wrap:wrap; gap:0.5rem;">
          <span>👤 ${autorPublico}</span>
          <span>🕒 ${escapeHtml(r.data)}</span>
        </div>

        ${r.resposta_sindico ? `
          <div class="sindico-reply">
            <strong>👔 Resposta Oficial — Síndico Celson Rodrigues:</strong>
            <span>${escapeHtml(r.resposta_sindico)}</span>
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

// ==========================================
// SERVIÇOS PRESTADOS PELOS MORADORES
// ==========================================
function filterServicosCat(cat, btn) {
  state.currentServicoCat = cat;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderServicos();
}

function maskCPFProtected(cpf) {
  if (!cpf) return '***.***.***-**';
  const digits = cpf.replace(/\D/g, '');
  if (digits.length === 11) {
    return `***.${digits.slice(3, 6)}.${digits.slice(6, 9)}-**`;
  }
  return '***.***.***-**';
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
      s.bloco.toLowerCase().includes(query) ||
      s.categoria.toLowerCase().includes(query);
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="card" style="grid-column: 1 / -1; text-align:center; color:var(--text-muted);">Nenhum serviço encontrado para esta busca. Seja o primeiro morador a cadastrar!</div>`;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    const cleanPhone = (s.celular || '').replace(/\D/g, '');
    const waUrl = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(`Olá ${s.nome}! Vi seu serviço (${s.servico}) no Portal do Condomínio Quebec e gostaria de um orçamento.`)}`;

    return `
      <article class="servico-card">
        <div>
          <div class="servico-top">
            <span class="morador-apt-badge">🏠 ${escapeHtml(s.bloco)} • Apto ${escapeHtml(s.apartamento)}</span>
            <span class="verified-pill">✓ CPF Validado (${maskCPFProtected(s.cpf)})</span>
          </div>
          <div style="font-size:0.76rem; font-weight:700; color:var(--accent); text-transform:uppercase; margin-bottom:0.25rem;">
            ${escapeHtml(s.categoria)}
          </div>
          <h3>${escapeHtml(s.servico)}</h3>
          <div class="servico-provider">👤 Morador(a): ${escapeHtml(s.nome)}</div>
          <p class="servico-desc">${escapeHtml(s.descricao)}</p>
        </div>

        <div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.75rem;">
            🕒 <strong>Atendimento:</strong> ${escapeHtml(s.horario || 'A combinar')}
          </div>
          <div class="servico-footer">
            <span style="font-size:0.86rem; font-weight:700; color:var(--bg-dark);">📱 ${escapeHtml(s.celular)}</span>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
              💬 Chamar no WhatsApp
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

async function handleCreateServico(e) {
  e.preventDefault();

  const cpfVal = document.getElementById('srvCpf').value.trim();
  if (cpfVal.replace(/\D/g, '').length < 11) {
    showToast('⚠️ Por favor, informe os 11 dígitos do CPF do morador.');
    return;
  }

  const payload = {
    nome: document.getElementById('srvNome').value.trim(),
    cpf: cpfVal,
    celular: document.getElementById('srvCelular').value.trim(),
    bloco: document.getElementById('srvBloco').value,
    apartamento: document.getElementById('srvApto').value.trim(),
    categoria: document.getElementById('srvCategoria').value,
    servico: document.getElementById('srvTitulo').value.trim(),
    horario: document.getElementById('srvHorario').value.trim() || 'A combinar pelo WhatsApp',
    descricao: document.getElementById('srvDescricao').value.trim()
  };

  try {
    const res = await fetch('/api/servicos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const saved = await res.json();
      state.servicos.unshift(saved);
    } else {
      throw new Error('Fallback local');
    }
  } catch (err) {
    state.servicos.unshift({
      id: `srv_${Date.now()}`,
      ...payload,
      verificado: true,
      data_cadastro: new Date().toLocaleDateString('pt-BR')
    });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formServicoMorador').reset();
  showToast(`🎉 Serviço de ${payload.nome} (${payload.bloco} - Apto ${payload.apartamento}) publicado com sucesso!`);
  window.scrollTo({ top: 150, behavior: 'smooth' });
}

// ==========================================
// PAINEL ADMINISTRATIVO DO SÍNDICO CELSON RODRIGUES
// ==========================================
function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('adminUser').value.trim().toLowerCase();
  const p = document.getElementById('adminPass').value.trim();

  if ((u === 'celson' || u === 'sindico' || u === 'admin') && p === 'quebec383') {
    state.isAdminLogged = true;
    document.getElementById('adminLoginView').style.display = 'none';
    document.getElementById('adminDashboardView').style.display = 'block';
    renderAdminAll();
    showToast('🔓 Bem-vindo ao Painel da Gestão, Síndico Celson Rodrigues!');
  } else {
    showToast('❌ Credenciais inválidas. Use celson / quebec383');
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
  updateBadgesAndKPIs();
  renderAdminReclamacoes();
  renderAdminAtas();
  renderAdminMelhorias();
  renderAdminServicos();
  renderAdminAvisos();
}

function renderAdminReclamacoes() {
  const container = document.getElementById('adminReclamacoesList');
  if (!container) return;

  if (state.reclamacoes.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);">Nenhuma reclamação registrada.</p>`;
    return;
  }

  container.innerHTML = state.reclamacoes.map(r => `
    <div class="reclamacao-item" style="border-left:4px solid var(--primary);">
      <div class="reclamacao-header">
        <div>
          <span class="protocolo-tag">#${escapeHtml(r.protocolo)}</span>
          <strong style="margin-left:0.5rem;">${escapeHtml(r.nome)}</strong>
          <span style="color:var(--primary); font-weight:700; margin-left:0.4rem;">(${escapeHtml(r.bloco)} - Apto ${escapeHtml(r.apartamento)})</span>
          <span style="font-size:0.82rem; color:var(--text-muted); margin-left:0.5rem;">📱 ${escapeHtml(r.celular)}</span>
        </div>
        <span style="font-size:0.8rem; color:var(--text-muted);">🕒 ${escapeHtml(r.data)} | Prioridade: <strong>${escapeHtml(r.urgencia)}</strong></span>
      </div>

      <p style="font-weight:700; margin-bottom:0.25rem;">${escapeHtml(r.assunto)} <small style="color:var(--accent);">[${escapeHtml(r.categoria)}]</small></p>
      <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:0.9rem;">${escapeHtml(r.mensagem)}</p>

      <div style="display:grid; grid-template-columns: 200px 1fr auto auto; gap:0.65rem; align-items:center; background:#f8fafc; padding:0.85rem; border-radius:8px;">
        <select id="admStatus_${r.id}" class="form-control">
          <option value="Pendente" ${r.status === 'Pendente' ? 'selected' : ''}>⏳ Pendente</option>
          <option value="Em Análise" ${r.status === 'Em Análise' ? 'selected' : ''}>🔍 Em Análise</option>
          <option value="Resolvido" ${r.status === 'Resolvido' ? 'selected' : ''}>✅ Resolvido</option>
        </select>
        <input type="text" id="admReply_${r.id}" class="form-control" value="${escapeHtml(r.resposta_sindico || '')}" placeholder="Escrever resposta oficial do Síndico Celson Rodrigues..." />
        <button class="btn btn-primary btn-sm" onclick="saveAdminReclamacao('${r.id}')">Salvar Parecer</button>
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
  showToast('✅ Status e resposta do Síndico Celson Rodrigues atualizados!');
}

async function deleteAdminReclamacao(id) {
  state.reclamacoes = state.reclamacoes.filter(r => r.id !== id);
  try {
    await fetch(`/api/reclamacoes?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('🗑️ Registro removido.');
}

async function handleAdminCreateAta(e) {
  e.preventDefault();
  const payload = {
    titulo: document.getElementById('ataTitulo').value.trim(),
    tipo: document.getElementById('ataTipo').value,
    data: document.getElementById('ataData').value.trim(),
    numero: document.getElementById('ataNumero').value.trim() || `ATA Nº 0${state.atas.length + 1}/2026`,
    responsavel: 'Celson Rodrigues (Síndico)',
    resumo: document.getElementById('ataResumo').value.trim(),
    pautas: document.getElementById('ataPautas').value.split('\n').map(s => s.trim()).filter(Boolean)
  };

  try {
    const res = await fetch('/api/atas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const nova = await res.json();
      state.atas.unshift(nova);
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.atas.unshift({ id: `ata_${Date.now()}`, ...payload, status_documento: 'Registrada e Publicada' });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formAdminAta').reset();
  showToast('📋 Nova Ata de Reunião publicada com sucesso!');
}

function renderAdminAtas() {
  const el = document.getElementById('adminAtasList');
  if (!el) return;
  el.innerHTML = state.atas.map(a => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 0; border-bottom:1px solid var(--border); gap:0.75rem;">
      <div>
        <strong style="font-size:0.9rem; display:block;">${escapeHtml(a.titulo)}</strong>
        <span style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(a.numero)} • ${escapeHtml(a.data)}</span>
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
  showToast('🗑️ Ata removida.');
}

async function handleAdminCreateMelhoria(e) {
  e.preventDefault();
  const payload = {
    titulo: document.getElementById('melTitulo').value.trim(),
    categoria: document.getElementById('melCategoria').value,
    status: document.getElementById('melStatus').value,
    progresso: parseInt(document.getElementById('melProgresso').value || '100', 10),
    data: document.getElementById('melData').value.trim(),
    investimento: document.getElementById('melInvestimento').value.trim() || 'Sob consulta',
    descricao: document.getElementById('melDescricao').value.trim(),
    imagem: document.getElementById('melImagem').value.trim() || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80'
  };

  try {
    const res = await fetch('/api/melhorias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const nova = await res.json();
      state.melhorias.unshift(nova);
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.melhorias.unshift({ id: `mel_${Date.now()}`, ...payload });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formAdminMelhoria').reset();
  showToast('🛠️ Nova melhoria publicada no portal!');
}

function renderAdminMelhorias() {
  const el = document.getElementById('adminMelhoriasList');
  if (!el) return;
  el.innerHTML = state.melhorias.map(m => `
    <div style="padding:0.8rem 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
      <div>
        <strong style="font-size:0.9rem; display:block;">${escapeHtml(m.titulo)}</strong>
        <span style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(m.status)} (${m.progresso}%) • ${escapeHtml(m.investimento)}</span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteAdminMelhoria('${m.id}')">Excluir</button>
    </div>
  `).join('');
}

async function deleteAdminMelhoria(id) {
  state.melhorias = state.melhorias.filter(m => m.id !== id);
  try {
    await fetch(`/api/melhorias?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('🗑️ Melhoria removida.');
}

function renderAdminServicos() {
  const tbody = document.getElementById('adminServicosTableBody');
  if (!tbody) return;

  tbody.innerHTML = state.servicos.map(s => `
    <tr>
      <td><strong>${escapeHtml(s.nome)}</strong><br/><small style="color:var(--text-muted);">Cadastrado em ${escapeHtml(s.data_cadastro || '2026')}</small></td>
      <td><span class="protocolo-tag">${escapeHtml(s.cpf)}</span></td>
      <td><strong>${escapeHtml(s.bloco)}</strong> • Apto ${escapeHtml(s.apartamento)}</td>
      <td>${escapeHtml(s.celular)}</td>
      <td><strong>${escapeHtml(s.servico)}</strong><br/><small style="color:var(--text-muted);">${escapeHtml(s.categoria)}</small></td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteAdminServico('${s.id}')">Remover</button>
      </td>
    </tr>
  `).join('');
}

async function deleteAdminServico(id) {
  state.servicos = state.servicos.filter(s => s.id !== id);
  try {
    await fetch(`/api/servicos?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  } catch (e) {}
  saveLocalBackup();
  renderAll();
  showToast('🗑️ Cadastro de serviço removido.');
}

async function handleAdminCreateAviso(e) {
  e.preventDefault();
  const payload = {
    titulo: document.getElementById('avisoTitulo').value.trim(),
    mensagem: document.getElementById('avisoMensagem').value.trim()
  };

  try {
    const res = await fetch('/api/avisos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const novo = await res.json();
      state.avisos.unshift(novo);
    } else {
      throw new Error('Fallback');
    }
  } catch (err) {
    state.avisos.unshift({
      id: `av_${Date.now()}`,
      ...payload,
      data: new Date().toLocaleDateString('pt-BR'),
      autor: 'Celson Rodrigues (Síndico)'
    });
  }

  saveLocalBackup();
  renderAll();
  document.getElementById('formAdminAviso').reset();
  showToast('📢 Comunicado publicado no topo do site!');
}

function renderAdminAvisos() {
  const el = document.getElementById('adminAvisosList');
  if (!el) return;
  el.innerHTML = state.avisos.map(a => `
    <div style="padding:0.75rem 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
      <div>
        <strong style="font-size:0.9rem; display:block;">${escapeHtml(a.titulo)}</strong>
        <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(a.mensagem)}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// MÁSCARAS DE CPF E TELEFONE + UTILS
// ==========================================
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

function selectBlockInfo(blockName, infoText, el) {
  document.querySelectorAll('.block-tower').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  const banner = document.getElementById('blockDetailBanner');
  if (banner) {
    banner.innerHTML = `
      <span style="font-size:0.9rem; color:var(--green-forest);">
        🏢 <strong>${escapeHtml(blockName)} Selecionado:</strong> ${escapeHtml(infoText)}.
      </span>
      <span style="font-size:0.8rem; color:var(--green-medium); font-weight:700;">✓ Monitorado 24h pela Portaria</span>
    `;
  }
}

function handleCustomPhotoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const gallery = document.getElementById('condoGallery');
    if (!gallery) return;
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${e.target.result}" alt="Foto Adicionada do Condomínio Quebec" />
      <div class="gallery-caption">
        <strong>Registro Real — Condomínio Quebec</strong>
        <span>Foto enviada • Rua Ênio Pereira de Carvalho, 383</span>
      </div>
    `;
    gallery.prepend(div);
    showToast('📸 Foto adicionada à galeria do Condomínio Quebec!');
  };
  reader.readAsDataURL(file);
}
