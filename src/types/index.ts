export type Rol = 'ADMIN' | 'CAJERO';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
}

export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  precioVenta: string;
  stock: number;
}
