import { Producto } from '../types';
import { api } from './api';

export const listarProductos = async (buscar?: string) =>
  (await api.get<Producto[]>('/productos', { params: { buscar } })).data;
