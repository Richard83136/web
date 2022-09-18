import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CGVComponent } from './cgv/cgv.component';
import { EtapesComponent } from './etapes/etapes.component';
import { DeroulementComponent } from './deroulement/deroulement.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { MoiComponent } from './moi/moi.component';
import { ContactComponent } from './contact/contact.component';
import { CreationComponent } from './creation/creation.component';
import { FAQComponent } from './faq/faq.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,

    CGVComponent,

    EtapesComponent,
    DeroulementComponent,
    TarifsComponent,
    MoiComponent,
    ContactComponent,
    CreationComponent,
    FAQComponent,
    ParallaxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
