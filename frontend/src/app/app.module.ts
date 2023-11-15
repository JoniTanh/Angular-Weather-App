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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherManagementComponent } from './components/weather-management/weather-management.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';
import { OpenWeatherComponent } from './components/open-weather/open-weather.component';

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
    component: OpenWeatherComponent,
    data: { title: 'Open Weather API', showInNav: true },
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
    WeatherListComponent,
    WeatherManagementComponent,
    WeatherFormComponent,
    WeatherChartComponent,
    OpenWeatherComponent,
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
