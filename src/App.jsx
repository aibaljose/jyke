import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import SignUp from './pages/signup';
import Login from './pages/login';
import Main from './pages/main';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div>
      <Routes >
      {/* <Route path="/" exact Component={Home} /> */}
        <Route path="/login"  Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/main" Component={Main}/>
        <Route path="/" element={<Navigate to="/login" />} />
      
      </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
