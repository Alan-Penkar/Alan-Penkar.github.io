---
layout: null
sitemap:
  exclude: 'yes'
---
$(document).ready(function () {
  $('a.nav-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    var currentWidth = $('.panel-cover').width();
    if (currentWidth > 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('#chat').addClass('show')
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      //$('.content-wrapper').addClass('animated slideInRight')
      //$('.content-wrapper__inner').addClass('animated slideInRight')
      //$('.panel-cover').addClass('panel-cover--collapsed')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('#chat').addClass('show')
      //$('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
  })

  if (window.location.hash && (window.location.hash == '#blog' || window.location.hash == '#about')) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('#chat').addClass('show')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .nav-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
