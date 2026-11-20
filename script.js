const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
    },
    breakpoints: {
        768: {
            pagination: {
                enabled: false,
            },
        },
        769: {
            pagination: {
                enabled: false,
            },
        }
    }
});