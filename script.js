// Divs value
const bars = document.getElementById('bars');
const navMenu = document.querySelector('.nav-menu');
const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');
// Inputs value
const loginEmail =  document.getElementById('loginEmail');  
const loginPassword =  document.getElementById('loginPassword');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const registerName = document.getElementById('registerName');   

function barsMenu() {
    navMenu.classList.toggle('active');
}

function signUp() {
    loginContainer.classList.remove('active');
    registerContainer.classList.add('active');
    clearAllValues();
}
    
function signIn() {
    registerContainer.classList.remove('active'); 
    loginContainer.classList.add('active');
    clearAllValues();
}

function clearAllValues() {
    loginEmail.value = '';
    loginPassword.value = '';
    registerEmail.value = '';
    registerPassword.value = '';
    registerName.value = '';
}
