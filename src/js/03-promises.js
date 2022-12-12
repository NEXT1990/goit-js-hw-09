import Notiflix from 'notiflix';

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
    const delay = (startDelayToNumber += stepDeletToNubmer);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
