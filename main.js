function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
    return 0;
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
    return 0;
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;