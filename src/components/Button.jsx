import React from 'react';
import './Button.css'

function Button({ type, text, onClick }) {
  return (
    <button type={type} onClick={onClick} className="button">
      {text}
    </button>
  );
}

export default Button;
