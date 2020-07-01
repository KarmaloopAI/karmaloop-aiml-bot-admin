import { ChartService, CountryInfo, EnergyDescription, Customer} from './../../shared/services/chart.service';
import { Component, NgModule } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  customers: Customer[];
  fruits = [
    { fruit: 'Apples', count: 10 },
    { fruit: 'Oranges', count: 12 },
    { fruit: 'Lemons', count: 15 },
    { fruit: 'Pears', count: 20 },
    { fruit: 'Pineapples', count: 3 }
];
  constructor(service: ChartService) {
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
    this.customers =  service.getCustomers();
  }
}


