import { BotService } from './../../shared/services/bot.service';
import { Component, OnInit } from '@angular/core';
import { ChartService, Customer} from './../../shared/services/chart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newbot',
  templateUrl: './newbot.component.html',
  styleUrls: ['./newbot.component.scss']
})
export class NewbotComponent implements OnInit {
  Groups: string[];
  customers: Customer[];
  public newBotForm: FormGroup;

  constructor(service: ChartService, private fb: FormBuilder,  private botService: BotService) {
    this.Groups = service.getSimpleProducts();
    this.customers =  service.getCustomers();
   }

  ngOnInit() {
    this.newBotForm = this.fb.group({
      ipAddress: [''],
      port:[''],
      botName: [''],
      description: [''],
      group: ['Group B']
    });
  }
  public addBot(){
    if (this.newBotForm.valid) {
      const data = this.newBotForm.value;
      this.botService.post(data).subscribe((res)=> {
        console.log(res);
        
      })
    }
  }

}
