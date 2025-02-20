import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../configDetails';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  appConfigData: any;

  constructor(private _httpClient: HttpClient) { 
    console.log(">>>>appConfig", appConfig);
    this.appConfigData = appConfig;
  }

  getUserData(): Observable<any> {  
    console.log(">>>>this.appConfigData.apiConfig.api", this.appConfigData.apiConfig.api);
    return this._httpClient.get(this.appConfigData.apiConfig.api).pipe(
      map((response) => {
        console.log('API Response:', response);
        return response; 
      })
    );
  }
}
