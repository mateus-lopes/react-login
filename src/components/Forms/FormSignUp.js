import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import BtnPrimary from '../Btns';
import useFormHandler from '../../hooks/useFormHandler';

const FormSignUp = () => {
  const { formData, handleInputChange, handleSubmit, error, loading } = useFormHandler(true); 

  return (
    <form className='gap-2 flex flex-col' onSubmit={handleSubmit}>
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
        placeholder="***********"
        label="Password"
        value={formData.password}
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

export default FormSignUp;
