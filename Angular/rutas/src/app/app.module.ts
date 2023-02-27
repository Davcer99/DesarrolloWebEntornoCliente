import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { ElementosModule } from './elementos/elementos.module';
import { DadoComponent } from './elementos/dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    JuegodadosComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
