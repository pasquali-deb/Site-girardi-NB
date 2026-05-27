let slideAtual = 0;

const slides = document.querySelectorAll(".slide-card");

function atualizarCarrossel() {
    slides.forEach((slide) => {
        slide.classList.remove("ativo", "anterior", "proximo");
    });

    const anterior = slideAtual === 0 ? slides.length - 1 : slideAtual - 1;
    const proximo = slideAtual === slides.length - 1 ? 0 : slideAtual + 1;

    slides[slideAtual].classList.add("ativo");
    slides[anterior].classList.add("anterior");
    slides[proximo].classList.add("proximo");
}

function proximoSlide() {
    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();
}

function voltarSlide() {
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    atualizarCarrossel();
}

if (slides.length > 0) {
    atualizarCarrossel();

    setInterval(() => {
        proximoSlide();
    }, 4000);
}