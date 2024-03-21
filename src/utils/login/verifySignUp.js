const verifySignUp = (name, email, password) => {
    const verify = (name, email, password) => {
        if (!name) {
            return '*** Please, enter your name correctly';
        }
        else if (/\d/.test(name)) {
            return '*** The name must not contain numbers';
        }
        else if (name.split(' ').length < 2) {
            return '*** Please, enter your full name';
        }
        else if (!email) {
            return '*** Please, enter your email correctly';
        } else if (!email.includes('@') || !email.includes('.com')) {
            return '*** Please, enter a valid email';
        } else if (!password) {
            return '*** Please, enter your password correctly';
        } else if (password.length < 6) {
            return '*** The password must be at least 6 characters';
        } else return true;
    };
  
    return (verify(name, email, password) === true) ? true : verify(name, email, password);
  };
  
  export default verifySignUp;