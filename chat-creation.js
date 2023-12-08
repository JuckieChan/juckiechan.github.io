/* eslint-disable */

const chat = document.querySelector('#chat');

function createNewMessage (fromWho, currentTime, userPhotoUrl, text) {
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
    sendingTime.classList.add("sending-time");
    bottomBorder.classList.add("bottom-border");
    messageContent.classList.add("message-content");

    userName.textContent = fromWho;
    sendingTime.textContent = "Сегодня, в " + currentTime;
    messageContent.textContent = `${text}`;
    img.src = userPhotoUrl;

    userPhoto.append(img);
    userInfo.append(userName, sendingTime, bottomBorder)
    messageInfo.append(userPhoto, userInfo);
    message.append(messageInfo, messageContent)

    return message;
}

function getCurrentTime () {
    return String(new Date()).slice(15, 24);
}
function addNewMessage (author, text) {
    chat.append(createNewMessage(author, getCurrentTime(), './media/favicon.ico', text))
    chat.lastChild.scrollIntoView({ 
        block: 'nearest',
        behavior: 'smooth',
    });
}

const addNewMessageWithTimeout = (author, text, timeout) => setTimeout(() => addNewMessage(author, text), timeout)

addNewMessageWithTimeout('Luksor', `А чо там чат починили чишо?`, 1000)
addNewMessageWithTimeout('pro100gamer2013', `та нет канечно кагда там чат админы пачинят сто лет прайдет`, 10000)
addNewMessageWithTimeout('Stark-333', `Букварь этому господину`, 16000)
addNewMessageWithTimeout('pro100gamer2013', `себе купи`, 20000)
addNewMessageWithTimeout('JuckieChan', `К сожалению, с чатом возникли некоторые трудности, просьба отнестись к этому с пониманием. Это касается только новых пользователей, вы можете общаться как и раньше.`, 23000)
addNewMessageWithTimeout('pro100gamer2013', `я же гаварил`, 29000)
addNewMessageWithTimeout('JuckieChan', `Терпение, друзья. Как только так сразу.`, 36000)
addNewMessageWithTimeout('Stark-333', `Макс, там это, пиши если помощь нужна, поможем чем сможем`, 39000)
addNewMessageWithTimeout('JuckieChan', `От души бро`, 42000)
addNewMessageWithTimeout('pro100gamer2013', `лан я пашол гамать чао какао`, 49000)
addNewMessageWithTimeout('Luksor', `И что это было?...`, 55000)
addNewMessageWithTimeout('Stark-333', `Хз))`, 58000)
