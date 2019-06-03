import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BotService {
  private baseURL:string = "https://api.dialogflow.com/v1/query?v=20150910"
  private token: string = 'ca8888813d7e48ca929100af8f4acf21' 
  
  constructor(private http: HttpClient) { }

  public getResponse(query: string){
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'

    }
  
  return this.http.post(`${this.baseURL}`, data, {headers: this.getHeaders() })
  }  

  public getHeaders(){
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', `Bearer ${this.token}`)
    return headers;
  }
}
