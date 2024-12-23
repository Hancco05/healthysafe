// Manejo del formulario
document.getElementById("subscriptionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real del formulario

    const feedback = document.getElementById("feedback");
    feedback.classList.remove("hidden");
    feedback.textContent = "¡Gracias por suscribirte! Revisa tu correo pronto.";

    setTimeout(() => {
        feedback.classList.add("hidden");
    }, 5000); // Oculta el mensaje después de 5 segundos

    // Reinicia los campos del formulario
    this.reset();
});

// Botón "Volver arriba"
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
