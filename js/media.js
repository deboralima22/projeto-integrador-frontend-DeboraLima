// AULA 4 - Teste de formatos com canPlayType()
// Abra o Console (F12) para ver o resultado: o retorno pode ser
// "probably", "maybe" ou "" (vazio = não suporta).
const video = document.getElementById('video-tour');

const formatos = [
  { nome: 'WebM (VP9)', tipo: 'video/webm; codecs="vp9"' },
  { nome: 'MP4 (H.264)', tipo: 'video/mp4; codecs="avc1.42E01E"' }
];

let escolhido = null;

formatos.forEach(function (formato) {
  const resposta = video.canPlayType(formato.tipo);
  console.log(formato.nome + ' -> "' + resposta + '"');

  // o navegador usa o primeiro <source> compatível, então guardamos o 1º que passar
  if (resposta !== '' && escolhido === null) {
    escolhido = formato.nome;
  }
});

// DESAFIO EXTRA - mostra no DOM qual formato o visitante provavelmente vai usar
// (apenas informativo, não altera a reprodução)
const aviso = document.createElement('small');
aviso.className = 'aviso-formato';
aviso.textContent = escolhido
  ? 'Formato provavelmente usado no seu navegador: ' + escolhido
  : 'Seu navegador pode não reproduzir os formatos deste vídeo.';
video.insertAdjacentElement('afterend', aviso);
