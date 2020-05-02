/*  ---------------------------------------------------
    Template Name: Local Direction
    Description: Local Direction HTML Template
    Author: Colorlib
    Author URI: https://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

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

  /*----------------------
        Testimonial Slider
    -----------------------*/
  // $(".testimonial-item").owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   nav: true,
  //   items: 1,
  //   dots: false,
  //   navText: [
  //     '<i class="fa fa-angle-left"></i>',
  //     '<i class="fa fa-angle-right"></i>',
  //   ],
  //   smartSpeed: 1200,
  //   autoplay: false,
  // });

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

  /*-------------------
  Radio Btn
--------------------- */
  $(".filter-left .category-filter .category-option .co-item label").on(
    "click",
    function () {
      $(
        ".filter-left .category-filter .category-option .co-item label"
      ).removeClass("active");
      $(this).addClass("active");
    }
  );

  $(".filter-left .rating-filter .rating-option .ro-item label").on(
    "click",
    function () {
      $(
        ".filter-left .rating-filter .rating-option .ro-item label"
      ).removeClass("active");
      $(this).addClass("active");
    }
  );

  $(".filter-left .distance-filter .distance-option .do-item label").on(
    "click",
    function () {
      $(
        ".filter-left .distance-filter .distance-option .do-item label"
      ).removeClass("active");
      $(this).addClass("active");
    }
  );
})(jQuery);
