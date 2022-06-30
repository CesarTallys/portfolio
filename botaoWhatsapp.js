function mudarBotaoWhatsapp(){
  //CONTROLANDO O TEXTO DO BOTAO
  var largura = window.innerWidth;
  var span = document.getElementById('textoBotaoWhatsapp');
  
  if(largura <= 575){
    span.innerHTML = '';
  }else{
    span.innerHTML = 'WHATSAPP';
  }

  //CONTROLANDO A LARGURA DO BOTAO
  var larguraBotao = document.getElementById('whatsapp');
  
  if(largura <= 575){
    larguraBotao.style.width = '50px';
  }else{
    larguraBotao.style.width = '150px';
  }
}

