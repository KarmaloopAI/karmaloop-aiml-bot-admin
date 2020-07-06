import { BotService } from './../../shared/services/bot.service';
import { ChartService, Customer } from './../../shared/services/chart.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // conversationInfo: TotalConversationInfo[];
  // botsSources: BotsDescription[];
  public bots: any;
  public activeBots: any;
  public activeChats: any;
  public totalConversation: any;
  // public botsDescription: any;
  public conversationbyDays: any;
  public exam: any;
  objects : any = [];
  constructor(private service: ChartService, private botService: BotService) {
    // this.conversationInfo = service.getCoversationInfo();
    // this.botsSources = service.getbotsSources();
  }
  ngOnInit() {
    this.bots = new CustomStore({
      key: 'id',
      load: () => this.getBotsData(),
      remove: (key) => this.deleteBot(key)
    });
   this. activeBotsdata();
   this. activeChatsdata();
   this. allConversation();
  //  this. botsDescriptions();
   this. conversationDays();
  this.example();
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
  private activeBotsdata(): Promise<any> {
    return this.service.getAllActiveBots().toPromise().then((res) => {
      this.activeBots = res.count;
      return res;
    });
  }
  private activeChatsdata(): Promise<any> {
    return this.service.getAllActiveChats().toPromise().then((res) => {
      this.activeChats = res.count;
      return res;
    });
  }

  private allConversation(): Promise<any> {
    return this.service.getAllActiveConversation().toPromise().then((res) => {
      this.totalConversation = res.count;
      return res;
    });
  }

  // private botsDescriptions(): Promise<any> {
  //   return this.service.botsDescription().toPromise().then((res) => {
  //     this.botsDescription = res;
  //     console.log(this.botsDescription);
  //     return res;
     
  //   });
  // }

  private conversationDays(): Promise<any> {
    return this.service.totalConversation().toPromise().then((res) => {
      this.conversationbyDays = res;
      console.log(this.conversationbyDays);
      return res;
    });
  }
  private example(): Promise<any> {
    return this.service.totalConversation().toPromise().then((res) => {
      this.exam = res[res.length - 1].botsdesc;
      // this.exam = this.objects;
      console.log(this.exam);
     
     

      return this.exam;
    });
  }

}


