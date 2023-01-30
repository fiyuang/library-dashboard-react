import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { Layout } from '../../layout';
import { Dashboard } from '../../pages/Dashboard';
import { Login } from '../../pages/Login';
import { EditBookPage } from '../../pages/EditBookPage';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem('token'));
    const value = localStorage.getItem(import.meta.env.VITE_AUTH_KEY_LOCAL_STORAGE);

    if (value) {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
  }, []);

  return isAuthenticated ? <Dashboard /> : null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:bookId" element={<EditBookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
