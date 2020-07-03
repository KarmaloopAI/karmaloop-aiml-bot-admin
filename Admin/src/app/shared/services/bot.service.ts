import { HttpProxy } from './http-proxy.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private httpService: HttpProxy) { }

  private readonly url = 'bots';
  /**
   * @description Method to retrieve all the bots from the API
   */
  public getAllBots() {
    return this.httpService.getAsync(this.url);
  }
  /**
   * @description Method to submit the new details of the bot to the API
   * @param body Object consisting the required details
   */
  public post(body: any) {
    return this.httpService.postAsync(this.url, body);
  }

  /**
   * @description Method to send delete request to the API
   * @param id The id of the bot to be deleted
   */
  public deleteBot(id: any) {
    return this.httpService.deleteAsync(this.url+ '/' + id);
  }
}
