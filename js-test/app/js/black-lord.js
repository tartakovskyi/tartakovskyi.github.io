"use strict";function _readOnlyError(e){throw new Error('"'+e+'" is read-only')}var login=prompt("Укажите свой логин");function requestPass(){var e=prompt("Введите пароль");if(null==e)document.write("Вход отменён. Для того, чтобы повторить попытку, нажмите F5");else if("Черный Властелин"==e)document.write("Добро пожаловать, хозяин!");else{confirm("Пароль неверный, в доступе отказано! Хотите попробовать еще раз?");_readOnlyError("repeatPass"),!0?requestPass():document.write("До свидания")}}function request(e){null==e?document.write("Вход отменён. Для того, чтобы повторить попытку, нажмите F5"):"admin"==e?requestPass():document.write("Я вас не знаю. Для того, чтобы повторить попытку, нажмите F5")}request(login);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsYWNrLWxvcmQuanMiXSwibmFtZXMiOlsibG9naW4iLCJwcm9tcHQiLCJyZXF1ZXN0UGFzcyIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJ3cml0ZSIsImNvbmZpcm0iLCJfcmVhZE9ubHlFcnJvciIsInJlcSIsInVuZGVmaW5lZCIsInJlcXVlc3QiXSwibWFwcGluZ3MiOiJnRkFBQSxJQUFNQSxNQUFRQyxPQUFPLHNCQUVyQixTQUFTQyxjQUNMLElBQU1DLEVBQVdGLE9BQU8sa0JBSHRCRCxHQUFlLE1BQVBDLEVBS0ZHLFNBQVNDLE1BQU0sb0VBRmpCRixHQUFrQixvQkFBVkEsRUFLRkMsU0FBU0MsTUFBTSxpQ0FKUCxDQUNHQyxRQUFBLG9FQUNaQyxlQUFBLGVBQUEsRUFDYUwsY0FDR0UsU0FBQUMsTUFBQSxnQkFJWEgsU0FBQUEsUUFBQUEsR0FDR0UsTUFGUEksRUFHSEosU0FBQUMsTUFBQSwrREFFUixTQUFBRyxFQU9PTixjQUpERSxTQUFVSyxNQUFBQSxnRUFLWkMsUUFGRFYiLCJmaWxlIjoiYmxhY2stbG9yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ2luID0gcHJvbXB0KCfQo9C60LDQttC40YLQtSDRgdCy0L7QuSDQu9C+0LPQuNC9Jyk7XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0UGFzcygpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gcHJvbXB0KCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgPT0gbnVsbHx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKCfQktGF0L7QtCDQvtGC0LzQtdC90ZHQvS4g0JTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINC/0L7QstGC0L7RgNC40YLRjCDQv9C+0L/Ri9GC0LrRgywg0L3QsNC20LzQuNGC0LUgRjUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgPT0gJ9Cn0LXRgNC90YvQuSDQktC70LDRgdGC0LXQu9C40L0nKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC53cml0ZSgn0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCwg0YXQvtC30Y/QuNC9IScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwZWF0UGFzcyA9IGNvbmZpcm0gKCfQn9Cw0YDQvtC70Ywg0L3QtdCy0LXRgNC90YvQuSwg0LIg0LTQvtGB0YLRg9C/0LUg0L7RgtC60LDQt9Cw0L3QviEg0KXQvtGC0LjRgtC1INC/0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0LXRidC1INGA0LDQtz8nKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXBlYXRQYXNzID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RQYXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgZG9jdW1lbnQud3JpdGUoJ9CU0L4g0YHQstC40LTQsNC90LjRjycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChyZXEpIHtcclxuICAgIGlmIChyZXEgPT0gbnVsbHx8dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoJ9CS0YXQvtC0INC+0YLQvNC10L3RkdC9LiDQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L/QvtCy0YLQvtGA0LjRgtGMINC/0L7Qv9GL0YLQutGDLCDQvdCw0LbQvNC40YLQtSBGNScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChyZXEgPT0gJ2FkbWluJykge1xyXG4gICAgICAgICAgICByZXF1ZXN0UGFzcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKCfQryDQstCw0YEg0L3QtSDQt9C90LDRji4g0JTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINC/0L7QstGC0L7RgNC40YLRjCDQv9C+0L/Ri9GC0LrRgywg0L3QsNC20LzQuNGC0LUgRjUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnJlcXVlc3QobG9naW4pO1xyXG4vKlxyXG5pZiAobG9naW4gPT0gbnVsbHx8dW5kZWZpbmVkKSB7XHJcbiAgICBkb2N1bWVudC53cml0ZSgn0JLRhdC+0LQg0L7RgtC80LXQvdGR0L0uINCU0LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQv9C+0LLRgtC+0YDQuNGC0Ywg0L/QvtC/0YvRgtC60YMsINC90LDQttC80LjRgtC1IEY1JylcclxufSBlbHNlIHtcclxuICAgIGlmIChsb2dpbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICAgIGlmIChwYXNzd29yZCA9PSBudWxsfHx1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoJ9CS0YXQvtC0INC+0YLQvNC10L3RkdC9LiDQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L/QvtCy0YLQvtGA0LjRgtGMINC/0L7Qv9GL0YLQutGDLCDQvdCw0LbQvNC40YLQtSBGNScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCA9PSAn0KfQtdGA0L3Ri9C5INCS0LvQsNGB0YLQtdC70LjQvScpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKCfQlNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMLCDRhdC+0LfRj9C40L0hJylcclxuICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50LndyaXRlKCfQn9Cw0YDQvtC70Ywg0L3QtdCy0LXRgNC90YvQuSwg0LIg0LTQvtGB0YLRg9C/0LUg0L7RgtC60LDQt9Cw0L3QviEnKVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoJ9CvINCy0LDRgSDQvdC1INC30L3QsNGOLiDQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L/QvtCy0YLQvtGA0LjRgtGMINC/0L7Qv9GL0YLQutGDLCDQvdCw0LbQvNC40YLQtSBGNScpO1xyXG4gICAgfVxyXG59XHJcbiovXHJcbiJdfQ==
