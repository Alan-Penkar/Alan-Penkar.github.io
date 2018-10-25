---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.nav-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    document.getElementById("AboutElem").style.visibility = "hidden";
    document.getElementById("BlogElem").style.visibility = "visible";
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

    if (window.location.hash && window.location.hash == '#about') {
        document.getElementById("AboutElem").style.visibility = "visible";
        document.getElementById("BlogElem").style.visibility = "hidden";
        $('.panel-cover').addClass('panel-cover--collapsed')
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
