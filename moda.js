//Clase 17 
const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count = {};

//funcion para comverir la lista en un objeto que agrupe cada uno de los elementos sgun su valor
lista1.map (
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        } 
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){//funcion para ordenar los elementos desde el que tiene menos repeticiones al que tien mas
        return elementoA[1] - elementoB[1];//nos de valores negativos cero y valores positivos
    }
);

const moda = lista1Array[lista1Array.length -1];//para buscar la ultima posicion donde esta el valor que mas se repite

//crear una funcion para llamarla desde la consola


function moda(lista) {
    const listaObj = {};

    lista.map(
        function(e) {
            if(listaObj[e]) {

                listaObj[e] += 1;
            } else {
    
                listaObj[e] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
};