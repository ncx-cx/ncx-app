import $ from 'jquery'; 

$(document).ready(function(){
    $('.loadingbar').delay(4500).animate({left: '0'}, 5500);
    $('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
    $('.splashupperscreen').delay(9000).animate({top: '-100%'}, 2000);
    $('.splashlowerscreen').delay(9000).animate({bottom: '-100%', opacity: '0'}, 3000);

    $('.splashScreen').delay(8300).queue(function(){
      $('.splashScreen').addClass("visibleSplash");
      $('.loadingContainer').delay(8000).addClass('splashdone');
      $('body').css({overflow: 'visible'});
      $('header.main-header').addClass("zindex-visible");
    });

    $(window).on('load', function(){
      $(this).scrollTop(0);
    });
});


$(document).ready(function() {
    if (window.location.href.indexOf("insights") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("privacy-policy") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("kyc-aml-policy") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("user-agreement") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("cookie-policy") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("api-agreement") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("buy-crypto") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("task-rewards") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("ncx-card") > -1){
      $("body").addClass("body-overflow");
    }else if (window.location.href.indexOf("ncx-otc") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("ncx-ambassador") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("market-maker") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("institutional") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("*") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("market") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("faq") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_security_google_2fa") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_deposits") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_withdrawal") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_spot_trading") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_learn") > -1){
      $("body").addClass("body-overflow");
    } else{
      $("body").removeClass("body-overflow");
    }

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#header-row").addClass("darkheader");
        }else{
            $("#header-row").removeClass("darkheader");
        }
    });


    window.onscroll = function() {myFunction()};
    var headera = document.getElementById("insight_page");
    var sticky = headera.offsetTop+0;
    function myFunction() {
      if (window.pageYOffset > sticky && window.pageYOffset < sticky + 7500) { // <--here
        headera.classList.add("sticky");
        $("#fixed_sticky_insights").addClass("blog-stick");
        $("#insight_page .col.first .leftsidebar").addClass("blog-stick");
        $("#insight_page .col.third .rightsidebar").addClass("blog-stick");
        $("#insight_page .support_leftbar").addClass("blog-stick");
        $("#insight_page .support_articles").addClass("blog-stick");
      } else {
        headera.classList.remove("sticky");
        $("#fixed_sticky_insights").removeClass("blog-stick");
        $("#insight_page .col.first .leftsidebar").removeClass("blog-stick");
        $("#insight_page .col.third .rightsidebar").removeClass("blog-stick");
        $("#insight_page .support_leftbar").removeClass("blog-stick");
        $("#insight_page .support_articles").removeClass("blog-stick");
      }
    }
});

// $(document).ready(function(){
//   window.onscroll = function() {myFunctionB()};
//     var header = document.getElementById("insight_detail");
//     var sticky = header.offsetTop+100;
//     function myFunctionB() {
//       if (window.pageYOffset > sticky && window.pageYOffset < sticky + 3000) {
//         header.classList.add("sticky-bar");
//         $("#insight_detail .leftsidebar").addClass("sticky-bar");
//         $("#insight_detail .rightsidebar").addClass("sticky-bar");
//       } else {
//         header.classList.remove("sticky-bar");
//         $("#insight_detail .leftsidebar").removeClass("sticky-bar");
//         $("#insight_detail .rightsidebar").removeClass("sticky-bar");
//       }
//     }
// });

// $(document).ready(function(){
//   window.onscroll = function() {myFunction()};
//     var header = document.getElementById("support_faq_details");
//     var sticky = header.offsetTop+100;
//     function myFunction() {
//       if (window.pageYOffset > sticky && window.pageYOffset < sticky + 3000) { // <--here
//         header.classList.add("sticky-bar");
//         $("#support_faq_details .support_leftbar").addClass("sticky-bar");
//         $("#support_faq_details .support_articles").addClass("sticky-bar");
//       } else {
//         header.classList.remove("sticky-bar");
//         $("#support_faq_details .support_leftbar").removeClass("sticky-bar");
//         $("#support_faq_details .support_articles").removeClass("sticky-bar");
//       }
//     }
// });


// ****************************************************************************
// $(document).ready(function($){
//   $(window).on('scroll', function(){
//       if($(window).scrollTop() >= $('.widerangencxproducts').offset().top){
//           $('.widerangencxproducts').addClass('stickyrow');
//           $('#btn-1').addClass('active-one');
//           $('#content-1').addClass('active-one');
//       } else if($(window).scrollTop() <= $('.widerangencxproducts').offset().top){
//         $('.widerangencxproducts').removeClass('stickyrow');
//         $('.pro-tabs').removeClass('active-one');
//         $('.pro-content').removeClass('active-one');
//       }
//   });
// });
