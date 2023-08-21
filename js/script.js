// console.log('workshop dom');
// console.dir(document);
// document.title = 'My todos';

// Get input text
var inputs = document.getElementsByTagName('input');
// console.dir(inputs[0]);

// Get add button
var addBtns = document.getElementsByClassName('addBtn');
// console.dir(addBtn);

// Get todo list element
var todoList = document.getElementsByClassName('todo-list')[0];
console.log(todoList);

// Add event listener to add button
addBtns[0].addEventListener('click', handleClick);

// Get all trash icons
var trashIcons = document.getElementsByClassName('fa-trash-can');

// var trashIcons = document.querySelectorAll('.fa-trash-can');

console.log(trashIcons);

function handleClick(event) {
  // console.log(event.target);
  // console.dir(inputs[0].value);

  if (inputs[0].value === '') {
    alert('Please enter a task');
  } else {
    // Create list item element
    var li = document.createElement('li');
    // console.log(li);

    // Create span element
    var span = document.createElement('span');
    span.innerText = inputs[0].value;
    // console.log(span);

    // Create trash can icon element
    var trashIcon = document.createElement('i');

    // Add 'fa-solid' and 'fa-trash-can' classes to trachIcon
    trashIcon.classList.add('fa-solid', 'fa-trash-can');
    // console.log(trashIcon);

    // Append span and trach icon to li
    li.append(span, trashIcon);

    // Append li to todo list element
    todoList.append(li);

    // Clear input value
    inputs[0].value = '';

    console.log(trashIcons);

    // Add click event listener to span
    span.addEventListener('click', function (event) {
      console.log(event.target);
      event.target.classList.toggle('completed');
    });

    // Add click event listener to trash icon
    trashIcon.addEventListener('click', function (event) {
      console.log(event.target);
      event.target.parentElement.remove();
    });
  }
}
