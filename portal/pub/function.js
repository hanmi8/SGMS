$(document).ready(function () {
    $('nav.gnb ul.menu').addClass('i' + $('nav.gnb ul.menu > li').length);
    $('nav.gnb button.menu').on('click', function () {
        $('nav.gnb').toggleClass('on');
        console.log("click");
    });
    $('header.common button.menu').on('click', function () {
        $('nav.gnb button.menu').click();
        $(this).toggleClass('on');
    });

    $('nav.gnb ul.menu > li').each(function () {
        $(this).find('.depth2').addClass('i' + $(this).find('dt, li').length);
    });
    $('nav.gnb ul.menu button').on('click', function () {
        $(this).parent().toggleClass('on').siblings('.on').removeClass('on');
    });

    $('nav.gnb ul.menu button').on('click', function () {
        $('nav.gnb').addClass('on');
    });
    // $('nav.gnb').on('mouseleave', function () {
    //     $('nav.gnb').removeClass('on');
    // });

    
    /* top 버튼 */
    $('body').append('<div class="gotoTop"><i class="fa fa-chevron-up"></i>TOP</div>');
    $(document).scroll(function() {
        var st = $(window).scrollTop();
        var h = $(window).height() - 60;
        $(".gotoTop").stop().animate( { "top": st + h }, 500 );
    }).scroll();


    $( '.gotoTop' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 300 );
        return false;
    });

    /* tab */
    $('.tabs').find('li').click(function(){
        event.preventDefault();
        var tabsID = $(this).children('a').attr('href');
        $('.tabSection').removeClass('active');
        $(tabsID).addClass('active');

        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        console.log("click");
        console.log(tabsID);
    });

    $('.tabs').find('select').change(function(){
        var tabsID = $('option:selected').val();
        $('.tabSection').removeClass('active');
        $(tabsID).addClass('active');
        //
        // $(this).siblings('li').removeClass('active');
        // $(this).addClass('active');
        console.log(tabsID);
    });

    $('.tabContents').find('dt').click(function(){
        $(this).next('dd').slideToggle(200);
        $(this).toggleClass('on');
        $(this).find('i').removeClass();
        $(this).find('i').toggleClass(function(){
            if ($(this).parents('dt').is('.on')) {
                return 'fa fa-minus' ;
            } else {
                return 'fa fa-plus' ;
            }
        });
    });

    /* modal */
    $('button.btn').click(function(){
        var modalCallID = $(this).attr("name");
        $('#'+ modalCallID +'.modal').show();
        $('body').addClass('modal-open');
        $('#'+ modalCallID +'.modal').prepend('<div class="modal-backdrop"></div>')
    });
    $('.cancle').click(function () {
        $('body').removeClass('modal-open');
        $('.modal').hide();
        $('.modal-backdrop').remove();
    });
    $('a.close').click(function () {
        $('body').removeClass('modal-open');
        $('.modal').hide();
        $('.modal-backdrop').remove();
    });


    /* 하단 흐르는 배너 */
    // $(".relatives ul").carouFredSel({
    //     align : "left",
    //     width : 1128, // 가로길이
    //     height : 47, // 세로길이
    //     items : {
    //         visible : 5 // 보여지는 갯수 (5개가 보여진다면 +1을 하여 버블링 효과를 막는다.)
    //     },
    //     scroll : {
    //         items : 1, // 롤링넘어가는 갯수
    //         duration : 400, // 롤링 속도
    //         pauseOnHover : false // 마우스 오버시 롤링멈춤 true, 롤링작동 false
    //     },
    //     next : ".next", // 오른쪽으로 이동 버튼
    //     prev : ".prev", // 왼쪽으로 이동 버튼
    //     direction : "left" // 롤링 방향
    // });

    // $("#banner_pause").click(function(){
    //     $("#banner ul").trigger("pause");
    //     $("#banner_stop").hide();
    //     $("#banner_start").show();
    //     return true;
    // });
    //
    // $("#banner_play").click(function(){
    //     $("#banner ul").trigger("play", 1);
    //     $("#banner_stop").show();
    //     $("#banner_start").hide();
    //     return true;
    // });



    // var $relativesUl = $('.relatives ul'),
    //     $relativesLi = $relativesUl.children('li'),
    //     relativesNum = $relativesLi.length,
    //     relativesCurrent = 0,
    //     $relativesNav = $('.relatives nav'),
    //     relativesAniTime = 200,
    //     relativesAni = false;
    //
    // $relativesUl.parent().addClass('i' + relativesNum);
    // if (relativesNum < 1) {
    //     $relativesNav.hide();
    // } else {
    //     $relativesLi.filter(':lt(5)').clone().addClass('clone').appendTo($relativesUl);
    //     $relativesNav.find('button.prev').on('click', function () {
    //         if (relativesAni) return;
    //         relativesAni = true;
    //         relativesCurrent --;
    //         if (relativesCurrent < 0) {
    //             relativesCurrent = relativesNum - 1;
    //             $relativesUl.css('left', (relativesNum) * -20 + '%');
    //         }
    //         $relativesUl.stop().animate({'left': relativesCurrent * -20 + '%'}, relativesAniTime, function () {relativesAni = false});
    //     });
    //     $relativesNav.find('button.next').on('click', function () {
    //         if (relativesAni) return;
    //         relativesAni = true;
    //         relativesCurrent ++;
    //         $relativesUl.stop().animate({'left': relativesCurrent * -20 + '%'}, relativesAniTime, function () {
    //             if (relativesCurrent == relativesNum) {
    //                 relativesCurrent = 0;
    //                 $relativesUl.css('left', '0%');
    //             }
    //             relativesAni = false
    //         });
    //     });
    // }
});

