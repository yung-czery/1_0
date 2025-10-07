(function () {
  // 1_1.1
  const button = document.getElementById('ex1_button');
  const content1 = document.getElementById('ex1_content')

  const numbers = Array.from({ length: 10 }, (_, i) => i);

  button.addEventListener('click', () => {
    content1.textContent = numbers;
  })

  // 1_1.2
  const text = document.getElementById('ex2_text');
  const content2 = document.getElementById('ex2_content');

  text.addEventListener('input', () => {
    const value = text.value;
    
    if (/[a-zA-Z]/.test(value)) {
      content2.textContent = 'Numer nie może zawierać liter';
    } else if (/[^0-9]/.test(value)) {
      content2.textContent = 'Numer nie może zawierać znaków specjalnych';
    } else if (value.length !== 9) {
        content2.textContent = 'Długość numeru musi być równa 9';
    }  else if (value.length === 9) {
      content2.textContent = 'Numer telefonu jest poprawny';
    }
  })

  // 1_2.1
  const dragElement = document.getElementById('ex3_element');
  const containerOne = document.getElementById('ex3_one');
  const containerTwo = document.getElementById('ex3_two');

  dragElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  containerOne.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  containerTwo.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  containerOne.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    containerOne.appendChild(draggedElement);
  });

  containerTwo.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    containerTwo.appendChild(draggedElement);
  });
})();