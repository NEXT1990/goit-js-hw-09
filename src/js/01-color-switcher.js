function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};


refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', event => {
  colorChenger.starColor();
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
});
refs.btnStop.addEventListener('click', event => {
  colorChenger.stopColor();
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
});

const colorChenger = {
  starColor() {
    this.intervalId = setInterval(() => {
      refs.bodyColor.style.backgroundColor = getRandomHexColor();
      console.log(refs.bodyColor.style.backgroundColor);
    }, 1000);
  },
  stopColor() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};
