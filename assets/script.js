jQuery(document).ready(function ($) {
    function loadPosts(numPosts = 5) {
        $.ajax({
            url: cps_ajax.ajaxurl,
            type: 'POST',
            data: {
                action: 'cps_get_latest_posts',
                num_posts: numPosts,
            },
            success: function (response) {
                $('.cps-slides').html(response);
            }
        });
    }

    loadPosts();

    let currentIndex = 0;

    $(document).on('click', '#cps-next', function () {
        let slides = $('.cps-slide');
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            $('.cps-slides').css('transform', `translateX(-${currentIndex * 100}%)`);
        }
    });

    $(document).on('click', '#cps-prev', function () {
        if (currentIndex > 0) {
            currentIndex--;
            $('.cps-slides').css('transform', `translateX(-${currentIndex * 100}%)`);
        }
    });
});
