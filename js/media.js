
const video = document.getElementById('video-tour');

const formatos = [
  { nome: 'WebM (VP9)', tipo: 'video/webm; codecs="vp9"' },
  { nome: 'MP4 (H.264)', tipo: 'video/mp4; codecs="avc1.42E01E"' }
];

let escolhido = null;

formatos.forEach(function (formato) {
  const resposta = video.canPlayType(formato.tipo);
  console.log(formato.nome + ' -> "' + resposta + '"');

  
  if (resposta !== '' && escolhido === null) {
    escolhido = formato.nome;
  }
});

//desafio extra 
const aviso = document.createElement('small');
aviso.className = 'aviso-formato';
aviso.textContent = escolhido
  ? 'Formato provavelmente usado no seu navegador: ' + escolhido
  : 'Seu navegador pode não reproduzir os formatos deste vídeo.';
video.insertAdjacentElement('afterend', aviso);
