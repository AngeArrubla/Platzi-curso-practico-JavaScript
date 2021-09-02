//clase 16
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( //reduce recibe una funcion y este permite ir sumando(tambien divide, multiplca y resta) cada uno de los elementos d euna lista
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


let lista = [];

const mitadLista = parseInt(lista.length / 2); //parseInt nos devuelve el numero en entero


function esPar(numerito){
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana; //variable

if (esPar(lista.length)) { //para saber si la cantidad de elementos es par
    const elemento1 = lista[mitadLista - 1]; // selecciona el numero de la posicion 1 
    const elemento2 = lista[mitadLista];//reduce selecciona el elemento en la posicion 2

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, 
        elemento2,
    ]);
    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}

//ajustar para que enviemos cualquien lista 
//ordenar lista metodo sort


//if(lista1 es par?){
    //necesitamos 2 elementos
    //--> El promedio
    //--> La mediana
//} else{
    // la posicion de mitadLista1 dentro de lista1 (el elemeto de la mitad es la mediana)
        //mediana-->
//}