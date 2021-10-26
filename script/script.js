/*Script ocultar menu*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

/*Script para efeito nos campos login e senha*/

var email = document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = "rgb(32, 29, 29);";
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "color: white;";
});

var password = document.getElementById('password');

password.addEventListener('focus',()=>{
    password.style.borderColor = "rgb(32, 29, 29);";
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "color: white;";
});
