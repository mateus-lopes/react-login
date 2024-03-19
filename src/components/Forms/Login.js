import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../../features/login/formLoginSlice';
import { verifyLogin } from '../../utils/index';
import Input from '../Input';
import BtnPrimary from '../Btns';

const FormLogin = () => {
  const dispatch = useDispatch();

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const message = verifyLogin(email, password);
   
    if (message !== true) {
      setError(message);
      return;
    }
    
    setError('');
    setLoading(true);
    dispatch(setEmail(email));
    dispatch(setPassword(password));
  };

  return (
    <form className='gap-2 flex flex-col' onSubmit={handleLogin}>
      <Input
        type="email"
        name="email"
        placeholder="Email or username"
        label="Email or username"
      />
      <Input
        type="password"
        name="password"
        placeholder="***********"
        label="Password"
      />
      {error && <p className='text-red-600 text-xs italic pb-2'>{error}</p>}
      {loading && 
        <p className='text-gray-400 text-xs italic pb-2'>
          Loading...
        </p>
      }
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
