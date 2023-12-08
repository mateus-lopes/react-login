const verifyLogin = (email, password) => {

  const verify = (email, password) => {
    if (!email) {
      return '*** Please, enter your email correctly';
    } else if (!email.includes('@') || !email.includes('.com')) {
      return '*** Please, enter a valid email';
    } else if (!password) {
      return '*** Please, enter your password correctly';
    } else if (password.length < 6) {
      return '*** The password must be at least 6 characters';
    } else return true;
  };

  return (verify(email, password) === true) ? true : verify(email, password);
};

export default verifyLogin;