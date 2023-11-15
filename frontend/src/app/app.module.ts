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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherManagementComponent } from './components/weather-management/weather-management.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home', showInNav: true },
  },
  {
    path: 'my-weather',
    component: WeatherChartComponent,
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
    path: 'manage/weather/:cityName',
    component: WeatherManagementComponent,
    data: { title: 'Add Weather', showInNav: false },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ManageComponent,
    OpenWeatherPageComponent,
    WeatherListComponent,
    WeatherManagementComponent,
    WeatherFormComponent,
    WeatherChartComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
