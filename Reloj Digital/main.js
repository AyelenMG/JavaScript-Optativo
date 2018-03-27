/*Se crea la función del reloj*/
function Ver_Hora()
            {
                var mihora=new Date();
                /*Recoge la hora*/
                var horas=mihora.getHours().toString();
                /*Recoge los minutos*/
                var minutos=mihora.getMinutes().toString();
                if (minutos.length == 1) minutos = "0" + segundos;
                /*Recoge los segundos*/
                var segundos=mihora.getSeconds().toString();
                if (segundos.length == 1) segundos = "0" +segundos;
                
                /*Lo identifica con el name "mireloj" para poder llamarlo en el html*/
                document.forms[0].mireloj.value = horas + ":" + minutos + ":" + segundos;
            }

var r = setInterval ("Ver_Hora ()", 500);