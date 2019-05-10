var minunts = 0;
// Matriz com as Musicas e os Nomes Delas
var musicas = [
    { name: "Neovaii - Take It Back", src: "Biblioteca/musica1.mp3", imagem: "fundo/imagem1.jpg" },
    { name: "Stephen - Crossfire", src: "Biblioteca/musica2.mp3", imagem: "fundo/imagem2.jpg" },
    { name: "AWAY & Midoca ", src: "Biblioteca/musica3.mp3", imagem: "fundo/imagem3.png" },
    { name: "Lux Holm & Glaceo ", src: "Biblioteca/musica4.mp3", imagem: "fundo/imagem4.jpg" }
];
var r =0;
//FUNÇÃO PARA TROCAR A MUSICA OU VOLTAR
function troca(number) {
    var audio = document.getElementById("audio")
    audio.src = musicas[number].src;
    audio.autoplay
    document.getElementById("imagem").src = musicas[number].imagem;
    document.getElementById("tocada").innerHTML = musicas[number].name;
    conversao()
        current()
    
}
// BOTAO PARA PROXIMA MUSICA
var i = 0

function next() {
    
    i++
    minunts = 0
    document.getElementById("playpause").innerHTML = playpause[0].src
    f = 0
   
        if (i < 0) {
            i = 3;
        }
        if (i > 3) {
            i = 0
        }
        troca(i)
    
}
// BOTAO PARA RETORNAR A MUSICA
function turn() {
    i--
    minunts = 0
    if (i < 0) {
        i = 3;
        document.getElementById("playpause").innerHTML = playpause[0].src
    }
    if (i > 3) {
        i = 0
        
    }
    troca(i)
}
// PLAY E PAUSE
var playpause = [{ src: "<i class='material-icons'>pause</i>" },
{ src: "<i class='material-icons'>play_arrow</i>" }]
var f = 1
function play() {
    f++
    if (f % 2 == 0) {
        document.getElementById("playpause").innerHTML = playpause[0].src
        document.getElementById("audio").play()
        conversao()
        current()
    }
    else if (f % 2 != 0) {
        document.getElementById("playpause").innerHTML = playpause[1].src
        document.getElementById("audio").pause()
        
    }
}
// BOTAO DE STOP
function stop() {
    document.getElementById("audio").load();
    document.getElementById("audio").pause();
    document.getElementById("playpause").innerHTML = playpause[1].src
    f = 1
    document.getElementById("progress_bar").style.width = 0+"%"
}

// COMANDO DE LOOP
L = 1;
var r=0;    
function loop() {
    L++
    if (L % 2 == 0) {
        document.getElementById("audio").loop = true;
        document.getElementById('reload').style.backgroundColor = "#373737";
        document.getElementById('reload').style.borderRadius = '100px';
        var minunts = 0
        r=1
    }
    if (L % 2 != 0) {
        document.getElementById("audio").loop = false;
        document.getElementById('reload').style.backgroundColor = 'transparent'
        r=0;
    }
}
// CRIAR PLAYLISTS
m = 1
function creat() {
    m++
    if (m % 2 == 0) {
        document.getElementById('playlist').style.display = "flex"
    }
    else if (m % 2 != 0) {
        document.getElementById('playlist').style.display = "none"
    }
}
g = 1
function playcreats() {
    g++
    if (g % 2 == 0) {
        document.getElementById('playlists').style.display = "flex"
    }
    else if (g % 2 != 0) {
        document.getElementById('playlists').style.display = "none"
    }
}
// BARRA DE PROGRESSO
var audio = document.getElementById("audio");

audio.addEventListener('timeupdate', function() {
    var duration = audio.duration;
    var current = audio.currentTime;
    document.getElementById("progress_bar").style.width = ((current / duration) * 100)  + "%"
});

// TEMPO QUE FALTA PARA A MUSICA CORRER
function conversao() {
    setInterval(function() {

        teste = (document.getElementById('audio').duration - document.getElementById('audio').currentTime);
        var minutos = (Math.trunc(teste / 60));
        var segundos = Math.trunc(teste % 60);
        if(segundos < 10){
            segundos = "0"+segundos
        }
        var xixi = (minutos + ":" + segundos);

        document.getElementById('time2').innerHTML = xixi;
    }, 1000);

}

// TEMPO QUE A MUSICA PERCORREU
 function current(){
     var time;
    if (document.getElementById('audio').currentTime == 0){
        minunts = 0
    }
     setInterval(function(){
    current = document.getElementById('audio').currentTime
    time = current % 60
    if(time < 9){
        document.getElementById("time1").innerHTML = minunts+":0"+time.toFixed(0);
    }else{
    document.getElementById("time1").innerHTML = minunts+":"+time.toFixed(0);
}
    if (time >= 59){
        minunts += 1;
    }
    if(r==0){
        if(document.getElementById('audio').duration<=document.getElementById('audio').currentTime){
            next()
        }
    }else{
        minunts = 0
        time =0;
    }
    
 },1000);

 }
 function add1(){
     document.getElementById("msc1").innerHTML = "Neovaii Take It Back <br>"

 }
 function add2(){
    document.getElementById("msc2").innerHTML = "Stephen - Crossfire"
}
function add3(){
    document.getElementById("msc3").innerHTML = "AWAY & Midoca"
}
function add4(){
    document.getElementById("msc4").innerHTML = "Lux Holm & Glaceo"
}

 
