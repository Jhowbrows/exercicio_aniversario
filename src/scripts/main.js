AOS.init();

const dataDoEvento = new Date("nov 26, 2025 16:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaASHoras = setInterval (function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;


    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 100 * 60 * 60;
    const MinutosEmMs = 1000 * 60;

  const diasAteOEvento =  Math.floor(distanciaAteOEvento / diaEmMs)
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / MinutosEmMs);
  const segundosAteOEventos = Math.floor((distanciaAteOEvento % MinutosEmMs) / 1000)



  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEventos}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaASHoras);
    document.getElementById('contador').innerHTML = `Data de Aniversario e festa expirado`;
  }
}, 1000);