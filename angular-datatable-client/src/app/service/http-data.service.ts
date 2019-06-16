import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http:HttpClient) { }

  post(url:string, data:any): Observable<any> 
  {
    // console.log('HttpDataService--url--',url);
    // console.log('HttpDataService--data--',data);
    return this.http.post("http://localhost:8080/angulardatable/"+url,data);    
  }
  
}
