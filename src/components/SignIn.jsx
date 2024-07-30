import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(name, password);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
