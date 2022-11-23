import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  rol: string;
}

const MENUITEMS = [
  { state: 'usuarios', name: 'Usuarios', type: 'link', icon: 'group', rol:'Administrador' },
  { state: 'productos', type: 'link', name: 'Productos', icon: 'local_grocery_store', rol:'Administrador' },
  { state: 'planes', type: 'link', name: 'Planes', icon: 'local_offer', rol:'Administrador' },
  { state: 'prospectos', type: 'link', name: 'Prospectos', icon: 'person_pin', rol:'Administrador' },
  { state: 'mascotas', type: 'link', name: 'Mascotas', icon: 'panorama_fisheye', rol:'Administrador' },

  { state: 'sucursales', type: 'link', name: 'Sucursales', icon: 'place', rol:'Administrador' },
  { state: 'clientes', type: 'link', name: 'Clientes', icon: 'group', rol:'Asesor' },
  { state: 'mascotas', type: 'link', name: 'Mascotas', icon: 'panorama_fisheye', rol:'Asesor' },
  { state: 'prospectos', type: 'link', name: 'Prospectos', icon: 'group', rol:'Asesor' },


  { state: 'cliente-mascotas', type: 'link', name: 'Mascotas', icon: 'group', rol:'Cliente' },
  { state: 'cliente-productos', type: 'link', name: 'Productos', icon: 'group', rol:'Cliente' },
  { state: 'cliente-planes', type: 'link', name: 'Planes', icon: 'group', rol:'Cliente' },

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
