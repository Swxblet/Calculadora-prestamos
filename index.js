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
document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.getElementById("imagen-principal");
    const imagenOriginal = imagen.src; // guarda la imagen por defecto

    // Expone las funciones para que el HTML pueda usarlas
    window.cambiarImagen = function(src) {
        console.log("Cambiando imagen");
        imagen.src = src;
    }

    window.volverImagen = function() {
        console.log("Volver imagen");
        imagen.src = imagenOriginal;
    }
});