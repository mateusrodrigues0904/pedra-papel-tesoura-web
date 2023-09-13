let regras = document.getElementById("regras");
let regrasOverlay = document.getElementById("fundo");
let fechar = document.getElementById("fechar");
let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
let tesoura = document.getElementById("tesoura");
let step_1 = document.querySelector("section");
let step_2 = document.querySelector("#step-2");
let escJogadorPedra = document.querySelector(".escJogadorPedra");
let escJogadorPapel = document.querySelector(".escJogadorPapel");
let escJogadorTesoura = document.querySelector(".escJogadorTesoura");
let maqPedra = document.getElementById("maqPedra");
let maqPapel = document.getElementById("maqPapel");
let maqTesoura = document.getElementById("maqTesoura");
let empty = document.querySelector(".empty");
let numRan;
let escMaquina = "";
let escJogador = "";
let containerRes = document.querySelector(".telaFim");
let ganhou = document.querySelector("#ganhou");
let perdeu = document.querySelector("#perdeu");
let empate = document.querySelector("#empate");
let pontuacao = document.querySelector("#pontuacao");
let pontuacao1 = 0;

regras.addEventListener("click", function () {
  regrasOverlay.style.opacity = "1";
  regrasOverlay.style.pointerEvents = "all";
});

fechar.addEventListener("click", function () {
  regrasOverlay.style.opacity = "0";
  regrasOverlay.style.pointerEvents = "none";
});

pedra.addEventListener("click", () => {
  escJogador = "Pedra";
  step_1.style.display = "none";
  step_2.style.display = "flex";
  escJogadorPedra.style.display = "flex";
  aleatorio();
  jogo();
});

papel.addEventListener("click", () => {
  escJogador = "Papel";
  step_1.style.display = "none";
  step_2.style.display = "flex";
  escJogadorPapel.style.display = "flex";
  aleatorio();
  jogo();
});

tesoura.addEventListener("click", () => {
  escJogador = "Tesoura";
  step_1.style.display = "none";
  step_2.style.display = "flex";
  escJogadorTesoura.style.display = "flex";
  aleatorio();
  jogo();
});

function jogarNovamente() {
  step_1.style.display = "grid";
  step_2.style.display = "none";
  escJogadorTesoura.style.display = "none";
  escJogadorPapel.style.display = "none";
  escJogadorPedra.style.display = "none";
  escJogadorPedra.style.boxShadow = "inset 1px 5px 1px rgba(0, 0, 0, 0.274)";
  escJogadorPapel.style.boxShadow = "inset 1px 5px 1px rgba(0, 0, 0, 0.274)";
  escJogadorTesoura.style.boxShadow = "inset 1px 5px 1px rgba(0, 0, 0, 0.274)";
  maqPedra.style.display = "none";
  maqPapel.style.display = "none";
  maqTesoura.style.display = "none";
  maqPapel.style.boxShadow = "inset 1px 5px 1px rgba(0, 0, 0, 0.274)";
  maqPapel.style.boxShadow = "inset 1px 5px 1px rgba(0, 0, 0, 0.274)";
  maqTesoura.style.boxShadow = "inset 1px 5px 1px rgba(0, 0, 0, 0.274)";
  empty.style.display = "block";
  containerRes.style.display = "none";
  ganhou.style.display = "none";
  perdeu.style.display = "none";
  empate.style.display = "none";
}

function aleatorio() {
  numRan = Math.floor(Math.random() * 3);
  if (numRan === 0) {
    setTimeout(function () {
      escMaquina = "Pedra";
      maqPedra.style.display = "flex";
      empty.style.display = "none";
    }, 800);
    escMaquina = "Pedra";
  } else if (numRan === 1) {
    setTimeout(function () {
      maqPapel.style.display = "flex";
      empty.style.display = "none";
    }, 800);
    escMaquina = "Papel";
  } else {
    setTimeout(function () {
      maqTesoura.style.display = "flex";
      empty.style.display = "none";
    }, 800);
    escMaquina = "Tesoura";
  }
}

function jogo() {
  if (escJogador === "Pedra") {
    if (escMaquina === "Tesoura") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "block";
        perdeu.style.display = "none";
        empate.style.display = "none";
        escJogadorPedra.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        pontuacao1 += 1;
        pontuacao.innerText = String(pontuacao1);
      }, 1000);
    } else if (escMaquina === "Papel") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "none";
        perdeu.style.display = "block";
        empate.style.display = "none";
        maqPapel.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        if (pontuacao1 > 0) {
          pontuacao1 -= 1;
          pontuacao.innerText = String(pontuacao1);
        }
      }, 1000);
    } else if (escMaquina === "Pedra") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "none";
        perdeu.style.display = "none";
        empate.style.display = "block";
        maqPedra.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        escJogadorPedra.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
      }, 1000);
    }
  } else if (escJogador === "Papel") {
    if (escMaquina === "Pedra") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "block";
        perdeu.style.display = "none";
        empate.style.display = "none";
        escJogadorPapel.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        pontuacao1 += 1;
        pontuacao.innerText = String(pontuacao1);
      }, 1000);
    } else if (escMaquina === "Tesoura") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "none";
        perdeu.style.display = "block";
        empate.style.display = "none";
        maqTesoura.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        if (pontuacao1 > 0) {
          pontuacao1 -= 1;
          pontuacao.innerText = String(pontuacao1);
        }
      }, 1000);
    } else if (escMaquina === "Papel") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "none";
        perdeu.style.display = "none";
        empate.style.display = "block";
        maqPapel.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        escJogadorPapel.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
      }, 1000);
    }
  } else if (escJogador === "Tesoura") {
    if (escMaquina === "Papel") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "block";
        perdeu.style.display = "none";
        empate.style.display = "none";
        escJogadorTesoura.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        pontuacao1 += 1;
        pontuacao.innerText = String(pontuacao1);
      }, 1000);
    } else if (escMaquina === "Pedra") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "none";
        perdeu.style.display = "block";
        empate.style.display = "none";
        maqPedra.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        if (pontuacao1 > 0) {
          pontuacao1 -= 1;
          pontuacao.innerText = String(pontuacao1);
        }
      }, 1000);
    } else if (escMaquina === "Tesoura") {
      setTimeout(function () {
        containerRes.style.display = "block";
        ganhou.style.display = "none";
        perdeu.style.display = "none";
        empate.style.display = "block";
        maqTesoura.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
        escJogadorTesoura.style.boxShadow =
          "inset 1px 5px 1px 1px rgba(0, 0, 0, 0.274), 1px 1px 40px rgba(255, 255, 255, 0.13), 1px 1px 1px 70px rgba(255, 255, 255, 0.05), 1px 1px 1px 100px rgba(255, 255, 255, 0.03)";
      }, 1000);
    }
  }
}
