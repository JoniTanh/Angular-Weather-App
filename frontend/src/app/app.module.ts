import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenWeatherPageComponent } from './components/open-weather-page/open-weather-page.component';
import { MyWeatherPageComponent } from './components/my-weather-page/my-weather-page.component';
import { AddWeatherPageComponent } from './components/add-weather-page/add-weather-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home', showInNav: true },
  },
  {
    path: 'my-weather',
    component: MyWeatherPageComponent,
    data: { title: 'My Weather', showInNav: true },
  },
  {
    path: 'open-weather',
    component: OpenWeatherPageComponent,
    data: { title: 'Open Weather', showInNav: true },
  },
  {
    path: 'manage',
    component: ManageComponent,
    data: { title: 'Manage', showInNav: true },
  },
  {
    path: 'manage/add-weather/:cityName',
    component: AddWeatherPageComponent,
    data: { title: 'Add Weather', showInNav: false },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ManageComponent,
    OpenWeatherPageComponent,
    MyWeatherPageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
