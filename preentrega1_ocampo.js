let resultado = 0; 

function sumar(v1, v2) {
    return v1 + v2;
}

let v1 = parseInt(prompt("Cuantos dedos tiene su hijo en la MANO DERECHA:"));
let v2 = parseInt(prompt("Cuantos dedos tiene su hijo en la MANO IZQUIERDA:"));

let suma = sumar(v1, v2); 
alert("¡Felicitaciones! Su hijo tiene " + suma + " dedos! No es un Marciano :). Ahora si, prosigamos.");


const edad = parseInt(prompt("Ingrese la edad de su hijo"));

let menorEdad;

if (edad <= 4) {
    menorEdad = true;  
} else {
    menorEdad = false;   
}

if (menorEdad) {
    if (edad == 1) { 
        const peso = parseInt(prompt("Ingrese el peso de su hijo"));
        const altura = parseInt(prompt("Ingrese la altura de su hijo"));

        if (peso <= 11 && altura <= 81) {
            alert("Se encuentra dentro de los parámetros normales");
        } else {
            alert("Los valores no son normales. Se le aconseja consultar con el pediatra. A continuación podrá sacar turno.");  
        } 
    } else {
        alert("Prosiga a ingresar los datos que se le pedirán");
    }
} else {
    alert("No pertenece a las edades analizadas");
}

if (menorEdad) {
    if (edad == 2) { 
        const peso = parseInt(prompt("Ingrese el peso de su hijo"));
        const altura = parseInt(prompt("Ingrese la altura de su hijo"));

        if (peso == 13 && altura == 88) {
            alert("Se encuentra dentro de los parámetros normales");
        } else {
            alert("Los valores no son normales. Se le aconseja consultar con el pediatra. A continuación podrá sacar turno.");  
        }
    } else {
        alert("Prosiga a ingresar los datos que se le pedirán");
    }
} else {
    alert("No pertenece a las edades analizadas");
}

if (menorEdad) {
    if (edad == 3) { 
        const peso = parseInt(prompt("Ingrese el peso de su hijo"));
        const altura = parseInt(prompt("Ingrese la altura de su hijo"));

        if (peso == 15 && altura == 96) {
            alert("Se encuentra dentro de los parámetros normales");
        } else {
            alert("Los valores no son normales. Se le aconseja consultar con el pediatra. A continuación podrá sacar turno.");  
        }
    } else {
        alert("Prosiga a ingresar los datos que se le pedirán");
    }
} else {
    alert("No pertenece a las edades analizadas");
}

if (menorEdad) {
    if (edad == 4) { 
        const peso = parseInt(prompt("Ingrese el peso de su hijo"));
        const altura = parseInt(prompt("Ingrese la altura de su hijo"));

        if (peso == 16 && altura == 100) {
            alert("Se encuentra dentro de los parámetros normales");
        } else {
            alert("Los valores no son normales. Se le aconseja consultar con el pediatra. A continuación podrá sacar turno.");  
        }
    } else {
        alert("Prosiga a ingresar los datos que se le pedirán");
    }
} else {
    alert("No pertenece a las edades analizadas");
}

let cupos = 30;

    for (let turno = 1; turno <= 30; turno++) {
    let edad = parseInt(prompt("Ingrese Edad"));
    if (edad >= 5) {
    alert("No ingresa dentro de los parámetros de edad.");
    continue;
    }
    if (cupos == 0) {
    alert("Disculpe, ya no contamos con turnos disponibles. Pruebe la semana que viene. Gracias.");
    break;
    }
    alert(edad + ". Su turno es el N° " + turno);
    cupos --;
}