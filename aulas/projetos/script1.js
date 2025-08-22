document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Digite uma tarefa!');
    return;
  }

  const taskList = document.getElementById('taskList');

  // Criar elementos
  const li = document.createElement('li');
  const span = document.createElement('span');
  const removeBtn = document.createElement('button');

  span.textContent = taskText;
  removeBtn.textContent = 'Remover';

  // Adicionar evento para marcar como feito
  span.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  // Adicionar evento para remover
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  // Montar item da lista
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Limpar campo
  taskInput.value = '';
}