import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
//import { environment } from 'src/environments/environment';
//import { WeatherForecast } from 'src/models/WeatherForecast';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { Reziser } from 'src/app/models/Reziser';
import { SpisyComponent } from '../pages/Spisy/spisy/spisy.component';
import { Film } from 'src/app/models/Film';

@Injectable({
  providedIn: 'root'
})
export class RkServiceService {
  private url = "WeatherForecast";
  apiUrl = "https://localhost:7241/api";
  reziser: any;
  zaz: any;
  reziserId: string = "";
  premennas: string = "";
  
  constructor(private http: HttpClient) {}
 /* constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('${environment.apiUrl}/$');
  }*/

  /*public getWeatherForecast() : WeatherForecast[] {
    let forecast = new WeatherForecast();
    forecast.date = 1;
    forecast.temperatureC = 10;
    forecast.temperatureF = 52;
    forecast.summary = "Je to tak";

    return[forecast];


  }*/
  public getZaznam() : Observable<Zaznam[]> {
    //const fullUrl : string = environment.apiUrl; //'${this.apiUrl}/${url}'
      return this.http.get<Zaznam[]>('https://localhost:7241/api/Zaznam'); //'https://localhost:7244/api/Films'
      ///'{$environment.apiUrl}'/${url}
  }

  public updateZaznam(zaznam: Zaznam) : Observable<Zaznam[]> {
    return this.http.put<Zaznam[]>('https://localhost:7241/api/Zaznam/' + zaznam.id, zaznam); //bol Zaznam
  }

  public createZaznam(zaznam: Zaznam) : Observable<Zaznam[]> {
    return this.http.post<Zaznam[]>('https://localhost:7241/api/Zaznam' , zaznam);
  }

  public deleteZaznam(zaznam: Zaznam) : Observable<Zaznam[]> {
    return this.http.delete<Zaznam[]>('https://localhost:7241/api/Zaznam/' + zaznam.id);
  }

  public getSpisZaznamy(spisId: string): Observable<Zaznam[]> { // reziserId: number
    return this.http.get<Zaznam[]>("https://localhost:7241/api/Spis/" + spisId + "/films"); //`${this.apiUrl}/Directors/${reziserId}/films`
  }

  public getSpis() : Observable<Spis[]> {
    //const fullUrl : string = environment.apiUrl; //'${this.apiUrl}/${url}'
      return this.http.get<Spis[]>('https://localhost:7241/api/Spis');
      ///'{$environment.apiUrl}'/${url}
  }

  public updateSpis(spis: Spis) : Observable<Spis[]> {
    return this.http.put<Spis[]>('https://localhost:7241/api/Spis/' + spis.id, spis);
  }

  public createSpis(spis: Spis) : Observable<Spis[]> {
    return this.http.post<Spis[]>('https://localhost:7241/api/Spis', spis);
  }

  public deleteSpis(spis: Spis) : Observable<Spis[]> {
    return this.http.delete<Spis[]>('https://localhost:7241/api/Spis/' + spis.id);
  }
  /*public priradHodnotu(hodnota: any) {
    
    //this.premenna = this.reziserId;
    //console.log(this.premenna + 'niečo');
    this.reziserId = hodnota; // Nastavenie hodnoty reziserId v službe
    this.getDirectorFilms(hodnota).subscribe((result: Zaznam[]) => {
        // Tu môžete manipulovať s výsledkami, ak je to potrebné
        console.log(result); // Výsledky sú k dispozícii v premennej 'result'

        // Napríklad, môžete priradiť výsledky do premennej vo vašej komponente
        this.premenna = result;
    });*/
  }


//${forecast.date}
