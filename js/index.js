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

            // Adiciona a classe de animação à seção alvo imediatamente após clicar no link
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

    // Adiciona animação para a primeira seção quando a página é carregada
    const firstSection = document.querySelector('.section');
    firstSection.classList.add('fade-in');

    // Adiciona animação para todas as seções quando clicar em qualquer link do menu
    links.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('fade-in');
            });
        });
    });
});
