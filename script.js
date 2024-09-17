  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyCUqeFE6inlloKS_MunKfhmWWoslgQri4E",
    authDomain: "res-test-site.firebaseapp.com",
    projectId: "res-test-site",
    storageBucket: "res-test-site.appspot.com",
    messagingSenderId: "270358438347",
    appId: "1:270358438347:web:b9e54f3e983c89d697164e",
    measurementId: "G-XJJDJG8CDW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User logged in:", user);
            alert("Login successful!");
            // Redirect to a new page or update UI
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login error:", errorMessage);
            alert("Login failed: " + errorMessage);
        });
}
