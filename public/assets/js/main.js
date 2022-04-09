(function() {
    $(document).ready(function() {
        $(".testimonial-slick").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            prevArrow: $(".previous-service"),
            nextArrow: $(".next-service"),
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],
        });
    });

    const date = new Date();
    const currentYear = document.querySelector('#current_year');
    currentYear.textContent = date.getFullYear();



})();