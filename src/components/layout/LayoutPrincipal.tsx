import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const menu = [
  { to: '/', texto: 'Inicio' },
  { to: '/ventas', texto: 'Ventas' },
  { to: '/productos', texto: 'Productos' },
  { to: '/clientes', texto: 'Clientes' },
  { to: '/caja', texto: 'Caja' },
  { to: '/reportes', texto: 'Reportes' },
];

export default function LayoutPrincipal() {
  const { usuario, logout } = useAuth();

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-blue-900 p-4 text-white">
        <h1 className="mb-6 text-xl font-bold">Minimarket</h1>
        <nav className="flex flex-col gap-1">
          {menu.map((m) => (
            <NavLink
              key={m.to}
              to={m.to}
              end={m.to === '/'}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-sm ${isActive ? 'bg-blue-700' : 'hover:bg-blue-800'}`
              }
            >
              {m.texto}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between bg-white px-6 py-3 shadow">
          <span className="text-sm text-slate-600">
            {usuario?.nombre} ({usuario?.rol})
          </span>
          <button onClick={logout} className="text-sm text-red-600 hover:underline">
            Salir
          </button>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
