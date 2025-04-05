let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function carregarPagina(pagina) {
  console.log("passou aqui.")
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById("pagina-carregada").innerHTML = html;
      window.scrollTo(0, 0);
    })
    .catch(() => {
      document.getElementById("pagina-carregada").innerHTML = "<p>Página não encontrada.</p>";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pagina = e.target.getAttribute("data-pagina");
      if (pagina) carregarPagina(pagina);
    });
  });

  carregarPagina("home.html");
});


let currentSlide = 0;
let slideShower;

function showSlide(index) {
  slideShower.forEach(slide => slide.classList.remove('active'));
  if (slideShower[index]) {
    slideShower[index].classList.add('active');
  }
}

function changeSlide(step) {
  currentSlide = (currentSlide + step + slideShower.length) % slideShower.length;
  showSlide(currentSlide);
}

function autoSlide() {
  changeSlide(1);
}

window.addEventListener('DOMContentLoaded', function () {
  slideShower = document.querySelectorAll('.slide-shower');
  showSlide(currentSlide);
  setInterval(autoSlide, 5000);
});

