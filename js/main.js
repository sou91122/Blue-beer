// login page btn

$(".login-page-main .left-area .btn.btn-type1.signup-btn").click(function(){
    $(".login-page-main .left-area .btn.btn-type1.signup-btn").toggleClass("active");
    $(".login-page-main .left-area .btn.btn-type1.login-btn").toggleClass("active");
    $(".login-page-main .right-area .right-main.login").toggleClass("active");
    $(".login-page-main .right-area .right-main.signup").toggleClass("active");
  });
  $(".login-page-main .left-area .btn.btn-type1.login-btn").click(function(){
    $(".login-page-main .left-area .btn.btn-type1.signup-btn").removeClass("active");
    $(".login-page-main .left-area .btn.btn-type1.login-btn").toggleClass("active");
    $(".login-page-main .right-area .right-main.login").removeClass("active");
    $(".login-page-main .right-area .right-main.signup").toggleClass("active");
  });

  //   toggle-menu
$("header .togglemenu-btn").click(function(){
    $(".toggle-menu-area").toggleClass("active");
  });
//   toggle-menu-area
$(".toggle-menu-area .menu-box .head-area").click(function(){
    $(this).toggleClass("active");
  });


  // checkout panel increment decrement
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.updown-btn .input-number'))

// ---------cart main-area----------
$(".cart-main-area .head-area h4 span, .menu-area li a span.cart-icon").click(function(){
  $(".cart-main-area").toggleClass("active");
});

// exzoom
$(function(){
  $("#exzoom").exzoom({
      "autoPlay": false,
  });
});

// -------product page filter
$(".filter-main-menu .filter-btn .btn").click(function(){
  $(".filter-main-box").toggleClass("active");
  $(".filter-main-menu ul.filter-btn li .btn span svg").toggleClass("active");

});

$(".viewtype-main .view-type2 button").click(function(){
  $(".all-product-sec .container .row").addClass("flex-column");
});

$(".viewtype-main .view-type1 button").click(function(){
  $(".all-product-sec .container .row").removeClass("flex-column");
});

 //   header-search-bar
$("li.search-part, .search-box button").click(function(){
  $("header .search-box").toggleClass("active");
});