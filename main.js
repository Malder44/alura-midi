function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
    return 0;
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
    return 0;
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;