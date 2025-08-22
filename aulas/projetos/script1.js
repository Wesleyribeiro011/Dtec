document.getElementById('addBtn').onclick = () => {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) {
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `<span>${text}</span><button>Remover</button>`;

  li.querySelector('span').onclick = () => {
    li.classList.toggle('done');
  };

  li.querySelector('button').onclick = () => {
    li.remove();
  };

  document.getElementById('taskList').appendChild(li);
  input.value = '';
};