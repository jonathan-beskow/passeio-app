import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'categorias',
        loadChildren: () =>
          import('../categorias/categorias-module').then((m) => m.CategoriasModule),
        pathMatch: 'full',
        data: {
          titulo: 'Cadastro de categorias',
          subTitulo: 'Realize o cadastro de suas categorias',
        },
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares-module').then((m) => m.LugaresModule),
        pathMatch: 'full',
        data: {
          titulo: 'Cadastro de lugares',
          subTitulo: 'Realize o cadastro de seus lugares favoritos',
        },
      },
      {
        path: 'galeria',
        loadChildren: () => import('../galeria/galeria-module').then((m) => m.GaleriaModule),
        pathMatch: 'full',
        data: {
          titulo: 'Galeria',
          subTitulo: 'Veja os lugares cadastrados',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
