import React from 'react';
import Input from '../Input';
import useForm from '../../hooks/useFormLogin';
import BtnPrimary from '../BtnPrimary';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const [formData, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('*** Please, enter your email and password correctly');
      return;
    } else if (formData.password.length < 6) {
      setError('*** The password must be at least 6 characters');
      return;
    }
    setLoading(true);
    console.log('Evento de submit disparado');
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

          <Link to="/forgot-password" className="text-sm text-gray-400">
            Forgot Password?
          </Link>
        </small>
      </div>
    </form>
  );
};

export default FormLogin;
