import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const LOCAL_KEY = 'feedback-form-state';
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let formObjectValues = {};
ifParsedData();
form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
  formObjectValues[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formObjectValues));
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  console.log(formObjectValues);
}

function ifParsedData(params) {
  const parseData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (localStorage.getItem(LOCAL_KEY)) {
    input.value = parseData.email || '';
    textarea.value = parseData.message || '';
  }
}
