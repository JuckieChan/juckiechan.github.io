/* eslint-disable */

const add = document.querySelector('.add')
const clear = document.querySelector('.clear')
let isCardBeingEdited = false;

const storage = JSON.parse(localStorage.getItem('users')) || {}

/**
 * Функция добавления слушателей на кнопки удаления и изменения
 * в карточке пользователя
 * @param {HTMLDivElement} userCard - карточка пользователя
 */
function setListeners(userCard) {
    const deleteBtn = userCard.querySelector('.delete')
    const changeBtn = userCard.querySelector('.change')

    const userEmail = deleteBtn.dataset.deleteUserEmail

    deleteBtn.addEventListener('click', () => {
        console.log(
            `%c Удаление пользователя ${userEmail} `,
            'background: red; color: white',
        )
        delete storage[userEmail]
        Object.keys(storage).length
            ? localStorage.setItem('users', JSON.stringify(storage))
            : localStorage.removeItem('users')
        userCard.remove()
    })

    changeBtn.addEventListener('click', () => {
        console.log(
            `%c Изменение пользователя ${userEmail} `,
            'background: green; color: white',
        )
        isCardBeingEdited = true;
        document.querySelector('#login').value = storage[userEmail].login
        document.querySelector('#name').value = storage[userEmail].name
        document.querySelector('#secondName').value = storage[userEmail].secondName
        document.querySelector('#email').value = storage[userEmail].email
        document.querySelector('#password').value = storage[userEmail].password
        document.querySelector(`.gender[value="${storage[userEmail].gender}"]`).checked = true;
    })
}

/**
 * Функция создания карточки пользователя
 * @param {Object} data - объект с данными пользователя
 * @param {string} data.name - имя пользователя
 * @param {string} data.secondName - фамилия пользователя
 * @param {string} data.email - email пользователя
 * @returns {string} - возвращает строку с разметкой карточки пользователя
 */
function createCard({ login, name, secondName, email, password, gender }) {
    return `
        <div data-user=${email} class="user-outer">
            <div class="user-info">
                <p>Логин: ${login}</p>
                <p>Имя: ${name}</p>
                <p>Фамилия: ${secondName}</p>
                <p class="email">E-mail: ${email}</p>
                <p>Пароль: ${password}</p>
                <p>Пол: ${gender}</p>
            </div>
            <div class="menu">
                <button data-delete-user-email=${email} class="delete">Удалить</button>
                <button data-change-user-email=${email} class="change">Изменить</button>
            </div>
        </div>
    `
}

/**
 * Функция перерисовки карточек пользователей при загрузке страницы
 * @param {Object} storage - объект с данными пользователей
 */
function rerenderCards(storage) {
    const users = document.querySelector('.users')

    if (!storage) {
        console.log('localStorage пустой')
        return
    }

    users.innerHTML = ''

    Object.keys(storage).forEach((email) => {
        const userData = storage[email]
        const userCard = document.createElement('div')
        userCard.className = 'user'
        userCard.dataset.email = email
        userCard.innerHTML = createCard(userData)
        users.append(userCard)
        setListeners(userCard)
    })
}

/**
 * Функция добавления карточки пользователя в список пользователей и в localStorage
 * @param {Event} e - событие клика по кнопке добавления
 */
function addCard(e) {
    e.preventDefault()
    const newLogin = document.querySelector('#login')
    const newName = document.querySelector('#name')
    const newSecondName = document.querySelector('#secondName')
    const newEmail = document.querySelector('#email')
    const newPassword = document.querySelector('#password')
    const newGender = document.querySelector('input[name="gender"]:checked')

    const users = document.querySelector('.users')

    if ( !newLogin.value
        || !newEmail.value
        || !newName.value
        || !newSecondName.value
        || !newPassword.value
        || !newGender.value
    ) {
        return alert("Заполните все поля формы!")
    }

    const data = {
        login: newLogin.value,
        name: newName.value,
        secondName: newSecondName.value,
        email: newEmail.value,
        password: newPassword.value,
        gender: newGender.value,
    }

    if (storage.hasOwnProperty(newEmail.value) && isCardBeingEdited) {
        storage[newEmail.value] = data
        localStorage.setItem('users', JSON.stringify(storage))
        const updateUserCard = users.querySelector(`div[data-email="${newEmail.value}"]`)
        updateUserCard.innerHTML = createCard(data)
        setListeners(updateUserCard)
        isCardBeingEdited = false
        return resetInputs(newLogin, newName, newSecondName, newEmail, newPassword)
    } else if (storage.hasOwnProperty(newEmail.value)) {
        alert(`К сожалению, email ${newEmail.value} занят. Попробуйте ввести другой.`)
        newEmail.focus()
        return resetInputs(newEmail)
    }

    storage[newEmail.value] = data

    const userCard = document.createElement('div')
    userCard.className = 'user'
    userCard.dataset.email = newEmail.value
    userCard.innerHTML = createCard(data)
    users.append(userCard)
    setListeners(userCard)

    // Добавление данных в localStorage
    localStorage.setItem('users', JSON.stringify(storage))
    resetInputs(newLogin, newName, newSecondName, newEmail, newPassword)

    console.log(storage)
}

/**
 * Функция очистки полей ввода
 * @param {HTMLInputElement} inputs
 */
function resetInputs(...inputs) {
    inputs.forEach((input) => {
        input.value = ''
    })
}

// Функция очистки localStorage
function clearLocalStorage() {
    localStorage.removeItem('users')
    window.location.reload()
}

// Добавление слушателей на кнопки добавления и очистки
add.addEventListener('click', addCard)
clear.addEventListener('click', clearLocalStorage)

// При загрузке страницы перерисовываются карточки пользователей
window.addEventListener('load', () => {
    rerenderCards(JSON.parse(localStorage.getItem('users')))
})
