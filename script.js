const isMobile = window.matchMedia('(width < 768px)').matches;

if (isMobile) {
    const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
    },
    });
}


const button = document.querySelector('.brands__toggle');
const wrapper = document.querySelector('.swiper-wrapper');
const buttonText = document.querySelector('.brands__text');

button.addEventListener('click', () => {
    button.classList.toggle('brands__toggle--open');
    wrapper.classList.toggle('swiper-wrapper--open');
    
    if (button.classList.contains('brands__toggle--open')) {
        buttonText.textContent = 'Скрыть';
    } else {
        buttonText.textContent = 'Показать все';
    }
});