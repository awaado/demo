import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxGaugeModule } from 'ngx-gauge';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/general/side-menu/side-menu.component';
import { MapComponent } from './components/general/map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { miniDashboardComponent } from './components/general/pop-up/pop-up.component';
import { NotificationsComponent } from './components/general/notifications/notifications.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginPageComponent } from './components/general/login-page/login-page.component'
import { AppRoutingModule } from './app-routing.module';
import { SideitemsComponent } from './components/general/sideitems/sideitems.component';
import { NavService } from './nav.service'
import { SafePipe } from './classes/safe-pipe';
import { WeatherComponent } from './components/general/weather/weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    SideMenuComponent,
    MapComponent,
    miniDashboardComponent,
    NotificationsComponent,
    LoginPageComponent,
    SideitemsComponent,
    WeatherComponent,
  ],
  imports: [
    AppRoutingModule,
    NgxGaugeModule,
    ScrollingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [miniDashboardComponent, MapComponent, SideMenuComponent, NavService],
  bootstrap: [AppComponent],
})
export class AppModule { }
