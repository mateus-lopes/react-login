import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import BtnPrimary from '../Btns';
import useFormHandler from '../../hooks/useFormHandler';

const FormSignIn = () => {
  const { formData, handleInputChange, handleSubmit, error, loading } = useFormHandler(false); 

  return (
    <form className='gap-2 flex flex-col' onSubmit={handleSubmit}>
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
      {loading && <p className='text-gray-400 text-xs italic pb-2'> Loading... </p>}
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

export default FormSignIn;
