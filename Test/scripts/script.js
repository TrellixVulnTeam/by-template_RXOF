$(document).ready(function (){
    $(".content_wrapper_right_form_country").click(function (){
        $('.select_ul').toggleClass('active')
    })

    $('.select_ul li').click(function (){
        let cur = $(this).html()
        $('.default_option li').html(cur)
    })
});