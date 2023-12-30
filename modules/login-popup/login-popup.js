function createLoginPopupWindow () {
    const popup = document.createElement("div");
    popup.className = "login-popup";
    
    const popupBackground = document.createElement("div");
    popupBackground.className = "login-popup-background";
    
    const popupWindow = document.createElement("div");
    popupWindow.className = "login-popup-window";
    popupWindow.innerHTML =
        `<div class="login-popup-header-wrapper">
            <div class="login-popup-header">Авторизация</div>
            <button class="login-popup-close-button">&#10006</button>
        </div>
        <div class="login-popup-content-wrapper">
            Логин:
            <input type="text">
            Пароль:
            <input type="password">
            <button class="login-popup-submit-button">Войти</button>
        </div>`;

    popup.append(popupBackground, popupWindow);
    document.body.prepend(popup);

    setTimeout(() => popupBackground.style.opacity = ".8", 0);
    setTimeout(() => popupWindow.style.opacity = "1", 100);

    const popupCloseButton = popupWindow.querySelector(".login-popup-close-button");

    function closePopup () {
        popupBackground.style.opacity = "0";
        popupBackground.style.pointerEvents = "none";
        popupWindow.style.opacity = "0";
        setTimeout(() => {
            popup.remove();
        }, 1000);
    }

    popupCloseButton.addEventListener("click", closePopup);
    popupBackground.addEventListener("click", closePopup);
}

document.querySelector("#login-button").addEventListener("click", () => createLoginPopupWindow());