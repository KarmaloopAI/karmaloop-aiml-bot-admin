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
  botId = '';
  ngOnInit() {
    this.botService.getAllBots().subscribe(res => {
      if (res) {
        res.forEach(element => {
          this.bots.push({
            name: element.botName,
            value: element.botId
          });
        });
        // For auto refresh of GRID
        setInterval(() => {
          this.getConversationData();
        }, 15000);
      } else {
        alert('Please connect a bot or more to see conversations.', 'No Bots Connected').then((r) => {
          this.router.navigate(['/newbot']);
        });
      }
    });
  }
  changeBot(event: any) {
    this.botId = event.itemData.value;
    this.text = event.itemData.name;
    this.getConversationData();
  }
  getConversationData() {
    if (this.botId) {
      this.chartService.getBotsAnalyicsDataById(this.botId).subscribe(res => {
        this.botAnalytics = res;
      });
    }

  }
}
