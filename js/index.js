function event_setup() {
  // 當按 body 或按 選項時收起選單
  $(".navbar-collapse .nav-link, body").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
}

// main 裡面只執行一次
function main() {
  // event setup
  event_setup();
}

$(document).ready(main);
