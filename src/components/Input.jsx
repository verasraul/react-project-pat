import React from 'react';

function Input({ label, type, value, onChange, id }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
