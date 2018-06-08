/*global $, jQuery, alert*/
$(document).ready(function () {

  'use strict';

  // ========================================================================= //
  //  Hover Gif
  // ========================================================================= //

  $('#header-1').mouseover(function () {
    $('#header-1').attr('src','images/home/gifs/1.gif');
    // play sound
    document.getElementById('audio-1').load();
    document.getElementById('audio-1').play();
  });
  $('#header-1').mouseout(function () {
    $('#header-1').attr('src', 'images/home/photos/1.jpg');
    // stop sound
    document.getElementById('audio-1').pause();
  })

  $('#header-7').mouseover(function () {
    $('#header-7').attr('src','images/home/gifs/7.gif');
    // play sound
    document.getElementById('audio-7').play();
  });
  $('#header-7').mouseout(function () {
    $('#header-7').attr('src', 'images/home/photos/7.jpg');
    // stop sound
    document.getElementById('audio-7').pause();
    document.getElementById('audio-7').currentTime = 0;
  })

  $('#header-11').mouseover(function () {
    $('#header-11').attr('src','images/home/gifs/11.gif');
    // play sound
    document.getElementById('audio-11').play();
  });
  $('#header-11').mouseout(function () {
    $('#header-11').attr('src', 'images/home/photos/11.jpg');
    // stop sound
    document.getElementById('audio-11').pause();
    document.getElementById('audio-11').currentTime = 0;
  })

  $('#header-13').mouseover(function () {
    $('#header-13').attr('src','images/home/gifs/13.gif');
    // play sound
    document.getElementById('audio-13').play();
  });
  $('#header-13').mouseout(function () {
    $('#header-13').attr('src', 'images/home/photos/13.jpg');
    // stop sound
    document.getElementById('audio-13').pause();
    document.getElementById('audio-13').currentTime = 0;
  })

  $('#header-18').mouseover(function () {
    $('#header-18').attr('src','images/home/gifs/18.gif');
    // play sound
    document.getElementById('audio-18').play();
  });
  $('#header-18').mouseout(function () {
    $('#header-18').attr('src', 'images/home/photos/18.jpg');
    // stop sound
    document.getElementById('audio-18').pause();
    document.getElementById('audio-18').currentTime = 0;
  })
  
  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function () {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Infographics Image Switch
  // ========================================================================= //
  $('#translate').click(function () {
    var currentImg = $('#info-switch').attr('src');
    // if in english
    if (currentImg == 'images/infographic-eng.png') {
      $('#info-switch').attr('src', 'images/infographic-span.png').fadeTo();
      $('.translate-btn').text('In English');
    }
    // if in spanish
    else {
      $('#info-switch').attr('src', 'images/infographic-eng.png').fadeIn("slow");
      $('.translate-btn').text('En Español');
    }
  });
});
