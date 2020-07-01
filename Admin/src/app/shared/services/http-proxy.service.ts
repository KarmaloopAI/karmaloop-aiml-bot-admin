import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpProxy {
    private apiBaseUrl: string = environment.dev.apiBaseUrl;

    constructor(
        private http: HttpClient
    ) { }

    public getAsync(url: string, params?: any): Observable<any> {
        if (params !== undefined) {
            const options = this.getOptions(params);
            return this.http.get(`${this.apiBaseUrl}/${url}`, options);
        } else {
            const headers = this.getHeaders();
            return this.http.get(`${this.apiBaseUrl}/${url}`, { headers });
        }
    }

    public postAsync(url: string, body: any, params?: any): Observable<any> {
        if (params !== undefined) {
            const options = this.getOptions(params);
            return this.http.post(`${this.apiBaseUrl}/${url}`, body, options);
        } else {
            const headers = this.getHeaders();
            return this.http.post(`${this.apiBaseUrl}/${url}`, body, { headers });
        }
    }

    public putAsync(url: string, body: any, params?: any): Observable<any> {
        if (params !== undefined) {
            const options = this.getOptions(params);
            return this.http.put(`${this.apiBaseUrl}/${url}`, body, options);
        } else {
            const headers = this.getHeaders();
            return this.http.put(`${this.apiBaseUrl}/${url}`, body, { headers });
        }
    }

    public deleteAsync(url: string, params?: any): Observable<any> {
        if (params !== undefined) {
            const options = this.getOptions(params);
            return this.http.delete(`${this.apiBaseUrl}/${url}`, options);
        } else {
            const headers = this.getHeaders();
            return this.http.delete(`${this.apiBaseUrl}/${url}`, { headers });
        }
    }

    public patchAsync(url: string, body: any, params?: any): Observable<any> {
        if (params !== undefined) {
            const options = this.getOptions(params);
            return this.http.patch(`${this.apiBaseUrl}/${url}`, body, options);
        } else {
            const headers = this.getHeaders();
            return this.http.patch(`${this.apiBaseUrl}/${url}`, body, { headers });
        }
    }

    private getHeaders() {
        let headers = new HttpHeaders();

        // headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Content-Type', 'application/json');
        // headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers = headers.append('Access-Control-Allow-Methods', 'GET');


        return headers;
    }

    private getOptions(params?: any): any {
        const headers = this.getHeaders();
        return { headers, params };
    }
}
