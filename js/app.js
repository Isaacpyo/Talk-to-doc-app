"use strict";

(function ($) {
  /*------------------
      Preloader
  --------------------*/

  /*------------------
      Background Set
  --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*-------------------
  Category Select
--------------------- */
  $(".ca-search").niceSelect();

  /*-------------------
  Local Select
--------------------- */
  $(".lo-search").niceSelect();

  /*-------------------
  Arrange Select
--------------------- */
  $(".arrange-select select").niceSelect();
})(jQuery);

$("#submit").click(function () {
  var signupEmail = $("#signup-email").val();
  var signupPassword = $("#signup-password").val();

  if (signupEmail == "" || signupPassword == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    Swal.fire(
      "Thank You for Signing Up!",
      "Please check your email to verify your email address."
    );
    console.log(swal.fire);
  }
});

$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

AOS.init({
  duration: 800,
  easing: "slide",
  once: false,
});

jQuery(document).ready(function ($) {
  "use strict";

  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });
  };
  siteStellar();
});
