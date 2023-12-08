import React from 'react';
import Input from '../Input';
import useForm from '../../hooks/useFormLogin';
import BtnPrimary from '../Btns';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const [formData, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Evento de submit disparado');
    console.log('Full name: ', formData.name);
    console.log('Email: ', formData.email);
    console.log('Password: ', formData.password);
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
      <BtnPrimary text="Sign In" type="submit" />
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
