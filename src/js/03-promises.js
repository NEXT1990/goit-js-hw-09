import Notiflix from 'notiflix';

/*
 * @param1 {string}: Required, a text in string format.
 * @param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
 * @param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
 */

let startDelay = 0;
let stepDelay = 0;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
}

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);

console.log(refs.delay, refs.step, refs.amount, refs.btnSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const delay = formElements.delay.value;
  const step = formElements.step.value;
  const amount = formElements.amount.value;
  console.log(formElements);
  const dataForm = {
    delay,
    step,
    amount,
  };
  let startDelayToNumber = Number(dataForm.delay);
  let stepDeletToNubmer = Number(dataForm.step);

  for (let position = 0; position < dataForm.amount; position += 1) {
    let delay = (startDelayToNumber += stepDeletToNubmer);

    createPromise(position, delay)
      .then((position, delay) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch((position, delay) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
