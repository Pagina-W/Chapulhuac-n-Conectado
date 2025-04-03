function Calcular1() {
    
    var HoraS1 = document.getElementById("txtHrS1").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM1").value = puntoMedio;
    document.getElementById("txtHrL1").value = horaLlegada;
}

function Calcular2() {
    
    var HoraS1 = document.getElementById("txtHrS2").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM2").value = puntoMedio;
    document.getElementById("txtHrL2").value = horaLlegada;
}
function Calcular3() {
    
    var HoraS1 = document.getElementById("txtHrS3").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM3").value = puntoMedio;
    document.getElementById("txtHrL3").value = horaLlegada;
}
function Calcular4() {
    
    var HoraS1 = document.getElementById("txtHrS4").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM4").value = puntoMedio;
    document.getElementById("txtHrL4").value = horaLlegada;
}
function Calcular5() {
    
    var HoraS1 = document.getElementById("txtHrS5").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM5").value = puntoMedio;
    document.getElementById("txtHrL5").value = horaLlegada;
}
function Calcular6() {
    
    var HoraS1 = document.getElementById("txtHrS6").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM6").value = puntoMedio;
    document.getElementById("txtHrL6").value = horaLlegada;
}
function Calcular7() {
    
    var HoraS1 = document.getElementById("txtHrS7").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM7").value = puntoMedio;
    document.getElementById("txtHrL7").value = horaLlegada;
}
function Calcular8() {
    
    var HoraS1 = document.getElementById("txtHrS8").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM8").value = puntoMedio;
    document.getElementById("txtHrL8").value = horaLlegada;
}
function Calcular9() {
    
    var HoraS1 = document.getElementById("txtHrS9").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM9").value = puntoMedio;
    document.getElementById("txtHrL9").value = horaLlegada;
}
function Calcular10() {
    
    var HoraS1 = document.getElementById("txtHrS10").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM10").value = puntoMedio;
    document.getElementById("txtHrL10").value = horaLlegada;
}
function Calcular11() {
    
    var HoraS1 = document.getElementById("txtHrS11").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM11").value = puntoMedio;
    document.getElementById("txtHrL11").value = horaLlegada;
}
function Calcular12() {
    
    var HoraS1 = document.getElementById("txtHrS12").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM12").value = puntoMedio;
    document.getElementById("txtHrL12").value = horaLlegada;
}
function Calcular13() {
    
    var HoraS1 = document.getElementById("txtHrS13").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM13").value = puntoMedio;
    document.getElementById("txtHrL13").value = horaLlegada;
}
function Calcular14() {
    
    var HoraS1 = document.getElementById("txtHrS14").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM14").value = puntoMedio;
    document.getElementById("txtHrL14").value = horaLlegada;
}
function Calcular15() {
    
    var HoraS1 = document.getElementById("txtHrS15").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM15").value = puntoMedio;
    document.getElementById("txtHrL15").value = horaLlegada;
}
function Calcular16() {
    
    var HoraS1 = document.getElementById("txtHrS16").value;
    var horas = parseInt(HoraS1.split(":")[0]);
    var minutos = parseInt(HoraS1.split(":")[1]);

    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }
    var puntoMedio = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);
    
    minutos += 30;

    if (minutos >= 60) {
        minutos -= 60;
        horas++;
    }

    var horaLlegada = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos);

    document.getElementById("txtPM16").value = puntoMedio;
    document.getElementById("txtHrL16").value = horaLlegada;
}