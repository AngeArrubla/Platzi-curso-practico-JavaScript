const salariosCol = colombia.map( //map permite iterrar en el array de salarios /vamos a crear un nuevo array
    function (persona){ //va a ingresar el salario de cada persona
        return persona.salary;
    }
);

//ordenar los datos de salariosCol de mayor a menor
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//calcular la mediana de salarios general
//primero verificamos si la lista es par o impar
function esPar(numerito){
    //FORMA SIMPLIFICADA return(numerito %2 === 0);
    if(numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}
//calcular la media de una lista par
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( //reduce recibe una funcion y este permite ir sumando(tambien divide, multiplca y resta) cada uno de los elementos d euna lista
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calcular la mediana de salarios general
function medianaSalarios(lista){ //permite enviar como argumento la lista de salarios de cualquier pais
    const mitad = parseInt(lista.length / 2); //para hallar la mitad parsein numero sin desimales 
    //saber si la lista de salarios es par o impar
    if (esPar(lista.length)){
        //dos personas de la mitad
        const personaMitad1 = lista[mitad - 1]; 
        const personaMitad2 = lista[mitad];
        //Hallar el promedio de los dos elementos en la mitad de la lista
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad]; //de la lista que recibimos en medinaSalarios buscamos la posicion de la mitad si es impar
        return personaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);

//-----Mediana del TOP 10% que ganan mas salario---

const spliceStart = (salariosColSorted.length * 90) / 100;//calculamos el 90%
const spliceCount = salariosColSorted.length - spliceStart; //el resultado es el 10% que quiero analizar

//para sacar un aparte del array usamos el metodo splice(el primer argumento es la posicion donde hace el corte, el segundo argumento es la cantidad de datos)
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount); //variable donde se va a aguardar el 10% //splice cre un nuevo array sin los numeros cortados, se puede usar .Slice para no modificar el array original

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol,medianaTop10Col});





