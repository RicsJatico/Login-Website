document.addEventListener('DOMContentLoaded', () => {
    // Login Form Handling
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        alert(`Login form submitted with Username: ${username}`);
    });

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            alert('Sign Up form submitted');
        });
    }
    
    document.addEventListener('DOMContentLoaded', () => {
    // Form transition logic
    const formContainer = document.querySelector('.form-container');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');

    if (switchToSignUp) {
        switchToSignUp.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.add('show-signup');
        });
    }

    if (switchToSignIn) {
        switchToSignIn.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.remove('show-signup');
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('signin-username').value;
            const password = document.getElementById('signin-password').value;

            alert(`Login form submitted with Username: ${username}`);
        });
    }

    // Sign Up Form Handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            alert('Sign Up form submitted');
        });
    }

    // Social Login Buttons
    const googleSignIn = document.getElementById('googleSignIn');
    if (googleSignIn) {
        googleSignIn.addEventListener('click', () => {
            window.location.href = 'https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=Ab5oB3qXMpuW3-hirvdHK-Yf7QR3a_Yz4OWbW2DOwhg6bxL2W2Tf2VYw15d1ecBF8nERV5L-LgMpCw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
        });
    }

    const facebookSignIn = document.getElementById('facebookSignIn');
    if (facebookSignIn) {
        facebookSignIn.addEventListener('click', () => {
            window.location.href = 'https://www.facebook.com/';
        });
    }

    // Forgot Password Link
    const forgotPassword = document.getElementById('forgotPassword');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Forgot Password clicked');
        });
    }
});


    document.getElementById('googleSignIn').addEventListener('click', () => {
        window.location.href = 'https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=Ab5oB3qXMpuW3-hirvdHK-Yf7QR3a_Yz4OWbW2DOwhg6bxL2W2Tf2VYw15d1ecBF8nERV5L-LgMpCw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
    });

    document.getElementById('facebookSignIn').addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/';
    });

    document.getElementById('forgotPassword').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Forgot Password clicked');
    });
    
});
