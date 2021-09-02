function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    //con ciclo for 
    //for(let i = 0; i < lista1.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}

    //con funcion reduce
    const sumaLista = lista.reduce( //reduce recibe una funcion y este permite ir sumando(tambien divide, multiplca y resta) cada uno de los elementos d euna lista
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}