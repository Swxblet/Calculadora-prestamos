const tipoCambio = {
    dolarCompra: 499.00,
    dolarVenta: 513.00,
    euroCompra: 570.00,
    euroVenta: 591.81,
};

function mostrarDolar(){
    document.getElementById("buyPrice").innerHTML = `₡${tipoCambio.dolarCompra.toFixed(2)}`;
    document.getElementById("sellPrice").innerHTML = `₡${tipoCambio.dolarVenta.toFixed(2)}`;
}
function mostrarEuro(){
    document.getElementById("buyPrice").innerHTML = `₡${tipoCambio.euroCompra.toFixed(2)}`;
    document.getElementById("sellPrice").innerHTML = `₡${tipoCambio.euroVenta.toFixed(2)}`;
}
