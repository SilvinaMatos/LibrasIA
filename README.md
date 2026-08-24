# 🤟 LibrasIA — Agente de IA para Aprendizado de Libras

<p align="center">
  <strong>Assistente inteligente para auxiliar iniciantes no aprendizado da Língua Brasileira de Sinais (Libras)</strong>
</p>

---

## 📌 Sobre o Projeto

O **LibrasIA** é um projeto de Inteligência Artificial desenvolvido com o objetivo de criar um assistente virtual capaz de responder dúvidas sobre a **Língua Brasileira de Sinais (Libras)** utilizando materiais educacionais como fonte de conhecimento.

A proposta surgiu a partir do interesse em utilizar Inteligência Artificial e processamento de linguagem natural para criar uma ferramenta de apoio ao aprendizado de Libras, especialmente para pessoas que estão tendo o primeiro contato com a língua.

Diferentemente de um chatbot que responde livremente com base apenas no conhecimento do modelo de linguagem, o LibrasIA utiliza uma abordagem de **RAG (Retrieval-Augmented Generation)**.

Nesse modelo, o agente primeiro consulta os materiais de referência e, a partir das informações recuperadas, constrói a resposta para o usuário.

---

## 🎯 Objetivos

O projeto tem como principais objetivos:

* Criar um agente de IA voltado para o aprendizado de Libras;
* Auxiliar iniciantes com dúvidas sobre a língua;
* Utilizar materiais educacionais confiáveis como fonte de informação;
* Aplicar conceitos de **RAG (Retrieval-Augmented Generation)**;
* Trabalhar com embeddings e busca semântica;
* Desenvolver uma API para comunicação entre o agente e o frontend;
* Criar uma interface web simples, intuitiva e responsiva;
* Integrar Inteligência Artificial, backend e frontend em uma única aplicação.

---

# 🧠 Arquitetura do Projeto

O projeto foi desenvolvido utilizando uma arquitetura dividida em três principais partes:

```text
┌─────────────────────────────┐
│        FRONTEND             │
│        Angular              │
│                             │
│  Interface do LibrasIA      │
└──────────────┬──────────────┘
               │
               │ HTTP / JSON
               ▼
┌─────────────────────────────┐
│          API                │
│         FastAPI             │
│                             │
│       /perguntar            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       AGENTE DE IA          │
│                             │
│  LangChain + LangGraph      │
│  Modelo de linguagem        │
│  RAG                        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      BASE DE CONHECIMENTO   │
│                             │
│  PDFs de referência         │
│  Embeddings                 │
│  Busca semântica            │
└─────────────────────────────┘
```
<img width="1316" height="629" alt="interface2" src="https://github.com/user-attachments/assets/57c7959e-c8e0-4950-bade-d61f5a6a5152" />

---

# 📚 Base de Conhecimento

O agente utiliza materiais em PDF como fonte de conhecimento.

Foram utilizados principalmente dois materiais:

### 📖 Curso Básico de Libras

Material educacional utilizado como uma das principais fontes de conhecimento do agente.

O conteúdo aborda conceitos básicos da Libras, incluindo:

* Aspectos gerais da língua;
* Alfabeto manual;
* Sinais;
* Apresentação pessoal;
* Saudações e cumprimentos;
* Números;
* Pronomes;
* Expressões faciais e corporais;
* Uso do espaço;
* Cultura e identidade surda;
* Vocabulário em diferentes contextos.

### 📄 Material da Fiocruz

Material relacionado à acessibilidade e aos princípios do SUS, contendo conteúdos introdutórios de Libras.

Entre os assuntos utilizados estão:

* Gramática da Libras;
* Alfabeto manual;
* Números;
* Sistema pronominal;
* Saudações;
* Cumprimentos;
* Agradecimentos;
* Aspectos morfológicos;
* Relações de gênero;
* Aspectos sintáticos.

A utilização desses materiais permite que o agente busque informações diretamente na documentação disponibilizada para o projeto.

---

# 🔎 RAG — Retrieval-Augmented Generation

O principal conceito de Inteligência Artificial aplicado no projeto é o **RAG (Retrieval-Augmented Generation)**.

Em vez de simplesmente enviar a pergunta diretamente para o modelo de linguagem, o sistema segue um fluxo semelhante a:

```text
Pergunta do usuário
        │
        ▼
Busca semântica
        │
        ▼
Documentos relevantes
        │
        ▼
Contexto recuperado
        │
        ▼
Modelo de linguagem
        │
        ▼
Resposta
```

Isso permite que o agente utilize os materiais fornecidos como fonte de contexto para responder às perguntas.

Essa abordagem também ajuda a reduzir respostas que não estejam relacionadas ao conteúdo disponibilizado para o projeto.

---


# 🤖 Agente de Inteligência Artificial

O projeto utiliza o ecossistema **LangChain** para estruturar a comunicação entre:

