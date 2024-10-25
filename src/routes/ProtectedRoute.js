import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({ role }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.rol !== role) {
    return <Navigate to="/not-authorized" />;
  }

  return <Outlet />; // Renderiza las rutas hijas definidas en las rutas
};

export default ProtectedRoute;

