//Declaração de variáveis:


//Níveis:
var nivel = 1;

//Soundtrack:
function sound(src) //Criado por w3schools
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function()
    {
        this.sound.currentTime = 0;
        var promise = this.sound.play();

        if (promise !== undefined)
        {
            promise.then(_ =>
            {
                //Autoplay
            })
            .catch(error =>
            {
                //Autoplay foi previnido.
                $("#play").show();
            });
        }
    }
    this.stop = function()
    {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}
var musicaBatalha;
var musicaPadrao;
var musicaBoss;

//Canvas em si:
var objCanvas = null;
var objContexto = null;

//Canvas Fundo:
var imgFundo = new Image();
imgFundo.src = "img/fundo.png";
var imgCave = new Image();
imgCave.src = "img/caveEdit.png";
var xCaverna = 1250;
var ycaverna = 200;

//Canvas CaixaDeBatalha:
var imgRetangulo = new Image();
imgRetangulo.src = "img/caixaEditado.jpg";
var imgSeta = new Image();
imgSeta.src = "img/arrow.png";
var imgCoracao = new Image();
imgCoracao.src = "img/heart.png";

//Canvas Moedas:
var imgMoeda = new Image();
imgMoeda.src = "img/moedaEdit.png";
var imgMoedaGrande = new Image();
imgMoedaGrande.src = "img/moedaGrande.png";

//Canvas Heroi:
var imgHeroi = new Image();
imgHeroi.src = "img/heroi.png";
var imgMorte = new Image();
imgMorte.src = "img/morte.png";
var imgSkull = new Image();
imgSkull.src = "img/skull.png";

//Canvas Monstro1:
var imgMonstro1 = new Image();
imgMonstro1.src = "img/monstro.png";

//Canvas Monstro2:
var imgMonstro2 = new Image();
imgMonstro2.src = "img/monstro.png";

//Canvas Monstro3:
var imgMonstro3 = new Image();
imgMonstro3.src = "img/monstroRoxo.png";

//Canvas Monstro4:
var imgMonstro4 = new Image();
imgMonstro4.src = "img/monstroRoxo.png";

//Canvas Monstro5:
var imgMonstro5 = new Image();
imgMonstro5.src = "img/monstroRoxo.png";

//Canvas Monstro6:
var imgMonstro6 = new Image();
imgMonstro6.src = "img/monstroRoxo.png";

//Canvas Monstro7:
var imgMonstro7 = new Image();
imgMonstro7.src = "img/monstroRoxo.png";

//Canvas Monstro8:
var imgMonstro8 = new Image();
imgMonstro8.src = "img/monstroAmarelo.png";

//Canvas Monstro9:
var imgMonstro9 = new Image();
imgMonstro9.src = "img/monstroAmarelo.png";

//Canvas Monstro10:
var imgMonstro10 = new Image();
imgMonstro10.src = "img/monstroAmarelo.png";

//Canvas Monstro11:
var imgMonstro11 = new Image();
imgMonstro11.src = "img/monstroAmarelo.png";

//Canvas Monstro12:
var imgMonstro12 = new Image();
imgMonstro12.src = "img/monstroRosa.png";

//Canvas MonstroBoss:
var imgMonstroBoss = new Image();
imgMonstroBoss.src = "img/monstroBossGrande.png";

//Moedas:
var xMoeda1 = 180;
var yMoeda1 = 300;
var xMoeda2 = 380;
var yMoeda2 = 400;
var xMoeda3 = 580;
var yMoeda3 = 200;
var xMoeda4 = 1200;
var yMoeda4 = 320;
var xMoeda5 = 900;
var yMoeda5 = 280;
var xMoeda6 = 180;
var yMoeda6 = 300;
var xMoeda7 = 380;
var yMoeda7 = 400;
var xMoeda8 = 580;
var yMoeda8 = 200;
var xMoeda9 = 1200;
var yMoeda9 = 280;
var xMoeda10 = 780;
var yMoeda10 = 200;
var xMoeda11 = 180;
var yMoeda11 = 280;
var xMoeda12 = 380;
var yMoeda12 = 400;
var xMoeda13 = 560;
var yMoeda13 = 378;
var xMoeda14 = 1200;
var yMoeda14 = 360;
var xMoeda15 = 745;
var yMoeda15 = 350;
var qtasMoedas = 0;

//Herói:
var xHeroi=120;// Controle de Posicionamento do Heroi
var yHeroi=250;
var qtasPocoes = 2;
var vidaEu = 100;

//Monstro1:
var xMonstro1=200;// Controle de Posicionamento do Monstro
var yMonstro1=100;
var monstro1Pego = false;
var monstro1ParaCima = true;
var vidaMonstro1 = 100;
var monstro1Vivo = true;

//Monstro2:
var xMonstro2=400;
var yMonstro2=600;
var monstro2Pego = false;
var monstro2ParaCima = false;
var vidaMonstro2 = 100;
var monstro2Vivo = true;

//Monstro3:
var xMonstro3=600;
var yMonstro3=200;
var monstro3Pego = false;
var monstro3ParaCima = false;
var vidaMonstro3 = 100;
var monstro3Vivo = true;

//Monstro4:
var xMonstro4=1220;
var yMonstro4=220;
var monstro4Pego = false;
var vidaMonstro4 = 100;
var monstro4Vivo = true;
var direita = true;
var baixo = false;
var esquerda = false;
var cima = false;

//Monstro5:
var xMonstro5=200;
var yMonstro5=40;
var monstro5Pego = false;
var vidaMonstro5 = 100;
var monstro5Vivo = true;
var direita5 = true;
var baixo5 = false;
var esquerda5 = false;
var cima5 = false;

//Monstro6:
var xMonstro6 = 600;
var yMonstro6 = 40;
var monstro6Pego = false;
var vidaMonstro6 = 100;
var monstro6Vivo = true;
var direita6 = true;
var baixo6 = false;
var esquerda6 = false;
var cima6 = false;

//Monstro7:
var xMonstro7 = 600;
var yMonstro7 = 290;
var monstro7Pego = false;
var vidaMonstro7 = 100;
var monstro7Vivo = true;
var direita7 = true;
var baixo7 = false;
var esquerda7 = false;
var cima7 = false;

//Monstro8:
var xMonstro8 = 1220;
var yMonstro8 = 220;
var monstro8Pego = false;
var vidaMonstro8 = 100;
var monstro8Vivo = true;
var direita8 = true;
var baixo8 = false;
var esquerda8 = false;
var cima8 = false;

//Monstro9:
var xMonstro9 = 200;
var yMonstro9 = 40;
var monstro9Pego = false;
var vidaMonstro9 = 100;
var monstro9Vivo = true;
var direita9 = true;
var baixo9 = false;
var esquerda9 = false;
var cima9 = false;

//Monstro10:
var xMonstro10 = 250;
var yMonstro10 = 80;
var monstro10Pego = false;
var vidaMonstro10 = 100;
var monstro10Vivo = true;
var direita10 = true;
var baixo10 = false;
var esquerda10 = false;
var cima10 = false;

//Monstro11:
var xMonstro11 = 515;
var yMonstro11 = 80;
var monstro11Pego = false;
var vidaMonstro11 = 100;
var monstro11Vivo = true;
var direita11 = true;
var baixo11 = false;
var esquerda11 = false;
var cima11 = false;

