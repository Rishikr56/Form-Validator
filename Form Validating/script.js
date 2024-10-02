const name_error = document.getElementById('name-error');
const phone_error = document.getElementById('phone-error');
const Fname_error = document.getElementById('Fname-error');


function validateName(){
    const name = document.getElementById('contact-name').value
    if(name.length == 0){
        name_error.innerHTML = 'Name is required';
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_error.innerHTML = 'Second Name is Required';
        return false
    }
    name_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateFName(){
    const Fname = document.getElementById('contact-fathers').value
    if(Fname.length == 0){
        Fname_error.innerHTML = 'Name is required';
        return false
    }
    if(!Fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        Fname_error.innerHTML = 'Second Name is Required';
        return false
    }
    Fname_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone(){
    const phone = document.getElementById('contact-phone').value
    if(phone.length <10){
        phone_error.innerHTML = 'Phone No. must be at leats 10';
        return false
    }
    
    phone_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
