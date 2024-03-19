import React from 'react';
import Input from '../Input';
import useForm from '../../hooks/useFormLogin';
import BtnPrimary from '../Btns';
import { Link } from 'react-router-dom';
import { verifyCreateAccount } from '../../utils/index';
import DateInput from '../DateInput';

const FormLogin = () => {
  const [formData, handleInputChange] = useForm({
    name: '',
    birthDate: '',
    email: '',
    password: '',
  });

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    const message = verifyCreateAccount(formData);

    if (message !== true) {
      setError(message);
      return;
    }

    setLoading(true);
    console.log('Evento de submit disparado');
    console.log('Full name: ', formData.name);
    console.log('Birth date: ', formData.birthDate);
    console.log('Email: ', formData.email);
    console.log('Password: ', formData.password);
    setError('');
  };

  return (
    <form className='gap-2 flex flex-col' onSubmit={handleLogin}>
      <Input
        type="text"
        name="name"
        placeholder="Full name"
        label="Full Name"
        value={formData.name}
        onInputChange={handleInputChange}
      />
      <DateInput 
        label="Birth Date"
        placeholder="DD/MM/YYYY"
        value={formData.birthDate}
        onChange={(value) => handleInputChange('birthDate', value)}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email or username"
        label="Email or username"
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
      <BtnPrimary text="Sign Up" type="submit" />
      <div className='flex justify-between'>
        <small>
          is a Member?{' '}
          <Link to="/login" className="text-sm text-primary">
            Sign In now
          </Link>
        </small>
      </div>
    </form>
  );
};

export default FormLogin;
