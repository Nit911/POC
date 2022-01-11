import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Products",component:OurProductsComponent},  
  {path:"About",component:AboutComponent},
  {path:"Contacts",component:ContactsComponent},
  {path:"Terms",component:TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, OurProductsComponent,
   TermsComponent, AboutComponent, ContactsComponent, NewComponent]
