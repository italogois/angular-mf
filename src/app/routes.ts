import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'widget',
    loadChildren: () => import('./weather-widget/weather-widget.module').then((m) => m.WeatherWidgetModule),
  },
  {
    path: '**',
    redirectTo: 'widget',
  },
];
