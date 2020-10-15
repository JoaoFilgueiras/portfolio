import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LayoutHomePageComponent } from './layouts/layout-home-page/layout-home-page.component';
import { NavbarComponent } from './layouts/comps/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LayoutHomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
