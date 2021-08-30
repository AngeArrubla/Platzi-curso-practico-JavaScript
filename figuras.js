//-----------Código del cuadrado---------------
console.group("Cuadrados"); //etiqueta sirve para agrupar los mensajes con un titulo

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd(); //terminar o delimitar el grupo

//---------------------Código del triángulo---------------------------
console.group("Triángulo");
//const ladoTriangulo1= 6;
//const ladoTriangulo2= 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log(
//    "Los lados del triángulo miden: " 
//    + ladoTriangulo1 
//    + "cm,"
//    + ladoTriangulo2
//    +"cm,"
//    +baseTriangulo
//    +"cm"
//);
//console.log("La altura del triángulo mide: " + alturaTriangulo + "cm")

function perimetroTriangulo( lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del trinágulo es: " + perimetroTriangulo + "cm");

function alturaTriangulo (lado1,lado2,base){

    if(lado1 != lado2){
        console.error("Los lados no son iguales")
    } else if(lado1 === lado2 && lado1 != base){ 
        //alert("isoceles");

        const alturaTriangulo = Math.sqrt((lado1**2) - (base**2/4));
        console.log(alturaTriangulo);
    }
}

function areaTriangulo (base, altura){
    return (base*altura)/2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

//-------------------------Código del círculo-------------------------
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio *2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//Pi
const PI= Math.PI; //herramienta math 
console.log("PI es: " + PI );

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio); // llamamos una funcion dentro de otra funcion
    return diametro * PI;
}

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo (radio){
    return (radio*radio) * PI;
}

//console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();


// ---------------Aquí interactuamos con el HTML--------------------

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const lado1 = input1.value; 
    const lado2 = input2.value;
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);

}
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const lado1 = input1.value; 
    const lado2 = input2.value;
    const base = input3.value;
    
    const altura = alturaTriangulo(lado1,lado2,base);
    alert(altura)
}
//Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const altura = diametroCirculo(value);
    alert(altura)
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

