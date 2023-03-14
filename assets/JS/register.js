const $formRegister = document.querySelector('#form-register')
const $user = document.getElementById('user-register')
const $name = document.querySelector('#name-register')
const $email = document.getElementById('email-register')
const $password = document.getElementById('password-register')
const $phone = document.getElementById('phone-register')
const $registerBtn = document.querySelector('#register-btn')
const $alertSuccessRegister = document.querySelector('.alert-confirm')

let userLocalStorage = JSON.parse(localStorage.getItem('users')) || [] //ACÁ VOY A TRAER TODA MI AGENDA

let saveDataUser = (user) => {

    userLocalStorage = [...userLocalStorage, user]

}
const saveUserToLocalStorage = (user) => {

    localStorage.setItem('users', JSON.stringify(user))

 } 

 

const validUser = (value) => {
    let reGex = /^[a-z0-9_-]{3,16}$/
    let valid = reGex.test(value)
    
    return valid == true 
            ? true
            : false
}

const validName = (value) => {
    let reGex = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    let valid = reGex.test(value)
    
    return valid == true 
            ? true
            : false
}

const validEmail = (value) => {
    let reGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let valid = reGex.test(value)

    return valid == true 
            ? true
            : false
}

const validPassword = (value) => {
    let reGex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/

    let valid = reGex.test(value)

    return valid == true 
            ? true
            : false
}

const validPhone = (value) => {
    let reGex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
    let valid = reGex.test(value)

    return valid == true 
            ? true
            : false
}

const isEmpty = (input) => {
    let parentInput = input.parentElement
    let smallError = parentInput.lastElementChild


    smallError.classList.add('errorJS')
    smallError.textContent = "* Campo obligatorio"
    input.classList.add('errorInputJS')
}

const showError = (input , message) => {
    const parentInput = input.parentElement
    const smallError = parentInput.lastElementChild

    smallError.classList.add('errorJS')
    input.classList.add('errorInputJS')
    smallError.textContent = message
}


const showSuccess = (input) => {
    const parentInput = input.parentElement
    const smallError = parentInput.lastElementChild

    smallError.classList.remove('errorJS')
    input.classList.remove('errorInputJS')
    smallError.classList.add('successJS')
    smallError.textContent = ''

}

const userExisting = (value) => {


    if(userLocalStorage.length == 0){
        return true

    }
    console.log(`Value: ${value}`)
    console.log(`LS: ${userLocalStorage[0]}`)
    let valid = userLocalStorage.filter(item => {return item.user == value})
    console.log(`Valid: ${valid}`)

    if(valid.length){
        return false
    }

    return true


}

const emailExisting = (value) => {

    if(!userLocalStorage.length){

        return true

    }

    let valid = userLocalStorage.filter(item => {return item.email == value})
    if(valid.length){
        return false
    }

    return true


}
const phoneExisting = (value) => {

    if(userLocalStorage.length){
        return true
    }

    let valid = userLocalStorage.filter(item => {return item.phone == value})
    if(valid.length){
        return false
    }

    return true


}
// ---------------------------------------------


const checkUser = (value) => {
    let valueInput = value.trim()
    // Empezamos diciendole al analizador sintáctico que encuentre el principio de la cadena (^), seguido de cualquier letra minúscula (a-z), número (0-9), un carácter de subrayado o un guión. A continuación, {3,16} asegura que sean al menos 3 de esos caracteres, pero no más de 16. Por último, queremos el final de la cadena ($).
    if(valueInput.length == 0){
        isEmpty($user)
        return false
    }
    if(!validUser(valueInput)){
        showError($user, '*Debe contener entre 3 y 16 caracteres, puede contener guiones y numeros')
        return false
    }
    if(!userExisting(valueInput)){
        showError($user, '*Ya existe un usuario con ese nombre, pruebe otro por favor')
        return false
    }

    showSuccess($user)
    return true

}

const checkName = (value) => {
    let valueInput = value.trim()

    if(valueInput.length == 0){
        isEmpty($name)
        return false
    }
    if(!validName(valueInput)){
        showError($name, '*Solo puede contener letras y espacios')
        return false
    }

    showSuccess($name)
    return true
}

const checkEmail = (value) => {
    let valueInput = value.trim()
    // Empezamos diciendole al analizador sintáctico que encuentre el principio de la cadena (^), seguido de cualquier letra minúscula (a-z), número (0-9), un carácter de subrayado o un guión. A continuación, {3,16} asegura que sean al menos 3 de esos caracteres, pero no más de 16. Por último, queremos el final de la cadena ($).
    if(valueInput.length == 0){
        isEmpty($email)
        return false
    }
    if(!validEmail(valueInput)){
        showError($email, '*Ingrese un email valido.')
        return false
    }
    if(!emailExisting(valueInput)){
        showError($email, '*Ya existe ese email registrado')
        return false
    }

    showSuccess($email)
    return true
}

const checkPassword = (value) => {
    let valueInput = value.trim()
    // Empezamos diciendole al analizador sintáctico que encuentre el principio de la cadena (^), seguido de cualquier letra minúscula (a-z), número (0-9), un carácter de subrayado o un guión. A continuación, {3,16} asegura que sean al menos 3 de esos caracteres, pero no más de 16. Por último, queremos el final de la cadena ($).
    if(valueInput.length == 0){
        isEmpty($password)
        return false
    }
    if(!validPassword(valueInput)){
        showError($password, 'Debe contener por lo menos 8 digitos, un caracter especial, una minuscula, una mayuscula y un número')
        return false
    }

    showSuccess($password)
    return true
}

const checkPhone = (value) => {
    let valueInput = value.trim()
    // Empezamos diciendole al analizador sintáctico que encuentre el principio de la cadena (^), seguido de cualquier letra minúscula (a-z), número (0-9), un carácter de subrayado o un guión. A continuación, {3,16} asegura que sean al menos 3 de esos caracteres, pero no más de 16. Por último, queremos el final de la cadena ($).
    if(valueInput.length == 0){
        isEmpty($phone)
        return false
    }
    if(!validPhone(valueInput)){
        showError($phone, '*Ingrese un numero valido que incluya su prefijo, debe contener como minimo 10 numeros')
        return false
    }
    if(!phoneExisting(valueInput)){
        showError($phone, '*Ya existe ese numero registrado')
        return false
    }

    showSuccess($phone)
    return true

}


const registerFn = (e) => {
    e.preventDefault()

    let isValidUser = checkUser($user.value)
    let isValidName = checkName($name.value)
    let isValidEmail = checkEmail($email.value)
    let isValidPassword = checkPassword($password.value)
    let isValidPhone = checkPhone($phone.value)

    if(isValidUser && isValidName && isValidEmail && isValidPassword && isValidPhone){

        const newUser = {
            user: $user.value,
            name: $name.value,
            email:$email.value,
            password: $password.value,
            phone: $phone.value
        }

        saveDataUser(newUser)
        saveUserToLocalStorage(userLocalStorage)
        setTimeout(() => {
            $formRegister.reset()
        }, 1000);
        

        $alertSuccessRegister.classList.remove('displayNone')
        setTimeout(() => {
            location.href = 'login.html'
        }, 2500);


        



    }
    
}


const initRegister = () => {

    $formRegister.addEventListener('submit', registerFn)

}

initRegister()