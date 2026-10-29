require 'webrick'
require 'json'
require 'time'

PORT = (ENV['PORT'] || 3080).to_i
ROOT_DIR = File.expand_path(__dir__)
DATA_DIR = File.join(ROOT_DIR, 'data')
DB_FILE = File.join(DATA_DIR, 'database.json')

Dir.mkdir(DATA_DIR) unless Dir.exist?(DATA_DIR)

DEFAULT_DB = {
  'condominio' => {
    'nome' => 'Condomínio Residencial Quebec',
    'cnpj' => '20.410.595/0001-60',
    'endereco' => 'Rua Ênio Pereira de Carvalho, 383',
    'bairro' => 'Parque Jardim Santanense',
    'cidade' => 'Itaúna - MG',
    'cep' => '35681-312',
    'blocos_info' => 'Blocos 01 ao 11 • Apartamentos 01 ao 16 (176 Unidades)',
    'total_blocos' => 11,
    'aptos_por_bloco' => 16,
    'sindico' => 'Celson Batista Rodrigues Filho',
    'subsindico' => 'Sidney Barcelos Loiola',
    'secretaria' => 'Andréia Oliveira Francisco Matos',
    'galeria' => [
      {
        'id' => 'gal_1',
        'titulo' => 'Portaria Principal — Residencial Quebec',
        'legenda' => 'Fachada oficial no padrão verde claro e branco',
        'imagem' => 'entrada-real-quebec.jpg'
      }
    ]
  },
  'avisos' => [
    {
      'id' => 'av_avcb',
      'titulo' => 'AVCB Atualizado — Auto de Vistoria do Corpo de Bombeiros (Validade 5 Anos)',
      'mensagem' => 'O Condomínio Residencial Quebec está com o AVCB (Nº PRJ20260161622) devidamente regularizado e emitido pelo Corpo de Bombeiros Militar de Minas Gerais, certificando 8.077,09 m² de área liberada com validade de 5 anos (até 19/08/2031).',
      'data' => 'Validade: 5 Anos (Até 19/08/2031)',
      'prioridade' => 'Segurança & Bombeiros',
      'autor' => 'Administração'
    },
    {
      'id' => 'av_1',
      'titulo' => 'Dedetização Semestral nas Áreas Comuns (Feito em Outubro)',
      'mensagem' => 'O serviço completo de dedetização e controle de pragas do condomínio possui periodicidade SEMESTRAL, tendo sido realizado em Outubro em todas as áreas externas, caixas de passagem, ralos e jardins dos Blocos 01 ao 11.',
      'data' => 'Periodicidade Semestral • Feito em Outubro',
      'prioridade' => 'Dedetização & Saúde',
      'autor' => 'Administração'
    },
    {
      'id' => 'av_extintores',
      'titulo' => 'Recarga de Extintores — Manutenção Anual (Novembro)',
      'mensagem' => 'A recarga e manutenção preventiva de todos os extintores de incêndio (Pó Químico ABC e CO2) dos Blocos 01 ao 11 é realizada ANUALMENTE no mês de Novembro.',
      'data' => 'Manutenção Anual • Novembro',
      'prioridade' => 'Prevenção de Incêndio',
      'autor' => 'Administração'
    },
    {
      'id' => 'av_2',
      'titulo' => 'Limpeza Preventiva das Caixinhas de Esgoto e Gordura',
      'mensagem' => 'A equipe de manutenção realiza a limpeza periódica das caixinhas de esgoto e gordura de todos os blocos (01 ao 11). Solicitamos não descartar óleo de cozinha, restos de alimentos ou lenços umedecidos nas tubulações.',
      'data' => 'Manutenção Preventiva • Blocos 01 a 11',
      'prioridade' => 'Limpeza Caixa de Gordura',
      'autor' => 'Administração'
    },
    {
      'id' => 'av_3',
      'titulo' => 'Estacionamento e Garagens (Veículos, Motocicletas e Bicicletas)',
      'mensagem' => 'Conforme o Regimento Interno (Art. 17 a 20) e deliberação em Assembleia, as vagas de garagem demarcadas destinam-se ao estacionamento de veículos, motocicletas e também bicicletas (alocadas dentro dos limites da vaga respectiva de cada unidade). As áreas debaixo das escadas devem permanecer livres.',
      'data' => 'Regimento Interno em Vigor',
      'prioridade' => 'Estacionamento & Garagem',
      'autor' => 'Administração'
    }
  ],
  'fechamentos' => [
    {
      'id' => 'fech_1',
      'mes_referencia' => 'Fechamento Mensal — Setembro / Outubro',
      'responsavel' => 'Síndico Celson Batista Rodrigues Filho',
      'arquivo_nome' => 'Fechamento_Mensal_Condominio_Quebec.pdf',
      'arquivo_url' => 'fechamento-mensal-quebec.pdf',
      'planilha_url' => 'fechamento-mensal-quebec.xlsx',
      'observacoes' => 'Balancete oficial das contas Sicoob e Cora (Saldo inicial R$ 6.736,94 • Receitas R$ 19.802,20 • Despesas e Obras R$ 19.826,62 • Saldo final R$ 8.462,52).'
    }
  ],
  'melhorias' => [
    {
      'id' => 'mel_avcb_2026',
      'titulo' => 'AVCB Atualizado — Auto de Vistoria do Corpo de Bombeiros (Validade 5 Anos)',
      'categoria' => 'Manutenção Preventiva',
      'status' => 'Concluído',
      'data' => 'Validade: 5 Anos (Até 19/08/2031)',
      'descricao' => 'Certificação oficial emitida pelo Corpo de Bombeiros Militar de Minas Gerais (AVCB Nº PRJ20260161622 • Chave 1A07-F31B-C188-0CD4), atestando que os 8.077,09 m² do Condomínio Residencial Quebec cumprem todas as normas estaduais de Segurança Contra Incêndio e Pânico (PSCIP).',
      'destaque_nota' => '🚒 AVCB Atualizado — Validade de 5 anos (Emitido em 19/08/2026 • Válido até 19/08/2031).',
      'imagem' => 'mel-avcb-bombeiros.jpg',
      'fotos' => [
        { 'url' => 'mel-avcb-bombeiros.jpg', 'fase' => '', 'legenda' => 'Certificado oficial AVCB — Corpo de Bombeiros Militar de Minas Gerais (Validade até 19/08/2031).' }
      ]
    },
    {
      'id' => 'mel_lixeira_2025',
      'titulo' => 'Revitalização da Lixeira Coletiva',
      'categoria' => 'Revitalização & Obras',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Reforma e revitalização completa da lixeira coletiva: retirada de entulhos acumulados, pintura externa em cinza escuro, nova porta metálica sinalizada ("Depósito de Lixo — Proibido Colocar Entulho"), construção de muro branco de proteção visual, suporte para saquinhos e jardim.',
      'destaque_nota' => 'Antes e Depois: organização total, higiene e fim do descarte irregular.',
      'imagem' => 'mel-lixeira-depois.jpg',
      'fotos' => [
        { 'url' => 'mel-lixeira-antes.jpg', 'fase' => 'Antes', 'legenda' => 'Antes: Área aberta com acúmulo de madeira, papelão e entulhos.' },
        { 'url' => 'mel-lixeira-depois.jpg', 'fase' => 'Depois', 'legenda' => 'Depois: Depósito revitalizado, pintado, sinalizado e protegido por muro novo.' }
      ]
    },
    {
      'id' => 'mel_lazer_2025',
      'titulo' => 'Revitalização da Área de Lazer',
      'categoria' => 'Revitalização & Obras',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Revitalização completa do Salão de Festas e espaço gourmet: remoção das pichações, nova pintura, instalação de grades de proteção e estruturação total. Agora disponibilizamos aos moradores uma área completa, equipada com churrasqueira, freezer, televisão, fogão e outros itens!',
      'destaque_nota' => '✨ Agora disponibilizamos uma área de lazer completa com churrasqueira, freezer, televisão, fogão e outros!',
      'imagem' => 'mel-lazer-depois-obra.jpg',
      'fotos' => [
        { 'url' => 'mel-lazer-antes.jpg', 'fase' => 'Antes', 'legenda' => 'Antes: Paredes da churrasqueira e área de lazer com pichações.' },
        { 'url' => 'mel-lazer-depois-obra.jpg', 'fase' => 'Depois', 'legenda' => 'Depois: Área revitalizada, pintada e equipada com churrasqueira, freezer, televisão e outros.' }
      ]
    },
    {
      'id' => 'mel_grama_2025',
      'titulo' => 'Projeto Grama Mais Verde',
      'categoria' => 'Jardinagem & Paisagismo',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Implantação do Projeto Grama Mais Verde nos taludes e jardins do Condomínio Residencial Quebec: aquisição dos paletes de grama natural, plantio nos barrancos, irrigação diária e placas de preservação ("Não Pise na Grama").',
      'destaque_nota' => 'Mais verde, valorização visual e conservação das áreas comuns.',
      'imagem' => 'mel-grama-depois-talude.jpg',
      'fotos' => [
        { 'url' => 'mel-grama-depois-talude.jpg', 'fase' => '', 'legenda' => 'Gramado verdinho e fechado nos taludes do condomínio.' },
        { 'url' => 'mel-grama-depois-placa.jpg', 'fase' => '', 'legenda' => 'Cuidado com o gramado e placa educativa "Não Pise na Grama".' },
        { 'url' => 'mel-grama-durante-irrigacao.jpg', 'fase' => '', 'legenda' => 'Irrigação e cuidado diário com a grama.' },
        { 'url' => 'mel-grama-antes-plantio.jpg', 'fase' => '', 'legenda' => 'Etapa de assentamento dos tapetes de grama.' },
        { 'url' => 'mel-grama-antes-paletes.jpg', 'fase' => '', 'legenda' => 'Chegada dos paletes de grama natural no condomínio.' }
      ]
    },
    {
      'id' => 'mel_parquinho_2025',
      'titulo' => 'Revitalização do Parquinho Infantil',
      'categoria' => 'Revitalização & Obras',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Revitalização e manutenção dos brinquedos do parquinho infantil: estrutura de madeira com escorregador, rampa de escalada, ponte, balanços e fixação com concreto do gira-gira azul.',
      'destaque_nota' => 'Mais segurança e lazer para as crianças do condomínio.',
      'imagem' => 'mel-parquinho-antes-madeira.jpg',
      'fotos' => [
        { 'url' => 'mel-parquinho-antes-madeira.jpg', 'fase' => '', 'legenda' => 'Parquinho infantil de madeira com escorregador e ponte.' },
        { 'url' => 'mel-parquinho-antes-estrutura.jpg', 'fase' => '', 'legenda' => 'Estrutura completa com rampa de escalada e balanços.' },
        { 'url' => 'mel-parquinho-durante-giragira.jpg', 'fase' => '', 'legenda' => 'Fixação da base de concreto do gira-gira azul e balanços.' }
      ]
    },
    {
      'id' => 'mel_extintores_2025',
      'titulo' => 'Troca e Recarga de Extintores (Manutenção Anual — Novembro)',
      'categoria' => 'Manutenção Preventiva',
      'status' => 'Concluído',
      'data' => 'Anual • Novembro',
      'descricao' => 'Manutenção preventiva anual de segurança contra incêndio realizada no mês de Novembro: retirada dos extintores antigos, higienização dos abrigos nos blocos e instalação dos extintores recarregados, lacrados e inspecionados pelo INMETRO (Pó Químico Seco ABC e CO2).',
      'destaque_nota' => '📅 Recarga de Extintores: Manutenção ANUAL realizada em NOVEMBRO.',
      'imagem' => 'mel-extintores-depois-novos.jpg',
      'fotos' => [
        { 'url' => 'mel-extintores-antes-caixa.jpg', 'fase' => 'Antes', 'legenda' => 'Antes: Abrigo precisando de higienização e extintor antigo.' },
        { 'url' => 'mel-extintores-depois-novos.jpg', 'fase' => 'Depois', 'legenda' => 'Depois: Chegada dos novos extintores lacrados (ABC e CO2).' },
        { 'url' => 'mel-extintores-antes-antigo.jpg', 'fase' => 'Antes', 'legenda' => 'Antes: Retirada dos extintores antigos para substituição.' }
      ]
    },
    {
      'id' => 'mel_bloco2_2025',
      'titulo' => 'Pintura do Bloco 02 (Em breve pintaremos os outros blocos)',
      'categoria' => 'Revitalização & Obras',
      'status' => 'Em Andamento',
      'data' => 'Desde 2025 • Cronograma Contínuo',
      'descricao' => 'Revitalização da pintura externa e lateral do Bloco 02 no padrão verde e branco do Residencial Quebec, acompanhada da nova placa identificadora "02 BLOCO".',
      'destaque_nota' => '📌 Importante: Pintura do Bloco 02 realizada — em breve pintaremos os outros blocos!',
      'imagem' => 'mel-bloco2-frente.jpg',
      'fotos' => [
        { 'url' => 'mel-bloco2-frente.jpg', 'fase' => '', 'legenda' => 'Fachada frontal do Bloco 02 pintada em verde e branco com placa nova.' },
        { 'url' => 'mel-bloco2-lateral.jpg', 'fase' => '', 'legenda' => 'Pintura lateral do Bloco 02 concluída.' }
      ]
    },
    {
      'id' => 'mel_iluminacao_2025',
      'titulo' => 'Melhorias na Iluminação do Condomínio',
      'categoria' => 'Revitalização & Obras',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Instalação e manutenção de refletores LED no topo dos postes de iluminação dos pátios, corredores externos e áreas de estacionamento, garantindo mais claridade e segurança à noite.',
      'destaque_nota' => 'Pátios e estacionamentos mais claros e seguros no período noturno.',
      'imagem' => 'mel-iluminacao-1.jpg',
      'fotos' => [
        { 'url' => 'mel-iluminacao-1.jpg', 'fase' => '', 'legenda' => 'Instalação de novos refletores LED nos postes entre os blocos.' },
        { 'url' => 'mel-iluminacao-2.jpg', 'fase' => '', 'legenda' => 'Manutenção elétrica nos postes próximos às garagens.' }
      ]
    },
    {
      'id' => 'mel_fechamento_bueiro_2025',
      'titulo' => 'Fechamento e Sinalização de Bueiro',
      'categoria' => 'Manutenção Preventiva',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Instalação de tela/grade metálica reforçada para fechamento seguro de bueiro no pátio, com pintura de demarcação em amarelo de segurança para evitar acidentes com pedestres, crianças e veículos.',
      'destaque_nota' => 'Prevenção de acidentes e sinalização visível na via interna.',
      'imagem' => 'mel-fechamento-bueiro.jpg',
      'fotos' => [
        { 'url' => 'mel-fechamento-bueiro.jpg', 'fase' => '', 'legenda' => 'Fechamento de bueiro com grade metálica e pintura amarela de segurança.' }
      ]
    },
    {
      'id' => 'mel_caixas_gordura_2025',
      'titulo' => 'Limpeza das Caixinhas de Gordura',
      'categoria' => 'Manutenção Preventiva',
      'status' => 'Concluído',
      'data' => 'Desde 2025 • Manutenção Periódica',
      'descricao' => 'Execução periódica de abertura, higienização completa, retirada de resíduos sólidos e desobstrução das caixinhas de gordura dos blocos, evitando mau cheiro e retorno nas tubulações.',
      'destaque_nota' => 'Manutenção preventiva essencial para todos os blocos.',
      'imagem' => 'mel-caixa-gordura.jpg',
      'fotos' => [
        { 'url' => 'mel-caixa-gordura.jpg', 'fase' => '', 'legenda' => 'Caixinha de gordura aberta e higienizada durante manutenção preventiva.' }
      ]
    },
    {
      'id' => 'mel_dedetizacao_2025',
      'titulo' => 'Dedetização do Condomínio (Semestral — Feito em Outubro)',
      'categoria' => 'Manutenção Preventiva',
      'status' => 'Concluído',
      'data' => 'Semestral • Feito em Outubro',
      'descricao' => 'Serviço profissional de dedetização e controle preventivo de pragas (baratas, formigas, escorpiões, insetos e roedores) realizado SEMESTRALMENTE com EPI completo nos ralos, caixas de passagem, jardins e áreas comuns dos Blocos 01 ao 11.',
      'destaque_nota' => '📅 Dedetização: Periodicidade SEMESTRAL — Realizado em OUTUBRO.',
      'imagem' => 'mel-dedetizacao-real-1.jpg',
      'fotos' => [
        { 'url' => 'mel-dedetizacao-real-1.jpg', 'fase' => '', 'legenda' => 'Profissional executando a dedetização preventiva nas galerias e áreas comuns.' },
        { 'url' => 'mel-dedetizacao-real-2.jpg', 'fase' => '', 'legenda' => 'Aplicação técnica diretamente nas caixas de passagem dos blocos.' },
        { 'url' => 'mel-dedetizacao.jpg', 'fase' => '', 'legenda' => 'Prevenção de pragas para proteção da saúde e estrutura.' }
      ]
    },
    {
      'id' => 'mel_portaria_uniforme_2025',
      'titulo' => 'Portaria Diurna Uniformizada',
      'categoria' => 'Segurança & Portaria',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Padronização da portaria diurna e colaboradores com uniforme oficial verde ("Quebec Condomínio Residencial"), trazendo identificação imediata, organização e atendimento profissional.',
      'destaque_nota' => 'Equipe uniformizada e identificada na portaria diurna.',
      'imagem' => 'mel-portaria-uniforme.jpg',
      'fotos' => [
        { 'url' => 'mel-portaria-uniforme.jpg', 'fase' => '', 'legenda' => 'Porteiro diurno uniformizado com a camisa oficial do Residencial Quebec.' },
        { 'url' => 'mel-equipe-uniformizada.jpg', 'fase' => '', 'legenda' => 'Equipe uniformizada atuando na conservação do condomínio.' }
      ]
    },
    {
      'id' => 'mel_facial_portaria_2025',
      'titulo' => 'Reconhecimento Facial na Portaria e Controle de Acesso',
      'categoria' => 'Segurança & Portaria',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Modernização do controle de acesso na portaria com reconhecimento facial, manutenção do motor do portão eletrônico, instalação de caixas metálicas de proteção, câmeras e placas de segurança.',
      'destaque_nota' => 'Mais segurança e praticidade na entrada dos moradores.',
      'imagem' => 'mel-portao-manutencao.jpg',
      'fotos' => [
        { 'url' => 'mel-portao-manutencao.jpg', 'fase' => '', 'legenda' => 'Manutenção do motor do portão e placas de sinalização na portaria.' },
        { 'url' => 'mel-controle-caixa-aberta.jpg', 'fase' => '', 'legenda' => 'Instalação de caixa metálica protetora para equipamento de acesso.' },
        { 'url' => 'mel-controle-caixa-fechada.jpg', 'fase' => '', 'legenda' => 'Caixa de proteção instalada na parede.' },
        { 'url' => 'mel-extintores-depois-placas.jpg', 'fase' => '', 'legenda' => 'Novas câmeras e placas de sinalização para as áreas comuns.' }
      ]
    },
    {
      'id' => 'mel_decoracao_entrada_2025',
      'titulo' => 'Decoração da Entrada do Condomínio',
      'categoria' => 'Comunidade & Eventos',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Cuidado especial e ornamentação temática no jardim da entrada do condomínio, contando com iluminação em refletores verdes, personagens decorativos, decoração natalina e placa informativa da gestão.',
      'destaque_nota' => 'Entrada acolhedora e bem cuidada para moradores e visitantes.',
      'imagem' => 'mel-decoracao-entrada-1.jpg',
      'fotos' => [
        { 'url' => 'mel-decoracao-entrada-1.jpg', 'fase' => '', 'legenda' => 'Decoração natalina diurna no jardim da entrada.' },
        { 'url' => 'mel-decoracao-entrada-2.jpg', 'fase' => '', 'legenda' => 'Decoração especial iluminada à noite no jardim da entrada.' },
        { 'url' => 'mel-grama-depois-natal.jpg', 'fase' => '', 'legenda' => 'Iluminação natalina noturna na entrada do Residencial Quebec.' }
      ]
    },
    {
      'id' => 'mel_semana_criancas_2025',
      'titulo' => 'Ação Semana das Crianças',
      'categoria' => 'Comunidade & Eventos',
      'status' => 'Concluído',
      'data' => 'Desde 2025',
      'descricao' => 'Comemoração especial da Semana das Crianças realizada para os pequenos moradores do Quebec: sessão de cinema no telão à noite, bolo confeitado, cachorro-quente, refrigerante, pintura facial, desenhos para colorir e saquinhos de lembrancinhas.',
      'destaque_nota' => 'Momento de alegria e confraternização para as crianças do condomínio.',
      'imagem' => 'mel-criancas-bolo.jpg',
      'fotos' => [
        { 'url' => 'mel-criancas-bolo.jpg', 'fase' => '', 'legenda' => 'Comemoração com bolo e refrigerantes para as crianças.' },
        { 'url' => 'mel-criancas-cinema.jpg', 'fase' => '', 'legenda' => 'Sessão de cinema no telão à noite.' },
        { 'url' => 'mel-criancas-pipoca.jpg', 'fase' => '', 'legenda' => 'Crianças reunidas assistindo ao filme com lanche.' },
        { 'url' => 'mel-criancas-lembrancinhas.jpg', 'fase' => '', 'legenda' => 'Saquinhos de doces e lembrancinhas preparados para as crianças.' },
        { 'url' => 'mel-criancas-pintura-rosto.jpg', 'fase' => '', 'legenda' => 'Pintura facial artística de borboleta.' },
        { 'url' => 'mel-criancas-pintura-heroi.jpg', 'fase' => '', 'legenda' => 'Pintura facial infantil.' },
        { 'url' => 'mel-parquinho-depois-cercado.jpg', 'fase' => '', 'legenda' => 'Brincadeiras e pintura facial ao ar livre.' },
        { 'url' => 'mel-criancas-desenhos.jpg', 'fase' => '', 'legenda' => 'Oficina de desenhos e pintura com canetinhas.' },
        { 'url' => 'mel-criancas-jardim.jpg', 'fase' => '', 'legenda' => 'Registro das crianças na área verde do condomínio.' },
        { 'url' => 'mel-lazer-fogao.jpg', 'fase' => '', 'legenda' => 'Preparo do cachorro-quente para a festa das crianças.' }
      ]
    }
  ],
  'atas' => [
    {
      'id' => 'ata_real_2025',
      'titulo' => 'Ata da Assembleia Geral Extraordinária do Condomínio Residencial Quebec — Eleição de Síndico e Deliberações Gerais',
      'tipo' => 'Assembleia Geral Extraordinária',
      'data' => '28/08/2025',
      'numero' => 'Registro Cartório Nº 31691 • Livro B-88 Fls. 78/79',
      'responsavel' => 'Celson Batista Rodrigues Filho (Síndico Eleito) & Sidney Barcelos Loiola (Sub-Síndico)',
      'resumo' => 'Assembleia Geral Extraordinária realizada em 28/08/2025 às 20h00 no Condomínio Residencial Quebec (CNPJ 20.410.595/0001-60), presidida por Sidney Barcelos Loiola e secretariada por Andréia Oliveira Francisco Matos. Foi eleito por unanimidade o Síndico Celson Batista Rodrigues Filho (Bloco 05, Aptos 10 e 12) e aprovadas medidas emergenciais, financeiras e de regimento interno.',
      'pautas' => [
        '1. Rescisão Unilateral por quebra de contrato firmado com a empresa Hera Condomínios (carta de rescisão e renúncia da gestão anterior registrada em 27/08/2025);',
        '2. Regularização do saldo negativo de julho/2025 (R$ 2.492,08) junto ao Banco Sicoob;',
        '3. Verificação de tarifas bancárias no Sicoob e mudança de instituição bancária para redução/eliminação de taxa na emissão dos 176 boletos;',
        '4. Definição do padrão para cobertura e laterais de vagas de garagem (telhado em zinco e laterais em zinco ou lona azul em bom estado, uso exclusivo para veículos/motos/carretinhas/bicicletas, proibição de guardar objetos em desuso, motos posicionadas atrás dos veículos da família);',
        '5. Cumprimento rigoroso do Regimento Interno com prazo de 30 dias corridos para adequação;',
        '6. Alinhamento sobre contratação de zelador provisório por 6 meses e posterior orçamento para zelador diurno CLT e porteiro noturno CLT;',
        '7. Proibição de jogar bola dentro do condomínio (crianças nos pátios apenas acompanhadas de adultos) e proibição de guardar materiais debaixo das escadas dos blocos (prazo de 7 dias úteis para retirada);',
        '8. Eleição por unanimidade de CELSON BATISTA RODRIGUES FILHO como Síndico (Bloco 05 - Aptos 10 e 12) e SIDNEY BARCELOS LOIOLA como Sub-Síndico;',
        '9. Autorização de ações emergenciais ao novo síndico: recarga de extintores, dedetização, desratização, limpeza/jardinagem e controle de acesso no portão de serviços.'
      ],
      'arquivo_nome' => 'Ata_Assembleia_28_08_2025_Registrada_Cartorio.pdf',
      'arquivo_url' => 'ata-assembleia-28-08-2025.pdf',
      'status_documento' => 'Registrada no 1º Ofício de Títulos e Documentos de Itaúna/MG'
    },
    {
      'id' => 'regimento_interno_quebec',
      'titulo' => 'Regimento Interno Oficial — Condomínio Residencial Quebec',
      'tipo' => 'Regimento Interno',
      'data' => 'Registrado em Cartório (20/06/2014)',
      'numero' => 'Cartório RTDPJ Itaúna/MG • Protocolo Nº 23121 • Registro Nº 21712 • Livro A-21 Pág. 167',
      'responsavel' => 'Condomínio Residencial Quebec',
      'resumo' => 'Regulamento Interno completo do Condomínio Residencial Quebec: direitos e deveres dos condôminos, regras de silêncio e convivência, uso do Salão de Festas e Área de Lazer (Art. 31), uso das vagas de estacionamento para carros, motos e bicicletas (Art. 17 a 20) e normas sobre animais domésticos.',
      'arquivo_nome' => 'Regimento_Interno_Condominio_Quebec.pdf',
      'arquivo_url' => 'regimento-interno-quebec.pdf',
      'status_documento' => 'Registrado no Cartório RTDPJ de Itaúna/MG'
    }
  ],
  'reclamacoes' => [],
  'servicos' => []
}

