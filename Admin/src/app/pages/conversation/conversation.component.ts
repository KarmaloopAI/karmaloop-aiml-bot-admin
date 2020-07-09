import { Component, OnInit } from '@angular/core';
import { BotService } from 'src/app/shared/services/bot.service';
import { ChartService } from 'src/app/shared/services/chart.service';
import { alert } from 'devextreme/ui/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  constructor(private botService: BotService, private chartService: ChartService, private router: Router) { }
  bots: any[] = [];
  botAnalytics: any[] = [];
  text = 'Select bot';
  ngOnInit() {
    this.botService.getAllBots().subscribe(res => {
      if (!res) {
        res.forEach(element => {
          this.bots.push({
            name: element.botName,
            value: element.botId
          });
        });
      } else {
        alert('Register some bots', 'Information').then((r) => {
          this.router.navigate(['/newbot']);
        });
      }
    });
  }
  changeBot(event: any) {
    const botId = event.itemData.value;
    this.text = event.itemData.name;
    this.chartService.getBotsAnalyicsDataById(botId).subscribe(res => {
      this.botAnalytics = res;
    });
  }

}
