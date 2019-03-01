document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');
    const addBtn = document.querySelector('.addBtn');
    const inputField = document.querySelector('#toDoEl');

    class Task {
        constructor(task) {
            this._task = task;
        }

        addTask() {
            list.insertAdjacentHTML('beforeend', `<li>${this._task}<span class='close'>X</span></li>`);
        }
    }
    addBtn.addEventListener('click', () => {
        if (inputField.value === '') {
            alert('Введите ваше дело!');
        } else {
            const NewTask = new Task(inputField.value);
            NewTask.addTask();
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
