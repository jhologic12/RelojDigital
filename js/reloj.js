
const mostrarReloj = ()=>{


    let fecha = new Date ();

    let hora = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`;

    const meses = ['Ene','Feb','Marz','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom', 'Lun', 'Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let dia = dias[fecha.getDay()];

    let fechaTexto = `${dia},${diaSemana}  ${mes}`;

    document.getElementById('fecha').innerHTML=fechaTexto;
    
    document.getElementById('contenedor').classList.toggle('animar');


}

const formatoHora = (hora)=>{
    if(hora<10)
        hora = '0' + hora;
        return hora;
}

setInterval(mostrarReloj,1000);