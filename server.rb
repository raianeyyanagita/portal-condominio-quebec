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
    'endereco' => 'Rua Ênio Pereira de Carvalho, 383',
    'bairro' => 'Parque Jardim Santanense',
    'cidade' => 'Itaúna - MG',
    'cep' => '35681-312',
    'sindico' => 'Celson Rodrigues',
    'mandato' => 'Gestão 2025–2027 • Transparência, Segurança e Valorização',
    'telefone_portaria' => '(37) 3241-0383',
    'whatsapp_administracao' => '(37) 99983-0383',
    'email_gestao' => 'administracao@condominioquebec.com.br',
    'horario_atendimento' => 'Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h'
  },
  'avisos' => [
    {
      'id' => 'av_1',
      'titulo' => 'Manutenção Preventiva dos Portões Eletrônicos e Interfonia',
      'mensagem' => 'Informamos que nesta quinta-feira, das 09h às 11h30, a equipe técnica realizará revisão preventiva no motor do portão principal e central de interfones.',
      'data' => '26/10/2026',
      'prioridade' => 'Importante',
      'autor' => 'Celson Rodrigues (Síndico)'
    },
    {
      'id' => 'av_2',
      'titulo' => 'Recadastramento de Veículos e Adesivos de Identificação',
      'mensagem' => 'Solicitamos aos moradores que mantenham atualizado o cadastro da vaga de garagem junto à administração para emissão da nova tag de controle.',
      'data' => '20/10/2026',
      'prioridade' => 'Informativo',
      'autor' => 'Celson Rodrigues (Síndico)'
    }
  ],
  'melhorias' => [
    {
      'id' => 'mel_1',
      'titulo' => 'Revitalização da Pintura Verde Claro & Branco e Demarcação de Vagas',
      'categoria' => 'Valorização & Conservação',
      'status' => 'Em Andamento',
      'progresso' => 80,
      'data' => 'Outubro/2026',
      'investimento' => 'R$ 19.800,00',
      'impacto' => 'Renovação da identidade visual verde claro e branco dos blocos, fachada principal na Rua Ênio Pereira de Carvalho, 383 e vagas numeradas.',
      'descricao' => 'Pintura das fachadas em verde claro e branco, muretas perimetrais, numeração refletiva das vagas de garagem e revitalização dos jardins dos blocos.',
      'imagem' => 'assets/fachada-quebec.png'
    },
    {
      'id' => 'mel_2',
      'titulo' => 'Modernização da Iluminação do Pátio e Blocos para LED de Alta Eficiência',
      'categoria' => 'Infraestrutura & Economia',
      'status' => 'Concluído',
      'progresso' => 100,
      'data' => 'Setembro/2026',
      'investimento' => 'R$ 8.450,00',
      'impacto' => 'Redução de 38% no consumo de energia das áreas comuns e maior visibilidade noturna no estacionamento e acesso aos blocos.',
      'descricao' => 'Substituição integral dos refletores do pátio de estacionamento, corredores dos blocos e portaria por luminárias LED 100W e sensores inteligentes de presença nas escadarias.',
      'imagem' => 'assets/blocos-patio.png'
    },
    {
      'id' => 'mel_3',
      'titulo' => 'Ampliação do Sistema de Monitoramento CFTV Full HD e Portaria',
      'categoria' => 'Segurança Patrimonial',
      'status' => 'Concluído',
      'progresso' => 100,
      'data' => 'Agosto/2026',
      'investimento' => 'R$ 12.200,00',
      'impacto' => 'Cobertura 24h dos acessos da Rua Ênio Pereira de Carvalho, 383, pátio de garagens e circulação interna.',
      'descricao' => 'Instalação de 16 novas câmeras infravermelho de alta definição com gravação em nuvem e nobreak dedicado para manter o sistema ativo mesmo em quedas de energia.',
      'imagem' => 'assets/convivencia-jardim.png'
    },
    {
      'id' => 'mel_4',
      'titulo' => 'Higienização Semestral dos Reservatórios e Revisão Hidráulica',
      'categoria' => 'Saúde & Manutenção',
      'status' => 'Concluído',
      'progresso' => 100,
      'data' => 'Julho/2026',
      'investimento' => 'R$ 4.100,00',
      'impacto' => 'Garantia de qualidade da água potável para todos os blocos com laudo microbiológico certificado.',
      'descricao' => 'Limpeza técnica, desinfecção e impermeabilização preventiva das caixas d’água superiores e inferiores de todos os blocos, com emissão de certificado sanitário.',
      'imagem' => 'assets/blocos-patio.png'
    },
    {
      'id' => 'mel_5',
      'titulo' => 'Implantação de Espaço Convivência, Bancos e Bicicletário Coberto',
      'categoria' => 'Qualidade de Vida',
      'status' => 'Planejado',
      'progresso' => 30,
      'data' => 'Previsão: Dezembro/2026',
      'investimento' => 'R$ 9.600,00 (Orçado)',
      'impacto' => 'Novo espaço organizado para bicicletas e bancos de convivência nos jardins entre os blocos verde claro e branco.',
      'descricao' => 'Projeto em fase de cotação final para instalação de suporte coberto para bicicletas e revitalização da área de convivência comum entre os blocos.',
      'imagem' => 'assets/convivencia-jardim.png'
    }
  ],
  'atas' => [
    {
      'id' => 'ata_1',
      'titulo' => 'Ata da Assembleia Geral Ordinária – Prestação de Contas 3º Trimestre e Obras',
      'tipo' => 'Assembleia Ordinária',
      'data' => '15/10/2026',
      'numero' => 'AGE/AGO Nº 04/2026',
      'responsavel' => 'Celson Rodrigues (Síndico)',
      'resumo' => 'Aprovação por unanimidade do balancete financeiro referente aos meses de julho, agosto e setembro de 2026; apresentação do cronograma de demarcação das vagas de garagem e revitalização da fachada na Rua Ênio Pereira de Carvalho, 383.',
      'pautas' => [
        '1. Leitura e aprovação da ata anterior sem ressalvas;',
        '2. Apresentação detalhada das receitas, despesas e fundo de reserva do 3º trimestre/2026;',
        '3. Deliberação sobre a pintura das faixas de estacionamento e identificação dos veículos;',
        '4. Apresentação do novo Portal Digital do Condomínio Quebec para comunicação, atas e guia de moradores.'
      ],
      'status_documento' => 'Registrada e Assinada'
    },
    {
      'id' => 'ata_2',
      'titulo' => 'Ata da Assembleia Geral Extraordinária – Segurança, CFTV e Normas de Silêncio',
      'tipo' => 'Assembleia Extraordinária',
      'data' => '18/08/2026',
      'numero' => 'AGE Nº 03/2026',
      'responsavel' => 'Celson Rodrigues (Síndico)',
      'resumo' => 'Deliberação e aprovação da compra dos novos equipamentos de câmeras Full HD para a portaria e pátio; reforço das diretrizes do Regimento Interno quanto ao horário de silêncio (22h às 07h) e uso das áreas comuns.',
      'pautas' => [
        '1. Análise de 3 orçamentos para modernização do CFTV do Condomínio Quebec;',
        '2. Aprovação da proposta vencedora sem necessidade de taxa extra (utilização de saldo de economia mensal);',
        '3. Alinhamento sobre recebimento de encomendas e entregas na portaria;',
        '4. Reforço das regras de convivência, horário de mudanças e controle de ruídos nos blocos.'
      ],
      'status_documento' => 'Registrada e Assinada'
    },
    {
      'id' => 'ata_3',
      'titulo' => 'Ata de Eleição de Síndico, Conselho Fiscal e Planejamento Anual de Gestão',
      'tipo' => 'Assembleia Ordinária',
      'data' => '12/03/2026',
      'numero' => 'AGO Nº 01/2026',
      'responsavel' => 'Celson Rodrigues (Síndico)',
      'resumo' => 'Ratificação do plano diretor da gestão do Síndico Celson Rodrigues, definição das metas de redução de inadimplência, manutenção preventiva predial e calendário anual de limpeza dos reservatórios.',
      'pautas' => [
        '1. Apresentação do diagnóstico estrutural dos blocos e áreas comuns;',
        '2. Aprovação da previsão orçamentária anual mantendo o equilíbrio da taxa condominial;',
        '3. Definição do calendário de manutenções preventivas (extintores, para-raios, caixas d’água e portões);',
        '4. Abertura de canal direto de ouvidoria para todos os condôminos.'
      ],
      'status_documento' => 'Registrada e Assinada'
    }
  ],
  'reclamacoes' => [
    {
      'id' => 'rec_1',
      'protocolo' => 'QBC-2026-4812',
      'nome' => 'Mariana Alves Costa',
      'bloco' => 'Bloco B',
      'apartamento' => '203',
      'celular' => '(37) 99812-4410',
      'categoria' => 'Manutenção / Iluminação',
      'urgencia' => 'Média',
      'assunto' => 'Sensor de presença do 2º andar do Bloco B oscilando',
      'mensagem' => 'Olá Celson, a lâmpada do hall do 2º pavimento do Bloco B está piscando à noite quando passamos pela escada. Parece ser mau contato no sensor.',
      'data' => '24/10/2026 às 19:40',
      'status' => 'Resolvido',
      'privado' => false,
      'resposta_sindico' => 'Olá Mariana! Muito obrigado pelo aviso. O eletricista de manutenção esteve no Bloco B no dia 25/10 às 10h e realizou a troca do sensor de presença por um novo. Tudo funcionando perfeitamente! — Celson Rodrigues.'
    },
    {
      'id' => 'rec_2',
      'protocolo' => 'QBC-2026-5109',
      'nome' => 'Roberto Henrique Silva',
      'bloco' => 'Bloco A',
      'apartamento' => '104',
      'celular' => '(37) 99934-1182',
      'categoria' => 'Garagem / Estacionamento',
      'urgencia' => 'Alta',
      'assunto' => 'Veículo visitante estacionado fora da faixa de manobra',
      'mensagem' => 'Gostaria de solicitar um reforço na orientação sobre carros de visitantes parados próximos à curva de manobra do pátio principal nos finais de semana.',
      'data' => '26/10/2026 às 14:15',
      'status' => 'Em Análise',
      'privado' => false,
      'resposta_sindico' => 'Prezado Roberto, já acionamos a equipe e emitimos comunicado geral. Além disso, a nova pintura de demarcação de solo desta semana incluirá faixa zebrada amarela proibindo parada na curva de manobra. — Celson Rodrigues.'
    },
    {
      'id' => 'rec_3',
      'protocolo' => 'QBC-2026-5290',
      'nome' => 'Fernanda Oliveira',
      'bloco' => 'Bloco C',
      'apartamento' => '301',
      'celular' => '(37) 99120-8873',
      'categoria' => 'Sugestão de Melhoria',
      'urgencia' => 'Baixa',
      'assunto' => 'Instalação de suporte para encomendas rápidas na portaria',
      'mensagem' => 'Parabéns pela gestão, Celson! Minha sugestão é colocarmos um armário ou prateleira organizada por bloco para facilitar a retirada de pacotes de compras online.',
      'data' => '27/10/2026 às 09:20',
      'status' => 'Pendente',
      'privado' => false,
      'resposta_sindico' => ''
    }
  ],
  'servicos' => [
    {
      'id' => 'srv_1',
      'nome' => 'Juliana Mendes Rocha',
      'cpf' => '114.829.346-10',
      'celular' => '(37) 99945-2218',
      'bloco' => 'Bloco A',
      'apartamento' => '202',
      'categoria' => 'Alimentação & Confeitaria',
      'servico' => 'Bolos Caseiros, Doces para Festas e Marmitas Fitness',
      'descricao' => 'Produção artesanal sob encomenda! Bolos de aniversário, brigadeiros gourmet e kits de marmitas congeladas semanais com entrega grátis aqui no Condomínio Quebec.',
      'horario' => 'Terça a Sábado • Encomendas pelo WhatsApp',
      'verificado' => true,
      'data_cadastro' => '10/10/2026'
    },
    {
      'id' => 'srv_2',
      'nome' => 'Carlos Eduardo Martins',
      'cpf' => '089.442.716-55',
      'celular' => '(37) 99871-6034',
      'bloco' => 'Bloco C',
      'apartamento' => '101',
      'categoria' => 'Manutenção & Reparos',
      'servico' => 'Eletricista Residencial, Montagem de Móveis e Marido de Aluguel',
      'descricao' => 'Troca de chuveiros, instalação de tomadas, ventiladores de teto, suportes de TV, fechaduras digitais e montagem de móveis em geral. Atendimento rápido para vizinhos!',
      'horario' => 'Segunda a Sábado (inclusive emergências)',
      'verificado' => true,
      'data_cadastro' => '12/10/2026'
    },
    {
      'id' => 'srv_3',
      'nome' => 'Camila Ferreira Santos',
      'cpf' => '132.675.906-21',
      'celular' => '(37) 99918-7740',
      'bloco' => 'Bloco B',
      'apartamento' => '304',
      'categoria' => 'Beleza & Estética',
      'servico' => 'Manicure, Pedicure, Alongamento em Gel e Design de Sobrancelhas',
      'descricao' => 'Atendimento com hora marcada no conforto do condomínio. Materiais 100% esterilizados em autoclave. Condições especiais para moradoras do Residencial Quebec.',
      'horario' => 'Terça a Sábado das 09h às 19h',
      'verificado' => true,
      'data_cadastro' => '15/10/2026'
    },
    {
      'id' => 'srv_4',
      'nome' => 'Rafael Ribeiro Nogueira',
      'cpf' => '105.338.296-84',
      'celular' => '(37) 99804-5591',
      'bloco' => 'Bloco D',
      'apartamento' => '201',
      'categoria' => 'Tecnologia & Informática',
      'servico' => 'Manutenção de Computadores, Notebooks e Configuração de Wi-Fi',
      'descricao' => 'Formatação com backup, instalação de SSD para deixar seu notebook rápido, remoção de vírus, configuração de roteadores Mesh e impressoras.',
      'horario' => 'Segunda a Sexta após as 18h | Sábados o dia todo',
      'verificado' => true,
      'data_cadastro' => '19/10/2026'
    },
    {
      'id' => 'srv_5',
      'nome' => 'Patrícia Gomes Andrade',
      'cpf' => '076.912.486-09',
      'celular' => '(37) 99962-3105',
      'bloco' => 'Bloco A',
      'apartamento' => '302',
      'categoria' => 'Educação & Aulas',
      'servico' => 'Reforço Escolar (Ensino Fundamental) e Aulas de Inglês',
      'descricao' => 'Pedagoga formada com 8 anos de experiência. Acompanhamento de tarefas escolares, preparação para provas de Matemática/Português e inglês conversação.',
      'horario' => 'Manhã e Tarde (Seg a Sex)',
      'verificado' => true,
      'data_cadastro' => '22/10/2026'
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

# Inicializa banco de dados se não existir
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
  db = load_db
  res.body = JSON.generate(db)
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
      'privado' => !!payload['privado'],
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
      item['verificado'] = payload['verificado'] unless payload['verificado'].nil?
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
    pautas_arr = if pautas_raw.is_a?(Array)
                   pautas_raw
                 else
                   pautas_raw.to_s.split("\n").map(&:strip).reject(&:empty?)
                 end
    nova = {
      'id' => "ata_#{Time.now.to_i}_#{rand(100..999)}",
      'titulo' => payload['titulo'].to_s.strip,
      'tipo' => payload['tipo'] || 'Assembleia Ordinária',
      'data' => payload['data'] || Time.now.strftime('%d/%m/%Y'),
      'numero' => payload['numero'] || "ATA Nº #{db['atas'].size + 1}/#{Time.now.year}",
      'responsavel' => payload['responsavel'] || 'Celson Rodrigues (Síndico)',
      'resumo' => payload['resumo'].to_s.strip,
      'pautas' => pautas_arr.empty? ? ['Deliberação geral dos condôminos presentes.'] : pautas_arr,
      'status_documento' => 'Registrada e Publicada'
    }
    db['atas'].unshift(nova)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(nova)
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
      'data' => payload['data'] || Time.now.strftime('%B/%Y'),
      'investimento' => payload['investimento'].to_s.strip.empty? ? 'Sob consulta' : payload['investimento'].to_s.strip,
      'impacto' => payload['impacto'].to_s.strip,
      'descricao' => payload['descricao'].to_s.strip,
      'imagem' => payload['imagem'].to_s.strip.empty? ? 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80' : payload['imagem'].to_s.strip
    }
    db['melhorias'].unshift(nova)
    save_db(db)
    res.status = 201
    res.body = JSON.generate(nova)
  when 'PUT'
    payload = parse_body(req)
    item = db['melhorias'].find { |m| m['id'] == payload['id'] }
    if item
      item['status'] = payload['status'] if payload['status']
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
      'data' => Time.now.strftime('%d/%m/%Y'),
      'prioridade' => payload['prioridade'] || 'Importante',
      'autor' => 'Celson Rodrigues (Síndico)'
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
puts "👤 Gestão: Síndico Celson Rodrigues"
puts "🌐 Acesse em: http://localhost:#{PORT}"
puts "===================================================="

server.start
