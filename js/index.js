document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.lista li a');
    const menu = document.querySelector('.menu');
    const sections = document.querySelectorAll('.section');

    function animateSection(targetSection) {
        sections.forEach(section => {
            section.classList.remove('fade-in');
        });

        targetSection.classList.add('fade-in');
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            animateSection(targetSection);

            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY - menu.offsetHeight;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        });
    });

    const firstSection = document.querySelector('.section');
    if (firstSection) {
        firstSection.classList.add('fade-in');
    }
});
