const verifyCreateLogin = (form) => {

    const { email, password, name, birthDate } = form;

    const verify = (email, password, name, birthDate) => {
        if (!name) {
            return '*** Please, enter your name correctly';
        }
        else if (!birthDate || birthDate.length < 10) {
            return '*** Please, enter your birth date correctly';
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
  
    return (verify(email, password, name, birthDate) === true) ? true : verify(email, password, name, birthDate);
  };
  
  export default verifyCreateLogin;