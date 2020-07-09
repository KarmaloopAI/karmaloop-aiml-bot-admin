import { Injectable } from '@angular/core';
import { HttpProxy } from './http-proxy.service';

@Injectable({
    providedIn: 'root'
})
export class ChartService {
    constructor(private httpService: HttpProxy) { }
    public getAllActiveBots() {
        return this.httpService.getAsync('activeBots');
    }

    public getAllActiveChats() {
        return this.httpService.getAsync('activeChats',);
    }

    public getAllActiveConversation() {
        return this.httpService.getAsync('totalConversations');
    }

    public getBotsAnalyicsDataById(id) {
        return this.httpService.getAsync('analyticByBotId/' + id);
    }

    public chartData() {
        return this.httpService.getAsync('chartData');
    }



}