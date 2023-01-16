import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';

import './App.css';

import { LoginArea } from './components/login/LoginArea';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      {/* <TestChakraUI />
      <CountriesTable countries={countries} /> */}
      <Router>
        <AuthProvider>
          <Routes>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
