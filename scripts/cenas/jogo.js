class Jogo {
    constructor() {
      this.indice = 0;
      this.mapa = cartucho.mapa;
      
    }
  
    setup() {
  
  
      cenario = new Cenario(imagemCenario, 5);
      vida = new Vida(cartucho.configuracoes.vidaMaxima, cartucho.configuracoes.vidaInicial);
      personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
      const inimigoGota = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
      const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 8);
      const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 8);
      pontuacao = new Pontuacao();
  
      inimigos.push(inimigoGota);
      inimigos.push(inimigoGrande);
      inimigos.push(inimigoVoador);
  
    }
  
    keyPressed(key) {
      if (keyCode === UP_ARROW) {
        personagem.pula();
        somDoPulo.play();
      }
    }
  
    draw() {
      cenario.exibe();
      cenario.move();
      
      
  
      vida.draw();
      pontuacao.exibe();
      pontuacao.adicionarPonto();
  
      personagem.exibe();
      personagem.aplicaGravidade();
  
      const linhaAtual = this.mapa[this.indice];
      const inimigo = inimigos[linhaAtual.inimigo];
      const inimigoVisivel = inimigo.x < -inimigo.largura;
      inimigo.velocidade = linhaAtual.velocidade;
  
      inimigo.exibe();
      inimigo.move();
  
      if (inimigoVisivel) {
        this.indice++
        inimigo.aparece();
        if (this.indice > 2) {
          this.indice = 0;
        }
      }
  
  
  
      if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        if (vida.vidas === 0) {
          image(imagemGameOver, width / 2 - 200, height / 2)
          noLoop();
        }
  
      }
  
    }
  
  }