(function () {
  const button = document.getElementById('ex1_button');
  const content = document.getElementById('ex1_content')

  const numbers = Array.from({ length: 10 }, (_, i) => i);

  button.addEventListener('click', () => {
    content.innerHTML = numbers;
  })
})();