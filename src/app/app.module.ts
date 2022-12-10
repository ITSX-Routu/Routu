import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AventurasComponent } from './aventuras/aventuras.component';
import { CulturaComponent } from './cultura/cultura.component';
import { RelajacionComponent } from './relajacion/relajacion.component';
import { VisitasComponent } from './visitas/visitas.component';

@NgModule({
  declarations: [
    AppComponent,
    AventurasComponent,
    CulturaComponent,
    RelajacionComponent,
    VisitasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
