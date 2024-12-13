function validateForm() {
    // Clear existing error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('fileError').innerText = '';
    document.getElementById('feedbackError').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const file = document.getElementById('file').files[0];
    const feedback = document.getElementById('feedback').value.trim();

    let isValid = true;

    // Validate Name
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate File
    if (!file) {
        document.getElementById('fileError').innerText = 'Please upload a photo or video.';
        isValid = false;
    }

    // Validate Feedback
    if (!feedback) {
        document.getElementById('feedbackError').innerText = 'Feedback is required.';
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        db.collection("feedbacks").add({
            name: name,
            email: email,
            feedback: feedback,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert("Feedback submitted successfully!");
            document.getElementById("feedbackForm").reset();
        }).catch((error) => {
            console.error("Error submitting feedback: ", error);
            alert("An error occurred. Please try again.");
        });
    }

}
  // Firebase configuration
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_Vf6FlHWQR8Yzo3Qt0opwjuNXE9J_qbQ",
    authDomain: "group-2-7dea4.firebaseapp.com",
    projectId: "group-2-7dea4",
    storageBucket: "group-2-7dea4.firebasestorage.app",
    messagingSenderId: "494990664818",
    appId: "1:494990664818:web:17f12aff4ef22981ef8eeb",
    measurementId: "G-6D5FL059CY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);