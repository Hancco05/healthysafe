document.addEventListener("DOMContentLoaded", () => {
    // Manejo de formulario de suscripción
    const showSubscribeButton = document.getElementById("showSubscribeForm");
    const subscribeForm = document.getElementById("subscribeForm");
    const subscribeFeedback = document.getElementById("subscribeFeedback");

    showSubscribeButton.addEventListener("click", () => {
        showSubscribeButton.style.display = "none"; // Oculta el botón
        subscribeForm.classList.remove("hidden"); // Muestra el formulario
    });

    subscribeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        subscribeForm.classList.add("hidden");
        subscribeFeedback.classList.remove("hidden");
    });

    // Manejo de formulario de contacto
    const contactForm = document.getElementById("contactForm");
    const contactFeedback = document.getElementById("contactFeedback");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const fileInput = document.getElementById("file");
        const maxFileSize = 16 * 1024 * 1024;

        if (fileInput.files[0] && fileInput.files[0].size > maxFileSize) {
            alert("El archivo supera el tamaño máximo permitido de 16 MB.");
        } else {
            contactFeedback.classList.remove("hidden");
            contactForm.reset();
        }
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
