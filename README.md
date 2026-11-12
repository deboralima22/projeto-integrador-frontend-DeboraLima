# Mapa Aberto — Blog de Viagens

Projeto Integrador da disciplina de Desenvolvimento Front-end para Web.

## Sobre o projeto

Mapa Aberto é um blog de viagens que reúne relatos, dicas e roteiros de destinos pelo Brasil e pelo mundo. Cada post traz um pouco da experiência de quem esteve lá: onde ficar, o que comer, quanto custa e aqueles detalhes que só quem viajou sabe contar.

A proposta é ser um ponto de partida para quem está planejando a próxima viagem e quer inspiração e informação prática em um só lugar, sem depender de dezenas de abas abertas no navegador.

## Funcionalidades

O blog reúne relatos de viagem organizados por destino, com dicas práticas sobre hospedagem, alimentação e custos, além de roteiros sugeridos para diferentes perfis de viajante. A navegação entre os posts foi pensada para ser simples e direta.

- Menu de navegação com Flexbox
- Grade responsiva de destinos com CSS Grid
- Seção de vídeo com fallback de formatos (WebM e MP4), poster e legendas
- Formulário para o leitor contar a própria viagem
- Análise de custos dos destinos em JavaScript: lógica no console (`js/logica.js`) e cards de custo na página, por faixa de preço (`js/script.js`)

## Tecnologias utilizadas

- HTML5 semântico (multimídia, formulário, tabela, SVG e Canvas)
- CSS3 (variáveis, box model, Flexbox, Grid, pseudo-classes)
- JavaScript básico (teste de formatos de vídeo com `canPlayType()`)
- JavaScript puro: variáveis, condicionais, laços, funções, `map`, `filter`, `reduce` e manipulação do DOM

## Estrutura de pastas

```
├── index.html
├── pratica-canvas-svg-simples.html
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   ├── media.js
│   ├── logica.js
│   └── script.js
└── assets/
    ├── images/
    └── media/
```

## Como executar o projeto

Para rodar o projeto localmente, basta clonar o repositório e abrir o arquivo `index.html` no navegador:

```bash
git clone https://github.com/deboralima22/projeto-integrador-frontend-DeboraLima.git
cd projeto-integrador-frontend-DeboraLima
```

## Autora

Projeto desenvolvido por Débora Lima como parte do Projeto Integrador da disciplina de Desenvolvimento Front-end para Web.

GitHub: [@deboralima22](https://github.com/deboralima22)
