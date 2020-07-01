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
  public validatioMessages: any;

  constructor(service: ChartService, private fb: FormBuilder,  private botService: BotService) {
    this.Groups = service.getSimpleProducts();
    this.customers =  service.getCustomers();
   }

  ngOnInit() {
    this.newBotForm = this.fb.group({
      ipAddress: this.fb.control('', Validators.required),
      port:this.fb.control('', [Validators.required, Validators.minLength(4)]),
      botName: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      group: ['Group B']
    });
    this.validatioMessages = {
      ipAddress: [
        {
          type: 'required',
          message: 'Ip Address is required.'
        }
       
      ],
      port: [
        {
          type: 'minlength',
          message: 'Please enter atleast 4 numbers'
        },
        {
          type: 'required',
          message: 'Port is required.'
        }
      ],
      botName: [
        {
          type: 'required',
          message: 'Bot Name is required.'
        }
      ],
      description: [
        {
          type: 'required',
          message: 'Description is required.'
        }
      ]
    };
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
