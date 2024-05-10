
function fb_messenger_setup() {

    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "552194831537743");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v13.0'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}


function event_setup() {

    // 當按 body 或按 選項時收起選單
    $(".navbar-collapse .nav-link, body").click(function() {
        $(".navbar-collapse").collapse("hide");
    });


}

// main 裡面只執行一次
function main() {

    // fb messenger chatbox
    fb_messenger_setup();

    // event setup
    event_setup();
}


$(document).ready(main);