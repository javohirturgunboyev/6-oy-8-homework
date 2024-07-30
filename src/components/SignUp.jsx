import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 6 || password.length < 6) {
      setError('Name and Password must be at least 6 characters long');
      return;
    }
    onSignUp(name, password);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
