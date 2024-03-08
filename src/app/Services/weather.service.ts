import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather:any = [];
  constructor(private httpClient:HttpClient) { }

  GetWeather():Observable<any>
  {
    return this.httpClient.get("https://jsonblob.com/api/jsonblob/1215650085416591360")
  }

  ngOnInit():void{
    this..GetStudentDate().subscribe(
      (data)=>{
        this.students = data.students;
      }
    );
  }
}
