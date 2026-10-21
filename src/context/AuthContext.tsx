import { createContext, ReactNode, useContext, useState } from 'react';
import * as authService from '../services/authService';
import { Usuario } from '../types';

interface AuthCtx {
  usuario: Usuario | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const Ctx = createContext<AuthCtx>(null!);
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(() => {
    const guardado = localStorage.getItem('usuario');
    return guardado ? JSON.parse(guardado) : null;
  });

  async function login(email: string, password: string) {
    const r = await authService.login(email, password);
    localStorage.setItem('token', r.token);
    localStorage.setItem('usuario', JSON.stringify(r.usuario));
    setUsuario(r.usuario);
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuario(null);
  }

  return <Ctx.Provider value={{ usuario, login, logout }}>{children}</Ctx.Provider>;
}
