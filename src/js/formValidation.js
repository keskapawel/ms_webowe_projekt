let name = document.querySelector('#name');
let email = document.querySelector('#email');
let title = document.querySelector('#title');
let comment = document.querySelector('#comment');

let messageSend = document.querySelector('#messageSend');

let [emailCheck, nameCheck, titleCheck, commenctCheck] = [false, false, false, false];

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const formSubmitBtn = document.querySelector('#formSubmit')

formSubmitBtn.onclick = () => {

    if (name.value === '') {
        document.querySelector('.nameError').style.display = 'inline';
        nameCheck = false;
    } else {
        document.querySelector('.nameError').style.display = 'none';
        nameCheck = true;
    }
    if (!(regexEmail.test(email.value))) {
        document.querySelector('.emailError').style.display = 'inline';
        emailCheck = false;
    } else {
        document.querySelector('.emailError').style.display = 'none';
        emailCheck = true;

    }
    if (title.value === '') {
        document.querySelector('.titleError').style.display = 'inline';
        titleCheck = false;
    } else {
        document.querySelector('.titleError').style.display = 'none';
        titleCheck = true;

    }
    if (comment.value === '') {
        document.querySelector('.textareaError').style.display = 'inline';
        commenctCheck = false;
    } else {
        document.querySelector('.textareaError').style.display = 'none';
        commenctCheck = true;
    }

    if (nameCheck && emailCheck && titleCheck && commenctCheck) {
        messageSend.style.display = 'block';
        name.value = '';
        email.value = '';
        title.value = '';
        comment.value = '';
    }
}