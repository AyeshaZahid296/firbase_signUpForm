
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword , createUserWithEmailAndPassword ,} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCqqyfAwUPjD2hHYpj8-M2F1uxNIzd1q4w",
    authDomain: "signupform-7e5d6.firebaseapp.com",
    projectId: "signupform-7e5d6",
    storageBucket: "signupform-7e5d6.firebasestorage.app",
    messagingSenderId: "140999486618",
    appId: "1:140999486618:web:10d9584a692edb6fe24323"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);



let firstName, lastName, email, password, repeatPassword;

function readForm() {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  repeatPassword = document.getElementById("repeatPassword").value;
  console.log(firstName, lastName, email, password, repeatPassword);
}
// Sign up
document.getElementById("signUp").addEventListener("click", function (e) {
  e.preventDefault();
  readForm();

  if (!firstName || !lastName || !email || !password || !repeatPassword) {
    alert("Please fill out all fields.");
    return;
  }

  if (password !== repeatPassword) {
    alert( `Password does'nt match`);
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert(`Welcome! ${firstName} ${lastName} Account has been created.`);
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("repeatPassword").value = "";
      window.location.href = "login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(`Error! ${errorMessage}`);
    });
});
// Sign In
document.getElementById("signIn").addEventListener("click", function (e) {
  e.preventDefault();
  readForm();

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(`User Signed in..`);
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      window.location.href = 'success.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode , errorMessage);
      alert(`Error, ${errorMessage}`)
      
    });
});