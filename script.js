(function () {
  // 1_1.1
  const button = document.getElementById('ex1_button');
  const content1 = document.getElementById('ex1_content')

  const numbers = Array.from({ length: 10 }, (_, i) => i);

  button.addEventListener('click', () => {
    content.innerHTML = numbers;
  })

  // 1_1.2
  const text = document.getElementById('ex2_text');
  const content2 = document.getElementById('ex2_content');

  text.addEventListener('input', () => {
    const value = text.value;
    if (/[^0-9]/.test(value)) {
      content2.innerHTML = 'Numer nie może zawierać znaków specjalnych';
    } else if (/[a-zA-Z]/.test(value)) {
      content2.innerHTML = 'Numer nie może zawierać liter';
    } else if (value.length !== 9) {
        content2.innerHTML = 'Długość numeru musi być równa 9';
    }  else if (value.length === 9) {
      content2.innerHTML = 'Numer telefonu jest poprawny';
    }
  })
})();