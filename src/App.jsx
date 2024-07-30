import React, { useState } from 'react';
import SignUp from '../src/components/SignUp';
import SignIn from '../src/components/SignIn';
import Websites from '../src/components/Website';

const App = () => {
  const [view, setView] = useState('signup');
  const [credentials, setCredentials] = useState({ name: '', password: '' });

  return (
    <div className="app">
      {view === 'signup' && (
        <SignUp onSignUp={(name, password) => {
          setCredentials({ name, password });
          setView('signin');
        }} />
      )}
      {view === 'signin' && (
        <SignIn
          onSignIn={(name, password) => {
            if (name === credentials.name && password === credentials.password) {
              setView('websites');
            } else {
              alert(' Maʼlumotlar yaroqsiz');
            }
          }}
        />
      )}
      {view === 'websites' && <Websites />}
    </div>
  );
};

export default App;