function fn_index () {
    $(document).ready(function () {
        var $mainbannerLi = $('.mainbanner ul.banner li'),
            $mainbannerPrev = $('.mainbanner nav > button.prev'),
            $mainbannerNext = $('.mainbanner nav > button.next'),
            $mainbannerDots = $('.mainbanner nav ul'),
            mainbannerCurrent = 1,
            mainbannerAni = false,
            mainbannerAniTime = 300,
            mainbannerDirection = 0,
            mainbannerAutoTimer,
            mainbannerAutoInterval = 5000;

        $mainbannerLi.each(function (i) {
            var $target = $(this),
                $prevTarget,
                no = i + 1,
                $button = $('<button type="button">' + no + '</button>');

            $mainbannerDots.append('<li></li>');
            $mainbannerDots.children('li:last-child').append($button);

            $button.on('click', function () {
                if ($(this).parent().is('.on') || mainbannerAni) return;
                mainbannerAni = true;
                if (mainbannerDirection == 0) {
                    mainbannerDirection = mainbannerCurrent < no ? 1 : -1;
                }
                mainbannerCurrent = no;

                $prevTarget = $mainbannerLi.filter('.on');

                $prevTarget.add($mainbannerDots.find('.on')).removeClass('on');
                $(this).parent().addClass('on');

                $mainbannerLi.filter('.on').removeClass('on')
                $target.addClass('on').css('left', 100 * mainbannerDirection + '%');
                $prevTarget.animate({'left': 100 * mainbannerDirection * -1 + '%'}, mainbannerAniTime);
                $target.animate({'left': 0}, mainbannerAniTime, function () {
                    mainbannerAni = false;
                });
                mainbannerDirection = 0;
            });
            $mainbannerPrev.on('click', function () {
                clearTimeout(mainbannerAutoTimer);
                mainbannerAutoTimer = setTimeout(function () {
                    $mainbannerNext.click();
                }, mainbannerAutoInterval);

                mainbannerDirection = -1;
                if ($mainbannerDots.find('.on').is(':first-child')) {
                    $mainbannerDots.find('li:last-child').find('button').click();
                } else {
                    $mainbannerDots.find('.on').prev().find('button').click();
                }
                $mainbannerDots.find('.on').parent().prev
            });
            $mainbannerNext.on('click', function () {
                clearTimeout(mainbannerAutoTimer);
                mainbannerAutoTimer = setTimeout(function () {
                    $mainbannerNext.click();
                }, mainbannerAutoInterval);

                mainbannerDirection = 1;
                if ($mainbannerDots.find('.on').is(':last-child')) {
                    $mainbannerDots.find('li:first-child').find('button').click();
                } else {
                    $mainbannerDots.find('.on').next().find('button').click();
                }
                $mainbannerDots.find('.on').parent().prev
            });
        });

        $('.mainbanner').swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
            switch(direction) {
                case 'left':
                    $mainbannerNext.click();
                    break;
                case 'right':
                    $mainbannerPrev.click();
                    break;
            }
        },
        threshold: 0,
        allowPageScroll: 'vertical'
    });

        $mainbannerLi.filter(':first-child').addClass('on').css('left', '0%');
        $mainbannerDots.find('li:first-child').addClass('on');

        mainbannerAutoTimer = setTimeout(function () {
            $mainbannerNext.click();
        }, mainbannerAutoInterval);

    });
}

function fn_introSystem () {
    var desktop = false,
        direction = '',
        scrollTimer,
        scrollPosition = 0,
        scrollAniPlay = false,
        flickerPosition = new Array();

    function desktopCheck () {
        desktop = $(window).width() > 1199 && $(window).height() > 870 ? true : false;
    }

    function flikerPositionSetting () {
        flickerPosition.length = 0;
        $('main.sub article').each(function () {
            flickerPosition[flickerPosition.length] = $(this).offset().top;
        });
        flickerPosition[0] = 0;

        console.log(flickerPosition);
    }

    desktopCheck();
    flikerPositionSetting ();

    $(window).on('resize', function () {
        desktopCheck();
        flikerPositionSetting ();
    });

    $('html, body').on('mousewheel DOMMouseScroll', function (e) {
        if (!desktop) return;

        event.preventDefault();
        var direction = e.originalEvent.wheelDelta,
            delta;

        if (e.originalEvent.detail) {
            delta = e.originalEvent.detail * -40;
        }else{
            delta = e.originalEvent.wheelDelta;
        }

        direction = delta > 0 ? 'up' : 'down';


        if (Math.abs(delta) > 10 && !scrollAniPlay) {

            var target = 0;

            for (var i = 0; i < flickerPosition.length; i ++) {
                if ($(window).scrollTop() > flickerPosition[i]) {
                    target ++;
                }
            }

            if (target == flickerPosition.length - 1 && direction == 'down') return;

            target = direction == 'up' ? target - 1 : target + 1;

            scrollAniPlay = true;

            $('html, body').stop().animate({'scrollTop': flickerPosition[target] - 50}, 1000, function () {
                scrollAniPlay = false;
            });
        }
    });

}

