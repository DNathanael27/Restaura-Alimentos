document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.lista li a');
    const menu = document.querySelector('.menu');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Remove a classe de animação de todas as seções
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('fade-in');
            });

            // Adiciona a classe de animação à seção alvo
            targetSection.classList.add('fade-in');

            // Calcula a posição da seção alvo, considerando o deslocamento do menu fixo
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY - menu.offsetHeight;

            // Faz a rolagem suave até a seção alvo
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        });
    });
});
