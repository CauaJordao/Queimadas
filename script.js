document.addEventListener("DOMContentLoaded", () => {
    // Função para o menu móvel
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    nav.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});
