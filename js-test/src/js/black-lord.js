const login = prompt('Укажите свой логин');

function requestPass() {
    const password = prompt('Введите пароль');
        if (password == null||undefined) {
            document.write('Вход отменён. Для того, чтобы повторить попытку, нажмите F5');
        } else {
            if (password == 'Черный Властелин') {
                document.write('Добро пожаловать, хозяин!');
            } else {
                const repeatPass = confirm ('Пароль неверный, в доступе отказано! Хотите попробовать еще раз?');
                if (repeatPass = true) {
                    requestPass();
                } else document.write('До свидания');
            }
        }
    }

function request(req) {
    if (req == null||undefined) {
        document.write('Вход отменён. Для того, чтобы повторить попытку, нажмите F5')
    } else {
        if (req == 'admin') {
            requestPass();
        } else {
            document.write('Я вас не знаю. Для того, чтобы повторить попытку, нажмите F5');
        }
    }
}

request(login);


/*
if (login == null||undefined) {
    document.write('Вход отменён. Для того, чтобы повторить попытку, нажмите F5')
} else {
    if (login == 'admin') {
        const password = prompt('Введите пароль');
        if (password == null||undefined) {
            document.write('Вход отменён. Для того, чтобы повторить попытку, нажмите F5');
        } else {
            if (password == 'Черный Властелин') {
                document.write('Добро пожаловать, хозяин!')
            } else document.write('Пароль неверный, в доступе отказано!')
        }
    } else {
        document.write('Я вас не знаю. Для того, чтобы повторить попытку, нажмите F5');
    }
}
*/
