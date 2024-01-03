import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from '../dummy/dummy.component';
import { WeatherWidgetComponent } from './weather-widget.component';

const routes: Routes = [
  { path: '', component: WeatherWidgetComponent, children: [{ path: 'dummy', component: DummyComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherWidgetRoutingModule {}
