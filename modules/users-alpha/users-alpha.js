class User {
    constructor (login, firstname, lastname, email, password, gender, role, photoURL) {
        this.login = login;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.role = role;
        this.photoURL = photoURL || `/modules/users-alpha/user-photos/no-avatar.png`;
    }
}

const users = {
    id_000000: new User ("guest", "", "", "", "", "", "guest", ""),
    id_000001: new User ("JuckieChan", "Макс", "Анохин", "juckiechan@mail.ru", "2017", "attack helikopter", "admin", "/modules/users-alpha/user-photos/id_000001.jpg"),
    id_000002: new User ("Luksor144", "Мистер", "Фриман", "freeman@hl.com", "iloveheadcrabs", "male", "moderator", "/modules/users-alpha/user-photos/id_000002.png"),
    id_000003: new User ("Pro100Max2014", "Вася", "Пупкин", "vasya.pupkin2015@mail.ru", "ilovegames", "male", "user", "/modules/users-alpha/user-photos/id_000003.jpg"),
    id_000004: new User ("Stark-333", "Эцио", "Аудиторе", "ecio@assasin.com", "ihatetampliers", "attack helikopter", "vip", "/modules/users-alpha/user-photos/id_000004.png"),
    id_000005: new User ("ewauaewauauew", "ыаыаы", "уауауаау", "euaaueeueau@gmail.com", "ueueuauau", "male", "troll", "modules/users-alpha/user-photos/id_000005.gif"),
    id_000006: new User ("Mithrandir", "Гендальф", "Серый", "gendalf-gray@gmail.com", "ilovehobbits", "male", "vip", ""),
} // вместо объекта использовать массив и вместо id_0000* использовать индекс

export {users}