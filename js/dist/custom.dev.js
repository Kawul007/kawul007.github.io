"use strict";

var percentFlag = false; // 节流阀

function essayScroll() {
  var a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度

  var waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口

  result <= 99 || (result = 99);

  if (!percentFlag && waterfallResult + 100 >= document.documentElement.clientHeight && document.querySelector("#waterfall")) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(function () {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(function () {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  var r = window.scrollY + document.documentElement.clientHeight;
  var p = document.getElementById("post-comment") || document.getElementById("footer");
  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}

function replaceAll(e, n, t) {
  return e.split(n).join(t);
}

var anzhiyu = {
  diffDate: function diffDate(d) {
    var more = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dateNow = new Date();
    var datePost = new Date(d);
    var dateDiff = dateNow.getTime() - datePost.getTime();
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var result;

    if (more) {
      var monthCount = dateDiff / month;
      var dayCount = dateDiff / day;
      var hourCount = dateDiff / hour;
      var minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
      } else {
        result = GLOBAL_CONFIG.date_suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }

    return result;
  },
  changeTimeInEssay: function changeTimeInEssay() {
    document.querySelector("#bber") && document.querySelectorAll("#bber time").forEach(function (e) {
      var t = e,
          datetime = t.getAttribute("datetime");
      t.innerText = anzhiyu.diffDate(datetime, true), t.style.display = "inline";
    });
  },
  reflashEssayWaterFall: function reflashEssayWaterFall() {
    document.querySelector("#waterfall") && setTimeout(function () {
      waterfall("#waterfall");
      document.getElementById("waterfall").classList.add("show");
    }, 500);
  },
  commentText: function commentText(e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
        t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    n.value = "> " + o + "\n\n", n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80), n.focus(), n.setSelectionRange(-1, -1), document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
  initIndexEssay: function initIndexEssay() {
    setTimeout(function () {
      var essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
        passiveListeners: true,
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 3000
        },
        mousewheel: true
      });
      var essay_bar_comtainer = document.getElementById("bbtalk");

      if (essay_bar_comtainer !== null) {
        essay_bar_comtainer.onmouseenter = function () {
          essay_bar_swiper.autoplay.stop();
        };

        essay_bar_comtainer.onmouseleave = function () {
          essay_bar_swiper.autoplay.start();
        };
      }
    }, 100);
  }
};
anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();