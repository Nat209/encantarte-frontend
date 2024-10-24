import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../views/LoginView';
import CreateUser from '../views/CreateUser';
import AdminDashboard from '../views/Admin/AdminView';
import Home from '../views/HomeView';
import ClienteDashboard from '../views/Client/ClienteView';
import NotFound from '../views/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/" element={<ProtectedRoute><ClienteDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/not-authorized" element={<div>No tienes acceso a esta página</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
