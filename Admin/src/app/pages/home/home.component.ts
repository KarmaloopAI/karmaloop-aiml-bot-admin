import { BotService } from './../../shared/services/bot.service';
import { ChartService, CountryInfo, EnergyDescription, Customer } from './../../shared/services/chart.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  public bots: any;
  constructor(service: ChartService, private botService: BotService) {
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
  }
  ngOnInit() {
    this.bots = new CustomStore({
      key: 'id',
      load: () => this.getBotsData(),
      remove: (key) => this.deleteBot(key)
    });
  }
  getBotsData(): Promise<any> {
    return this.botService.getAllBots().toPromise().then((res) => {
      return res;
    });
  }
  public deleteBot(id): Promise<any> {
    return this.botService.deleteBot(id).toPromise().then((res) => {
      return res;
    });
  }
}


