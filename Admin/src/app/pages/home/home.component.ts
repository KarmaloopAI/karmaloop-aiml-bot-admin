import { BotService } from './../../shared/services/bot.service';
import { ChartService } from './../../shared/services/chart.service';
import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public bots: any;
  public activeBots: any;
  public activeChats: any;
  public totalConversation: any;
  public conversationbyDays: any[] = [];
  public chartBot: any[] = [];
  public statusData = [{
    Value: 'Active',
    Text: 'Active'
  },
  {
    Value: 'InActive',
    Text: 'In Active'
  }];
  constructor(private chartService: ChartService,
    private botService: BotService) {
  }
  ngOnInit() {
    this.bots = new CustomStore({
      key: 'botId',
      load: () => this.getBotsData(),
      remove: (key) => this.deleteBot(key),
    });
    this.activeBotsdata();
    this.activeChatsdata();
    this.allConversation();
    this.chartData();

  }
  getBotsData(): Promise<any> {
    return this.botService.getAllBots().toPromise().then((res) => {
      if (res) {
        return res;
      } else {
        return [];
      }

    });
  }
  public deleteBot(id): Promise<any> {
    return this.botService.deleteBot(id).toPromise().then((res) => {
      return res;
    });
  }
  private activeBotsdata(): Promise<any> {
    return this.chartService.getAllActiveBots().toPromise().then((res) => {
      this.activeBots = res.count;
      return res;
    });
  }
  private activeChatsdata(): Promise<any> {
    return this.chartService.getAllActiveChats().toPromise().then((res) => {
      this.activeChats = res.count;
      return res;
    });
  }

  private allConversation(): Promise<any> {
    return this.chartService.getAllActiveConversation().toPromise().then((res) => {
      this.totalConversation = res.count;
      return res;
    });
  }

  private chartData() {
    this.chartService.chartData().subscribe(res => {
      this.conversationbyDays = res.chartDesc;
      this.chartBot = res.botDesc;
    });
  }

}


