/*
  Tema: custo dos destinos do blog Mapa Aberto
  Entrada: orçamento por dia e nome de destinos (prompt)
  Processamento: compara o custo de cada destino com o orçamento,
  conta quantos cabem, soma os custos e acha o mais caro
  Saída: frases e tabela no console

  Pseudocódigo:
  1. pedir o orçamento e converter para número
  2. se for inválido, usar o padrão
  3. para cada destino:
  4.   classificar o custo
  5.   escolher a dica pela categoria
  6.   atualizar contador, soma e mais caro
  7. mostrar o relatório
  8. pedir destinos até digitar "sair"
*/

const destinos = [
  { nome: "Lençóis Maranhenses", custoDia: 250, dias: 4, categoria: "dunas" },
  { nome: "Chapada Diamantina", custoDia: 220, dias: 5, categoria: "trilha" },
  { nome: "Vale do Elqui", custoDia: 330, dias: 3, categoria: "estrelas" },
  { nome: "Jalapão", custoDia: 280, dias: 6, categoria: "dunas" },
  { nome: "Fernando de Noronha", custoDia: 600, dias: 5, categoria: "praia" },
  { nome: "Deserto do Atacama", custoDia: 450, dias: 4, categoria: "estrelas" }
];

const ORCAMENTO_PADRAO = 300;
const ORCAMENTO_MIN = 50;
const ORCAMENTO_MAX = 25000;

let orcamento = ORCAMENTO_PADRAO;
const respostaOrcamento = prompt(`Quanto você pretende gastar por dia na viagem? (entre R$ ${ORCAMENTO_MIN} e R$ ${ORCAMENTO_MAX})`);

if (respostaOrcamento === null) {
  console.log(`Você cancelou. Vou usar R$ ${ORCAMENTO_PADRAO} por dia.`);
} else if (respostaOrcamento.trim() === "") {
  console.log(`Você não digitou nada. Vou usar R$ ${ORCAMENTO_PADRAO} por dia.`);
} else if (Number.isNaN(Number(respostaOrcamento))) {
  console.log(`"${respostaOrcamento}" não é um número. Vou usar R$ ${ORCAMENTO_PADRAO} por dia.`);
} else if (Number(respostaOrcamento) < ORCAMENTO_MIN || Number(respostaOrcamento) > ORCAMENTO_MAX) {
  console.log(`O valor precisa estar entre ${ORCAMENTO_MIN} e ${ORCAMENTO_MAX}. Vou usar R$ ${ORCAMENTO_PADRAO} por dia.`);
} else {
  orcamento = Number(respostaOrcamento);
}

let dentroDoOrcamento = 0;
let somaCustos = 0;
let maisCaro = destinos[0];
const relatorio = [];

for (const destino of destinos) {
  let situacao;
  if (destino.custoDia > orcamento) {
    situacao = "Acima do orçamento";
  } else if (destino.custoDia > orcamento * 0.8) {
    situacao = "No limite";
  } else {
    situacao = "Cabe folgado";
  }

  let dica;
  switch (destino.categoria) {
    case "dunas":
      dica = "Leve protetor solar e chinelo para andar na areia";
      break;
    case "trilha":
      dica = "Use tênis de trilha e leve bastante água";
      break;
    case "estrelas":
      dica = "Leve casaco, as noites são frias";
      break;
    case "praia":
      dica = "Reserve a hospedagem com antecedência";
      break;
    default:
      dica = "Pesquise bem antes de ir";
  }

  if (situacao !== "Acima do orçamento") {
    dentroDoOrcamento = dentroDoOrcamento + 1;
  }
  somaCustos = somaCustos + destino.custoDia;
  if (destino.custoDia > maisCaro.custoDia) {
    maisCaro = destino;
  }

  relatorio.push({
    destino: destino.nome,
    custoDia: destino.custoDia,
    situacao: situacao,
    dica: dica
  });
}

const mediaCustos = somaCustos / destinos.length;

console.log(`Orçamento por dia: R$ ${orcamento}`);
console.log(`Destinos dentro do orçamento: ${dentroDoOrcamento} de ${destinos.length}`);
console.log(`Custo médio por dia: R$ ${mediaCustos.toFixed(2)}`);
console.log(`Destino mais caro: ${maisCaro.nome} (R$ ${maisCaro.custoDia} por dia)`);
console.table(relatorio);

let busca = "";
do {
  const entrada = prompt('Digite o nome de um destino para ver os detalhes (ou "sair" para encerrar):');

  if (entrada === null) {
    busca = "sair";
  } else {
    busca = entrada.trim().toLowerCase();
  }

  if (busca === "") {
    console.log("Você não digitou nada.");
  } else if (busca !== "sair") {
    let achou = false;
    for (const destino of destinos) {
      if (destino.nome.toLowerCase().includes(busca)) {
        console.log(`${destino.nome}: R$ ${destino.custoDia} por dia, ${destino.dias} dias sugeridos`);
        achou = true;
      }
    }
    if (achou === false) {
      console.log(`Nenhum destino encontrado para "${busca}".`);
    }
  }
} while (busca !== "sair");

console.log("Busca encerrada.");

/*
  Teste de mesa (orçamento 300, "no limite" = acima de 240)

  volta | destino             | custoDia | situação  | dentro | soma | mais caro
  1     | Lençóis Maranhenses | 250      | No limite | 1      | 250  | Lençóis
  2     | Chapada Diamantina  | 220      | Folgado   | 2      | 470  | Lençóis
  3     | Vale do Elqui       | 330      | Acima     | 2      | 800  | Elqui

  Bateu com o console.table.
*/