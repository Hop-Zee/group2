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

}
