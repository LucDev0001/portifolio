// Iniciar o AOS
AOS.init({
  duration: 1200, // Tempo da animação
  easing: 'ease-out-back', // Efeito de easing
  once: true // Aplica as animações apenas uma vez
});


// Detectar o scroll da página
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.navbar').addClass('scrolled'); // Adiciona a classe 'scrolled' quando rolar
  } else {
    $('.navbar').removeClass('scrolled'); // Remove a classe 'scrolled' quando voltar ao topo
  }
});

// Scroll suave para as seções
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});




// Abrir o modal quando clicar no botão do WhatsApp
document.getElementById("whatsapp-btn").onclick = function (event) {
  event.preventDefault();  // Evita o comportamento padrão do link
  document.getElementById("whatsappModal").style.display = "block";
}

// Fechar o modal quando clicar no "X"
document.getElementById("closeModal").onclick = function () {
  document.getElementById("whatsappModal").style.display = "none";
}

// Fechar o modal quando clicar fora dele
window.onclick = function (event) {
  if (event.target == document.getElementById("whatsappModal")) {
    document.getElementById("whatsappModal").style.display = "none";
  }
}

// Enviar o formulário para o WhatsApp ao clicar em "Enviar"
document.getElementById("whatsappForm").onsubmit = function (e) {
  e.preventDefault(); // Evitar o envio padrão do formulário

  // Obter os valores do formulário
  var nome = document.getElementById("nome").value;
  var servico = document.getElementById("servico").value;

  // Verificar se os campos estão preenchidos
  if (nome && servico) {
    // Criar a mensagem formatada para o WhatsApp
    var mensagem = "Olá%2C%20eu%20sou%20" + encodeURIComponent(nome) + "%20e%20desejo%20informações%20sobre%20o%20serviço%20" + encodeURIComponent(servico) + ".";

    // URL do WhatsApp com a mensagem
    var url = "https://wa.me/5521983856779?text=" + mensagem;

    // Abrir o link do WhatsApp
    window.open(url, "_blank");

    // Fechar o modal
    document.getElementById("whatsappModal").style.display = "none";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Inicialização do particles.js
document.addEventListener('DOMContentLoaded', function () {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,  // Número de partículas
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "size": {
        "value": 3
      },
      "move": {
        "speed": 1
      },
      "opacity": {
        "value": 0.5
      },
      "shape": {
        "type": "circle"
      },
      "line_linked": {
        "enable": true,
        "color": "#00f9ff",  // Cor das linhas
        "opacity": 0.2
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  });
});

