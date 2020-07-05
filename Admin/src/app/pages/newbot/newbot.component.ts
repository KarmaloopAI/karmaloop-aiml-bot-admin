import { Router } from '@angular/router';
import { BotService } from './../../shared/services/bot.service';
import { Component, OnInit } from '@angular/core';
import { ChartService, Customer } from './../../shared/services/chart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newbot',
  templateUrl: './newbot.component.html',
  styleUrls: ['./newbot.component.scss']
})
export class NewbotComponent implements OnInit {
  Groups: string[];
  botCard: any[];
  public newBotForm: FormGroup;
  public validatioMessages: any;

  constructor(public service: ChartService,
              private fb: FormBuilder,
              private botService: BotService,
              private router: Router) {
    this.Groups = service.getSimpleProducts();
  }

  ngOnInit() {
    this.botService.getAllBots().subscribe(res => {
      this.botCard = res;
    });
    this.newBotForm = this.fb.group({
      IPAddress: this.fb.control('', Validators.required),
      port: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      botName: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      location: this.fb.control('', Validators.required),
      botId: this.fb.control('', Validators.required),
      groupName: ['Group B']
    });
    this.validatioMessages = {
      IPAddress: [
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
      ],
      location: [
        {
          type: 'required',
          message: 'Location is required.'
        }
      ],
      botId: [
        {
          type: 'required',
          message: 'Bot ID is required.'
        }
      ]
    };
  }
  public addBot() {
    if (this.newBotForm.valid) {
      const data = this.newBotForm.value;
      this.botService.post(data).subscribe((res) => {
        this.reload();
      });
    }
  }
  updateBotData(data, status) {
    data.status = status;
    this.botService.updateBotData(data.botId, data).subscribe(res => {
      this.reload();
    });
  }
  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    const url: string = this.router.url;
    this.router.navigate([`${url}`]);
  }

}
