const dias = document.getElementById('dia')
const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const deadlline = "01 dec 2023"

function countDown() {
    const dateDeadline = new Date(deadlline);
    const hoje = new Date();

    const segundosTotal = (dateDeadline - hoje) / 1000;

    const qtdFinalDias = Math.floor (segundosTotal / 60 / 60 / 24);
    const qtdFinalHoras = Math.floor (segundosTotal / 60 / 60) % 24;
    const qtdFinalMinutos = Math.floor (segundosTotal / 60) % 60;
    const qtdFinalSegundos = Math.floor (segundosTotal) % 60;

    dias.innerHTML = trataTempoZeroAEsquerda(qtdFinalDias)+'D';
    horas.innerHTML = trataTempoZeroAEsquerda(qtdFinalHoras)+'H';
    minutos.innerHTML = trataTempoZeroAEsquerda(qtdFinalMinutos)+'M';
    segundos.innerHTML = trataTempoZeroAEsquerda(qtdFinalSegundos)+'S';
}

function trataTempoZeroAEsquerda (tempo){
    return tempo < 10? '0'+tempo : tempo;
}

countDown();
setInterval(countDown, 1000)