
const $formLogin = document.querySelector('.form-contact')
const $userLogin = document.querySelector('#user-login')
const $passwordLogin = document.querySelector('#password-login')
const $alertSuccessLogin = document.querySelector('.alert-confirm')


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

const searchUser = (value) => {
    let filterUser = usersLogin.filter(item => item.user == value)
    if(filterUser.length > 0){
        return true
    }
    
    return false
    
}

const searchPassword = (valueUser, valuePassword) => {
    let filterUser = usersLogin.filter(item => item.user == valueUser)

    let passwordCorrect = filterUser[0].password === valuePassword

    if(passwordCorrect){
        
        return true
    }
    
    return false
    
}

const loginFn = (e) => {
    e.preventDefault()


    let valueUser = $userLogin.value
    let valuePassword = $passwordLogin.value


    if(!searchUser(valueUser)){
        showError($userLogin, "*Usuario incorrecto")
        return
    }
    if(!searchPassword(valueUser, valuePassword)){
        showError($passwordLogin, "Contraseña incorrecta")
        return
    }


    showSuccess($userLogin)
    showSuccess($passwordLogin)
    currentUser = localStorage.setItem('currentSession', JSON.stringify(valueUser))

    $alertSuccessLogin.classList.remove('displayNone')
    setTimeout(() => {
        location.href = 'index.html'
    }, 2500);

}


const initLogin = () => {
    $formLogin.addEventListener('submit', loginFn)

}

initLogin()