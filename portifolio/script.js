// --- Inicializações ---
AOS.init({
  duration: 1200,
  easing: 'ease-out-back',
  once: true
});

// Inicialização do particles.js e lógica de modais
document.addEventListener('DOMContentLoaded', function () {
  // Lógica para o ano atual no footer
  const currentYearFull = document.getElementById('current-year-full');
  if (currentYearFull) {
    currentYearFull.textContent = new Date().getFullYear();
  }

  // Inicialização do particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#9bb8d2"
      },
      "size": {
        "value": 2
      },
      "move": {
        "speed": 0.5
      },
      "opacity": {
        "value": 0.5
      },
      "shape": {
        "type": "circle"
      },
      "line_linked": {
        "enable": true,
        "color": "#9bb8d2",
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

  // --- Lógica dos Modais de Contato e Projetos ---
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const whatsappModal = document.getElementById("whatsappModal");
  const closeModalBtn = document.getElementById("closeModal");
  const whatsappForm = document.getElementById("whatsappForm");
  const projectBtns = document.querySelectorAll('.project-btn');
  const projectModal = document.getElementById('projectModal');
  const projectIframe = document.getElementById('projectIframe');
  const closeProjectModal = document.getElementById('closeProjectModal');

  // Lógica para o modal de contato do WhatsApp
  if (whatsappBtn && whatsappModal && closeModalBtn && whatsappForm) {
    whatsappBtn.addEventListener('click', (event) => {
      event.preventDefault();
      whatsappModal.style.display = "flex"; // Usar 'flex' para centralizar com phone-frame
    });

    closeModalBtn.addEventListener('click', () => {
      whatsappModal.style.display = "none";
    });

    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nomeInput = document.getElementById("nome");
      const servicoInput = document.getElementById("servico");

      const nome = nomeInput.value;
      const servico = servicoInput ? servicoInput.value : "Serviço Indefinido";

      if (nome) {
        const mensagem = `Olá, meu nome é ${encodeURIComponent(nome)}. Gostaria de entrar em contato. ${servico ? `(Interesse: ${encodeURIComponent(servico)})` : ''}`;
        const url = `https://wa.me/5521983856779?text=${mensagem}`;
        window.open(url, "_blank");
        whatsappModal.style.display = "none";
        nomeInput.value = '';
      } else {
        alert("Por favor, digite sua mensagem.");
      }
    });
  }

  // Lógica para o modal do projeto
  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-url');
      projectIframe.src = url;
      projectModal.style.display = 'block';
    });
  });

  if (projectModal && closeProjectModal) {
    closeProjectModal.addEventListener('click', () => {
      projectModal.style.display = 'none';
      projectIframe.src = '';
    });
  }

  // Fecha todos os modais ao clicar fora deles
  window.addEventListener('click', (event) => {
    if (event.target === whatsappModal) {
      whatsappModal.style.display = "none";
    }
    if (event.target === projectModal) {
      projectModal.style.display = 'none';
      projectIframe.src = '';
    }
  });
});

// --- Efeitos e Navegação (JQUERY) ---
// Detectar o scroll da página
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});

// Scroll suave para as seções
$("a[href*='#']").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    var hash = this.hash;
    try {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    } catch (err) {
      console.error('Erro ao animar o scroll: ', err);
    }
  }
});