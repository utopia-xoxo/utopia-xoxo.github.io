$(function(){
    

    //サイドナビのリンク表示位置
    $('#sideNav a[href^="#link_"]').each(function(){
    
        var target = $($(this).attr('href'));
        var offset = target.offset().top;
        var wrapHeight = $('#allWrap').outerHeight();
    
        //桁の調整
        var point = offset / wrapHeight * 100;
        var point = Math.floor(point);
        var point = point / 100;
    
        $(this).addClass('js_active').css('top', 'calc(90vh *' + point + ')');
    })
    
    
    //サイドナビの色変更
    $(window).on('scroll', function(){
        $('[id^="link_"]').each(function(){
            
            var scroll = $(window).scrollTop();
                
            var id = $(this).attr('id');
            var target = $('#sideNav li a[href="#' + id + '"]');
            
            var adjust = $(window).height() * 0.2;
            
            var offset = $(this).offset().top;
            var boxTop = offset - adjust;
            var boxBottom = offset + $(this).outerHeight() - adjust;
            
            if (boxTop <= scroll && scroll <= boxBottom) {
                $(target).addClass('active');
            } else {
                $(target).removeClass('active');
            }
        })
    })
    
    
    
    //画面内スクロール
    var navs = $('.navs');
    $('a[href^="#link_"]').on('click', function(){
    
        var href = $(this).attr('href');
        var scrollTo = $(href).offset().top - 40;
            
        navs.removeClass('view');
        $('html, body').animate({scrollTop : scrollTo}, 900)
        return false;
    })
    
    
    //ナビゲーション開閉
    $('#navTrigger').on('click', function(){
        navs.toggleClass('view');
    })
    $('.navWrap').on('click', function(){
        if(navs.hasClass('view')) {
            navs.removeClass('view')
        }
    })
})