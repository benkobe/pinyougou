window.onload = function() {
    var tel = document.querySelector('#tel');
    var mes = document.querySelector('#mes');
    var pwd = document.querySelector('#sec');
    var surepwd = document.querySelector('#dou');

    var regtel = /^1[3|5|8]\d{9}$/;
    var regmes = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/

    function reg(ele, regExp) {
        ele.onblur = function() {
            if (regExp.test(this.value)) {
                this.nextElementSibling.className = 'succes';
                this.nextElementSibling.innerHTML = '<i class="succes_icon"></i>格式正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
            }
        }
    }
    reg(tel, regtel);
    reg(mes, regmes);
    reg(pwd, regpwd);

    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'succes';
            this.nextElementSibling.innerHTML = '<i class="succes_icon"></i>格式正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不一致，请重新输入';
        }
    }
}