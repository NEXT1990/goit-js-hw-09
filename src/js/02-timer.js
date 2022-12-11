import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
console.log(btnStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      alert('Please choose a date in the future');
      return;
    }
    btnStart.disabled = false;
    btnStart.addEventListener('click', event => {
      btnStart.disabled = true;
      setInterval(() => {
        const currentTime = Date.now();
        const decrement = selectedDates[0].getTime() - currentTime;
        console.log(decrement);
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

console.log(Date.now());
