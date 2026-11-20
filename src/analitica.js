const ventas = require("./datos");

function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total += valorVenta(venta);
    }
    return total;
}

function totalUnidades(ventas) {
    let unidades = 0;
    
    for (const venta of ventas) {
        unidades += venta.cantidad;
    }

    return unidades;
}

function ventaMayor(ventas) {
    if (ventas.length === 0) {
        return null
    }

    let mayor = ventas[0];

    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }
    return mayor;
}

function ticketPromedio(ventas) {
    let total = 0;
    let contador = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total += valorVenta(venta);
            contador++;
        }
    }
     
    if (contador === 0) {
        return 0;
    }

    return total / contador;
}

const normalizar = (texto) => texto.trim().toLowerCase();

function ventasPorCiudad(ventas, ciudad) {
        let total = 0;

        for (const venta of ventas){
            if (normalizar(venta.ciudad) === normalizar(ciudad)) {
                total += valorVenta(venta);
            }
        }
        return total; 
}

const unaVenta = [ventas[0]];
const sinVentas = [];

console.log("--ARREGLO COMPLETO--");
console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades:", totalUnidades(ventas));
console.log("Venta mayor:", ventaMayor(ventas));
console.log("Ticket promedio:", ticketPromedio(ventas));
console.log("Medellín:", ventasPorCiudad(ventas, "Medellín"));

console.log("--UNA SOLA VENTA--");
console.log("Total vendido:", totalVendido(unaVenta));
console.log("Unidades:", totalUnidades(unaVenta));
console.log("Venta mayor:", ventaMayor(unaVenta));
console.log("Ticket promedio:", ticketPromedio(unaVenta));
console.log("Medellín:", ventasPorCiudad(unaVenta, "Medellín"));

console.log("--ARREGLO VACÍO--");
console.log("Total vendido:", totalVendido(sinVentas));
console.log("Unidades:", totalUnidades(sinVentas));
console.log("Venta mayor:", ventaMayor(sinVentas));
console.log("Ticket promedio:", ticketPromedio(sinVentas));
console.log("Medellín:", ventasPorCiudad(sinVentas, "Medellín"));


