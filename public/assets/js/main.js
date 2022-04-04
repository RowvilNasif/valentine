(function() {
    $(document).ready(function() {
        $('.testimonial-slick').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: $(".previous-service"),
            nextArrow: $(".next-service"),
        })
    });
})()