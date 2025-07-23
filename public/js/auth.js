document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authMainTitle = document.getElementById('auth-main-title'); // Changed ID
    const authSubtitle = document.getElementById('auth-subtitle');     // New ID
    const toggleTextContainer = document.getElementById('toggle-text'); // Changed ID for the <p> element
    const signupToggleLink = document.getElementById('signup-toggle-link'); // Changed ID

    let isLoginView = true;

    function toggleAuthView() {
        if (isLoginView) {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            authMainTitle.textContent = 'Join NZ Cricket'; // Update main title 
            authSubtitle.textContent = 'Create your activator account to get started'; // Update subtitle 
            toggleTextContainer.innerHTML = 'Already have an account? <a href="#" id="signin-toggle-link">Sign in</a>';
            
            // Re-get the new signin-link element as it's just created
            document.getElementById('signin-toggle-link').addEventListener('click', (e) => {
                e.preventDefault();
                toggleAuthView();
            });
        } else {
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            authMainTitle.textContent = 'Welcome Back'; // Update main title 
            authSubtitle.textContent = 'Sign in to access your cricket dashboard'; // Update subtitle 
            toggleTextContainer.innerHTML = 'Don\'t have an account? <a href="#" id="signup-toggle-link">Sign up</a>';
            
            // Re-get the new signup-link element
            document.getElementById('signup-toggle-link').addEventListener('click', (e) => {
                e.preventDefault();
                toggleAuthView();
            });
        }
        isLoginView = !isLoginView;
    }

    // Initial event listener for the signup link
    signupToggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleAuthView();
    });

    // Handle form submissions (using Fetch API for simplicity, integrate with your Express APIs)
    // ... (Login and Signup form submission logic remains the same as before)
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target['login-email'].value;
        const password = e.target['login-password'].value;

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                window.location.href = '/'; // Redirect to landing page on success
            } else {
                alert('Login failed: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        }
    });

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = e.target['signup-fullname'].value;
        const email = e.target['signup-email'].value;
        const password = e.target['signup-password'].value;

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                toggleAuthView(); // Optionally toggle back to login after successful signup
            } else {
                alert('Signup failed: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred. Please try again.');
        }
    });
});