* Pergunta do usuário;
* Ferramenta de busca;
* Contexto recuperado;
* Modelo de linguagem;
* Resposta final.

O agente foi configurado para utilizar os materiais de referência como base para suas respostas.

Também foi implementado um controle para manter as respostas objetivas e adequadas à proposta do projeto.

---

# ✂️ Controle do tamanho das respostas

Para evitar respostas excessivamente longas, foi implementada uma função de controle de tamanho.

```python
def limitar_resposta(texto: str) -> str:
    texto = " ".join(texto.split())

    if len(texto) <= 500:
        return texto

    return texto[:497].rsplit(" ", 1)[0] + "..."
```

Além de limitar o tamanho, a função remove espaços e quebras de linha desnecessárias provenientes da extração dos PDFs.

Dessa forma, o agente consegue apresentar respostas mais adequadas para uma interface web.

---

# 🧪 Testes do Agente

Durante o desenvolvimento foram realizadas perguntas diretamente no notebook para verificar:

* Funcionamento da recuperação de contexto;
* Relevância dos documentos encontrados;
* Capacidade do agente de responder utilizando os materiais;
* Tamanho das respostas;
* Comunicação entre as diferentes etapas do pipeline.

Um exemplo de pergunta utilizada:

```text
O que é Libras?
```

O agente conseguiu recuperar informações relacionadas ao conceito de Libras nos materiais de referência e utilizá-las para produzir uma resposta objetiva.

---
<img width="1323" height="543" alt="imagem 3 python" src="https://github.com/user-attachments/assets/97308812-c573-4a9d-9f2a-a6089c07a97b" />



<img width="1223" height="443" alt="imagem 4" src="https://github.com/user-attachments/assets/1588bee9-600a-4162-9f70-0ac8a9d7ffe6" />



<img width="943" height="476" alt="imagem 5" src="https://github.com/user-attachments/assets/b46797ef-7e6a-4402-822c-3a0d073b0ac3" />




# 🔗 Comunicação com o Frontend

Para permitir que o frontend desenvolvido em Angular acessasse a API executada no Google Colab, foi utilizado o **ngrok** como túnel de comunicação.

O fluxo ficou:

```text
Angular
   │
   │ HTTP POST
   ▼
ngrok
   │
   ▼
FastAPI
   │
   ▼
Agente LibrasIA
   │
   ▼
RAG + PDFs + LLM
```

O Angular envia a pergunta para o endpoint `/perguntar` e recebe a resposta em formato JSON.

# 🔗 Comunicação a Nuvem NGROK

A aplicação da Nuvem ngrok testada, respondendo a pergunta:  



<img width="1281" height="669" alt="imagem 1" src="https://github.com/user-attachments/assets/21afcec7-957d-4747-8e59-371314937ca8" />


<img width="1367" height="729" alt="imagem 2" src="https://github.com/user-attachments/assets/3a4f8174-027a-42d6-a967-14232e58bbea" />


<img width="1265" height="629" alt="imagem 3" src="https://github.com/user-attachments/assets/cae29afb-03e2-45dd-bb83-6b601f904074" />


---

# 💻 Frontend

O frontend foi desenvolvido utilizando **Angular**.

A interface foi planejada para ser simples, responsiva e em português, mantendo o foco no aprendizado de Libras.

A aplicação possui elementos como:

* Cabeçalho;
* Identidade visual do LibrasIA;
* Área de materiais;
* Área de interação com o agente;
* Campo para envio de perguntas;
* Área de resposta;
* Espaço reservado para recursos visuais;
* Rodapé.

A estrutura visual foi pensada especialmente para usuários iniciantes.

---

# 🖥️ Estrutura da Interface

Conceitualmente, a interface segue:

```text
┌───────────────────────────────────────────┐
│              🤟 LibrasIA                  │
│                         Início | Sobre    │
├────────────────┬──────────────────────────┤
│                │                          │
│   📚 Materiais │   Assistente LibrasIA   │
│                │                          │
│ Curso Básico   │   Pergunta               │
│ de Libras      │   ┌──────────────────┐   │
│                │   │                  │   │
│ Fiocruz        │   │    Pergunta      │   │
│                │   │                  │   │
│                │   └──────────────────┘   │
│                │                          │
│ Sobre LibrasIA │   Resposta               │
│                │                          │
│                │   🤟 Recurso visual     │
│                │                          │
├────────────────┴──────────────────────────┤
│              LibrasIA                     │
└───────────────────────────────────────────┘

```
<img width="1345" height="639" alt="interface front" src="https://github.com/user-attachments/assets/cd3fb03b-3cbd-473a-bdb7-1fa6a8b282db" />

---

# 📱 Responsividade

A interface foi desenvolvida considerando diferentes tamanhos de tela.

O objetivo é permitir que o projeto possa ser utilizado em:

