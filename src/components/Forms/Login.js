import React from 'react';
import Input from '../Input';
import useForm from '../../hooks/useFormLogin';
import BtnPrimary from '../Btns';
import { Link } from 'react-router-dom';
import verifyLogin from '../../utils/verifyLogin';

const FormLogin = () => {
  const [formData, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  

  const handleLogin = (e) => {
    e.preventDefault();
    
    const message = verifyLogin(formData.email, formData.password);

    if (message !== true) {
      setError(message);
      return;
    }
  
    setLoading(true);
    console.log('Enviando...');
    console.log('Email: ', formData.email);
    console.log('Password: ', formData.password);
    setError('');
  };

  return (
    <form className='gap-2 flex flex-col' onSubmit={handleLogin}>
      <Input
        type="email"
        name="email"
        placeholder="Email or username"
        label="Email or username"
        value={formData.email}
        onInputChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        placeholder="***********"
        label="Password"
        onInputChange={handleInputChange}
      />
      {error && <p className='text-red-600 text-xs italic pb-2'>{error}</p>}
      {loading && <p className='text-gray-400 text-xs italic pb-2'>Loading...</p>}
      <BtnPrimary text="Sign In" type="submit" />
      <div className='flex justify-between'>
        <small>
          Not Member?{' '}
          <Link to="/create-account" className="text-sm text-primary">
            Sign Up now
          </Link>
        </small>
        <small>

          <Link to="/forgot-password" className="text-sm text-gray-400 hover:underline">
            Forgot Password?
          </Link>
        </small>
      </div>
    </form>
  );
};

export default FormLogin;
