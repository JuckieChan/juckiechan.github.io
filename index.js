class Post {
    constructor (postName, postAuthor, postDate, postContent, postCategories, postViews = 0, postCommentsCounter = 0, postRating = 0, isPinned = false) {
        this.postName = postName;
        this.postAuthor = postAuthor;
        this.postDate = postDate; // dd.mm.yyyy, hh:mm
        this.postContent = postContent;
        this.postCategories = postCategories;
        this.postViews = postViews;
        this.postCommentsCounter = postCommentsCounter;
        this.postRating = postRating;
        this.isPinned = isPinned;
    }

    renderPost () {
        const showRatingNumber = () => this.postRating >= 0 ? "+" + this.postRating : this.postRating;
        const getRatingClassname = () => {
            return this.isPinned ? "post-rating-pinned" :
            this.postRating >= 0 ? "post-rating-good" : "post-rating-bad";
        }

        const postWrapper = document.createElement("div");
        postWrapper.className = "post-wrapper";
        postWrapper.innerHTML = 
        `<div class="post">
            <div class="post-header-wrapper">
                <div class="post-header">
                    <a href="#" class="post-name">${this.postName}</a>
                    <span class="post-info">
                        Автор: <a href="#">${this.postAuthor}</a> от <a href="#">${this.postDate}</a>, просмотров: ${this.postViews}
                    </span>
                </div>
                <div class="post-comments">${this.postCommentsCounter}</div>
            </div>
            <div class="post-content">
                ${this.postContent}
            </div>
            <div class="post-footer">
                <div class="post-rating ${getRatingClassname()}">
                    <button class="post-rating-down"></button>
                    <span class="post-rating-number">${showRatingNumber()}</span>
                    <button class="post-rating-up"></button>
                </div>
                <a href="#" class="post-details">Подробнее</a>
            </div>
            <div class="post-category">> Категория: ${this.postCategories}</div>
        </div>`;
        
        const posts = document.querySelector(".posts")
        this.isPinned ? posts.prepend(postWrapper) : posts.insertBefore(postWrapper, posts.firstChild.nextSibling);

        const postRating = postWrapper.querySelector(".post-rating");
        const postRatingDown = postRating.querySelector(".post-rating-down");
        const postRatingUp = postRating.querySelector(".post-rating-up");
        const postRatingNumber = postRating.querySelector(".post-rating-number");

        postRatingDown.addEventListener("click", () => {
            this.postRating -= 1;
            postRatingNumber.textContent = showRatingNumber();
            if (this.postRating < 0 && postRating.classList.contains("post-rating-good")) {
                postRating.classList.replace("post-rating-good", "post-rating-bad");
            }
        })

        postRatingUp.addEventListener("click", () => {
            this.postRating += 1;
            postRatingNumber.textContent = showRatingNumber();
            if (this.postRating >= 0 && postRating.classList.contains("post-rating-bad")) {
                postRating.classList.replace("post-rating-bad", "post-rating-good");
            }
        })
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
    ознакомиться по
    <a href="https://terraria-game.fandom.com/ru/wiki/%D0%91%D0%BB%D0%BE%D0%B3_%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%B0:MaXXshaRd/%D0%96%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BF%D1%83%D1%82%D1%8C_TerrariaGO,_%D0%B8%D0%BB%D0%B8_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D1%80%D0%B0%D1%81%D1%86%D0%B2%D0%B5%D1%82%D0%B0_%D0%B8_%D1%83%D0%BF%D0%B0%D0%B4%D0%BA%D0%B0_RU_%D0%BA%D0%BE%D0%BC%D1%8C%D1%8E%D0%BD%D0%B8%D1%82%D0%B8_%D0%A2%D0%B5%D1%80%D1%80%D0%B0%D1%80%D0%B8%D0%B8.">ссылке</a>.
    </p>`,
    "Новости, Новичкам", 73, 23, 16, true)

const testPost = new Post("Название тестового поста", "JuckieChan", "30.12.2023", "Тут ничего не будет, всего лишь тестовый пост. Просто для того, чтобы немного забить пустующее место бессвязным набором слов и для отладки not(:last-child). Только и всего. Никакого лорема, только рукописный текст, только хардкор.", "Отладка", 2, 1, 2)
const testPost2 = new Post("Название тестового поста 2", "JuckieChan", "31.12.2023", "Тут ничего не будет, всего лишь тестовый пост. Просто для того, чтобы немного забить пустующее место бессвязным набором слов и для отладки not(:last-child). Только и всего. Никакого лорема, только рукописный текст, только хардкор.", "Отладка", 4, 4, -1)

zeroPost.renderPost();
testPost.renderPost();
testPost2.renderPost();