import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { EdicionEstudianteComponent } from './components/edicion-estudiante/edicion-estudiante.component';
import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';

const routes: Routes = [
  { path: 'estudiante/lista', component: ListaEstudianteComponent },
  { path: 'estudiante/editar/:id', component: EdicionEstudianteComponent },
  { path: 'estudiante/crear', component: CrearEstudianteComponent },

  { path: '', redirectTo: 'estudiante/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
