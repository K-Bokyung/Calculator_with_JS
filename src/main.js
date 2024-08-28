let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.value === 'clear') {
      input.value = '';
    } else {
      input.value += button.value;
    }
  });
});
