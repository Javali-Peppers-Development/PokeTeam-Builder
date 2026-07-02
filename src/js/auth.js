function registerUser(){
    const nameLog = document.getElementById('signup-name').value;
    const emailReg = document.getElementById('signup-email').value;
    const passwordReg = document.getElementById('signup-password').value;


        if(emailReg != '' && passwordReg != ''){

                const user = {

                    email: emailReg,
                    password: passwordReg
        };

                alert('You are already registered!');

            localStorage.setItem('user', JSON.stringify(user));
    }else{
        alert('Please enter an email address or password.');
    }

}
function loginUser() {
    const emailLog = document.getElementById('login-email').value;
    const passwordLog = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && emailLog === storedUser.email && passwordLog === storedUser.password) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
}