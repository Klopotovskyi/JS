document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');
    const addBtn = document.querySelector('.addBtn');
    const inputField = document.querySelector('#toDoEl');


    addBtn.addEventListener('click', () => {
        if (inputField.value === '') {
            alert('Введите ваше дело!');
        } else {
            const taskElement = document.createElement('li');
            list.appendChild(taskElement);
            taskElement.innerText = inputField.value;
            const span = document.createElement('SPAN');
            const txt = document.createTextNode('X');
            span.className = 'close';
            span.appendChild(txt);
            taskElement.appendChild(span);
        }
    });

    inputField.addEventListener('keypress', (evt) => {
        if (evt.key === 'Enter') {
            addBtn.click();
        }
    });

    list.addEventListener('click', (evt) => {
        const CurrentTask = evt.target;
        if (evt.target.tagName === 'LI') {
            CurrentTask.classList.toggle('checked-task');
        } else if (evt.target.tagName === 'SPAN') {
            const div = evt.target.parentNode;
            div.remove();
        }
    }, false);
});
