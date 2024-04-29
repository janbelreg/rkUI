import { Component , OnInit } from '@angular/core';

//import { WeatherForecast } from 'src/models/WeatherForecast';
import { RkServiceService } from 'src/app/services/rk-service.service';
//import { AccountService } from 'src/services/account.service';
//import { User } from 'src/models/user';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { Reziser } from 'src/app/models/Reziser';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
import { ContentHeaderComponent } from 'src/app/pages/home/components/content-header/content-header.component';
import { ContentTableComponent } from 'src/app/pages/home/components/content-table/content-table.component';
import { FiltersComponent } from 'src/app/pages/home/components/filters/filters.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'store';
  users: any;
  spisy: Spis[] = [];
  spisToEdit?: Spis;
  zazToEdit?: Zaznam;
  rezID = this.zazToEdit?.spisId;
  //public zaz?: any;
  print: any;
  //rprint? = this.zaz;
  premenna: string = "";
  public rkServiceService2?: RkServiceService;
  //public sss?: DirectorFilmComponent;
  abc: string ="";
  dataSource: Reziser[] = [
    { id: '1', meno: 'John Doe', datumNarodenia: '2022-02-15', miestoNarodenia: '123 Main St', filmovaSpolocnost: 'Jane Smith' },
    { id: '2', meno: 'Alice Johnson', datumNarodenia: '2024-02-16', miestoNarodenia: '456 Elm St', filmovaSpolocnost: 'Bob Brown'},
    { id: '3', meno: 'Mary Johnson', datumNarodenia: '2024-02-17', miestoNarodenia: '789 Oak St', filmovaSpolocnost: 'David Green'},
    // Add more data as needed
  ];

  displayedColumns: string[] = ['id', 'nazovSpisu', 'datumVytvorenia', 'miestoNarodenia', 'username', 'actions'];
  
  //this.rkServiceService.reziserId
  
  

  constructor(public rkServiceService: RkServiceService, ) { //, public directorFilmComponent: DirectorFilmComponent
    
  } //, private accountService: AccountService

  /*ngOnInit() : void {
    this.forecast = this.rkServiceService.getWeatherForecast();
    console.log(this.forecast);
  }*/

  ngOnInit(): void {
    //this.setCurrentUser();
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => (this.spisy = result));
  }

  updateDirectorList(spis: Spis[]) {
    this.spisy = spis;
  }


  initNewDirector() {
    this.spisToEdit = new Spis();
  }

  editDirector(spis: Spis) {
    this.spisToEdit = spis;
  }

  priradHodnotu(hodnota: string) {
      
  }

  /*setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }*/

}
