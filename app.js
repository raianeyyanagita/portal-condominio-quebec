const STORAGE_KEY = 'condominio_quebec_db_v9';

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
      id: 'av_1',
      titulo: 'Dedetização e Desratização nas Áreas Comuns (Blocos 01 ao 11)',
      mensagem: 'Realizaremos o serviço completo de dedetização e desratização nas áreas externas, escadas e redes pluviais. Pedimos aos moradores que mantenham ralos vedados e evitem deixar animais domésticos soltos no pátio durante a aplicação.',
      data: 'Cronograma Mensal • A partir das 08h30',
      prioridade: 'Dedetização & Saúde',
      autor: 'Administração'
    },
    {
      id: 'av_2',
      titulo: 'Limpeza Preventiva das Caixinhas de Esgoto e Gordura',
      mensagem: 'A equipe de manutenção realizará a limpeza periódica das caixinhas de esgoto de todos os blocos (01 ao 11). Solicitamos não descartar óleo de cozinha, restos de alimentos ou lenços umedecidos nas tubulações.',
      data: 'Manutenção Preventiva • Blocos 01 a 11',
      prioridade: 'Limpeza Caixa de Esgoto',
      autor: 'Administração'
    },
    {
      id: 'av_3',
      titulo: 'Áreas Debaixo das Escadas e Padronização das Garagens',
      mensagem: 'Conforme definido em Assembleia, as áreas debaixo das escadas devem permanecer totalmente livres por segurança. As vagas de garagem destinam-se exclusivamente ao estacionamento de veículos e motocicletas.',
      data: 'Regimento Interno em Vigor',
      prioridade: 'Comunicado Importante',
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
      resumo: 'Documento oficial registrado no 1º Ofício de Registro de Títulos e Documentos de Itaúna/MG: eleição por unanimidade do Síndico e Sub-Síndico, regularização bancária, normas de garagem e autorização de manutenções emergenciais (dedetização, extintores e jardinagem).',
      arquivo_nome: 'Ata_Assembleia_28_08_2025_Registrada_Cartorio.pdf',
      arquivo_url: 'ata-assembleia-28-08-2025.pdf'
    }
  ],
  melhorias: [
    {
      id: 'mel_1',
      titulo: 'Concertina Perimetral (240m) e Câmeras nos Blocos 07 a 10',
      categoria: 'Segurança',
      status: 'Em Andamento',
      progresso: 85,
      data: 'Outubro',
      descricao: 'Instalação de 240 metros de concertina, ampliação das câmeras de monitoramento nos muros dos Blocos 07 a 10 e manutenção do sistema Jotaseg.',
      imagem: 'convivencia-jardim.png'
    },
    {
      id: 'mel_2',
      titulo: 'Pintura do Bloco 02 (Luidar) e Placas de Sinalização',
      categoria: 'Conservação',
      status: 'Em Andamento',
      progresso: 80,
      data: 'Outubro',
      descricao: 'Revitalização da pintura no padrão verde claro e branco e instalação de novas placas de orientação interna.',
      imagem: 'entrada-real-quebec.jpg'
    },
    {
      id: 'mel_3',
      titulo: 'Troca do Motor do Portão e Obra de Escoamento na Área de Lazer',
      categoria: 'Infraestrutura',
      status: 'Concluído',
      progresso: 100,
      data: 'Outubro',
      descricao: 'Substituição do motor do portão eletrônico e obra civil com 250 blocos para escoamento de água na área de lazer.',
      imagem: 'blocos-patio.png'
    },
    {
      id: 'mel_4',
      titulo: 'Fogão e Botijão Novos no Salão de Festas + Jardinagem e Dedetização',
      categoria: 'Área Comum',
      status: 'Concluído',
      progresso: 100,
      data: 'Outubro',
      descricao: 'Aquisição de novos equipamentos para o salão de festas, limpeza de jardinagem e dedetização geral do condomínio.',
      imagem: 'convivencia-jardim.png'
    }
  ],
  reclamacoes: [
    {
      id: 'rec_1',
      protocolo: 'QBC-2026-4812',
      nome: 'Mariana Alves Costa',
      bloco: 'Bloco 02',
      apartamento: 'Apto 08',
      celular: '(37) 99812-4410',
      categoria: 'Manutenção / Iluminação',
      urgencia: 'Média',
      assunto: 'Lâmpada oscilando no corredor do Bloco 02',
      mensagem: 'A lâmpada próxima ao Apto 08 no Bloco 02 está piscando à noite.',
      data: '24/10/2026 às 19:40',
      status: 'Resolvido',
      resposta_sindico: 'Olá Mariana! O eletricista já realizou a troca no Bloco 02. Obrigado por avisar!'
    }
  ],
  servicos: [
    {
      id: 'srv_1',
      nome: 'Juliana Mendes Rocha',
      cpf: '114.829.346-10',
      celular: '(37) 99945-2218',
      bloco: 'Bloco 01',
      apartamento: 'Apto 04',
      categoria: 'Alimentação & Confeitaria',
      servico: 'Bolos Caseiros, Doces e Encomendas',
      descricao: 'Bolos de aniversário, docinhos tradicionais e sobremesas sob encomenda com entrega nos blocos.',
      horario: 'Terça a Sábado'
    },
    {
      id: 'srv_2',
      nome: 'Carlos Eduardo Martins',
      cpf: '089.442.716-55',
      celular: '(37) 99871-6034',
      bloco: 'Bloco 05',
      apartamento: 'Apto 11',
      categoria: 'Manutenção & Reparos',
      servico: 'Eletricista Residencial e Pequenos Reparos',
      descricao: 'Instalação de chuveiros, tomadas, luminárias, suportes de TV e montagem de móveis.',
      horario: 'Segunda a Sábado'
    },
    {
      id: 'srv_3',
      nome: 'Camila Ferreira Santos',
      cpf: '132.675.906-21',
      celular: '(37) 99918-7740',
      bloco: 'Bloco 09',
      apartamento: 'Apto 02',
      categoria: 'Beleza & Estética',
      servico: 'Manicure, Pedicure e Sobrancelhas',
      descricao: 'Atendimento com hora marcada para moradores do Residencial Quebec.',
      horario: 'Terça a Sábado das 09h às 19h'
    }
  ]
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
      state.atas = (data.atas && data.atas.length > 0) ? data.atas : SEED_DB.atas;
      state.melhorias = (data.melhorias && data.melhorias.length > 0) ? data.melhorias : SEED_DB.melhorias;
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

  grid.innerHTML = list.map(m => {
    const badgeClass = m.status === 'Concluído' ? 'status-concluido' : 'status-andamento';
    return `
      <article class="melhoria-card">
        <div class="melhoria-img">
          <img src="${escapeHtml(m.imagem)}" onerror="if(!this.dataset.tried){this.dataset.tried=1;this.src=this.src.split('/').pop();}" alt="${escapeHtml(m.titulo)}" />
        </div>
        <div class="melhoria-body">
          <div class="melhoria-meta">
            <span>${escapeHtml(m.data)}</span>
            <span class="status-badge ${badgeClass}">${escapeHtml(m.status)}</span>
          </div>
          <h3>${escapeHtml(m.titulo)}</h3>
          <p>${escapeHtml(m.descricao)}</p>
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
// OUVIDORIA / RECLAMAÇÕES SIGILOSAS
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

// 5. Admin Melhorias
function previewMelhoriaPhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('melImagemData').value = e.target.result;
  };
  reader.readAsDataURL(file);
}

function editAdminMelhoria(id) {
  const m = state.melhorias.find(item => item.id === id);
  if (!m) return;
  document.getElementById('melEditId').value = m.id;
  document.getElementById('melTitulo').value = m.titulo;
  document.getElementById('melStatus').value = m.status || 'Concluído';
  document.getElementById('melData').value = m.data || '';
  document.getElementById('melDescricao').value = m.descricao || '';
  document.getElementById('melImagemData').value = m.imagem || '';
  document.getElementById('btnCancelMelEdit').style.display = 'inline-flex';
}

function resetMelhoriaForm() {
  document.getElementById('formAdminMelhoria').reset();
  document.getElementById('melEditId').value = '';
  document.getElementById('melImagemData').value = '';
  document.getElementById('btnCancelMelEdit').style.display = 'none';
}

async function handleAdminSaveMelhoria(e) {
  e.preventDefault();
  const editId = document.getElementById('melEditId').value;
  const payload = {
    titulo: document.getElementById('melTitulo').value.trim(),
    status: document.getElementById('melStatus').value,
    data: document.getElementById('melData').value.trim(),
    descricao: document.getElementById('melDescricao').value.trim(),
    imagem: document.getElementById('melImagemData').value || 'assets/fachada-quebec.png'
  };

  if (editId) {
    const idx = state.melhorias.findIndex(m => m.id === editId);
    if (idx !== -1) state.melhorias[idx] = { ...state.melhorias[idx], ...payload };
  } else {
    state.melhorias.unshift({ id: `mel_${Date.now()}`, ...payload });
  }

  resetMelhoriaForm();
  saveLocalBackup();
  renderAll();
  showToast('Melhoria salva!');
}

function renderAdminMelhorias() {
  const el = document.getElementById('adminMelhoriasList');
  if (!el) return;
  el.innerHTML = state.melhorias.map(m => `
    <div style="padding:0.8rem 0; border-bottom:1px solid var(--border-soft); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
      <div>
        <strong style="font-size:0.9rem; color:var(--green-forest); display:block;">${escapeHtml(m.titulo)}</strong>
        <span style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(m.status)} • ${escapeHtml(m.data)}</span>
      </div>
      <div style="display:flex; gap:0.4rem;">
        <button class="btn btn-outline btn-sm" onclick="editAdminMelhoria('${m.id}')">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteAdminMelhoria('${m.id}')">Excluir</button>
      </div>
    </div>
  `).join('');
}

async function deleteAdminMelhoria(id) {
  state.melhorias = state.melhorias.filter(m => m.id !== id);
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
