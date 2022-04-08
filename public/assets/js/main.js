(function() {
    $(document).ready(function() {
        $(".testimonial-slick").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: $(".previous-service"),
            nextArrow: $(".next-service"),
        });
    });

    const date = new Date();
    const currentYear = document.querySelector('#current_year');
    currentYear.textContent = date.getFullYear();



})();