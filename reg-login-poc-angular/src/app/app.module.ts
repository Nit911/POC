import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
// import { AppRoutingModule } from './core/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }