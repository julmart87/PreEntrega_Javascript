// Calculadora de precio

let nombreDeUsuario = prompt("Hola!! Ingrese su nombre: ");
let apellidoDeUsuario = prompt("Hola!! Ingrese su Apellido: ");
var edadDeUsuario = parseInt(prompt("Ingrese su edad: "));

if (isNaN(edadDeUsuario)) {
    alert("Por favor ingrese un número válido para la edad de usuario.");
} else if (edadDeUsuario < 18) {
    alert("Debe ser mayor de edad para ingresar!");
} else {
    alert("¡Bienvenido a la Tienda Online! " + nombreDeUsuario + " " + apellidoDeUsuario);
    
    var consulta = prompt("¿Quiere ver los productos? Por favor escriba 'Si' si desea continuar o 'No' si desea salir.");
    if(consulta.toLowerCase() === "si") {
        alert("A continuación te mostraremos las marcas.");
        elegirMarca();
    } else if(consulta.toLowerCase() === "no") {
        alert("Saliendo de los productos.. ¡Vuelva pronto!");
    } else {
        alert("No ingresó un valor correcto!");
    }
}

function elegirProducto(marca, productos) {
    let productoElegido = prompt("Elige el producto que te interese (" + productos.join(", ") + ")");
    if (productos.includes(productoElegido.toLowerCase())) {
        alert("Usted ha elegido el modelo " + marca + " " + productoElegido);
        var cantidad = obtenerCantidad();
        if (!isNaN(cantidad) && cantidad > 0) {
            formaDePagoUsuario(productoElegido, cantidad);
            sumarProducto();
        } else {
            alert("Debes indicar una cantidad válida.");
            elegirProducto(marca, productos); 
        }
    } else {
        alert("La opción elegida no es válida.");
        elegirProducto(marca, productos);
    }
}

function elegirMarca() {
    var marcaElegida = prompt("Eliga una marca...Escriba la marca de zapatillas que te interese( Adidas, Nike, Puma, Saucony)");
    switch (marcaElegida.toLowerCase()) {
        case "adidas":
            elegirProducto("Adidas", ["adizero", "ultraboost", "response", "superstar"]);
            break;
        case "nike":
            elegirProducto("Nike", ["air max 90", "pegasus", "vomero", "lunarglide"]);
            break;
        case "puma":
            elegirProducto("Puma", ["deviate", "magnify", "velocity", "classic"]);
            break;
        case "saucony":
            elegirProducto("Saucony", ["axon 3", "endorphin", "triumph", "xodus"]);
            break;
        default:
            alert("La opción elegida no es válida.");
            elegirMarca(); 
    }
}


function obtenerCantidad() {
    let cantidad;
    while (true) {
        cantidad = parseInt(prompt("Indique con un numero la cantidad de que quiera"));
        if (!isNaN(cantidad) && cantidad > 0) {
            break;
        } else {
            alert("Debes indicar una cantidad válida.");
        }
    }
    return cantidad;
}

function sumarProducto() {
    let nuevoProducto = prompt("¿Quiere elegir otro producto? Escriba 'Si' o 'No'");
    if (nuevoProducto.toLowerCase() === "si") {
        elegirMarca();
    } else if (nuevoProducto.toLowerCase() === "no") {
        alert("Gracias por su compra");
    } else {
        alert("Ingrese un valor correcto");
    }
}

function procesarProducto(productoElegido) {
    let cantidad = obtenerCantidad();
    if (!isNaN(cantidad) && cantidad > 0) {
        formaDePagoUsuario(productoElegido, cantidad);
    } else {
        alert("Debes indicar una cantidad válida.");
        procesarProducto(productoElegido);
    }
}

function formaDePagoUsuario(producto, cantidad) {
    var formaDePago = prompt("Elija la forma de pago: Escriba 'Cuotas' si desea a bonar en 2 o 3 cuotas o 'Efectivo' si desea abonar en un pago");
    if(formaDePago.toLowerCase() === "cuotas") {
        calcularPrecio(producto, cantidad, true);
    } else if(formaDePago.toLowerCase() === "efectivo") {
        calcularPrecio(producto, cantidad, false);
    } else {
        alert("La forma de pago ingresada no es valida.. Intentelo nuevamente!");
        formaDePagoUsuario(producto, cantidad);
    }
}


// function calcularPrecio(producto, cantidad, enCuotas) {
//     var precioUnitario = valorPrecioUnitario(producto);
//     var precioTotal = precioUnitario * cantidad * 1.21;
//     if (enCuotas) {
//         var precioCuota = (precioTotal / 3).toFixed(2);
//         alert("El precio total por " + cantidad + " " + producto + " mas IVA es de: $ " + precioTotal + " dólares.");
//         alert("Pagando en tres cuotas de $ " + precioCuota + " dólares por cuota.");
//     } else {
//         alert("El precio total por " + cantidad + " " + producto + " mas IVA es de: $ " + precioTotal + " dólares.");
//     }
// }

function calcularPrecio(producto, cantidad, enCuotas) {
    var precioUnitario = valorPrecioUnitario(producto);
    var precioTotal = precioUnitario * cantidad * 1.21;
    var formaDeCuota = parseInt(prompt("Si eligio cuotas ingrese el numero de pagos! de lo contrario presione Enter"));
    if (enCuotas == true && formaDeCuota === 3) {
        var precioCuota = (precioTotal / 3).toFixed(2);
        alert("El precio total por " + cantidad + " " + producto + " mas IVA es de: $ " + precioTotal + " dólares.");
        alert("Pagando en tres cuotas de $ " + precioCuota + " dólares por cuota.");
    } else if (enCuotas == true && formaDeCuota === 2) {
        var precioCuotaDos = (precioTotal / 2).toFixed(2);
        alert("El precio total por " + cantidad + " " + producto + " mas IVA es de: $ " + precioTotal + " dólares.");
        alert("Pagando en dos cuotas de $ " + precioCuotaDos + " dólares por cuota.");
    } else {
        alert("El precio total por " + cantidad + " " + producto + " mas IVA es de: $ " + precioTotal + " dólares.");
    };
}

function valorPrecioUnitario(producto) {
    switch(producto.toLowerCase()) {
        case "adizero":
            alert("El precio de Adidas Adizero es de $ 200 dolares");
            return 200;
        case "ultraboost":
            alert("El precio de Adidas Ultraboost es de $ 180 dolares");
            return 180;
        case "response":
            alert("El precio de Adidas Response es de $ 90 dolares");
            return 90;
        case "superstar":
            alert("El precio de Adidas Superstar es de $ 85 dolares");
            return 85;
        case "air max 90":
            return 950;
        case "pegasus":
            return 800;
        case "vomero":
            return 520;
        case "lunarglide":
            return 699;
        case "adizero":
            return 200;
        case "ultraboost":
            return 180;
        case "response":
            return 90;
        case "superstar":
            return 89;
        case "deviate":
            return 150;
        case "magnify":
            return 99;
        case "velocity":
            return 179;
        case "classic":
            return 80;
        case "axon 3":
            return 220;
        case "endorphin":
            return 105;
        case "triumph":
            return 160;
        case "xodus":
            return 85;
        default:
            return 0;    
    }
}










