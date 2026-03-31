// Controle do menu mobile abrigar comportamento abrir/fechar
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha menu mobile ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FAQ accordion funcional
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        
        // Fecha as outras respostas para ter o efeito accordion correto
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Alterna entre abrir/fechar a resposta atual
        item.classList.toggle('active');
    });
});

// Botões CTA com ação (console.log como requisitado)
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        console.log(`Botão CTA clicado. Origem do botão: [${buttonText}]`);
    });
});