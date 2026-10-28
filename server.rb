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
        'titulo' => 'Portaria & Entrada Oficial',
        'legenda' => 'Fachada no padrão verde claro e branco do Residencial Quebec',
        'imagem' => 'entrada-real-quebec.jpg'
      },
      {
        'id' => 'gal_2',
        'titulo' => 'Acesso da Portaria & Símbolo Quebec',
        'legenda' => 'Identidade visual oficial na entrada do condomínio',
        'imagem' => 'tapete-logo-quebec.jpg'
      },
      {
        'id' => 'gal_3',
        'titulo' => 'Pátio Interno & Blocos 01 ao 11',
        'legenda' => '176 unidades (Apartamentos 01 ao 16 por bloco)',
        'imagem' => 'blocos-patio.png'
      }
    ]
  },
  'avisos' => [
    {
      'id' => 'av_1',
      'titulo' => 'Dedetização e Desratização nas Áreas Comuns (Blocos 01 ao 11)',
      'mensagem' => 'Realizaremos o serviço completo de dedetização e desratização nas áreas externas, escadas e redes pluviais. Pedimos aos moradores que mantenham ralos vedados e evitem deixar animais domésticos soltos no pátio durante a aplicação.',
      'data' => 'Cronograma Mensal • A partir das 08h30',
      'prioridade' => 'Dedetização & Saúde',
      'autor' => 'Administração'
    },
    {
      'id' => 'av_2',
      'titulo' => 'Limpeza Preventiva das Caixinhas de Esgoto e Gordura',
      'mensagem' => 'A equipe de manutenção realizará a limpeza periódica das caixinhas de esgoto de todos os blocos (01 ao 11). Solicitamos não descartar óleo de cozinha, restos de alimentos ou lenços umedecidos nas tubulações.',
      'data' => 'Manutenção Preventiva • Blocos 01 a 11',
      'prioridade' => 'Limpeza Caixa de Esgoto',
      'autor' => 'Administração'
    },
    {
      'id' => 'av_3',
      'titulo' => 'Áreas Debaixo das Escadas e Padronização das Garagens',
      'mensagem' => 'Conforme definido em Assembleia, as áreas debaixo das escadas devem permanecer totalmente livres por segurança. As vagas de garagem destinam-se exclusivamente ao estacionamento de veículos e motocicletas.',
      'data' => 'Regimento Interno em Vigor',
      'prioridade' => 'Comunicado Importante',
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
      'id' => 'mel_1',
      'titulo' => 'Instalação de 240 Metros de Concertina e Câmeras nos Blocos 07 a 10',
      'categoria' => 'Segurança Patrimonial',
      'status' => 'Em Andamento',
      'progresso' => 85,
      'data' => 'Outubro/2025–2026',
      'investimento' => 'R$ 2.700,00 (Parcelas em execução + Contrato Jotaseg)',
      'impacto' => 'Reforço completo da proteção perimetral e monitoramento dos muros dos Blocos 07 a 10.',
      'descricao' => 'Instalação de 240 metros de concertina perimetral, ampliação das câmeras no muro (Blocos 07 a 10) e manutenção do contrato de monitoramento Jotaseg.',
      'imagem' => 'convivencia-jardim.png'
    },
    {
      'id' => 'mel_2',
      'titulo' => 'Pintura do Bloco 02 (Luidar), Placas de Sinalização e Organização de Vagas',
      'categoria' => 'Valorização & Conservação',
      'status' => 'Em Andamento',
      'progresso' => 80,
      'data' => 'Outubro/2025–2026',
      'investimento' => 'R$ 1.047,60 (Parcela Pintura + Sinalização)',
      'impacto' => 'Padronização visual dos blocos, novas placas de sinalização interna e ordenamento das garagens.',
      'descricao' => 'Execução da pintura do Bloco 02 (empresa Luidar), instalação de novas placas de sinalização e padronização das coberturas e faixas das vagas de garagem.',
      'imagem' => 'entrada-real-quebec.jpg'
    },
    {
      'id' => 'mel_3',
      'titulo' => 'Troca do Motor do Portão Eletrônico e Obra de Escoamento na Área de Lazer',
      'categoria' => 'Infraestrutura & Obras',
      'status' => 'Concluído',
      'progresso' => 100,
      'data' => 'Setembro–Outubro',
      'investimento' => 'R$ 2.169,50',
      'impacto' => 'Agilidade e segurança no fechamento do portão e solução definitiva de escoamento de água na área de lazer.',
      'descricao' => 'Substituição do motor do portão principal e obra civil com 250 blocos (0,15) para escoamento de água na área de lazer.',
      'imagem' => 'blocos-patio.png'
    },
    {
      'id' => 'mel_4',
      'titulo' => 'Equipamentos Novos para o Salão de Festas (Fogão + Botijão) e Jardinagem Geral',
      'categoria' => 'Área Comum & Lazer',
      'status' => 'Concluído',
      'progresso' => 100,
      'data' => 'Outubro',
      'investimento' => 'R$ 3.855,87 (Salão + Jardinagem + Dedetização)',
      'impacto' => 'Salão de festas equipado para uso dos moradores e áreas verdes limpas e dedetizadas.',
      'descricao' => 'Aquisição de fogão novo e botijão para o Salão de Festas, dedetização emergencial e limpeza completa de jardinagem no Condomínio Quebec e lote vizinho.',
      'imagem' => 'convivencia-jardim.png'
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
    }
  ],
  'reclamacoes' => [
    {
      'id' => 'rec_1',
      'protocolo' => 'QBC-2026-4812',
      'nome' => 'Mariana Alves Costa',
      'bloco' => 'Bloco 02',
      'apartamento' => 'Apto 08',
      'celular' => '(37) 99812-4410',
      'categoria' => 'Manutenção / Iluminação',
      'urgencia' => 'Média',
      'assunto' => 'Lâmpada oscilando no corredor do Bloco 02',
      'mensagem' => 'Olá Celson, a lâmpada próxima ao Apto 08 no Bloco 02 está piscando à noite. Poderia pedir para verificarem?',
      'data' => '24/10/2026 às 19:40',
      'status' => 'Resolvido',
      'resposta_sindico' => 'Olá Mariana! O eletricista já realizou a troca no Bloco 02. Muito obrigado por avisar! — Celson Rodrigues.'
    }
  ],
  'servicos' => [
    {
      'id' => 'srv_1',
      'nome' => 'Juliana Mendes Rocha',
      'cpf' => '114.829.346-10',
      'celular' => '(37) 99945-2218',
      'bloco' => 'Bloco 01',
      'apartamento' => 'Apto 04',
      'categoria' => 'Alimentação & Confeitaria',
      'servico' => 'Bolos Caseiros, Doces para Festas e Marmitas',
      'descricao' => 'Bolos de aniversário, docinhos tradicionais e marmitas feitas sob encomenda com entrega rápida aqui nos Blocos 01 a 11.',
      'horario' => 'Terça a Sábado • Encomendas pelo WhatsApp',
      'verificado' => true,
      'data_cadastro' => '10/10/2026'
    },
    {
      'id' => 'srv_2',
      'nome' => 'Carlos Eduardo Martins',
      'cpf' => '089.442.716-55',
      'celular' => '(37) 99871-6034',
      'bloco' => 'Bloco 05',
      'apartamento' => 'Apto 11',
      'categoria' => 'Manutenção & Reparos',
      'servico' => 'Eletricista Residencial, Montagem de Móveis e Reparos',
      'descricao' => 'Troca de chuveiros, tomadas, ventiladores de teto, suportes de TV e montagem de móveis em geral para vizinhos do Quebec.',
      'horario' => 'Segunda a Sábado (inclusive urgências)',
      'verificado' => true,
      'data_cadastro' => '12/10/2026'
    },
    {
      'id' => 'srv_3',
      'nome' => 'Camila Ferreira Santos',
      'cpf' => '132.675.906-21',
      'celular' => '(37) 99918-7740',
      'bloco' => 'Bloco 09',
      'apartamento' => 'Apto 02',
      'categoria' => 'Beleza & Estética',
      'servico' => 'Manicure, Pedicure e Design de Sobrancelhas',
      'descricao' => 'Atendimento com hora marcada no conforto do condomínio. Materiais 100% esterilizados.',
      'horario' => 'Terça a Sábado das 09h às 19h',
      'verificado' => true,
      'data_cadastro' => '15/10/2026'
    }
  ]
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
      'id' => "mel_#{Time.now.to_i}_#{rand(100..999)}",
      'titulo' => payload['titulo'].to_s.strip,
      'categoria' => payload['categoria'] || 'Infraestrutura',
      'status' => payload['status'] || 'Em Andamento',
      'progresso' => (payload['progresso'] || 50).to_i,
      'data' => payload['data'] || Time.now.strftime('%m/%Y'),
      'investimento' => payload['investimento'].to_s.strip.empty? ? 'Gestão Celson Rodrigues' : payload['investimento'].to_s.strip,
      'impacto' => payload['impacto'].to_s.strip,
      'descricao' => payload['descricao'].to_s.strip,
      'imagem' => payload['imagem'].to_s.strip.empty? ? 'assets/fachada-quebec.png' : payload['imagem'].to_s.strip
    }
    db['melhorias'].unshift(nova)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(nova)
  when 'PUT'
    payload = parse_body(req)
    item = db['melhorias'].find { |m| m['id'] == payload['id'] }
    if item
      %w[titulo categoria status data investimento impacto descricao imagem].each do |field|
        item[field] = payload[field] unless payload[field].nil?
      end
      item['progresso'] = payload['progresso'].to_i unless payload['progresso'].nil?
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
