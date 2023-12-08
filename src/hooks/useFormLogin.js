// Em um arquivo hooks/useForm.js
import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return [formData, handleInputChange];
};

export default useForm;
