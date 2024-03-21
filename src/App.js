import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Init from './pages/PageInit';
import Login from './pages/PageSignIn';
import CreateAccount from './pages/PageSignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;