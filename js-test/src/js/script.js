const login = prompt('Укажите свой логин');

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

