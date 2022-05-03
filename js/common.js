$(function () {
  let currentIndex = 0;
  $(window).on("mousewheel", function (e) {
    let d = e.originalEvent.wheelDelta;

    if (d > 0) {
      if (currentIndex === 0) {
        return;
      }

      if ($(".wrap div").is(":animated")) {
        return;
      }
      $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 500);
      console.log("이전 div index" + currentIndex);
      currentIndex = --currentIndex;
      //$(".wrap div").eq(currentIndex)의 top값이 0 되기 전에 100%으로 만들어놓아야함
      $(".wrap div").eq(currentIndex).stop().css({ top: "-100%" });
      $(".wrap div").eq(currentIndex).stop().animate({ top: "0" }, 500);
      console.log("지금 div index" + currentIndex);
    } else {
      if (currentIndex === $(".wrap div").length - 1) {
        return;
      }

      if ($(".wrap div").is(":animated")) {
        return;
      }
      $(".wrap div").eq(currentIndex).stop().animate({ top: "-100%" }, 500);
      currentIndex = ++currentIndex;
      //$(".wrap div").eq(currentIndex)의 top 값이 0이기 전에 -100%으로 만들어놓아야함
      $(".wrap div").eq(currentIndex).stop().css({ top: "100%" });
      $(".wrap div").eq(currentIndex).stop().animate({ top: "0" }, 500);
    }
    //마우스 업다운 delta 구분
  });
  //마우스휠 이벤트

  $("ul li").on("click", function () {
    //클릭 된 div만 끌어올리기

    let index = $(this).index();

    if ($(".wrap div").is(":animated")) {
      return;
    }

    if (index > currentIndex) {
      // 아래로 화면이동, div가 올라옴
      $(".wrap div").eq(currentIndex).stop().animate({ top: "-100%" }, 500);
      //$(".wrap div").eq(index)의 top값이 0 되기 전에 100%으로 만들어놓아야함
      $(".wrap div").eq(index).stop().css({ top: "100%" });
      $(".wrap div").eq(index).stop().animate({ top: "0" }, 500);
    } else if (index < currentIndex) {
      //위로 화면이동, div가 내려옴
      $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 500);
      //$(".wrap div").eq(index)의 top 값이 0이기 전에 -100%으로 만들어놓아야함
      $(".wrap div").eq(index).stop().css({ top: "-100%" });
      $(".wrap div").eq(index).stop().animate({ top: "0" }, 500);
    } else if (index == currentIndex) {
      return;
    }

    currentIndex = index;

    //클릭 한 currentIndex 전까지의 div top -100% 만들어주기
    // for (let i = 0; i < currentIndex; i++) {
    //   $(".wrap div").eq(i).css({ top: "-100%" });
    // }
    //클릭 한 currentIndex 후 모든 div top 100% 만들어주기
    // for (let i = currentIndex; i <= $("ul li").length; i++) {
    //   $(".wrap div").eq(i).css({ top: "100%" });
    // }
    console.log(`현재 활성화된 currentIndex ${currentIndex}`);
    console.log(`클릭한 li index ${index}`);

    //호출하려는 div의 top 값만 움직이기
  });
});
