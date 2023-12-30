// history.replaceState(null, null, 'terrariago.net');

// ----------------------------------------------------------------------------------------------------------

class Post {
    constructor (postName, postAuthor, postDate, postContent, postCategorys) {
        this.postName = postName;
        this.postAuthor = postAuthor;
        this.postDate = postDate; // dd.mm.yyyy, hh:mm
        this.postContent = postContent;
        this.postCategorys = postCategorys;
    }

    renderPost () {
        const postWrapper = document.createElement("div");
        postWrapper.className = "post-wrapper";
        postWrapper.innerHTML = 
        `<div class="post">
            <div class="post-header">${this.postName}</div>
            <div class="post-author">
                Автор: <a href="#">${this.postAuthor}</a> от <a href="#">${this.postDate}</a>, просмотров: 1
            </div>
            <div class="post-content">
                ${this.postContent}
            </div>
        </div>`;
        
        document.querySelector(".posts").prepend(postWrapper)
    }
}

const zeroPost = new Post("Нулевой пост", "JuckieChan", "23.11.2023",
    `<p>
    Старого TerrariaGO больше .net. Но есть новый! Добро
    пожаловать на пилотную версию сайта!
    </p>
    <img src="/pictures/terraria.jpg" alt="terraria.jpg" />
    <p>
    Этот проект является реинкарнацией известного в узких кругах
    сайта terrariago.ru.
    </p>
    <p>
    После уничтожения последним из администраторов нашего
    культурного наследия, я твердо решил, что еще увижу TerrariaGO
    живым и здоровым.
    </p>
    <p>
    Масло в огонь перерождения добавил человек с ником MaXXshaRd -
    7 февраля 2021 года он выложил пост на Terraria Wiki о
    жизненном пути TerrariaGO, где отлично рассказал об его
    истории расцвета и упадка. Более подробно с постом можно
    познакомиться по
    <a href="https://terraria-game.fandom.com/ru/wiki/%D0%91%D0%BB%D0%BE%D0%B3_%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%B0:MaXXshaRd/%D0%96%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BF%D1%83%D1%82%D1%8C_TerrariaGO,_%D0%B8%D0%BB%D0%B8_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D1%80%D0%B0%D1%81%D1%86%D0%B2%D0%B5%D1%82%D0%B0_%D0%B8_%D1%83%D0%BF%D0%B0%D0%B4%D0%BA%D0%B0_RU_%D0%BA%D0%BE%D0%BC%D1%8C%D1%8E%D0%BD%D0%B8%D1%82%D0%B8_%D0%A2%D0%B5%D1%80%D1%80%D0%B0%D1%80%D0%B8%D0%B8.">ссылке</a>.
    </p>`,
    "Клиент, Новичкам")

zeroPost.renderPost();
