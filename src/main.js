let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.value === 'equals') {
      input.value = eval(input.value);
    } else if (button.value === 'clear') {
      input.value = '';
    } else if (button.value === 'divide') {
      input.value += '/';
    } else if (button.value === 'multi') {
      input.value += '*';
    } else if (button.value === 'minus') {
      input.value += '-';
    } else if (button.value === 'plus') {
      input.value += '+';
    } else if (button.value === 'delete') {
      input.value = input.value.slice(0, -1);
    } else if (input.value.length == 13) {
      alert('더 이상 입력할 수 없습니다.');
    } else {
      input.value += button.value;
    }
  });
});
