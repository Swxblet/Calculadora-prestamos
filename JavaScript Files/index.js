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
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".aboutUsCarouselImages");
    const fills = document.querySelectorAll(".fill");
    const progressBars = document.querySelectorAll(".progressBar");
    let current = 0;

    function showSlide(index) {
        // Ocultar todas las imágenes
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);

            // Ocultar texto al inicio
            const text = slide.querySelector(".aboutUsCarouselText");
            if (text) text.classList.remove("show");
        });
        // Mostrar texto con animación
        const activeText = slides[index].querySelector(".aboutUsCarouselText");
        if (activeText) {
            setTimeout(() => {
                activeText.classList.add("show");
            }, 100); // pequeño delay para suavidad
        }

        current = index;
    }

    // Avanzar al terminar la animación
    fills.forEach((fill, index) => {
        fill.addEventListener("transitionend", () => {
            if (index === current) {
                const next = (current + 1) % slides.length;
                showSlide(next);
            }
        });
    });

    // Ir a una imagen al hacer clic en una barra
    progressBars.forEach((bar) => {
        bar.addEventListener("click", () => {
            const index = parseInt(bar.dataset.index);
            showSlide(index);
        });
    });

    // Inicializar slideshow
    showSlide(current);
});