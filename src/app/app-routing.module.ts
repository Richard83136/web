import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CGVComponent } from './cgv/cgv.component';
import { ContactComponent } from './contact/contact.component';
import { CreationComponent } from './creation/creation.component';
import { DeroulementComponent } from './deroulement/deroulement.component';
import { EtapesComponent } from './etapes/etapes.component';
import { FAQComponent } from './faq/faq.component';
import { MoiComponent } from './moi/moi.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { TarifsComponent } from './tarifs/tarifs.component';


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'CGV', component: CGVComponent},
  {path: 'les_3_etapes', component: EtapesComponent},
  {path: 'deroulement', component: DeroulementComponent},
  {path: 'tarifs', component: TarifsComponent},
  {path: 'qui-suis-je', component: MoiComponent},
  {path: 'me-contacter', component: ContactComponent},
  {path: 'exemple-de-creation', component: CreationComponent },
  {path: 'FAQ', component: FAQComponent },
  {path: 'parallax', component: ParallaxComponent },
  {path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path: '**', redirectTo: 'accueil'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