* 💻 Computadores;
* 📱 Smartphones;
* 📲 Tablets.

O conteúdo é reorganizado conforme o espaço disponível, mantendo a área de interação com o agente como elemento principal.

---

# 🧰 Tecnologias e Bibliotecas

## Inteligência Artificial e RAG

| Tecnologia            | Utilização                                     |
| --------------------- | ---------------------------------------------- |
| Python                | Linguagem principal do agente                  |
| LangChain             | Estruturação do agente e pipeline RAG          |
| LangGraph             | Estruturação dos fluxos do agente              |
| Hugging Face          | Embeddings                                     |
| Sentence Transformers | Modelo de embeddings                           |
| Scikit-Learn          | Recursos relacionados ao processamento e busca |
| NLTK                  | Processamento de linguagem natural             |

## Processamento dos documentos

| Tecnologia          | Utilização                               |
| ------------------- | ---------------------------------------- |
| PyPDF               | Leitura e processamento dos PDFs         |
| PyPDFLoader         | Carregamento dos documentos no LangChain |
| InMemoryVectorStore | Armazenamento vetorial em memória        |
| Retriever           | Recuperação dos conteúdos relevantes     |

## Backend

| Tecnologia | Utilização                                    |
| ---------- | --------------------------------------------- |
| FastAPI    | Criação da API                                |
| Pydantic   | Validação dos dados recebidos                 |
| Uvicorn    | Servidor da aplicação                         |
| ngrok      | Túnel de comunicação entre frontend e backend |

## Frontend

| Tecnologia | Utilização                           |
| ---------- | ------------------------------------ |
| Angular    | Framework do frontend                |
| TypeScript | Linguagem utilizada pelo Angular     |
| HTML       | Estrutura da interface               |
| CSS        | Estilização e responsividade         |
| Bootstrap  | Componentes e estilos auxiliares     |
| jQuery     | Biblioteca utilizada no projeto      |
| Popper.js  | Dependência utilizada pelo Bootstrap |

## Desenvolvimento

| Tecnologia         | Utilização                              |
| ------------------ | --------------------------------------- |
| Google Colab       | Desenvolvimento e execução do agente    |
| Visual Studio Code | Desenvolvimento do frontend             |
| Git                | Controle de versão                      |
| GitHub             | Versionamento e documentação do projeto |

---



# 🔄 Fluxo Completo da Aplicação

O funcionamento completo do LibrasIA pode ser resumido no seguinte fluxo:

```text
                  USUÁRIO
                     │
                     ▼
              Interface Angular
                     │
                     │ Pergunta
                     ▼
                  ngrok
                     │
                     ▼
                  FastAPI
                     │
                     ▼
             Agente LibrasIA
                     │
                     ▼
              Tool: pega_contexto
                     │
                     ▼
                 Retriever
                     │
                     ▼
             Busca nos documentos
                     │
                     ▼
            Contexto relevante
                     │
                     ▼
              Modelo de linguagem
                     │
                     ▼
             Resposta do agente
                     │
                     ▼
                  FastAPI
                     │
                     ▼
                  Angular
                     │
                     ▼
                 USUÁRIO
```

---

# 🎓 Contexto do Projeto

O LibrasIA foi desenvolvido como projeto prático para aplicação dos conhecimentos adquiridos durante os estudos de **Inteligência Artificial, desenvolvimento de software, APIs, RAG e desenvolvimento web**.

O projeto também representa a integração de diferentes tecnologias em uma única solução, passando desde o processamento dos documentos e construção do agente de IA até a criação de uma interface para interação com o usuário.

---

# 💡 Aprendizados

Entre os principais aprendizados obtidos durante o desenvolvimento estão:

* Construção de um agente utilizando LangChain;
* Implementação de uma arquitetura RAG;
* Processamento de arquivos PDF;
* Criação e utilização de embeddings;
* Implementação de busca semântica;
* Criação de ferramentas para agentes;
* Integração de um modelo de linguagem com documentos;
* Desenvolvimento de uma API REST com FastAPI;
* Comunicação entre frontend e backend;
* Desenvolvimento de uma aplicação Angular;
* Utilização de ngrok para comunicação durante o desenvolvimento;
* Organização de código e documentação utilizando Git e GitHub.

---

# 🤟 LibrasIA

O projeto une **Inteligência Artificial, acessibilidade e educação**, buscando demonstrar como diferentes tecnologias podem ser integradas para criar soluções voltadas ao aprendizado e à inclusão.

> **LibrasIA — tecnologia e Inteligência Artificial como apoio ao aprendizado de Libras.**

---

## 👩‍💻 Autora

**Silvina Sousa Matos Santos**

Projeto desenvolvido para fins de estudo, aprendizado e aplicação prática de tecnologias de Inteligência Artificial e desenvolvimento Full Stack.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de estudo.

