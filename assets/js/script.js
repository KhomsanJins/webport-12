new WOW({
    scrollContainer: '#page'
}).init();

jQuery(document).ready(function ($) {

    // toggle edit
    $('.toggle-menubar').click(function () {
        $('.sub-menu').toggleClass('active');
    })

    // toggle
    $('.toggle-menu').click(function () {
        $('.mobile-menu').toggleClass('active');
    })

    // lightSlider
    $('#imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 4,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        // onSliderLoad: function (el) {
        //     el.lightGallery({
        //         selector: '#imageGallery .lslide'
        //     });
        // }
    });

    // Main Slide
    $('#items-slide').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMove: 1,
        slideMargin: 0,
        // mode: 'fade',
        pause: 4000,
        enableDrag: false,
        enableTouch: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // isotope
    let gridIso = $('.grid-iso').isotope({
        itemSelector: '.grid-iso-item'
    });

    $('.list-our-project-mobile').change(function () {
        let filterValue = $(this).val();
        console.log(filterValue);
        gridIso.isotope({
            filter: '.' + filterValue
        });

    });
    $('.list-our-project-destop li').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.list-our-project-destop li').removeClass('active');
        $(this).addClass('active');
        console.log($(this).text());
        gridIso.isotope({
            filter: '.' + $(this).data().filter
        });
    });

    // Products Auto Motion Slide
    $('.products-slide').lightSlider({
        item: 3,
        loop: true,
        auto: false,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 0,
                    enableDrag: true,
                    enableTouch: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                    enableDrag: true,
                    enableTouch: true,
                }
            }
        ]
    });

    // Products Auto Motion Slide
    $('.products-slide1').lightSlider({
        item: 3,
        loop: true,
        auto: false,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 0,
                    enableDrag: true,
                    enableTouch: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                    enableDrag: true,
                    enableTouch: true,
                }
            }
        ]
    });

});