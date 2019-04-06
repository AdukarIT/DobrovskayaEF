$('#reg-form').submit(function () {
	let name = $('#name').val();
	let phone = $('#phone').val();
	let email = $('#email').val();
	let message = $('#message').val();
	let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let phoneReg = /[0-9 -()+]+$/;
	if ( name == "" ) {
		alert('Введите имя');
     	return false;
	} else if ( phone == "" || (!phoneReg.test(phone)) ) {
		$('#nameForm').css('display', 'block');
		alert('Номер телефона введен некорректно');
     	return false;
	} else if ( email == "" || (!emailReg.test(email)) ) {
		$('#phoneForm').css('display', 'block');
		alert('Email введен некорректно');
     	return false;
     } else if ( message == "" ) {
     	$('#emailForm').css('display', 'block');
     	alert('Введите сообщение');
     	return false;
     } else if ( message.length < 10 || message.length > 1000 ) {
     	alert('Сообщение должно быть от 10 до 1000 знаков');
     	return false;
     }
     	else {
     	$('#messageForm').css('display', 'block');
     }
 });
