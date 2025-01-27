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
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDUGTCgGS-bUlo0-q-4yGls5vgsuCn9Keo",
authDomain: "internintelligenceloginpage.firebaseapp.com",
projectId: "internintelligenceloginpage",
storageBucket: "internintelligenceloginpage.firebasestorage.app",
messagingSenderId: "649603952250",
appId: "1:649603952250:web:868cbdca5e51bc257255c3",
measurementId: "G-XVMZ4KJ08S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
