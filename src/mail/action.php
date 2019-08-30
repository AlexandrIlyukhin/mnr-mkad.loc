<?php
$msg_box = ""; // в этой переменной будем хранить сообщения формы
$errors = array(); // контейнер для ошибок
// проверяем корректность полей
if($_POST['user_name'] == "") 	 $errors[] = "Поле 'Имя' не заполнено!";
if($_POST['user_email'] == "") 	 $errors[] = "Поле 'E-mail' не заполнено!";
if($_POST['user_phone'] == "") $errors[] = "Поле 'Телефон' не заполнено!";

// если форма без ошибок
if(empty($errors)){
    // собираем данные из формы
    $message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
    $message .= "E-mail пользователя: " . $_POST['user_email'] . "<br/>";
    $message .= "Телефон: " . $_POST['user_phone'];
    send_mail($message); // отправим письмо
    // выведем сообщение об успехе
    $msg_box = "<span >Сообщение успешно отправлено!</span>";
}else{
    // если были ошибки, то выводим их
    $msg_box = "";
    foreach($errors as $one_error){
        $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
    }
}

// делаем ответ на клиентскую часть в формате JSON
echo json_encode(array(
    'result' => $msg_box
));


// функция отправки письма
function send_mail($message){
    // почта, на которую придет письмо
    $mail_to = "iluch@mosbuilding.host";
    // тема письма
    $subject = "Позвонить ОСЗ МКАД МНР";

    // заголовок письма
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: Запрос с сайта <no-reply@test.com>\r\n"; // от кого письмо

    // отправляем письмо
    mail($mail_to, $subject, $message, $headers);
}

