(function (root) {
  function init_rem() {
    var irate = 625;
    var iw = 750;
    var win = window;
    var w = document.documentElement.clientWidth;
    var doc = document;
    var irate = 625 / (iw / w);
    irate = Math.min(irate, 1000);
    doc.documentElement.style.fontSize = irate * 0.16 + "px";
  }

  function modifileRootRem() {
    var root = window.document.documentElement;
    var fontSize = parseFloat(root.style.fontSize);
    var finalFontSize = parseFloat(window.getComputedStyle(root).getPropertyValue("font-size"));
    if (finalFontSize === fontSize) return;
    root.style.fontSize = fontSize + (fontSize - finalFontSize) + "px";
  }
  init_rem();
  modifileRootRem();

  root.addEventListener('resize', function () {
    init_rem()
    modifileRootRem()
  })

  root.$rem = {
    //rem 转 px
    rem2px: function (rem) {
      var fz = parseInt(document.documentElement.style.fontSize)
      return fz * rem
      // return Math.round(16 * fz * rem) / 100
    },
    //px 转 rem
    px2rem: function (px) {
      var fz = parseInt(document.documentElement.style.fontSize)
      return (px / fz)
      // return 100 * px / (16 * fz)
    }
  }
})(window)
