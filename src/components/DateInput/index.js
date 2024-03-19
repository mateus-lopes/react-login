import React, { useState } from 'react';

const DateInput = ({ label, placeholder, value, onChange }) => {
  const [maskedValue, setMaskedValue] = useState(value);

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // Limitar o número máximo de caracteres
    inputValue = inputValue.slice(0, 10);

    let maskedDate = inputValue;

    // Aplicar máscara: DD/MM/YYYY
    if (inputValue.length === 2 && !inputValue.includes('/')) {
      maskedDate += '/';
    } else if (inputValue.length === 5 && !inputValue.includes('/', 3)) {
      maskedDate += '/';
    }

    setMaskedValue(maskedDate);
    onChange(maskedDate);
  };

  return (
    <div>
      <label htmlFor={'date'} className='text-sm font-bold block mb-2'>
        {label}
      </label>
      <input
        type='text'
        name='date'
        value={maskedValue}
        onChange={handleChange}
        placeholder={placeholder}
        className='border border-gray-400 p-2 rounded-md w-full mb-4'
      />
    </div>
  );
};

export default DateInput;