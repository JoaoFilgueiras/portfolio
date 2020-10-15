import { InicioComponent } from './pages/inicio/inicio.component';
import { LayoutHomePageComponent } from './layouts/layout-home-page/layout-home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutHomePageComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
