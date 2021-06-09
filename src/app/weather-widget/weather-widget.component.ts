import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { DummyComponent } from '../dummy/dummy.component';
import { AdDirective } from './ad.directive';

interface AbstractAddAlertButtonComponent {
  location: string;
  type: 'weather' | 'civil-protection';
}

@Component({
  selector: 'wx-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent {
  componentRef: ComponentRef<any> | undefined;
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  locationToSearch = '';
  location = '';

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  async seaerch() {
    this.locationToSearch = this.location;
    try {
      await this.createComponent();
    } catch {
      if (!environment.production) {
        this.createDummyComponent();
      }
    }
  }

  async createComponent() {
    const remote = await loadRemoteModule({
      remoteName: 'ngMfNotification',
      exposedModule: './AddAlertButtonComponent',
    });

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        remote.AddAlertButtonComponent
      ) as any;

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef =
      viewContainerRef.createComponent<AbstractAddAlertButtonComponent>(
        componentFactory
      );
    this.componentRef.instance.location = this.location;
    this.componentRef.instance.type = 'weather';
  }

  async createDummyComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(DummyComponent);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef =
      viewContainerRef.createComponent<DummyComponent>(componentFactory);
  }
}
