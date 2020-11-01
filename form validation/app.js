document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip-code').addEventListener('blur', validateZcode);;
document.getElementById('email').addEventListener('blur', validateEmail);;
document.getElementById('phone-number').addEventListener('blur', validatePh);;
document.querySelector('.submit-btn').addEventListener('click', submit);



function validateName (){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if(!re.test(name.value)){
        console.log('invalid');
    }else{
        console.log('valid');
    }
}
function validateZcode(){
    const zcode = document.getElementById('zip-code');
    const re = /[0-9]{4,6}/;
    if(!re.test(zcode.value)){
        console.log('invalid z code');
    }else{
        console.log('valid zcode');
    }
}

function validateEmail(){
const email = document.getElementById('email');
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

if(!re.test(email.value)){
    console.log('invalid email');
}else{
    console.log('valid email');
    }
}

function validatePh(){
    const phoneNum = document.getElementById('phone-number');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    
    if(!re.test(phoneNum.value)){
        console.log('invalid phone number');
    }else{
        console.log('valid phone number');
        }
    } 

function submit(e){

    e.preventDefault();
}