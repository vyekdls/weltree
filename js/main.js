// main.js
//2단계 메뉴
$(function(){
    $('.depth1 > li').hover(
        function(){
            $('.depth2').stop().slideDown(200);
        },
        function(){
            $('.depth2').stop().slideUp(200);
        }
    )
});
$(function(){
    $('.box_1').hover(
        function(){
            $('.hover_1').stop().show();
        },
        function(){
            $('.hover_1').stop().hide();
        }
    )
});

$(function(){
    $('.box_2').hover(
        function(){
            $('.hover_2').stop().show();
        },
        function(){
            $('.hover_2').stop().hide();
        }
    )
});
$(function(){
    $('.box_3').hover(
        function(){
            $('.hover_3').stop().show();
        },
        function(){
            $('.hover_3').stop().hide();
        }
    )
});




