import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutPrincipal from '../components/layout/LayoutPrincipal';
import { useAuth } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default function AppRoutes() {
  const { usuario } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={usuario ? <Navigate to="/" /> : <Login />} />
      <Route element={usuario ? <LayoutPrincipal /> : <Navigate to="/login" />}>
        <Route path="/" element={<Dashboard />} />
        {/* Agrega aqui: /ventas, /productos, /clientes, /caja, /reportes ... */}
      </Route>
    </Routes>
  );
}
