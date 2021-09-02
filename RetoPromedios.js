//promedio ponderado
//multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.

//Definir el conjunto de números junto al peso de cada elemento
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//Multiplicar cada número de la lista por su peso
//Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

//Sumar todos los elementos del arreglo de elementos multiplicados por su peso
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Sumar todos los pesos (créditos)
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

//Hacer la división entre ambas “sumas”
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Lo último que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOfCredits.

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;