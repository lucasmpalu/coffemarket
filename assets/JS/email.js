// FORM
const $message = document.querySelector('#message')
const $email = document.querySelector('#email')
const $name = document.querySelector('#name')
const $formMessage = document.querySelector('.form-contact')
const $sendBtn = document.getElementsByClassName('send-message')
const $errorName = document.querySelector('.name-error')
const $errorEmail = document.querySelector('.email-error')
const $errorMessage = document.querySelector('.message-error')

const validName = (value) => {

    let nameReGex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
    let valid = nameReGex.test(value)

    return valid === true 
                 ? true 
                 : false
}

const validEmail = (value) => {
    let emailReGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let valid = emailReGex.test(value)

    return valid === true 
                 ? true 
                 : false
}

const validMessage = (value) => {
    if(value.length){
        return true
    } else {
        return false
    }
}

const checkEmail = (value) => {

    if(validEmail(value)){
        $email.classList.remove('errorInputJS')
        $errorEmail.innerText = ''
        return true
    } else {
        $email.classList.add('errorInputJS')
        $errorEmail.innerText = '*Su correo debe contener @, . y tipo de mail'
        return false
    }


}


const checkName = (value) => {

    if(validName(value)){
        $name.classList.remove('errorInputJS')
        $errorName.innerText = ''

        return true
    } else {
        $name.classList.add('errorInputJS')
        $errorName.innerText = '*Debe escribir su nombre completo'
        return false

    }

}

const checkMessage = (value) => {
    
    if(validMessage(value)){
        $message.classList.remove('errorInputJS')
        $errorMessage.innerText = ''
        return true
    } else{
        $message.classList.add('errorInputJS')
        $errorMessage.innerText = '*Debe escribir un mensaje'
        return false
    }

}



const sendMessage = (e) => {
	e.preventDefault();

    let isValidEmail = checkEmail($email.value)
    let isValidName = checkName($name.value)
    let isValidMessage = checkMessage($message.value)
    
    if( isValidEmail && isValidMessage && isValidName){
        window.location.href = `mailto:lucasmpalu@gmail.com?subject=${$message.value}&body=${$name.value}`;
        return
    }


	
};




const initMsg = () => {
$formMessage.addEventListener('submit', sendMessage)


}

initMsg()