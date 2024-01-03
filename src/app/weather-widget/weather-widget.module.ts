import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherWidgetRoutingModule } from './weather-widget-routing.module';
import { WeatherWidgetComponent } from './weather-widget.component';

@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [CommonModule, WeatherWidgetRoutingModule, FormsModule],
})
export class WeatherWidgetModule {}
