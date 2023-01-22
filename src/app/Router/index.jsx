import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../../layout';
import { Dashboard } from '../../pages/Dashboard';
import { Login } from '../../pages/Login';
import { EditBookPage } from '../../pages/EditBookPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:bookId" element={<EditBookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
