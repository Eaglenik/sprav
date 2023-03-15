$(function() {
    // current date
        function zero_first_format(value)
        {
            if (value < 10)
            {
                value='0'+value;
            }
            return value;
        }
        function date_time(){
            var current_datetime = new Date();
            var day = zero_first_format(current_datetime.getDate());
            var month = zero_first_format(current_datetime.getMonth()+1);
            var year = current_datetime.getFullYear();
    
            return day+"."+month+"."+year+" ";
        }
        document.getElementById('current_date_time_block').innerHTML = date_time();
})
// form password
function show_hide_password(target){
    var input = document.getElementById('password-input');
    let imgEye = document.getElementById('password-eye')
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
        imgEye.setAttribute('src', 'images/icons/eye-close.png')
	} else {
        target.classList.remove('view');
		input.setAttribute('type', 'password');
        imgEye.setAttribute('src', 'images/icons/eye-open.png')
	}
	return false;
}
// phone
document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
// slider
$(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 5,
        autoPlay: false,
        dots: false,
        nav: false,
        mouseDrag: false,
        responsive:{
            1200:{
                items: 5
            },
            900:{
                items: 4
            },
            700:{
                items: 3
            },
            0:{
                items: 2
            }
        }
    })
})