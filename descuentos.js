//const precioOriginal = 500;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice"); //permite traer el valor del input
    const priceValue = inputPrice.value; //saca el valor  que los usuarios esciben convirtiendo de string a int

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    
      //estas lines sirve para mostrar el mensaje en html
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


// Reto funciones mas inteligiente
const coupons = [
    "Butter",
    "Dynamite",
    "Permission_to_dance",
];

function buttonPriceCoupon(){
    //con cupones de descuento
    const inputPrice = document.getElementById("InputPrice"); //permite traer el valor del input
    const priceValue = inputPrice.value; //saca el valor  que los usuarios esciben convirtiendo de string a int
  
    const inputCoupon = document.getElementById("InputCoupon"); //trae e texto que es uno de los 3 cupones
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)) { //array.includes() nos permite validar si un elemento ha sido almacenado en el array. Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array coupons)
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "Butter") {
        descuento = 15;
     } else if (couponValue === "Dynamite") {
        descuento = 30;
     } else if (couponValue === "Permission_to_dance") {
        descuento = 25;
     }

    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

    const ResultCoupon = document.getElementById("ResultCoupon");
    ResultCoupon.innerText = "El precio con cupon es de: $" + precioConDescuento;
}

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//}); //para imprimir un objeto con las variables 
