import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/general/side-menu/side-menu.component';
import { LoginPageComponent } from './components/general/login-page/login-page.component'
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'mainview', component: SideMenuComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
