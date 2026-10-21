import { Usuario } from '../types';
import { api } from './api';

export async function login(email: string, password: string) {
  const { data } = await api.post<{ token: string; usuario: Usuario }>('/auth/login', { email, password });
  return data;
}
