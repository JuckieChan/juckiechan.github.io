/* eslint-disable */

import { users } from '../users-alpha/users-alpha.js'

const messageBox = document.querySelector('.message-box');
const chatInput = document.querySelector('.chat-input');

function createNewMessage (userId, currentTime, text) {
    const message = document.createElement('div');
    const messageInfo = document.createElement('div');
    const userPhoto = document.createElement('div');
    const img = document.createElement('img');
    const userInfo = document.createElement('div');
    const userName = document.createElement('a');
    const sendingTime = document.createElement('span');
    const bottomBorder = document.createElement('div');
    const messageContent = document.createElement('div');

    message.classList.add("message");
    messageInfo.classList.add("message-info");
    userPhoto.classList.add("user-photo");
    userInfo.classList.add("chat-user-info");
    userName.classList.add("user-name");
    userName.setAttribute("data-role", `${userId.role}`);
    userName.setAttribute("href", "#");
    sendingTime.classList.add("sending-time");
    bottomBorder.classList.add("bottom-border");
    messageContent.classList.add("message-content");

    userName.textContent = userId.login;
    sendingTime.textContent = "Сегодня, в " + currentTime;
    messageContent.textContent = `${text}`;
    img.src = userId.photoURL;

    userPhoto.append(img);
    userInfo.append(userName, sendingTime, bottomBorder)
    messageInfo.append(userPhoto, userInfo);
    message.append(messageInfo, messageContent)

    return message;
}

function getCurrentTime () {
    return String(new Date()).slice(15, 24);
}

let isChatFullScrolled = true;

messageBox.addEventListener("scroll", () => {
    isChatFullScrolled = messageBox.scrollHeight === messageBox.scrollTop + 350 ? true : false;
})    

function addNewMessage (userID, text) {
    messageBox.append(createNewMessage(users[userID], getCurrentTime(), text))
    if (isChatFullScrolled) {
        messageBox.scrollTo({
            top: messageBox.scrollHeight,
            behavior: "smooth"
        });
    }
}

const addNewMessageWithTimeout = (author, text, timeout) => setTimeout(() => addNewMessage(author, text), timeout)

addNewMessageWithTimeout('id_000001', `Тест`, 0)
addNewMessageWithTimeout('id_000001', `Тест`, 0)
addNewMessageWithTimeout('id_000001', `<p>Тест</p>`, 0)
addNewMessageWithTimeout('id_000001', `Тест`, 0)
addNewMessageWithTimeout('id_000002', `Ща банхаммером получишь за флуд`, 0)
addNewMessageWithTimeout('id_000001', `Попутал штоле?)`, 0)
addNewMessageWithTimeout('id_000002', `Та я угараю :D`, 0)

addNewMessageWithTimeout('id_000002', `А чо там чат починили чишо?`, 1000)
addNewMessageWithTimeout('id_000003', `та нет канечно кагда там чат админы пачинят сто лет прайдет`, 10000)
addNewMessageWithTimeout('id_000004', `Букварь этому господину`, 16000)
addNewMessageWithTimeout('id_000003', `себе купи`, 20000)
addNewMessageWithTimeout('id_000004', `Я его хотя-бы открывал...`, 24000)
addNewMessageWithTimeout('id_000001', `К сожалению, с чатом возникли некоторые трудности, просьба отнестись к этому с пониманием. Это касается только новых пользователей, вы можете общаться как и раньше.`, 25000)
addNewMessageWithTimeout('id_000003', `я же гаварил`, 31000)
addNewMessageWithTimeout('id_000001', `Терпение, друзья. Как только так сразу.`, 38000)
addNewMessageWithTimeout('id_000004', `Макс, там это, пиши если помощь нужна, поможем чем сможем`, 39000)
addNewMessageWithTimeout('id_000001', `От души бро`, 42000)
addNewMessageWithTimeout('id_000005', `ыыаыаыаыаыыаыаы`, 45000)
addNewMessageWithTimeout('id_000003', `лан я пашол гамать чао какао`, 49000)
addNewMessageWithTimeout('id_000002', `И что это было?...`, 55000)
addNewMessageWithTimeout('id_000004', `Хз))`, 58000)

chatInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const userMessage = chatInput.value.replace(/\s+/g, " ").trim()
        if (userMessage) {
            addNewMessage("id_000000", userMessage.replace(/(.)\1{2,}/gi, "$1$1$1"))
            messageBox.scrollTo({
                top: messageBox.scrollHeight,
                behavior: "smooth"
            });
            chatInput.focus();
        } else {
            chatInput.blur();
        }
        chatInput.value = '';
    }
})
