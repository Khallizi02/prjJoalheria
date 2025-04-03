let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  // Remove a classe "active" da imagem atual
  slides[currentIndex].classList.remove('active');
 
  // Incrementa o índice da imagem (circular)
  currentIndex = (currentIndex + 1) % slides.length;

  // Adiciona a classe "active" à próxima imagem
  slides[currentIndex].classList.add('active');
}

// Exibe a primeira imagem como ativa inicialmente
slides[currentIndex].classList.add('active');

// Troca de imagem a cada 5 segundos
setInterval(showNextSlide, 5000);

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
   
    const commentText = document.getElementById('comment').value;
    if(commentText.trim() === "") {
      alert("Por favor, escreva um comentário.");
      return;
    }
 
    // Simula o envio do comentário (no futuro, você pode enviar para um servidor)
    console.log("Comentário enviado:", commentText);
 
    // Exibe uma mensagem de sucesso
    document.getElementById('commentResponse').textContent = "Obrigado pelo seu comentário! Apreciamos seu feedback.";
    document.getElementById('commentResponse').style.display = 'block';
   
    // Limpa o campo de comentário
    document.getElementById('comment').value = "";
  });

  document.getElementById("cadastrar-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("auth-dropdown").classList.toggle("show");
  });

  window.onclick = function(event) {
    if (!event.target.matches('#cadastrar-link')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };