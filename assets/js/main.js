$(document).ready(function () {
  $(".header .nav-item").hover(
    function () {
      if ($(this).find(".sub-hover").length) {
        $(".header").addClass("on");
        $(this).find(".sub-hover").addClass("on");
      }
    },
    function () {
      $(".header").removeClass("on");
      $(this).find(".sub-hover").removeClass("on");
    }
  );

  $(".btn-menu").click(function () {
    $(".btn-menu,.side-nav").toggleClass("on");
  });

  $(".select-box").change(function () {
    $(this).css("color", "#000");
  });

  // 호버가 되면 컨텐츠는 잘 나타나는데... 영역밖을 나가는순간 호버가 꺼져버림..
  //teams-list영역에선 잘되어야하는데.. 그걸 잘 모르겠음!
  //그리고 새로고침하면 영역이 떠 있음;;

  // !!! 해결했는데 영역 문제였음 ㅎㅎ
  $("#langBtn").click(function (e) {
    e.preventDefault();
    $(".language-list").toggleClass("on");
  });
  // 자꾸 나타났다가 사라짐....

  var sitebtn = $("#site-btn").click(function () {
    $(".site-list").toggleClass("on");
    $(".link-more").toggleClass("on");
  });

  var swiper = new Swiper(".sc-visual .swiper", {
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
  });
  // 동영상이 세개씩 보임 하나씩 루프가 되어야하는데...

  // 팝서치 영역!!
  $(".btn-search2").click(function () {
    $(".pop-search").addClass("on");
  });

  $(".pop-search .close").click(function () {
    $(".pop-search").removeClass("on");
  });

  $(".pop-search .search").click(function (e) {
    if (!$(e.target).closest(".pop-search .search-wrapper").length) {
      $(".pop-search .search-wrapper").removeClass("on");
    }
    $(".pop-search .search-wrapper").toggleClass("on");
  });
  $(".pop-search .btn-tree").click(function () {
    $(this).find(".desc").toggleClass("on");

    $(this).closest(".item").find(".sub-list").toggleClass("on");
  });
  $(".pop-search .select").click(function () {
    $(this).toggleClass("on");
  });

  $(".sub-list .item .btn-tree").click(function () {
    // 현재 클릭된 버튼의 부모 요소인 .item에서만 .sub-item을 토글
    $(this).closest(".item").find(".sub-item").toggleClass("on");
  });

  $(".pop-search .select").click(function () {
    $(this).find("span").toggleClass("on");
  });

  //.sc-search .pop-search .list .item .select {

  $(".sc-search .pop-search .list .item .select span").click(function () {
    $(this).find("span").toggleClass("on");
  });

  $(".item-total").click(function () {
    // 가장 가까운 "item" 클래스를 가진 부모 요소를 찾고, 그 부모 요소 내에서 "select span"을 찾아 "on" 클래스를 토글합니다.
    $(this).closest(".item").find(".select span, .text").toggleClass("on");
  });

  $(".btn-clear").click(function () {
    $(".select span, .text").removeClass("on");
  });

  $(".side-nav .list-item").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });

  $(".side-nav .list-item").click(function (e) {
    e.preventDefault();
    $(".side-nav").find(".sub-list").toggleClass("on");
  });

  $(".language-list .item").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });

  var swiper = new Swiper(".people .swiper", {
    slidesPerView: 1,
    spaceBetween: "30",
    // loop: true,
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 1.1,
      },
    },
  });

  var swiper = new Swiper(".benefits .swiper", {
    slidesPerView: 1,
    spaceBetween: "30",
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
  });
});
