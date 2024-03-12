"use strict";

let edad;

do{
    let miEdad = prompt('¿Cuantos años tienes?');
    edad = parseInt(miEdad);

    if (!isNaN(edad)) { /*Si metemos un numero...*/
        switch(true){
            case(edad>=0 && edad<=3):
                window.location.href = "https://www.dodot.es/";
                break;
            case(edad>=4 && edad<=6):
                window.location.href = "https://www.pocoyo.com/";
                break;
            case(edad>=7 && edad<=12):
                window.location.href = "https://www.wizardingworld.com/";
                break;
            case(edad>=13 && edad<=17):
                window.location.href = "https://www.lego.es/es-es";
                break;
            case(edad>=18):
                alert('¡Bienvenido a la página web del videojuego José Modo!');
                break;
            case(edad<0):
                alert('Por favor, introduce un número positivo para tu edad.');
                break;
            default:
                window.location.href = "https://www.google.com/"; /*Te lleva a google en caso de darle a cancelar*/
                break;
        }
    } else {
        alert('Introduce un número válido para tu edad.');
    }
    
} while(isNaN(edad) || edad<0); /*Si en vez de meter un numero metes otro carácter, te vuelve a preguntar por tus años*/
