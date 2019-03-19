$(document).ready(function(){
	$("#reg-form").validate({
		rules:{
			name:{
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        phone:{
        	required: true,
            digits: true,
            minlength: 10,
            maxlength: 12,
        },
            email:{
            required: true,
            email: true,
        },
        message:{
        	required: true,
            minlength: 10,
            maxlength: 1000,
        },
    },
    messages:{
    }     
});
});
