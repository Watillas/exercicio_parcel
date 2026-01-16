AOS.init();

const dataDoevento = new Date("Jan 12, 2026 16:29:00");
const timeStampDoEvento = dataDoevento.getTime();


const contAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const  DistanciaAteOEVento = timeStampDoEvento - timeStampAtual ;

    const DiasAteOEVento  = Math.floor((DistanciaAteOEVento / 1000 * 60 * 60 * 24 )) ;
    const HorasAteOEvento = Math.floor((DistanciaAteOEVento % 1000 * 60 * 60 * 24) / 1000 * 60 *60);
    const MinutosAteOVento = Math.floor((DiasAteOEVento % 1000 * 60 *60) / 1000 * 60);
    const SegundosAteOEvento = Math.floor((DiasAteOEVento % 1000 * 60) / 1000);

    document.getElementById('contador').innerHTML = `${DiasAteOEVento}D ${HorasAteOEvento}H ${MinutosAteOVento}M ${SegundosAteOEvento}S`

    if(DiasAteOEVento < 0){
        clearInterval(contAsHoras);
        document.getElementById('contador').innerHTML`Evento expirado!`;
    }

},1000);