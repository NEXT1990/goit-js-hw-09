const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(e=>{o.starColor(),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(e=>{o.stopColor(),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));const o={starColor(){this.intervalId=setInterval((()=>{t.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(t.bodyColor.style.backgroundColor)}),1e3)},stopColor(){this.isActive=!1,clearInterval(this.intervalId)}};
//# sourceMappingURL=01-color-switcher.5f782367.js.map
