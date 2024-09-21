import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Input from './Input';
import Button from './Button';
import './SignInForm.css';

function SignInForm({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    onSignIn();
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" text="Sign In" />
      </form>
    </div>
  );
}

export default SignInForm;
