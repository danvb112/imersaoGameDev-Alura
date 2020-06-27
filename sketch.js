
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  somJogo.loop();
  telaInicial = new TelaInicial();
  cenas = {
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}


function keyPressed() {
  jogo.keyPressed();
  
}

function draw() {
  cenas[cenaAtual].draw();
  
}

