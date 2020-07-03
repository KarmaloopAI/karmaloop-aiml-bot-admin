import { Injectable } from '@angular/core';
import { HttpProxy } from './http-proxy.service';

// export class TotalConversationInfo {
//     date: string;
//     BOTA: number;
//     BOTB: number;
//     BOTC: number;
//     BOTD: number;
//     BOTE: number;
// }

// export class BotsDescription {
//     value: string;
//     name: string;
// }
export class Customer {

    botName: string;
    Status: string;
    Port: number;
    IPAddress: string;
    Location: string;
    View: string;
    Edit: string;
}
export class newbot {

    botName: string;
    Status: string;
    Port: number;
    Location: string;
    View: string;
    Edit: string;
}

let Groups: string[] = [
    'Group A',
    'Group B',
    'Group C',
    'Group D',
    'Group E',
    'Group F',
    'Group G',
    'Group H',
    'Group I',

];


// let botsSources: BotsDescription[] = [
//     { value: 'BOTA', name: 'Bot A' },
//     { value: 'BOTB', name: 'Bot B' },
//     { value: 'BOTC', name: 'Bot C' },
//     { value: 'BOTD', name: 'Bot D' },
//     { value: 'BOTE', name: 'Bot E' }
// ];

// let conversationInfo: TotalConversationInfo[] = [{
//     date: '2 jan,Thursday',
//     BOTA: 30,
//     BOTB: 40,
//     BOTC: 10,
//     BOTD: 80,
//     BOTE: 35
// }, {
//     date: '6 jan,Monday ',
//     BOTA: 20,
//     BOTB: 45,
//     BOTC: 72,
//     BOTD: 93,
//     BOTE: 11
// }, {
//     date: '10 jan,Friday',
//     BOTA: 40,
//     BOTB: 28,
//     BOTC: 61,
//     BOTD: 100,
//     BOTE: 32
// }, {
//     date: '14 jan,Tuesday',
//     BOTA: 22,
//     BOTB: 41,
//     BOTC: 64,
//     BOTD: 20,
//     BOTE: 64
// }, {
//     date: '18 jan,Saturday',
//     BOTA: 19,
//     BOTB: 93,
//     BOTC: 28,
//     BOTD: 48,
//     BOTE: 38
// }, {
//     date: '22 jan, Wednesday',
//     BOTA: 61,
//     BOTB: 36,
//     BOTC: 73,
//     BOTD: 57,
//     BOTE: 78
// }];

let customers: Customer[] = [{

    botName: 'BOT A',
    Status: '13 Aug, 2018, Active',
    Port: 8888,
    Location: 'New York',
    View: 'Options',
    Edit: 'Details',
    IPAddress: '64.57.667.83',

}, {
    botName: 'BOT B',
    Status: '13 Aug, 2018, InActive',
    Port: 8888,
    Location: 'Ontario',
    View: 'Options',
    Edit: 'Details',
    IPAddress: '64.57.667.82',
}, {
    botName: 'BOT C',
    Status: '13 Aug, 2018,Unreachable',
    Port: 8889,
    Location: 'Milan',
    View: 'Options',
    Edit: 'Details',
    IPAddress: '64.57.667.83',
}, {
    botName: 'BOT D',
    Status: '13 Aug, 2018, Active',
    Port: 8889,
    Location: 'Las Vegas',
    View: 'Options',
    Edit: 'Details',
    IPAddress: '64.57.667.84',
}, {
    botName: 'BOT E',
    Status: '13 Aug, 2018, Inactive',
    Port: 8889,
    Location: 'San Francisco',
    View: 'Options',
    Edit: 'Details',
    IPAddress: '64.57.667.85',
}];




@Injectable({
    providedIn: 'root'
})
export class ChartService {
    // getbotsSources(): BotsDescription[] {
    //     return botsSources;
    // }
    // getCoversationInfo(): TotalConversationInfo[] {
    //     return conversationInfo;
    // }
    getCustomers() {
        return customers;
    }
    getSimpleProducts(): string[] {
        return Groups;
    }
    constructor(private httpService: HttpProxy) { }
    private  url = '';
    public getAllActiveBots() {
        return this.httpService.getAsync(this.url ='activeBots');
      }

      public getAllActiveChats() {
        return this.httpService.getAsync(this.url ='activeChats');
      }

      public getAllActiveConversation() {
        return this.httpService.getAsync(this.url ='totalConversations');
      }

      public botsDescription() {
        return this.httpService.getAsync(this.url ='botsdescription');
      }

      public totalConversation() {
        return this.httpService.getAsync(this.url ='totalconversation');
      }

      

}