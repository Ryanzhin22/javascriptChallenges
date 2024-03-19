const check = document.getElementsByClassName('check')[0];
const toDos = document.getElementById('toDos');
const addToDoInput = document.querySelector('#addToDoInput');
const addToDo = document.querySelector('.addToDo');
const filterToDo = document.querySelector('.filterToDo');
const displayToDo = document.querySelector('.displayToDo');
const displayEditToDo = document.querySelector('.displayEditToDo');
const cancelEdit = document.querySelector('.cancelEdit');
const confirmEdit = document.querySelector('.confirmEdit');
const inputEdit = document.querySelector('.inputEdit');

let nomeAntigo;

const removeDisabledDisplay = () => {
    displayEditToDo.classList.remove('disabled');
    displayToDo.classList.remove('disabled');
};

toDos.addEventListener('click', (e) => {
    // DAR CHECK
    if (e.target.classList.contains('check')) {
        e.target.parentElement.parentElement.classList.toggle('checked');
        e.target.parentElement.parentElement.classList.toggle('pending');
        e.target.parentElement.parentElement.classList.toggle('completed');
    }

    // EDITAR

    if (e.target.classList.contains('edit')) {
        removeDisabledDisplay();
        displayToDo.classList.add('disabled');

        nomeAntigo =
            e.target.parentElement.parentElement.firstElementChild.innerText;
        inputEdit.value = nomeAntigo;
    }

    // REMOVER
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});

// CONFIRMAR
confirmEdit.addEventListener('click', () => {
    removeDisabledDisplay();
    displayEditToDo.classList.add('disabled');

    let novoNome = inputEdit.value;
    let allTodos = [...document.querySelectorAll('.toDo')];
    allTodos.map((todo) => {
        if (todo.firstElementChild.innerText == nomeAntigo) {
            todo.firstElementChild.innerText = novoNome;
        }
    });
});

// CANCELAR
cancelEdit.addEventListener('click', () => {
    removeDisabledDisplay();
    displayEditToDo.classList.add('disabled');
});

//ADICIONAR TO DO
addToDo.addEventListener('click', () => {
    if (addToDoInput.value) {
        const nomeTarefa = addToDoInput.value;

        const htmlToDo = `
            <div class="toDo pending">
                <p>${nomeTarefa}</p>
                <div class="buttonWrapper">
                    <i class="check fa-solid fa-check"></i>
                    <i class="edit fa-solid fa-pen"></i>
                    <i class="delete fa-solid fa-trash"></i>
                </div>
            </div>`;

        toDos.innerHTML += htmlToDo;
        addToDoInput.value = '';
        addToDoInput.focus();
    } else {
        alert('Coloque um nome para sua tarefa!');
    }
});

//FILTRO TO DO
filterToDo.addEventListener('click', (e) => {
    const showAllTodos = () => {
        allTodos.map((todo) => {
            todo.classList.remove('disabled');
        });
    };

    const removeSelected = () => {
        const selected = document.querySelector('.bottomLine');
        if (selected) {
            selected.classList.remove('bottomLine');
        }
    };

    let allTodos = [...document.querySelectorAll('.toDo')];

    let toDosFiltereds = allTodos.filter((tD) => {
        return tD.classList.contains('pending');
    });

    if (e.target.innerText == 'Todos') {
        showAllTodos();

        //Filtro selecionado
        removeSelected();
        e.target.classList.add('bottomLine');
    }

    if (e.target.innerText == 'Pendentes') {
        showAllTodos();

        //Filtro selecionado
        removeSelected();
        e.target.classList.add('bottomLine');

        let toDosFiltereds = allTodos.filter((tD) => {
            return tD.classList.contains('pending');
        });
        let toDosCompleteds = allTodos.filter((todo) => {
            return !toDosFiltereds.includes(todo);
        });

        toDosCompleteds.map((complete) => {
            complete.classList.add('disabled');
        });
    }

    if (e.target.innerText == 'Completos') {
        showAllTodos();

        //Filtro selecionado
        removeSelected();
        e.target.classList.add('bottomLine');

        let toDosCompleteds = allTodos.filter((todo) => {
            return toDosFiltereds.includes(todo);
        });

        toDosCompleteds.map((complete) => {
            complete.classList.add('disabled');
        });
    }
});
