import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
//import { WeatherForecast } from 'src/models/WeatherForecast';
import { RkServiceService } from 'src/app/services/rk-service.service';
//import { AccountService } from 'src/services/account.service';
//import { User } from 'src/models/user';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { Reziser } from 'src/app/models/Reziser';
import { Film } from 'src/app/models/Film';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator , MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-userspisy',
  templateUrl: './userspisy.component.html',
  styleUrls: ['./userspisy.component.css']
})
export class UserspisyComponent {
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
  currentPage = 0;
  startIndex = 0;
  endIndex = 10;
  sortA: string = "";
  dataSource = new MatTableDataSource<Spis>([]);
  //displayedColumns: string[] = ['id', 'meno', 'datumNarodenia', 'filmovaSpolocnost'];
  
  //this.rkServiceService.reziserId
  
  displayedColumns: string[] = ['id', 'nazovSpisu', 'datumVytvorenia', 'miestoNarodenia', 'username', 'actions'];

  constructor(public rkServiceService: RkServiceService, private cdr: ChangeDetectorRef ) { //, public directorFilmComponent: DirectorFilmComponent
    
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

  ngAfterViewInit(): void {
    
  }

  getUpdated(): void {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.spisy = result.slice(this.startIndex,this.endIndex);//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  pageNup(rise: number) {
    this.startIndex = this.startIndex + rise;
    this.endIndex = this.endIndex + rise;
    this.getUpdated();
  }

  pageNdown(down: number) {
    this.startIndex = this.startIndex - down;
    this.endIndex = this.endIndex - down;
    this.getUpdated();
  }

  pageStart(start: number) {
    this.startIndex = 0;
    this.endIndex = start;
    this.getUpdated();
  }

  filter01() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        
        this.cdr.detectChanges();
        this.spisy = result.filter((spiss: Spis) => spiss.username === 'abcd' );
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        //this.dataSource.paginator = this.paginator;
        //this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  filter02() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.spisy = result.filter((spiss: Spis) => spiss.username === 'ddanis' );
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        //this.dataSource.paginator = this.paginator;
        //this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  filter03() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.spisy = result.filter((spiss: Spis) => spiss.username === 'dsvec'  );
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        //this.dataSource.paginator = this.paginator;
        //this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
    }

  sortUp() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.sortA = "vzostupne";
        this.spisy = result.sort();//alternativne pouzitie result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  sortDown() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.sortA = "zostupne";
        this.spisy = result.sort((a,b) => this.spisy.length );//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  updateSpisy(spis: Spis[]) {
    this.spisy = spis;
  }


  initSpisy() {
    this.spisToEdit = new Spis();
  }

  editSpisy(spis: Spis) {
    this.spisToEdit = spis;
  }

  /*priradHodnotu(hodnota: string) {
      
  }*/

  /*setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }*/
}
