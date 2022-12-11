function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve('ку-ку, все получилось');
      } else {
        reject('О нет, это реджект!!');
      }
    }, 3000);
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
 