//Monstro12:
var xMonstro12 = 1220;
var yMonstro12 = 220;
var monstro12Pego = false;
var vidaMonstro12 = 100;
var monstro12Vivo = true;
var direita12 = true;
var baixo12 = false;
var esquerda12 = false;
var cima12 = false;

//MonstroBoss:
var xMonstroBoss = 900;
var yMonstroBoss = 80;
var monstroBossPego = false;
var vidaMonstroBoss = 300;
var monstroBossVivo = true;
var velocidadeBoss = 20;

//Batalha:
var modoNormal = true;
var meuTurno = true;
var direcaoCoracao = 0;
var quantasVezes = 0;
var xSeta = 262;
var ySeta = 570;
var qualMonstro = "";

//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//

//Funções Básicas:
function preload()
{
    setTimeout(function()
    {
        musicaPadrao.play();
    },500);
}
$(document).ready(function Iniciar()
{
    preload();
    objCanvas = document.getElementById("meuCanvas");
    objContexto = objCanvas.getContext("2d");
    musicaPadrao = new sound("music/padrao.wav");
    musicaBatalha = new sound("music/batalha.wav");
    musicaBoss = new sound("music/boss.wav");
    AtualizaTela();
});
function AtualizaTela()
{
	if(qtasMoedas == 5)
	{
		qtasPocoes = qtasPocoes + 1;
		qtasMoedas = 0;
	}

    if(nivel == 1)
    {
        objContexto.drawImage(imgFundo,0,0);
        objContexto.drawImage(imgCave, xCaverna, ycaverna);
        objContexto.drawImage(imgHeroi, xHeroi, yHeroi);
        objContexto.drawImage(imgMoeda, xMoeda1, yMoeda1);
        objContexto.drawImage(imgMoeda, xMoeda2, yMoeda2);
        objContexto.drawImage(imgMoeda, xMoeda3, yMoeda3);
        objContexto.drawImage(imgMoeda, xMoeda4, yMoeda4);
        objContexto.drawImage(imgMoeda, xMoeda5, yMoeda5);

        //Checar vidas:
        if(monstro1Vivo)
            objContexto.drawImage(imgMonstro1, xMonstro1, yMonstro1);
        if(monstro2Vivo)
            objContexto.drawImage(imgMonstro2, xMonstro2, yMonstro2);
        if(monstro3Vivo)
            objContexto.drawImage(imgMonstro3, xMonstro3, yMonstro3);
        if(monstro4Vivo)
            objContexto.drawImage(imgMonstro4, xMonstro4, yMonstro4);

        //Checar moedas:
        if(xHeroi <= xMoeda1 + 45 && xHeroi >= xMoeda1 - 10 && yHeroi <= yMoeda1 + 45 && yHeroi >= yMoeda1 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda1 = 1000000;
        }
        if(xHeroi <= xMoeda2 + 45 && xHeroi >= xMoeda2 - 10 && yHeroi <= yMoeda2 + 45 && yHeroi >= yMoeda2 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda2 = 1000000;
        }
        if(xHeroi <= xMoeda3 + 45 && xHeroi >= xMoeda3 - 10 && yHeroi <= yMoeda3 + 45 && yHeroi >= yMoeda3 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda3 = 1000000;
        }
        if(xHeroi <= xMoeda4 + 45 && xHeroi >= xMoeda4 - 10 && yHeroi <= yMoeda4 + 45 && yHeroi >= yMoeda4 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda4 = 1000000;
        }
        if(xHeroi <= xMoeda5 + 45 && xHeroi >= xMoeda5 - 10 && yHeroi <= yMoeda5 + 45 && yHeroi >= yMoeda5 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda5 = 1000000;
        }

        objContexto.font = "40px Courier New";
        objContexto.fillStyle = "white";
        objContexto.drawImage(imgMoedaGrande, 30, 20);
        objContexto.fillText("x" + qtasMoedas, 120, 100);

        //Verificar se entrou na caverna:
        if(xHeroi <= xCaverna + 210 && xHeroi >= xCaverna - 20 && yHeroi <= ycaverna + 175 && yHeroi >= ycaverna + 29)
        {
            nivel = 2;
            xHeroi = 120;
            yHeroi = 250;
            AtualizaTela();
        }

        if(!modoNormal)
        {
            //Básico:
            objContexto.drawImage(imgRetangulo, 220, 200);
            if(meuTurno)
                objContexto.drawImage(imgSeta, xSeta, ySeta);
            objContexto.drawImage(imgCoracao, 712, 210);
            objContexto.font = "15px Courier New";
            objContexto.fillStyle = "white";
            objContexto.fillText("Use [Z] para selecionar", 740, 590);

            //Vida e Poções:
            objContexto.font = "40px Courier New";
            objContexto.fillStyle = "white";
            objContexto.fillText("PV:" + vidaEu, 770, 500);
            objContexto.fillText("(x" + qtasPocoes +")", 1250, 300);
            if(vidaEu <= 0)
            {
                vidaEu = 0;
                objContexto.drawImage(imgMorte, 0, 0);
                objContexto.font = "100px Fantasy";
                objContexto.fillStyle = "black";
                objContexto.fillText("VOCÊ MORREU!", 500, 200);
                objContexto.drawImage(imgSkull, 580, 250);

                setTimeout(function()
                {
                    location.reload();
                }, 10000);
            }

            if(vidaEu > 0)
            {
                //Exibição da vida do monstro:
                if(qualMonstro == "monstro1")
                    objContexto.fillText("PV Monstro:" + vidaMonstro1, 690, 535);
                if(qualMonstro == "monstro2")
                    objContexto.fillText("PV Monstro:" + vidaMonstro2, 690, 535);
                if(qualMonstro == "monstro3")
                    objContexto.fillText("PV Monstro:" + vidaMonstro3, 690, 535);
                if(qualMonstro == "monstro4")
                    objContexto.fillText("PV Monstro:" + vidaMonstro4, 690, 535);
            }
        }
    }
    if(nivel == 2)
    {
        xMonstro1 = 1000000000;
        xMonstro2 = 1000000000;
        xMonstro3 = 1000000000;
        xMonstro4 = 1000000000;

        objContexto.drawImage(imgFundo,0,0);
        objContexto.drawImage(imgCave, xCaverna, ycaverna);
        objContexto.drawImage(imgHeroi, xHeroi, yHeroi);
        objContexto.drawImage(imgMoeda, xMoeda6, yMoeda6);
        objContexto.drawImage(imgMoeda, xMoeda7, yMoeda7);
        objContexto.drawImage(imgMoeda, xMoeda8, yMoeda8);
        objContexto.drawImage(imgMoeda, xMoeda9, yMoeda9);
        objContexto.drawImage(imgMoeda, xMoeda10, yMoeda10);

        //Checar vidas:
        if(monstro5Vivo)
            objContexto.drawImage(imgMonstro5, xMonstro5, yMonstro5);
        if(monstro6Vivo)
            objContexto.drawImage(imgMonstro6, xMonstro6, yMonstro6);
        if(monstro7Vivo)
            objContexto.drawImage(imgMonstro7, xMonstro7, yMonstro7);
        if(monstro8Vivo)
            objContexto.drawImage(imgMonstro8, xMonstro8, yMonstro8);

        //Checar moedas:
        if(xHeroi <= xMoeda6 + 45 && xHeroi >= xMoeda6 - 10 && yHeroi <= yMoeda6 + 45 && yHeroi >= yMoeda6 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda6 = 1000000;
        }
        if(xHeroi <= xMoeda7 + 45 && xHeroi >= xMoeda7 - 10 && yHeroi <= yMoeda7 + 45 && yHeroi >= yMoeda7 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda7 = 1000000;
        }
        if(xHeroi <= xMoeda8 + 45 && xHeroi >= xMoeda8 - 10 && yHeroi <= yMoeda8 + 45 && yHeroi >= yMoeda8 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda8 = 1000000;
        }
        if(xHeroi <= xMoeda9 + 45 && xHeroi >= xMoeda9 - 10 && yHeroi <= yMoeda9 + 45 && yHeroi >= yMoeda9 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda9 = 1000000;
        }
        if(xHeroi <= xMoeda10 + 45 && xHeroi >= xMoeda10 - 10 && yHeroi <= yMoeda10 + 45 && yHeroi >= yMoeda10 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda10 = 1000000;
        }

        objContexto.font = "40px Courier New";
        objContexto.fillStyle = "white";
        objContexto.drawImage(imgMoedaGrande, 30, 20);
        objContexto.fillText("x" + qtasMoedas, 120, 100);

        //Verificar se entrou na caverna:
        if(xHeroi <= xCaverna + 210 && xHeroi >= xCaverna - 20 && yHeroi <= ycaverna + 175 && yHeroi >= ycaverna + 29)
        {
            nivel = 3;
            xHeroi = 120;
            yHeroi = 250;
            AtualizaTela();
        }

        if(!modoNormal)
        {
            //Básico:
            objContexto.drawImage(imgRetangulo, 220, 200);
            if(meuTurno)
                objContexto.drawImage(imgSeta, xSeta, ySeta);
            objContexto.drawImage(imgCoracao, 712, 210);
            objContexto.font = "15px Courier New";
            objContexto.fillStyle = "white";
            objContexto.fillText("Use [Z] para selecionar", 740, 590);

            //Vida e Poções:
            objContexto.font = "40px Courier New";
            objContexto.fillStyle = "white";
            objContexto.fillText("PV:" + vidaEu, 770, 500);
            objContexto.fillText("(x" + qtasPocoes +")", 1250, 300);
            if(vidaEu <= 0)
            {
                vidaEu = 0;
                objContexto.drawImage(imgMorte, 0, 0);
                objContexto.font = "100px Fantasy";
                objContexto.fillStyle = "black";
                objContexto.fillText("VOCÊ MORREU!", 500, 200);
                objContexto.drawImage(imgSkull, 580, 250);

                setTimeout(function()
                {
                    location.reload();
                }, 10000);
            }

            if(vidaEu > 0)
            {
                if(qualMonstro == "monstro5")
                    objContexto.fillText("PV Monstro:" + vidaMonstro5, 690, 535);
                if(qualMonstro == "monstro6")
                    objContexto.fillText("PV Monstro:" + vidaMonstro6, 690, 535);
                if(qualMonstro == "monstro7")
                    objContexto.fillText("PV Monstro:" + vidaMonstro7, 690, 535);
                if(qualMonstro == "monstro8")
                    objContexto.fillText("PV Monstro:" + vidaMonstro8, 690, 535);
            }
        }
    }
    if(nivel == 3)
    {
        xMonstro5 = 1000000000;
        xMonstro6 = 1000000000;
        xMonstro7 = 1000000000;
        xMonstro8 = 1000000000;

        objContexto.drawImage(imgFundo,0,0);
        objContexto.drawImage(imgCave, xCaverna, ycaverna);
        objContexto.drawImage(imgHeroi, xHeroi, yHeroi);
		objContexto.drawImage(imgMoeda, xMoeda11, yMoeda11);
        objContexto.drawImage(imgMoeda, xMoeda12, yMoeda12);
        objContexto.drawImage(imgMoeda, xMoeda13, yMoeda13);
        objContexto.drawImage(imgMoeda, xMoeda14, yMoeda14);
        objContexto.drawImage(imgMoeda, xMoeda15, yMoeda15);

        //Checar vidas:
        if(monstro9Vivo)
            objContexto.drawImage(imgMonstro9, xMonstro9, yMonstro9);
        if(monstro10Vivo)
            objContexto.drawImage(imgMonstro10, xMonstro10, yMonstro10);
        if(monstro11Vivo)
            objContexto.drawImage(imgMonstro11, xMonstro11, yMonstro11);
        if(monstro12Vivo)
            objContexto.drawImage(imgMonstro12, xMonstro12, yMonstro12);

        //Checar moedas:
        if(xHeroi <= xMoeda11 + 45 && xHeroi >= xMoeda11 - 10 && yHeroi <= yMoeda11 + 45 && yHeroi >= yMoeda11 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda11 = 1000000;
        }
        if(xHeroi <= xMoeda12 + 45 && xHeroi >= xMoeda12 - 10 && yHeroi <= yMoeda12 + 45 && yHeroi >= yMoeda12 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda12 = 1000000;
        }
        if(xHeroi <= xMoeda13 + 45 && xHeroi >= xMoeda13 - 10 && yHeroi <= yMoeda13 + 45 && yHeroi >= yMoeda13 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda13 = 1000000;
        }
        if(xHeroi <= xMoeda14 + 45 && xHeroi >= xMoeda14 - 10 && yHeroi <= yMoeda14 + 45 && yHeroi >= yMoeda14 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda14 = 1000000;
        }
        if(xHeroi <= xMoeda15 + 45 && xHeroi >= xMoeda15 - 10 && yHeroi <= yMoeda15 + 45 && yHeroi >= yMoeda15 - 10)
        {
            qtasMoedas = qtasMoedas + 1;
            yMoeda15 = 1000000;
        }


        objContexto.font = "40px Courier New";
        objContexto.fillStyle = "white";
        objContexto.drawImage(imgMoedaGrande, 30, 20);
        objContexto.fillText("x" + qtasMoedas, 120, 100);

        //Verificar se entrou na caverna:
        if(xHeroi <= xCaverna + 210 && xHeroi >= xCaverna - 20 && yHeroi <= ycaverna + 175 && yHeroi >= ycaverna + 29)
        {
            nivel = 4;
            xHeroi = 120;
            yHeroi = 250;
            AtualizaTela();
        }

        if(!modoNormal)
        {
            //Básico:
            objContexto.drawImage(imgRetangulo, 220, 200);
            if(meuTurno)
                objContexto.drawImage(imgSeta, xSeta, ySeta);
            objContexto.drawImage(imgCoracao, 712, 210);
            objContexto.font = "15px Courier New";
            objContexto.fillStyle = "white";
            objContexto.fillText("Use [Z] para selecionar", 740, 590);

            //Vida e Poções:
            objContexto.font = "40px Courier New";
            objContexto.fillStyle = "white";
            objContexto.fillText("PV:" + vidaEu, 770, 500);
            objContexto.fillText("(x" + qtasPocoes +")", 1250, 300);
            if(vidaEu <= 0)
            {
                vidaEu = 0;
                objContexto.drawImage(imgMorte, 0, 0);
                objContexto.font = "100px Fantasy";
                objContexto.fillStyle = "black";
                objContexto.fillText("VOCÊ MORREU!", 500, 200);
                objContexto.drawImage(imgSkull, 580, 250);

                setTimeout(function()
                {
                    location.reload();
                }, 10000);
            }

            if(vidaEu > 0)
            {
                if(qualMonstro == "monstro9")
                    objContexto.fillText("PV Monstro:" + vidaMonstro9, 690, 535);
                if(qualMonstro == "monstro10")
                    objContexto.fillText("PV Monstro:" + vidaMonstro10, 690, 535);
                if(qualMonstro == "monstro11")
                    objContexto.fillText("PV Monstro:" + vidaMonstro11, 690, 535);
                if(qualMonstro == "monstro12")
                    objContexto.fillText("PV Monstro:" + vidaMonstro12, 690, 535);
            }
        }
    }
    if(nivel == 4)
    {
        xMonstro9 = 1000000000;
        xMonstro10 = 1000000000;
        xMonstro11 = 1000000000;
        xMonstro12 = 1000000000;

        objContexto.drawImage(imgFundo,0,0);
        objContexto.drawImage(imgHeroi, xHeroi, yHeroi);

        objContexto.font = "40px Courier New";
        objContexto.fillStyle = "white";
        objContexto.drawImage(imgMoedaGrande, 30, 20);
        objContexto.fillText("x" + qtasMoedas, 120, 100);

        //Checar vidas:
        if(monstroBossVivo)
            objContexto.drawImage(imgMonstroBoss, xMonstroBoss, yMonstroBoss);
        else
        {
        	modoNormal = true;
			objContexto.drawImage(imgMorte, 0, 0);
        	objContexto.font = "100px Fantasy";
        	objContexto.fillStyle = "black";
        	objContexto.fillText("VOCÊ VENCEU!", 550, 400);
        	objContexto.font = "30px Fantasy";
        	objContexto.fillStyle = "white";
        	objContexto.fillText("Você encontra um sinalizador no estômago do monstro derrotado e chama ajuda...", 340, 150);

            setTimeout(function()
            {
                location.reload();
            }, 15000);
        }

        if(!modoNormal)
        {
        	if(qualMonstro != "nenhum")
        	{
	            //Básico:
	            objContexto.drawImage(imgRetangulo, 220, 200);
	            if(meuTurno)
	                objContexto.drawImage(imgSeta, xSeta, ySeta);
	            objContexto.drawImage(imgCoracao, 712, 210);
	            objContexto.font = "15px Courier New";
	            objContexto.fillStyle = "white";
	            objContexto.fillText("Use [Z] para selecionar", 740, 590);

	            //Vida e Poções:
	            objContexto.font = "40px Courier New";
	            objContexto.fillStyle = "white";
	            objContexto.fillText("PV:" + vidaEu, 770, 500);
	            objContexto.fillText("(x" + qtasPocoes +")", 1250, 300);
	            if(vidaEu <= 0)
	            {
	                vidaEu = 0;
	                objContexto.drawImage(imgMorte, 0, 0);
	                objContexto.font = "100px Fantasy";
	                objContexto.fillStyle = "black";
	                objContexto.fillText("VOCÊ MORREU!", 500, 200);
	                objContexto.drawImage(imgSkull, 580, 250);

	                setTimeout(function()
	                {
	                    location.reload();
	                }, 10000);
	            }

	            if(vidaEu > 0)
	            {
	                if(qualMonstro == "monstroBoss")
	                    objContexto.fillText("PV Monstro:" + vidaMonstroBoss, 690, 535);
	            }
        	}
        	else
        	{
        		objContexto.font = "30px Courier New";
	            objContexto.fillStyle = "white";
        		objContexto.drawImage(imgRetangulo, 220, 200);
        		objContexto.drawImage(imgCoracao, 712, 210);
        		objContexto.fillText("O BOSS NÃO QUER", 710, 500);
        		objContexto.fillText("LUTAR COM VOCÊ.", 714, 530);

        		setTimeout(function()
        		{
        			objContexto.drawImage(imgMorte, 0, 0);
	            	objContexto.font = "100px Fantasy";
	            	objContexto.fillStyle = "black";
	            	objContexto.fillText("VOCÊ VENCEU!", 500, 200);
	            	objContexto.font = "30px Fantasy";
	            	objContexto.fillStyle = "white";
	            	objContexto.fillText("Mas morreu de fome na floresta.", 580, 250);
	            	objContexto.drawImage(imgSkull, 580, 280);
	            }, 8000);

	            setTimeout(function()
            	{
                	location.reload();
            	}, 15000);
        	}
        }
    }
}

