import React from 'react';
import './Input.css';

function Input({ type, name, label, required, placeholder, value, onChange }) {
  return (
    <label>
      {label}:
      <input 
        type={type} 
        name={name} 
        required={required} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
