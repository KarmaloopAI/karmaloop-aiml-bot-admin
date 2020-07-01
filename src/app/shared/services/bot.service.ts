import { HttpProxy } from './http-proxy.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private httpService: HttpProxy) { }

  post(body) {
    const url = 'bot';
    return this.httpService.postAsync(url, body);
  }
}
