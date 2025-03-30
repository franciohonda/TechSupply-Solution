let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Cicla gli indici delle slide
    if (index >= totalSlides) {
        currentSlide = 0; // Torna alla prima slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Torna all'ultima slide
    } else {
        currentSlide = index;
    }

    // Calcola la posizione da mostrare
    const offset = -currentSlide * 100; // Ogni slide occupa il 100% della larghezza
    slides.style.transform = `translateX(${offset}%)`;
}

// Funzione per lo scorrimento automatico
function autoSlide() {
    showSlide(currentSlide + 1);
}

// Avvia lo scorrimento automatico ogni tot secondi
setInterval(autoSlide, 2500);

// Mostra la prima slide all'avvio
showSlide(currentSlide);
