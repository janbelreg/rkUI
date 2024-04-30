import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { SpisyComponent } from '../pages/Spisy/spisy/spisy.component';


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
  //Metódy pre získanie cez Observables priamo z API
  public getZaznam() : Observable<Zaznam[]> {
      return this.http.get<Zaznam[]>('https://localhost:7241/api/Zaznam'); 
  }

  public updateZaznam(zaznam: Zaznam) : Observable<Zaznam[]> {
    return this.http.put<Zaznam[]>('https://localhost:7241/api/Zaznam/' + zaznam.id, zaznam); 
  }

  public createZaznam(zaznam: Zaznam) : Observable<Zaznam[]> {
    return this.http.post<Zaznam[]>('https://localhost:7241/api/Zaznam' , zaznam);
  }

  public deleteZaznam(zaznam: Zaznam) : Observable<Zaznam[]> {
    return this.http.delete<Zaznam[]>('https://localhost:7241/api/Zaznam/' + zaznam.id);
  }

  public getSpisZaznamy(spisId: string): Observable<Zaznam[]> { 
    return this.http.get<Zaznam[]>("https://localhost:7241/api/Spis/" + spisId + "/zaznamy"); 
  }

  public getSpis() : Observable<Spis[]> {
      return this.http.get<Spis[]>('https://localhost:7241/api/Spis');
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

  }



