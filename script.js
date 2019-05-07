// Matriz com as Musicas e os Nomes Delas
var musicas = [
    { name: "Neovaii - Take It Back", src: "Biblioteca/musica1.mp3", imagem: "fundo/imagem1.jpg" },
    { name: "Stephen - Crossfire", src: "Biblioteca/musica2.mp3", imagem: "fundo/imagem2.jpg" },
    { name: "AWAY & Midoca ", src: "Biblioteca/musica3.mp3", imagem: "fundo/imagem3.png" },
    { name: "Lux Holm & Glaceo ", src: "Biblioteca/musica4.mp3", imagem: "fundo/imagem4.jpg" }
];
//FUNÇÃO PARA TROCAR A MUSICA OU VOLTAR
function troca(number) {
    var audio = document.getElementById("audio")
    audio.src = musicas[number].src;
    audio.autoplay
    document.getElementById("imagem").src = musicas[number].imagem;
    document.getElementById("tocada").innerHTML = musicas[number].name;
}
// BOTAO PARA PROXIMA MUSICA
var i = 0
function next() {
    i++
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
    if (i < 0) {
        i = 3;
        document.getElementById("playpause").innerHTML = playpause[0].src
    }
    if (i > 3) {
        i = 0
    }
    troca(i)
}

// BOTAO DE STOP

function stop() {
    document.getElementById("audio").load();
    document.getElementById("audio").pause();
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
        playz =true;
    }
    else if (f % 2 != 0) {
        document.getElementById("playpause").innerHTML = playpause[1].src
        document.getElementById("audio").pause()
        playz =false;
    }
}

// COMANDO DE LOOP

L = 1;
function loop() {
    L++
    if (L % 2 == 0) {
        document.getElementById("audio").loop = true;
        // document.getElementById("audio").load();
        document.getElementById('reload').style.backgroundColor = '#4b4b4b';
        document.getElementById('reload').style.borderRadius = '100px';

    }
    if (L % 2 != 0) {
        document.getElementById("audio").loop = false;
        // document.getElementById("audio").load();
        document.getElementById('reload').style.backgroundColor = 'transparent'

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

    //     var playlist = [];

    //     function add1() {
    //         playlist.push(musicas[0].src)
    //         document.getElementById(playlistcriadas).innerHTML = "Neovaii - Take It Back <br> <br>"
    //     }
    //     function add2() {
    //         playlist.push(musicas[0].src)
    //         document.getElementById(playlistcriadas).innerHTML = "Stephen - Crossfire <br> <br>"
    //     }
    //     function add3() {
    //         playlist.push(musicas[0].src)
    //         document.getElementById(playlistcriadas).innerHTML = "AWAY & Midoca - Too Close - Take It Back <br> <br>"
    //     }
    //     function add4() {
    //         playlist.push(musicas[0].src)
    //         document.getElementById(playlistcriadas).innerHTML = " Lux Holm & Glaceo - Take You Away <br> <br>"
    //     }
}
document.getElementById("progress_bar").addEventListener("load", barraprogress)
function barraprogress() {
    while (playz == true) {
        
        var vid = document.getElementById("audio")
        time = (vid.currentTime)
        console.log(time)
        setTimeout(function () { document.getElementById("progress_bar").style.width = time + "%" }, 1000);
      }


//     for (time = 1; cent <= 100; cent++) {

//         setTimeout(function () { document.getElementById("progress_bar").style.width = perc + "%" }, 1000);
//     }
// }


    // var time = x 
    // var porcent = x/100

    // for (var i = 0; i <= 100; i++) {


    // }
}