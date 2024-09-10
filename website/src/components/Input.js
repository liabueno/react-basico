import React from 'react';
import './Input.css';

function Input({ type, name, label, required, placeholder }) {
  return (
    <label>
      {label}:
      <input type={type} name={name} required={required} placeholder={placeholder} />
    </label>
  );
}

export default Input;
