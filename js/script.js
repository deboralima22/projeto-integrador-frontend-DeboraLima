const roteiros = [
  { nome: "Lençóis Maranhenses", custoDia: 250, dias: 4, categoria: "dunas" },
  { nome: "Chapada Diamantina", custoDia: 220, dias: 5, categoria: "trilha" },
  { nome: "Vale do Elqui", custoDia: 330, dias: 3, categoria: "estrelas" },
  { nome: "Jalapão", custoDia: 280, dias: 6, categoria: "dunas" },
  { nome: "Fernando de Noronha", custoDia: 600, dias: 5, categoria: "praia" },
  { nome: "Deserto do Atacama", custoDia: 450, dias: 4, categoria: "estrelas" }
];

// funções que não mexem na página

function calcularCustoTotal(roteiro, diasExtras = 0) {
  return roteiro.custoDia * (roteiro.dias + diasExtras);
}

function classificarFaixa(total) {
  if (total >= 2500) {
    return "caro";
  } else if (total >= 1500) {
    return "moderado";
  } else {
    return "barato";
  }
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// funções que mexem na página

function criarCartao(item) {
  const cartao = document.createElement("li");
  const titulo = document.createElement("h3");
  const detalhes = document.createElement("p");

  titulo.textContent = item.nome;
  detalhes.textContent = `${item.dias} dias - ${formatarMoeda(item.total)} - faixa ${item.faixa}`;

  cartao.classList.add("item-custo");
  cartao.classList.add("faixa-" + item.faixa);
  cartao.append(titulo, detalhes);

  return cartao;
}

function mostrarCustos(area) {
  const resultados = roteiros.map((roteiro) => {
    const total = calcularCustoTotal(roteiro);
    return {
      nome: roteiro.nome,
      dias: roteiro.dias,
      total: total,
      faixa: classificarFaixa(total)
    };
  });

  // slice() faz uma cópia, porque o sort muda o array
  const ordenados = resultados.slice().sort((a, b) => a.total - b.total);

  const lista = document.createElement("ul");
  lista.classList.add("lista-custos");
  for (const item of ordenados) {
    lista.append(criarCartao(item));
  }

  const baratos = resultados.filter((item) => item.faixa === "barato");
  const linhaBaratos = document.createElement("p");
  if (baratos.length === 0) {
    linhaBaratos.textContent = "Nenhuma viagem na faixa barato.";
  } else {
    const nomes = baratos.map((item) => item.nome);
    linhaBaratos.textContent = `Viagens mais baratas: ${nomes.join(", ")}.`;
  }

  const somaTotais = resultados.reduce((soma, item) => soma + item.total, 0);
  const media = somaTotais / resultados.length;
  const resumo = document.createElement("p");
  resumo.classList.add("resumo-custos");
  resumo.textContent = `Soma de todas as viagens: ${formatarMoeda(somaTotais)} - média por viagem: ${formatarMoeda(media)}`;

  area.append(lista, linhaBaratos, resumo);
}

const areaResultado = document.querySelector("#resultado");

if (areaResultado === null) {
  console.error("Não encontrei o elemento #resultado no HTML.");
} else {
  mostrarCustos(areaResultado);
}
