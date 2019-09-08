function addClassHasSucess(elem){
	if ( elem.parent().hasClass('has-error') || elem.parent().hasClass('has-success'))  {
		elem.unwrap();
	}
	elem.wrap( "<div class='has-success'></div>" );
}

function addClassHasError(elem){
	event.preventDefault();
	if ( elem.parent().hasClass('has-error') || elem.parent().hasClass('has-success')) {
		elem.unwrap();
	}
	elem.wrap( "<div class='has-error'></div>" );
}

$(document).ready(function () {

	$('.submit').click(function(event){

		var emailVal = $('.email').val();
		var email = $('.email');
		var subjectVal = $('.subject').val();
		var subject = $('.subject');
		var telVal = $('.tel').val();
		var tel = $('.tel');
		var messageVal = $('.message').val();
		var message = $('.message');
		var status = $('.status');
		$( ".errorMessage" ).remove();

		if(emailVal.length > 5 && emailVal.includes('@') && emailVal.includes('.')){
			addClassHasSucess(email);
		}else{
			addClassHasError(email);
			email.after( "<div class='alert alert-danger errorMessage'> Neteisingai įvestas el. paštas!</div>" );
		}

		if(subjectVal.length > 2){
			addClassHasSucess(subject);
		}else{
			addClassHasError(subject);
			subject.after("<div class='alert alert-danger errorMessage'> Neteisingai įvesta vardas arba įmonė </div>")
		}

		if(telVal.length > 7){
			addClassHasSucess(tel);
		}else{
			addClassHasError(tel);
			tel.after("<div class='alert alert-danger errorMessage'> Neteisingai įvestas telefono nr. </div>")
		}

		if(messageVal.length > 7){
			addClassHasSucess(message);
		}else{
			addClassHasError(message);
			message.after("<div class='alert alert-danger errorMessage'> Žinutė per trumpa </div>")
		}
	})
})