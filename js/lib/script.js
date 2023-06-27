const appBtn=$('.app-btn');

appBtn.on({click:function(){
    $('.bar').toggleClass('add-app-btn');
    $('.mobile-nav').slideToggle(500)
}})

//news
const newsBannerWrap=$('.news-wraps');
const newsBanner=$('.news-wraps .news-wrap');
let current=0;
let newsInterval;

newsSlide()
function newsSlide(){
    newsInterval= setInterval(function(){
        let prev=newsBanner.eq(current);
        newsMove(prev, 0,'-100%');
        current++;
        if(current==newsBanner.size()) current=0;
        let next=newsBanner.eq(current);
        newsMove(next, '100%', 0)
    },2000)
}
function newsMove(tg, start, end){
    tg.css('top', start).stop().animate({top: end},500)
}

newsBannerWrap.hover(function(){
    clearInterval( newsInterval)
},function(){
    newsSlide()
})


//button
let buttonRadius=$('.btn li');
let line=$('.template-line-wrap .title li');

buttonRadius.click(function(){
    buttonRadius.removeClass('on');
    $(this).addClass('on');
    let lines=$(this).index();
    //console.log(lines)
    line.removeClass('on');
    line.eq(lines).addClass('on')
})

const slideBanner=$('#banner .banner-area .area');
const slideList=$('#banner .banner-area .area li');
const prevBtn=$('.banner-left-btn')
const nextBtn=$('.banner-right-btn')
let slideWidth=slideList.width();
let setIntervalId;
/* console.log(slideWidth) */
bannerSlide()
function bannerSlide(){
    setIntervalId=setInterval(()=>{
        slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
            $('#banner .banner-area .area li:first').insertAfter('#banner .banner-area .area li:last');
            slideBanner.css({left:0})
        })
    }, 2000)
}

$('.banner-left-btn, .banner-right-btn, .banner-area').on('mouseover', function(){
    clearInterval( setIntervalId)
})
$('.banner-left-btn, .banner-right-btn, .banner-area').on('mouseout', function(){
    bannerSlide()
})
function rightBtn(){
    slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
        $('#banner .banner-area .area li:first').insertAfter('#banner .banner-area .area li:last');
        slideBanner.css({left:0})
    })
}
function leftBtn(){
    $('#banner .banner-area .area li:last').insertBefore('#banner .banner-area .area li:first');
    slideBanner.css({left:-(slideWidth+15)}).stop().animate({left:0},500)
}
nextBtn.click(function(){
    rightBtn()
})

prevBtn.click(function(){
    leftBtn()
})

//bxslide
$('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
   
});