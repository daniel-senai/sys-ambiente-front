import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegation/menu/menu.component';
import { FooterComponent } from './navegation/footer/footer.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
