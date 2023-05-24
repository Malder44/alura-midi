function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

function adicionaEstilo(tecla) {
    tecla.classList.add('ativa');
}

function removeEstilo(tecla) {
    tecla.classList.remove('ativa');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            adicionaEstilo(tecla);
        }
    }
    tecla.onkeyup = function() {
        removeEstilo(tecla);
    }
}