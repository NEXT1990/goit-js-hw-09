!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(n){o.starColor(),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(n){o.stopColor(),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));var o={starColor:function(){this.intervalId=setInterval((function(){t.bodyColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log(t.bodyColor.style.backgroundColor)}),1e3)},stopColor:function(){this.isActive=!1,clearInterval(this.intervalId)}}}();
//# sourceMappingURL=01-color-switcher.d1bc079a.js.map
