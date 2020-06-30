import { Component, OnInit } from '@angular/core';
import { ChartService, Customer} from './../../shared/services/chart.service';

@Component({
  selector: 'app-newbot',
  templateUrl: './newbot.component.html',
  styleUrls: ['./newbot.component.scss']
})
export class NewbotComponent implements OnInit {
  Groups: string[];
  customers: Customer[];

  constructor(service: ChartService) {
    this.Groups = service.getSimpleProducts();
    this.customers =  service.getCustomers();
   }

  ngOnInit() {
  }

}