//Funções do Monstro1:
setInterval(function movimentoDoMonstro1()
{
    if(nivel == 1)
    {
        if(modoNormal)
        {
            if(yMonstro1 > 30)
            {
                if(monstro1ParaCima)
                {
                    yMonstro1 = yMonstro1 - 10;
                    AtualizaTela();
                }
                else
                {
                    monstro1ParaCima = false;

                    if(yMonstro1 < 580)
                    {
                        if(!monstro1ParaCima)
                        {
                            yMonstro1 = yMonstro1 + 10;
                            AtualizaTela();
                        }
                    }
                    else
                    {
                        monstro1ParaCima = true;
                    }
                }
            }
            else
            {
                monstro1ParaCima = false;

                if(yMonstro1 < 580)
                {
                    if(!monstro1ParaCima)
                    {
                        yMonstro1 = yMonstro1 + 10;
                        AtualizaTela();
                    }
                }
                else
                {
                    monstro1ParaCima = true;
                }
            }

            if(xHeroi <= xMonstro1 + 30 && xHeroi >= xMonstro1 - 30 && yHeroi <= yMonstro1 + 30 && yHeroi >= yMonstro1 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro1";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 10);

//Funções do Monstro2:
setInterval(function movimentoDoMonstro2()
{
    if(nivel == 1)
    {
        if(modoNormal)
        {
            if(yMonstro2 > 30)
            {
                if(monstro2ParaCima)
                {
                    yMonstro2 = yMonstro2 - 10;
                    AtualizaTela();
                }
                else
                {
                    monstro2ParaCima = false;

                    if(yMonstro2 < 580)
                    {
                        if(!monstro2ParaCima)
                        {
                            yMonstro2 = yMonstro2 + 10;
                            AtualizaTela();
                        }
                    }
                    else
                    {
                        monstro2ParaCima = true;
                    }
                }
            }
            else
            {
                monstro2ParaCima = false;

                if(yMonstro2 < 580)
                {
                    if(!monstro2ParaCima)
                    {
                        yMonstro2 = yMonstro2 + 10;
                        AtualizaTela();
                    }
                }
                else
                {
                    monstro2ParaCima = true;
                }
            }

            if(xHeroi <= xMonstro2 + 30 && xHeroi >= xMonstro2 - 30 && yHeroi <= yMonstro2 + 30 && yHeroi >= yMonstro2 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro2";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 10);

//Funções do Monstro3:
setInterval(function movimentoDoMonstro3()
{
    if(nivel == 1)
    {
        if(modoNormal)
        {
            if(yMonstro3 > 30)
            {
                if(monstro3ParaCima)
                {
                    yMonstro3 = yMonstro3 - 10;
                    AtualizaTela();
                }
                else
                {
                    monstro3ParaCima = false;

                    if(yMonstro3 < 580)
                    {
                        if(!monstro3ParaCima)
                        {
                            yMonstro3 = yMonstro3 + 10;
                            AtualizaTela();
                        }
                    }
                    else
                    {
                        monstro3ParaCima = true;
                    }
                }
            }
            else
            {
                monstro3ParaCima = false;

                if(yMonstro3 < 580)
                {
                    if(!monstro3ParaCima)
                    {
                        yMonstro3 = yMonstro3 + 10;
                        AtualizaTela();
                    }
                }
                else
                {
                    monstro3ParaCima = true;
                }
            }

            if(xHeroi <= xMonstro3 + 30 && xHeroi >= xMonstro3 - 30 && yHeroi <= yMonstro3 + 30 && yHeroi >= yMonstro3 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro3";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 20);

//Funções do Monstro4:
setInterval(function movimentoDoMonstro4()
{
    if(nivel == 1)
    {
        if(modoNormal)
        {
            if(direita)
            {
                xMonstro4 = xMonstro4 + 10;
                if(xMonstro4 == 1470)
                {
                    direita = false;
                    baixo = true;
                }
                AtualizaTela();
            }
            if(baixo)
            {
                yMonstro4 = yMonstro4 + 10;
                if(yMonstro4 == 390)
                {
                    baixo = false;
                    esquerda = true;
                }
                AtualizaTela();
            }
            if(esquerda)
            {
                xMonstro4 = xMonstro4 - 10;
                if(xMonstro4 == 1220)
                {
                    esquerda = false;
                    cima = true;
                }
                AtualizaTela();
            }
            if(cima)
            {
                yMonstro4 = yMonstro4 - 10;
                if(yMonstro4 == 220)
                {
                    cima = false;
                    direita = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro4 + 30 && xHeroi >= xMonstro4 - 30 && yHeroi <= yMonstro4 + 30 && yHeroi >= yMonstro4 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro4";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 10);

//Funções do Monstro5:
setInterval(function movimentoDoMonstro5()
{
    if(nivel == 2)
    {
        if(modoNormal)
        {
            if(direita5)
            {
                xMonstro5 = xMonstro5 + 10;
                if(xMonstro5 == 400)
                {
                    direita5 = false;
                    baixo5 = true;
                }
                AtualizaTela();
            }
            if(baixo5)
            {
                yMonstro5 = yMonstro5 + 10;
                if(yMonstro5 == 570)
                {
                    baixo5 = false;
                    esquerda5 = true;
                }
                AtualizaTela();
            }
            if(esquerda5)
            {
                xMonstro5 = xMonstro5 - 10;
                if(xMonstro5 == 200)
                {
                    esquerda5 = false;
                    cima5 = true;
                }
                AtualizaTela();
            }
            if(cima5)
            {
                yMonstro5 = yMonstro5 - 10;
                if(yMonstro5 == 40)
                {
                    cima5 = false;
                    direita5 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro5 + 30 && xHeroi >= xMonstro5 - 30 && yHeroi <= yMonstro5 + 30 && yHeroi >= yMonstro5 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro5";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 5);

//Funções do Monstro6:
setInterval(function movimentoDoMonstro6()
{
    if(nivel == 2)
    {
        if(modoNormal)
        {
            if(direita6)
            {
                xMonstro6 = xMonstro6 + 10;
                if(xMonstro6 == 800)
                {
                    direita6 = false;
                    baixo6 = true;
                }
                AtualizaTela();
            }
            if(baixo6)
            {
                yMonstro6 = yMonstro6 + 10;
                if(yMonstro6 == 260)
                {
                    baixo6 = false;
                    esquerda6 = true;
                }
                AtualizaTela();
            }
            if(esquerda6)
            {
                xMonstro6 = xMonstro6 - 10;
                if(xMonstro6 == 600)
                {
                    esquerda6 = false;
                    cima6 = true;
                }
                AtualizaTela();
            }
            if(cima6)
            {
                yMonstro6 = yMonstro6 - 10;
                if(yMonstro6 == 40)
                {
                    cima6 = false;
                    direita6 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro6 + 30 && xHeroi >= xMonstro6 - 30 && yHeroi <= yMonstro6 + 30 && yHeroi >= yMonstro6 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro6";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 7);

//Funções do Monstro7:
setInterval(function movimentoDoMonstro7()
{
    if(nivel == 2)
    {
        if(modoNormal)
        {
            if(direita7)
            {
                xMonstro7 = xMonstro7 + 10;
                if(xMonstro7 == 800)
                {
                    direita7 = false;
                    baixo7 = true;
                }
                AtualizaTela();
            }
            if(baixo7)
            {
                yMonstro7 = yMonstro7 + 10;
                if(yMonstro7 == 570)
                {
                    baixo7 = false;
                    esquerda7 = true;
                }
                AtualizaTela();
            }
            if(esquerda7)
            {
                xMonstro7 = xMonstro7 - 10;
                if(xMonstro7 == 600)
                {
                    esquerda7 = false;
                    cima7 = true;
                }
                AtualizaTela();
            }
            if(cima7)
            {
                yMonstro7 = yMonstro7 - 10;
                if(yMonstro7 == 290)
                {
                    cima7 = false;
                    direita7 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro7 + 30 && xHeroi >= xMonstro7 - 30 && yHeroi <= yMonstro7 + 30 && yHeroi >= yMonstro7 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro7";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 7);

//Funções do Monstro8:
setInterval(function movimentoDoMonstro8()
{
    if(nivel == 2)
    {
        if(modoNormal)
        {
            if(direita8)
            {
                xMonstro8 = xMonstro8 + 10;
                if(xMonstro8 == 1470)
                {
                    direita8 = false;
                    baixo8 = true;
                }
                AtualizaTela();
            }
            if(baixo8)
            {
                yMonstro8 = yMonstro8 + 10;
                if(yMonstro8 == 390)
                {
                    baixo8 = false;
                    esquerda8 = true;
                }
                AtualizaTela();
            }
            if(esquerda8)
            {
                xMonstro8 = xMonstro8 - 10;
                if(xMonstro8 == 1220)
                {
                    esquerda8 = false;
                    cima8 = true;
                }
                AtualizaTela();
            }
            if(cima8)
            {
                yMonstro8 = yMonstro8 - 10;
                if(yMonstro8 == 220)
                {
                    cima8 = false;
                    direita8 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro8 + 30 && xHeroi >= xMonstro8 - 30 && yHeroi <= yMonstro8 + 30 && yHeroi >= yMonstro8 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro8";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 10);

//Funções do Monstro9:
setInterval(function movimentoDoMonstro9()
{
    if(nivel == 3)
    {
        if(modoNormal)
        {
            if(direita9)
            {
                xMonstro9 = xMonstro9 + 10;
                if(xMonstro9 == 800)
                {
                    direita9 = false;
                    baixo9 = true;
                }
                AtualizaTela();
            }
            if(baixo9)
            {
                yMonstro9 = yMonstro9 + 10;
                if(yMonstro9 == 570)
                {
                    baixo9 = false;
                    esquerda9 = true;
                }
                AtualizaTela();
            }
            if(esquerda9)
            {
                xMonstro9 = xMonstro9 - 10;
                if(xMonstro9 == 200)
                {
                    esquerda9 = false;
                    cima9 = true;
                }
                AtualizaTela();
            }
            if(cima9)
            {
                yMonstro9 = yMonstro9 - 10;
                if(yMonstro9 == 40)
                {
                    cima9 = false;
                    direita9 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro9 + 30 && xHeroi >= xMonstro9 - 30 && yHeroi <= yMonstro9 + 30 && yHeroi >= yMonstro9 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro9";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 4);

//Funções do Monstro10:
setInterval(function movimentoDoMonstro10()
{
    if(nivel == 3)
    {
        if(modoNormal)
        {
            if(direita10)
            {
                xMonstro10 = xMonstro10 + 10;
                if(xMonstro10 == 500)
                {
                    direita10 = false;
                    baixo10 = true;
                }
                AtualizaTela();
            }
            if(baixo10)
            {
                yMonstro10 = yMonstro10 + 10;
                if(yMonstro10 == 540)
                {
                    baixo10 = false;
                    esquerda10 = true;
                }
                AtualizaTela();
            }
            if(esquerda10)
            {
                xMonstro10 = xMonstro10 - 10;
                if(xMonstro10 == 250)
                {
                    esquerda10 = false;
                    cima10 = true;
                }
                AtualizaTela();
            }
            if(cima10)
            {
                yMonstro10 = yMonstro10 - 10;
                if(yMonstro10 == 80)
                {
                    cima10 = false;
                    direita10 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro10 + 30 && xHeroi >= xMonstro10 - 30 && yHeroi <= yMonstro10 + 30 && yHeroi >= yMonstro10 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro10";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 7);

//Funções do Monstro11:
setInterval(function movimentoDoMonstro11()
{
    if(nivel == 3)
    {
        if(modoNormal)
        {
            if(direita11)
            {
                xMonstro11 = xMonstro11 + 10;
                if(xMonstro11 == 765)
                {
                    direita11 = false;
                    baixo11 = true;
                }
                AtualizaTela();
            }
            if(baixo11)
            {
                yMonstro11 = yMonstro11 + 10;
                if(yMonstro11 == 540)
                {
                    baixo11 = false;
                    esquerda11 = true;
                }
                AtualizaTela();
            }
            if(esquerda11)
            {
                xMonstro11 = xMonstro11 - 10;
                if(xMonstro11 == 515)
                {
                    esquerda11 = false;
                    cima11 = true;
                }
                AtualizaTela();
            }
            if(cima11)
            {
                yMonstro11 = yMonstro11 - 10;
                if(yMonstro11 == 80)
                {
                    cima11 = false;
                    direita11 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro11 + 30 && xHeroi >= xMonstro11 - 30 && yHeroi <= yMonstro11 + 30 && yHeroi >= yMonstro11 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro11";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 7);

//Funções do Monstro12:
setInterval(function movimentoDoMonstro12()
{
    if(nivel == 3)
    {
        if(modoNormal)
        {
            if(direita12)
            {
                xMonstro12 = xMonstro12 + 10;
                if(xMonstro12 == 1470)
                {
                    direita12 = false;
                    baixo12 = true;
                }
                AtualizaTela();
            }
            if(baixo12)
            {
                yMonstro12 = yMonstro12 + 10;
                if(yMonstro12 == 390)
                {
                    baixo12 = false;
                    esquerda12 = true;
                }
                AtualizaTela();
            }
            if(esquerda12)
            {
                xMonstro12 = xMonstro12 - 10;
                if(xMonstro12 == 1220)
                {
                    esquerda12 = false;
                    cima12 = true;
                }
                AtualizaTela();
            }
            if(cima12)
            {
                yMonstro12 = yMonstro12 - 10;
                if(yMonstro12 == 220)
                {
                    cima12 = false;
                    direita12 = true;
                }
                AtualizaTela();
            }
            if(xHeroi <= xMonstro12 + 30 && xHeroi >= xMonstro12 - 30 && yHeroi <= yMonstro12 + 30 && yHeroi >= yMonstro12 - 30)
            {
                modoNormal = false;
                qualMonstro = "monstro12";
                musicaPadrao.stop();
                musicaBatalha.play();
                AtualizaTela();
            }
        }
    }
}, 10);

//Funções do MonstroBoss:
function movimentoDoMonstroBoss()
{
	if(nivel == 4)
    {
        if(modoNormal)
        {
        	if(xMonstroBoss < xHeroi)
        	{
        		xMonstroBoss = xMonstroBoss + 3;
        		AtualizaTela();
        	}
        	if(xMonstroBoss > xHeroi)
        	{
        		xMonstroBoss = xMonstroBoss - 3;
        		AtualizaTela();
        	}
        	if(yMonstroBoss < yHeroi && yMonstroBoss < 518)
        	{
        		yMonstroBoss = yMonstroBoss + 3;
        		AtualizaTela();
        	}
        	if(yMonstroBoss > yHeroi)
        	{
        		yMonstroBoss = yMonstroBoss - 3;
        		AtualizaTela();
        	}

            if(xHeroi <= xMonstroBoss + 90 && xHeroi >= xMonstroBoss - 35 && yHeroi <= yMonstroBoss + 100 && yHeroi >= yMonstroBoss - 37)
            {
            	if(monstro1Vivo && monstro2Vivo && monstro3Vivo && monstro4Vivo && monstro5Vivo && monstro6Vivo && monstro7Vivo && monstro8Vivo && monstro9Vivo && monstro10Vivo && monstro11Vivo && monstro12Vivo)
            	{
            		  modoNormal = false;
	                qualMonstro = "nenhum";
	                musicaPadrao.stop();
	                musicaBoss.play();
	                AtualizaTela();
            	}
            	else
            	{
	                modoNormal = false;
	                qualMonstro = "monstroBoss";
	                musicaPadrao.stop();
	                musicaBoss.play();
	                AtualizaTela();
            	}
            }
        }
    }
}
setInterval("movimentoDoMonstroBoss()", velocidadeBoss);

//Funções de Direção do Coração:
function sortearDirecaoPadrao()
{
    if(vidaEu > 0)
    {
        quantasVezes = quantasVezes + 1;
        setTimeout(function()
        {
            if(!meuTurno)
            {
                direcaoCoracao = Math.floor(Math.random() * 4);
                objContexto.font = "40px Fantasy";
                objContexto.fillStyle = "purple";

                if(quantasVezes != 6)
                {
                    if(direcaoCoracao == 0)
                    {
                        objContexto.fillText("ESQUERDA", 762, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 500);
                    }
                    if(direcaoCoracao == 1)
                    {
                        objContexto.fillText("DIREITA", 774, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 500);
                    }
                    if(direcaoCoracao == 2)
                    {
                        objContexto.fillText("CIMA", 795, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 500);
                    }
                    if(direcaoCoracao == 3)
                    {
                        objContexto.fillText("BAIXO", 790, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 500);
                    }
                }
            }
        }, 500);
        AtualizaTela();

        if(quantasVezes >= 6)
        {
            quantasVezes = 0;
            meuTurno = true;
            AtualizaTela();
        }
    }
}
function sortearDirecaoInvertida()
{
    if(vidaEu > 0)
    {
        quantasVezes = quantasVezes + 1;
        setTimeout(function()
        {
            if(!meuTurno)
            {
                direcaoCoracao = Math.floor(Math.random() * 4);
                objContexto.font = "40px Fantasy";
                objContexto.fillStyle = "yellow";

                if(quantasVezes != 6)
                {
                    if(direcaoCoracao == 1)
                    {
                        objContexto.fillText("ESQUERDA", 762, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 0)
                    {
                        objContexto.fillText("DIREITA", 774, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 3)
                    {
                        objContexto.fillText("CIMA", 795, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 2)
                    {
                        objContexto.fillText("BAIXO", 790, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                }
            }
        }, 300);
        AtualizaTela();

        if(quantasVezes >= 6)
        {
            quantasVezes = 0;
            meuTurno = true;
            AtualizaTela();
        }
    }
}
function sortearDirecaoTrocada()
{
    if(vidaEu > 0)
    {
        quantasVezes = quantasVezes + 1;
        setTimeout(function()
        {
            if(!meuTurno)
            {
                direcaoCoracao = Math.floor(Math.random() * 4);
                objContexto.font = "40px Fantasy";
                objContexto.fillStyle = "darkblue";

                if(quantasVezes != 6)
                {
                    if(direcaoCoracao == 3)
                    {
                        objContexto.fillText("ESQUERDA", 762, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 2)
                    {
                        objContexto.fillText("DIREITA", 774, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 1)
                    {
                        objContexto.fillText("CIMA", 795, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 0)
                    {
                        objContexto.fillText("BAIXO", 790, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                }
            }
        }, 150);
        AtualizaTela();

        if(quantasVezes >= 6)
        {
            quantasVezes = 0;
            meuTurno = true;
            AtualizaTela();
        }
    }
}
function sortearDirecaoDificil()
{
    if(vidaEu > 0)
    {
        quantasVezes = quantasVezes + 1;
        setTimeout(function()
        {
            if(!meuTurno)
            {
                direcaoCoracao = Math.floor(Math.random() * 4);
                objContexto.font = "40px Fantasy";
                objContexto.fillStyle = "darkgreen";

                if(quantasVezes != 6)
                {
                    if(direcaoCoracao == 0)
                    {
                        objContexto.fillText("ESQUERDA", 762, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 2)
                    {
                        objContexto.fillText("DIREITA", 774, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 3)
                    {
                        objContexto.fillText("CIMA", 795, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                    if(direcaoCoracao == 1)
                    {
                        objContexto.fillText("BAIXO", 790, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 300);
                    }
                }
            }
        }, 150);
        AtualizaTela();

        if(quantasVezes >= 6)
        {
            quantasVezes = 0;
            meuTurno = true;
            AtualizaTela();
        }
    }
}
function sortearDirecaoBoss()
{
    if(vidaEu > 0)
    {
        quantasVezes = quantasVezes + 1;
        setTimeout(function()
        {
            if(!meuTurno)
            {
                direcaoCoracao = Math.floor(Math.random() * 4);
                objContexto.font = "40px Fantasy";
                objContexto.fillStyle = "black";

                if(quantasVezes != 11)
                {
                    if(direcaoCoracao == 0)
                    {
                        objContexto.fillText("ESQUERDA", 762, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 50);
                    }
                    if(direcaoCoracao == 2)
                    {
                        objContexto.fillText("DIREITA", 774, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 50);
                    }
                    if(direcaoCoracao == 3)
                    {
                        objContexto.fillText("CIMA", 795, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 50);
                    }
                    if(direcaoCoracao == 1)
                    {
                        objContexto.fillText("BAIXO", 790, 345);

                        setTimeout(function()
                        {
                            AtualizaTela();
                        }, 50);
                    }
                }
            }
        }, 100);
        AtualizaTela();

        if(quantasVezes >= 11)
        {
            quantasVezes = 0;
            meuTurno = true;
            AtualizaTela();
        }
    }
}

//Funções de Ataque:
function atacar1()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro1 = vidaMonstro1 - quantoDano;
    AtualizaTela();

    if(vidaMonstro1 <= 0)
    {
        vidaMonstro1 = 0;
        xMonstro1 = 10000000000;
        monstro1Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoPadrao();
    }
}
function atacar2()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro2 = vidaMonstro2 - quantoDano;
    AtualizaTela();

    if(vidaMonstro2 <= 0)
    {
        vidaMonstro2 = 0;
        xMonstro2 = 10000000000;
        monstro2Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoPadrao();
    }
}
function atacar3()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro3 = vidaMonstro3 - quantoDano;
    AtualizaTela();

    if(vidaMonstro3 <= 0)
    {
        vidaMonstro3 = 0;
        xMonstro3 = 10000000000;
        monstro3Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoInvertida();
    }
}
function atacar4()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro4 = vidaMonstro4 - quantoDano;
    AtualizaTela();

    if(vidaMonstro4 <= 0)
    {
        vidaMonstro4 = 0;
        xMonstro4 = 10000000000;
        monstro4Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoInvertida();
    }
}
function atacar5()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro5 = vidaMonstro5 - quantoDano;
    AtualizaTela();

    if(vidaMonstro5 <= 0)
    {
        vidaMonstro5 = 0;
        xMonstro5 = 10000000000;
        monstro5Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoInvertida();
    }
}
function atacar6()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro6 = vidaMonstro6 - quantoDano;
    AtualizaTela();

    if(vidaMonstro6 <= 0)
    {
        vidaMonstro6 = 0;
        xMonstro6 = 10000000000;
        monstro6Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoInvertida();
    }
}
function atacar7()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro7 = vidaMonstro7 - quantoDano;
    AtualizaTela();

    if(vidaMonstro7 <= 0)
    {
        vidaMonstro7 = 0;
        xMonstro7 = 10000000000;
        monstro7Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoInvertida();
    }
}
function atacar8()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro8 = vidaMonstro8 - quantoDano;
    AtualizaTela();

    if(vidaMonstro8 <= 0)
    {
        vidaMonstro8 = 0;
        xMonstro8 = 10000000000;
        monstro8Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoTrocada();
    }
}
function atacar9()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro9 = vidaMonstro9 - quantoDano;
    AtualizaTela();

    if(vidaMonstro9 <= 0)
    {
        vidaMonstro9 = 0;
        xMonstro9 = 10000000000;
        monstro9Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoTrocada();
    }
}
function atacar10()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro10 = vidaMonstro10 - quantoDano;
    AtualizaTela();

    if(vidaMonstro10 <= 0)
    {
        vidaMonstro10 = 0;
        xMonstro10 = 10000000000;
        monstro10Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoTrocada();
    }
}
function atacar11()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro11 = vidaMonstro11 - quantoDano;
    AtualizaTela();

    if(vidaMonstro11 <= 0)
    {
        vidaMonstro11 = 0;
        xMonstro11 = 10000000000;
        monstro11Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoTrocada();
    }
}
function atacar12()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstro12 = vidaMonstro12 - quantoDano;
    AtualizaTela();

    if(vidaMonstro12 <= 0)
    {
        vidaMonstro12 = 0;
        xMonstro12 = 10000000000;
        monstro12Vivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBatalha.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoDificil();
    }
}
function atacarBoss()
{
    var quantoDano = 0;
    while(quantoDano < 10 || quantoDano > 20)
    {
        quantoDano = Math.floor(Math.random() * 100);
    }
    vidaMonstroBoss = vidaMonstroBoss - quantoDano;
    AtualizaTela();

    if(vidaMonstroBoss <= 0)
    {
        vidaMonstroBoss = 0;
        xMonstroBoss = 10000000000;
        monstroBossVivo = false; //Deletar monstro
        modoNormal = true;
        qualMonstro = "";
        musicaBoss.stop();
        musicaPadrao.play();
        AtualizaTela();
    }
    else
    {
        meuTurno = false;
        sortearDirecaoBoss();
    }
}

//Funções de Item:
function usarItem()
{
    if(qtasPocoes >= 1)
    {
        if(vidaEu == 90)
        {
            vidaEu = 100;
            qtasPocoes = qtasPocoes - 1;
            AtualizaTela();

            meuTurno = false;
            if(qualMonstro == "monstro1" || qualMonstro == "monstro2")
                sortearDirecaoPadrao();
            if(qualMonstro == "monstro3" || qualMonstro == "monstro4" || qualMonstro == "monstro5" || qualMonstro == "monstro6" || qualMonstro == "monstro7")
                sortearDirecaoInvertida();
            if(qualMonstro == "monstro8" || qualMonstro == "monstro9" || qualMonstro == "monstro10" || qualMonstro == "monstro11")
                sortearDirecaoTrocada();
            if(qualMonstro == "monstro12")
                sortearDirecaoDificil();
            if(qualMonstro == "monstroBoss")
                sortearDirecaoBoss();
        }
        else
        {
            if(vidaEu == 100)
            {
                //Não faz nada.
            }
            else
            {
                vidaEu = vidaEu + 20;
                qtasPocoes = qtasPocoes - 1;
                AtualizaTela();

                meuTurno = false;
                if(qualMonstro == "monstro1" || qualMonstro == "monstro2")
                    sortearDirecaoPadrao();
                if(qualMonstro == "monstro3" || qualMonstro == "monstro4" || qualMonstro == "monstro5" || qualMonstro == "monstro6" || qualMonstro == "monstro7")
                    sortearDirecaoInvertida();
                if(qualMonstro == "monstro8" || qualMonstro == "monstro9" || qualMonstro == "monstro10" || qualMonstro == "monstro11")
                    sortearDirecaoTrocada();
                if(qualMonstro == "monstro12")
                	sortearDirecaoDificil();
                if(qualMonstro == "monstroBoss")
                sortearDirecaoBoss();
            }
        }
    }
}

//Funções de Movimento:
$(document).keydown(function(e)
{
    if(modoNormal)
    {
        switch(e.which)
        {
            case 37: //esq
            if(xHeroi > 50)
                xHeroi = xHeroi - 10;
            AtualizaTela();
            break;

            case 38: //cima
            if(yHeroi > 30)
                yHeroi = yHeroi - 10;
            AtualizaTela();
            break;

            case 39: //dir
            if(xHeroi < 1510)
                xHeroi = xHeroi + 10;
            AtualizaTela();
            break;

            case 40: //baixo
            if(yHeroi < 580)
                yHeroi = yHeroi + 10;
            AtualizaTela();
            break;

            default: return;
        }
        e.preventDefault();
    }
    else
    {
        switch(e.which)
        {
            case 37: //esq
            if(meuTurno)
            {
                xSeta = 262;
                ySeta = 570;
                AtualizaTela();
            }
            else
            {
                if(direcaoCoracao != 0)
                	if(qualMonstro != "monstroBoss")
                    	vidaEu = vidaEu - 10;
                    else
                    	vidaEu = vidaEu - 20;

                if(vidaEu <= 0)
                    AtualizaTela();
                if(qualMonstro == "monstro1" || qualMonstro == "monstro2")
                    sortearDirecaoPadrao();
                if(qualMonstro == "monstro3" || qualMonstro == "monstro4" || qualMonstro == "monstro5" || qualMonstro == "monstro6" || qualMonstro == "monstro7")
                    sortearDirecaoInvertida();
                if(qualMonstro == "monstro8" || qualMonstro == "monstro9" || qualMonstro == "monstro10" || qualMonstro == "monstro11")
                    sortearDirecaoTrocada();
                if(qualMonstro == "monstro12")
                	sortearDirecaoDificil();
                if(qualMonstro == "monstroBoss")
                sortearDirecaoBoss();
            }
            break;

            case 39: //dir
            if(meuTurno)
            {
                xSeta = 1025;
                ySeta = 570;
                AtualizaTela();
            }
            else
            {
                if(direcaoCoracao != 1)
                    if(qualMonstro != "monstroBoss")
                    	vidaEu = vidaEu - 10;
                    else
                    	vidaEu = vidaEu - 20;

                if(vidaEu <= 0)
                    AtualizaTela();
                if(qualMonstro == "monstro1" || qualMonstro == "monstro2")
                    sortearDirecaoPadrao();
                if(qualMonstro == "monstro3" || qualMonstro == "monstro4" || qualMonstro == "monstro5" || qualMonstro == "monstro6" || qualMonstro == "monstro7")
                    sortearDirecaoInvertida();
                if(qualMonstro == "monstro8" || qualMonstro == "monstro9" || qualMonstro == "monstro10" || qualMonstro == "monstro11")
                    sortearDirecaoTrocada();
                if(qualMonstro == "monstro12")
                	sortearDirecaoDificil();
                if(qualMonstro == "monstroBoss")
                sortearDirecaoBoss();
            }
            break;

            case 38: //cima
            if(!meuTurno)
            {
                if(direcaoCoracao != 2)
                    if(qualMonstro != "monstroBoss")
                    	vidaEu = vidaEu - 10;
                    else
                    	vidaEu = vidaEu - 20;

                if(vidaEu <= 0)
                    AtualizaTela();
                if(qualMonstro == "monstro1" || qualMonstro == "monstro2")
                    sortearDirecaoPadrao();
                if(qualMonstro == "monstro3" || qualMonstro == "monstro4" || qualMonstro == "monstro5" || qualMonstro == "monstro6" || qualMonstro == "monstro7")
                    sortearDirecaoInvertida();
                if(qualMonstro == "monstro8" || qualMonstro == "monstro9" || qualMonstro == "monstro10" || qualMonstro == "monstro11")
                    sortearDirecaoTrocada();
                if(qualMonstro == "monstro12")
                	sortearDirecaoDificil();
                if(qualMonstro == "monstroBoss")
                sortearDirecaoBoss();
            }
            break;

            case 40: //baixo
            if(!meuTurno)
            {
                if(direcaoCoracao != 3)
                    if(qualMonstro != "monstroBoss")
                    	vidaEu = vidaEu - 10;
                    else
                    	vidaEu = vidaEu - 20;

                if(vidaEu <= 0)
                    AtualizaTela();
                if(qualMonstro == "monstro1" || qualMonstro == "monstro2")
                    sortearDirecaoPadrao();
                if(qualMonstro == "monstro3" || qualMonstro == "monstro4" || qualMonstro == "monstro5" || qualMonstro == "monstro6" || qualMonstro == "monstro7")
                    sortearDirecaoInvertida();
                if(qualMonstro == "monstro8" || qualMonstro == "monstro9" || qualMonstro == "monstro10" || qualMonstro == "monstro11")
                    sortearDirecaoTrocada();
                if(qualMonstro == "monstro12")
                	sortearDirecaoDificil();
                if(qualMonstro == "monstroBoss")
                sortearDirecaoBoss();
            }
            break;

            case 90: //letra z
            if(meuTurno)
            {
                if(xSeta == 1025)
                {
                    usarItem();
                }
                else
                {
                    if(qualMonstro == "monstro1")
                        atacar1();
                    if(qualMonstro == "monstro2")
                        atacar2();
                    if(qualMonstro == "monstro3")
                        atacar3();
                    if(qualMonstro == "monstro4")
                        atacar4();
                    if(qualMonstro == "monstro5")
                        atacar5();
                    if(qualMonstro == "monstro6")
                        atacar6();
                    if(qualMonstro == "monstro7")
                        atacar7();
                    if(qualMonstro == "monstro8")
                        atacar8();
                    if(qualMonstro == "monstro9")
                        atacar9();
                    if(qualMonstro == "monstro10")
                        atacar10();
                    if(qualMonstro == "monstro11")
                        atacar11();
                    if(qualMonstro == "monstro12")
                        atacar12();
                    if(qualMonstro == "monstroBoss")
                    	atacarBoss();
                }
            }

            default: return;
        }
        e.preventDefault();
    }
});
