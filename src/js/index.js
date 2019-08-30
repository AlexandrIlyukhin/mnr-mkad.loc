//import divide from './lib.js';

//import 'core-js/features/promise';
/*let divide = function(first, second = 5){
    return first / second;
}*/

import $ from 'jquery';
//import 'jquery-validation';


//import 'formbouncerjs'
import 'svgxuse';


window.onload = function (e) {

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
                center: [55.90168286, 37.62851714],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark([55.90168286, 37.62851714], {
                    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                    balloonContentHeader: "ТЦ Нагорное",
                    balloonContentBody: "Продажа отдельно стоящего здания. Общая площадь 1300 кв.м.",
                    balloonContentFooter: "отдел продаж: (495) 1368831",
                    hintContent: "Свой съезда на МКАД"
                },
                {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/ball.png',
                    // Размеры метки.
                    iconImageSize: [48, 52],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-24, -24],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [15, 15],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                }
            );
        myMap.geoObjects.add(myPlacemark);

    }
};


$(function () {

    let $btn = $('.callMe');
    let btnOpen = false;


    $(window).on('scroll', function (e) {

        let start = window.innerHeight;
        let bottom = $('#bottom').offset().top;
        let pos = $(this).scrollTop();
        if (!btnOpen && (pos > start && pos < bottom - 1500)) {
            $btn.fadeIn(500);
            btnOpen = true;
            console.log($btn.fadeIn(500));
        }
        else if (btnOpen && (pos <= start || pos > bottom - 1500)) {
            btnOpen = false;
            $btn.fadeOut(500);
            console.log($btn.fadeOut(500));
        }
    });


    $('#btn_submit').click(function(){

        // собираем данные с формы
        let user_name 	 = $('#user_name').val();
        let user_email 	 = $('#user_email').val();
        let user_phone = $('#user_phone').val();
        // отправляем данные
        $.ajax({
            url: "../mail/action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name": 	user_name,
                "user_email": 	user_email,
                "user_phone": user_phone
            },
            // после получения ответа сервера
            success: function(data){
                let btnMassage = $('.messages');
                btnMassage.fadeIn(500).html(data.result); // выводим ответ сервера
            }
        });
    });

    let btnMassage = $('.messages');

    btnMassage.on('click', function () {
        btnMassage.fadeOut(500);
    });

    let btnBanner = $('.header .button');
    let bottom = $('#bottom').offset().top;

    btnBanner.on('click', function () {
        $('html, body').animate({
            scrollTop: bottom
        }, 2000);
    });
});
