# 🏢 Portal Oficial — Condomínio Residencial Quebec (Itaúna - MG)

Sistema web completo (Front-end + Back-end com API REST e banco de dados persistente) desenvolvido como proposta executiva para o **Condomínio Residencial Quebec**, localizado na **Rua Ênio Pereira de Carvalho, nº 383 – Bairro Parque Jardim Santanense, Itaúna - MG (CEP 35681-312)**, sob gestão do Síndico **Celson Rodrigues**.

---

## ✨ Funcionalidades e Abas do Sistema

1. **🏢 Apresentação do Condomínio:**
   - Ficha técnica oficial (endereço, CEP 35681-312, bairro Parque Jardim Santanense, tipologia dos blocos e apartamentos de 2 quartos).
   - Mapa interativo do **Google Maps** cravado na Rua Ênio Pereira de Carvalho, 383.
   - Galeria visual e indicadores em tempo real.
2. **🛠️ Melhorias e Obras:**
   - Acompanhamento transparente das obras e manutenções (iluminação em LED, câmeras CFTV Full HD, pintura e demarcação de vagas, limpeza de reservatórios) com filtros por status (`Concluído`, `Em Andamento`, `Planejado`) e barra de progresso.
3. **👔 Gestão — Síndico Celson Rodrigues:**
   - Página institucional destacando os pilares da administração, transparência financeira, diretrizes de convivência e canais oficiais de atendimento.
4. **📋 Atas de Reuniões e Assembleias:**
   - Repositório pesquisável de Atas de Assembleias Ordinárias e Extraordinárias, com leitura completa em modal e botão para **Imprimir / Salvar em PDF**.
5. **📣 Ouvidoria e Reclamações (Armazenadas no Banco de Dados):**
   - Formulário para moradores registrarem ocorrências ou sugestões (com opção de sigilo público), gerando protocolo único (`#QBC-2026-XXXX`) e exibindo a resposta oficial do Síndico Celson Rodrigues.
6. **🤝 Guia de Serviços dos Moradores:**
   - Vitrine de serviços prestados pelos próprios moradores do Condomínio Quebec, com busca e filtro por categoria e botão direto para chamar no WhatsApp.
   - **Cadastro de Morador Prestador de Serviço** exigindo:
     - **Nome Completo**
     - **CPF** (mascarado na vitrine pública por segurança/LGPD e visível integralmente para o Síndico no painel administrativo)
     - **Celular / WhatsApp**
     - **Bloco**
     - **Número do Apartamento**
     - **Serviço Prestado**
7. **🔐 Back-end & Painel Administrativo do Síndico (`server.rb`):**
   - Acesso restrito para o Síndico **Celson Rodrigues** responder e alterar status de reclamações, publicar novas atas de reuniões, cadastrar melhorias e auditar todos os cadastros de moradores (incluindo CPF completo).
   - **Credenciais de Demonstração:**
     - **Usuário:** `celson`
     - **Senha:** `quebec383`
8. **📄 Proposta Comercial Executiva (`proposta-sindico.html`):**
   - Documento executivo formatado para apresentação presencial ou exportação em PDF diretamente para o Síndico Celson Rodrigues.

---

## 🚀 Como Executar

### Opção 1: Com Servidor Back-end Ruby Ativo (Recomendado)
No terminal, dentro da pasta do projeto:
```bash
/usr/bin/ruby server.rb
```
Depois acesse no navegador: **`http://localhost:3080`**

### Opção 2: Abertura Direta
Você também pode abrir o arquivo `index.html` ou `proposta-sindico.html` diretamente no navegador (o sistema possui sincronização automática de dados).
