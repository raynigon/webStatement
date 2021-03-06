/*
    Carousel
    HUUUUUGEEE thanks to https://azmind.com/bootstrap-carousel-multiple-items/ -> html, css and js code for this realization are obtained from there
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-lang-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-lang-item').eq(i).appendTo('.carousel-languages');
            }
            else {
                $('.carousel-lang-item').eq(0).appendTo('.carousel-languages');
            }
        }
    }
});