def load_db
  unless File.exist?(DB_FILE)
    File.write(DB_FILE, JSON.pretty_generate(DEFAULT_DB))
  end
  JSON.parse(File.read(DB_FILE))
rescue StandardError
  DEFAULT_DB
end

def save_db(data)
  File.write(DB_FILE, JSON.pretty_generate(data))
end

load_db

server = WEBrick::HTTPServer.new(
  Port: PORT,
  DocumentRoot: ROOT_DIR,
  AccessLog: [],
  Logger: WEBrick::Log.new($stderr, WEBrick::Log::INFO)
)

def set_cors(res)
  res['Access-Control-Allow-Origin'] = '*'
  res['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  res['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
  res['Content-Type'] = 'application/json; charset=utf-8'
end

def parse_body(req)
  return {} if req.body.nil? || req.body.strip.empty?
  JSON.parse(req.body)
rescue StandardError
  {}
end

server.mount_proc '/api/bootstrap' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end
  res.body = JSON.generate(load_db)
end

server.mount_proc '/api/condominio' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end
  db = load_db
  if req.request_method == 'PUT' || req.request_method == 'POST'
    payload = parse_body(req)
    db['condominio'] ||= {}
    payload.each { |k, v| db['condominio'][k] = v }
    save_db(db)
  end
  res.body = JSON.generate(db['condominio'])
end

server.mount_proc '/api/fechamentos' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end

  db = load_db
  db['fechamentos'] ||= []
  case req.request_method
  when 'GET'
    res.body = JSON.generate(db['fechamentos'])
  when 'POST'
    payload = parse_body(req)
    novo = {
      'id' => "fech_#{Time.now.to_i}_#{rand(100..999)}",
      'mes_referencia' => payload['mes_referencia'].to_s.strip,
      'responsavel' => payload['responsavel'] || 'Síndico Celson Batista Rodrigues Filho',
      'arquivo_nome' => payload['arquivo_nome'].to_s.empty? ? 'Fechamento_Mensal.pdf' : payload['arquivo_nome'].to_s,
      'arquivo_url' => payload['arquivo_url'].to_s.empty? ? 'assets/fechamento-mensal-quebec.pdf' : payload['arquivo_url'].to_s,
      'planilha_url' => payload['planilha_url'].to_s,
      'observacoes' => payload['observacoes'].to_s
    }
    db['fechamentos'].unshift(novo)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(novo)
  when 'PUT'
    payload = parse_body(req)
    item = db['fechamentos'].find { |f| f['id'] == payload['id'] }
    if item
      payload.each { |k, v| item[k] = v unless k == 'id' }
      save_db(db)
      res.body = JSON.generate(item)
    else
      res.status = 404
      res.body = JSON.generate({ error: 'Fechamento não encontrado' })
    end
  when 'DELETE'
    payload = parse_body(req)
    id = req.query['id'] || payload['id']
    db['fechamentos'].reject! { |f| f['id'] == id }
    save_db(db)
    res.body = JSON.generate({ ok: true })
  end
end

server.mount_proc '/api/reclamacoes' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end

  db = load_db
  case req.request_method
  when 'GET'
    res.body = JSON.generate(db['reclamacoes'])
  when 'POST'
    payload = parse_body(req)
    now_str = Time.now.strftime('%d/%m/%Y às %H:%M')
    protocolo = payload['protocolo'] || "QBC-#{Time.now.year}-#{rand(1000..9999)}"
    nova = {
      'id' => "rec_#{Time.now.to_i}_#{rand(100..999)}",
      'protocolo' => protocolo,
      'nome' => payload['nome'].to_s.strip,
      'bloco' => payload['bloco'].to_s.strip,
      'apartamento' => payload['apartamento'].to_s.strip,
      'celular' => payload['celular'].to_s.strip,
      'categoria' => payload['categoria'] || 'Geral',
      'urgencia' => payload['urgencia'] || 'Média',
      'assunto' => payload['assunto'].to_s.strip,
      'mensagem' => payload['mensagem'].to_s.strip,
      'data' => now_str,
      'status' => 'Pendente',
      'resposta_sindico' => ''
    }
    db['reclamacoes'].unshift(nova)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(nova)
  when 'PUT'
    payload = parse_body(req)
    item = db['reclamacoes'].find { |r| r['id'] == payload['id'] }
    if item
      item['status'] = payload['status'] if payload['status']
      item['resposta_sindico'] = payload['resposta_sindico'] unless payload['resposta_sindico'].nil?
      save_db(db)
      res.body = JSON.generate(item)
    else
      res.status = 404
      res.body = JSON.generate({ error: 'Reclamação não encontrada' })
    end
  when 'DELETE'
    payload = parse_body(req)
    id = req.query['id'] || payload['id']
    db['reclamacoes'].reject! { |r| r['id'] == id }
    save_db(db)
    res.body = JSON.generate({ ok: true })
  end
end

server.mount_proc '/api/servicos' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end

  db = load_db
  case req.request_method
  when 'GET'
    res.body = JSON.generate(db['servicos'])
  when 'POST'
    payload = parse_body(req)
    novo = {
      'id' => "srv_#{Time.now.to_i}_#{rand(100..999)}",
      'nome' => payload['nome'].to_s.strip,
      'cpf' => payload['cpf'].to_s.strip,
      'celular' => payload['celular'].to_s.strip,
      'bloco' => payload['bloco'].to_s.strip,
      'apartamento' => payload['apartamento'].to_s.strip,
      'categoria' => payload['categoria'] || 'Outros Serviços',
      'servico' => payload['servico'].to_s.strip,
      'descricao' => payload['descricao'].to_s.strip,
      'horario' => payload['horario'].to_s.strip.empty? ? 'A combinar pelo WhatsApp' : payload['horario'].to_s.strip,
      'verificado' => true,
      'data_cadastro' => Time.now.strftime('%d/%m/%Y')
    }
    db['servicos'].unshift(novo)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(novo)
  when 'PUT'
    payload = parse_body(req)
    item = db['servicos'].find { |s| s['id'] == payload['id'] }
    if item
      %w[nome cpf celular bloco apartamento categoria servico descricao horario verificado].each do |field|
        item[field] = payload[field] unless payload[field].nil?
      end
      save_db(db)
      res.body = JSON.generate(item)
    else
      res.status = 404
      res.body = JSON.generate({ error: 'Serviço não encontrado' })
    end
  when 'DELETE'
    payload = parse_body(req)
    id = req.query['id'] || payload['id']
    db['servicos'].reject! { |s| s['id'] == id }
    save_db(db)
    res.body = JSON.generate({ ok: true })
  end
end

server.mount_proc '/api/atas' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end

  db = load_db
  case req.request_method
  when 'GET'
    res.body = JSON.generate(db['atas'])
  when 'POST'
    payload = parse_body(req)
    pautas_raw = payload['pautas']
    pautas_arr = pautas_raw.is_a?(Array) ? pautas_raw : pautas_raw.to_s.split("\n").map(&:strip).reject(&:empty?)
    nova = {
      'id' => "ata_#{Time.now.to_i}_#{rand(100..999)}",
      'titulo' => payload['titulo'].to_s.strip,
      'tipo' => payload['tipo'] || 'Assembleia Ordinária',
      'data' => payload['data'] || Time.now.strftime('%d/%m/%Y'),
      'numero' => payload['numero'] || "ATA Nº #{db['atas'].size + 1}/#{Time.now.year}",
      'responsavel' => payload['responsavel'] || 'Celson Batista Rodrigues Filho (Síndico)',
      'resumo' => payload['resumo'].to_s.strip,
      'pautas' => pautas_arr.empty? ? ['Deliberação geral dos condôminos presentes.'] : pautas_arr,
      'arquivo_nome' => payload['arquivo_nome'].to_s,
      'arquivo_url' => payload['arquivo_url'].to_s,
      'status_documento' => 'Registrada e Publicada'
    }
    db['atas'].unshift(nova)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(nova)
  when 'PUT'
    payload = parse_body(req)
    item = db['atas'].find { |a| a['id'] == payload['id'] }
    if item
      %w[titulo tipo data numero responsavel resumo arquivo_nome arquivo_url].each do |field|
        item[field] = payload[field] unless payload[field].nil?
      end
      if payload['pautas']
        p_raw = payload['pautas']
        item['pautas'] = p_raw.is_a?(Array) ? p_raw : p_raw.to_s.split("\n").map(&:strip).reject(&:empty?)
      end
      save_db(db)
      res.body = JSON.generate(item)
    else
      res.status = 404
      res.body = JSON.generate({ error: 'Ata não encontrada' })
    end
  when 'DELETE'
    payload = parse_body(req)
    id = req.query['id'] || payload['id']
    db['atas'].reject! { |a| a['id'] == id }
    save_db(db)
    res.body = JSON.generate({ ok: true })
  end
end

server.mount_proc '/api/melhorias' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end

  db = load_db
  case req.request_method
  when 'GET'
    res.body = JSON.generate(db['melhorias'])
  when 'POST'
    payload = parse_body(req)
    nova = {
      'id' => payload['id'] || "mel_#{Time.now.to_i}_#{rand(100..999)}",
      'titulo' => payload['titulo'].to_s.strip,
      'categoria' => payload['categoria'] || 'Revitalização & Obras',
      'status' => payload['status'] || 'Concluído',
      'data' => payload['data'] || 'Desde 2025',
      'descricao' => payload['descricao'].to_s.strip,
      'destaque_nota' => payload['destaque_nota'].to_s.strip,
      'imagem' => payload['imagem'].to_s.strip.empty? ? 'mel-bloco2-frente.jpg' : payload['imagem'].to_s.strip,
      'fotos' => payload['fotos'].is_a?(Array) ? payload['fotos'] : []
    }
    db['melhorias'].unshift(nova)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(nova)
  when 'PUT'
    payload = parse_body(req)
    item = db['melhorias'].find { |m| m['id'] == payload['id'] }
    if item
      %w[titulo categoria status data descricao destaque_nota imagem fotos].each do |field|
        item[field] = payload[field] unless payload[field].nil?
      end
      save_db(db)
      res.body = JSON.generate(item)
    else
      res.status = 404
      res.body = JSON.generate({ error: 'Melhoria não encontrada' })
    end
  when 'DELETE'
    payload = parse_body(req)
    id = req.query['id'] || payload['id']
    db['melhorias'].reject! { |m| m['id'] == id }
    save_db(db)
    res.body = JSON.generate({ ok: true })
  end
end

server.mount_proc '/api/avisos' do |req, res|
  set_cors(res)
  if req.request_method == 'OPTIONS'
    res.status = 200
    next
  end

  db = load_db
  case req.request_method
  when 'GET'
    res.body = JSON.generate(db['avisos'])
  when 'POST'
    payload = parse_body(req)
    novo = {
      'id' => "av_#{Time.now.to_i}_#{rand(100..999)}",
      'titulo' => payload['titulo'].to_s.strip,
      'mensagem' => payload['mensagem'].to_s.strip,
      'data' => payload['data'].to_s.strip.empty? ? Time.now.strftime('%d/%m/%Y') : payload['data'].to_s.strip,
      'prioridade' => payload['prioridade'] || 'Comunicado',
      'autor' => 'Administração'
    }
    db['avisos'].unshift(novo)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(novo)
  when 'DELETE'
    payload = parse_body(req)
    id = req.query['id'] || payload['id']
    db['avisos'].reject! { |a| a['id'] == id }
    save_db(db)
    res.body = JSON.generate({ ok: true })
  end
end

trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }

puts "===================================================="
puts "🏢 Portal Condomínio Residencial Quebec - Servidor Ativo"
puts "📍 Rua Ênio Pereira de Carvalho, 383 - Itaúna/MG"
puts "🏘️ Blocos 01 ao 11 (Aptos 01 ao 16 • 176 Unidades)"
puts "👤 Gestão: Síndico Celson Batista Rodrigues Filho"
puts "🌐 Acesse em: http://localhost:#{PORT}"
puts "===================================================="

server.start
