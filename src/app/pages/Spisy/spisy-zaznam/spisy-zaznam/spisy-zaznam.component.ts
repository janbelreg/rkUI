import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
//import { WeatherForecast } from 'src/models/WeatherForecast';
import { RkServiceService } from 'src/app/services/rk-service.service';
//import { AccountService } from 'src/services/account.service';
//import { User } from 'src/models/user';
import { Zaznam } from 'src/app/models/Zaznam';
import { Film } from 'src/app/models/Film';
import { Spis } from 'src/app/models/Spis';
import { Reziser } from 'src/app/models/Reziser';
import { ActivatedRoute } from '@angular/router';
import { SpisyComponent } from 'src/app/pages/Spisy/spisy/spisy.component';
import { ZaznamyComponent } from 'src/app/pages/Zaznamy/zaznamy/zaznamy.component';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator , MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-spisy-zaznam',
  templateUrl: 'spisy-zaznam.component.html',
  

})
export class SpisyZaznamComponent {
  title = 'store';
  users: any;
  zaznmy: Zaznam[] = [];
  zaznamy: Zaznam[] = [];
  dataSource = new MatTableDataSource<Zaznam>([]);
  zaznmToEdit?: Zaznam;
  zaznamToEdit?: Zaznam;
  totalItems: number = 1;
  pageSize = 5;
  currentPage = 0;
  startIndex = 0;
  endIndex = 10;
  five?: number = 5;
  ten?: number = 10;
  twentyfive?: number = 25;
  sortA: string = "";
  public bla: string = "";
 public rezisId: string = ""; 
 displayedColumns: string[] = ['id', 'adresa', 'adresat', 'datumCreate', 'datumDue','stav', 'spisId','actions'];
 
 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort = {} as MatSort;
  
 

  constructor(public rkServiceService: RkServiceService, private cdr: ChangeDetectorRef ) {

  } 


  ngOnInit(): void {
   
    /*this.rkServiceService
    .getSpisZaznamy(this.rkServiceService.premennas) 
    .subscribe((result: Zaznam[]) => (this.zaznmy = result));*/
    this.getUpdated();
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    //this.getUpdated();

  }

  getUpdated(): void {
    this.rkServiceService
    .getSpisZaznamy(this.rkServiceService.premennas)
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.zaznmy = result.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznmy;
        this.dataSource = new MatTableDataSource(result);

        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }



  pageStart(start: number) {
    this.startIndex = 0;
    this.endIndex = start;
    this.getUpdated();
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

  filterOtvoreny() {
    this.rkServiceService
    .getSpisZaznamy(this.rkServiceService.premennas)
    .subscribe((result: Zaznam[]) => 
      {
        
        this.cdr.detectChanges();
        this.zaznmy = result.filter((zaznam: Zaznam) => zaznam.stav == 0 );
        this.dataSource.data = this.zaznmy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        //this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  filterVybaveny() {
    this.rkServiceService
    .getSpisZaznamy(this.rkServiceService.premennas)
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.zaznmy = result.filter((zaznam: Zaznam) => zaznam.stav == 1 );
        this.dataSource.data = this.zaznmy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        //this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  filterUzavrety() {
    this.rkServiceService
    .getSpisZaznamy(this.rkServiceService.premennas)
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.zaznmy = result.filter((zaznam: Zaznam) => zaznam.stav == 2 );
        this.dataSource.data = this.zaznmy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        //this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  sortUp() {
    this.rkServiceService
    .getZaznam()
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.sortA = "vzostupne";
        this.zaznmy = result.sort();
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  sortDown() {
    this.rkServiceService
    .getZaznam()
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.sortA = "zostupne";
        this.zaznmy = result.sort((a,b) => this.zaznmy.length );
        this.dataSource.data = this.zaznmy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;

        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  updateSpisyZaznamList(zaznam: Zaznam[]) {
    this.zaznmy = zaznam;
  }


  initNewSpisyZaznamList() {
    this.zaznmToEdit = new Zaznam();
  }

  editSpisyZaznam(zaznam: Zaznam) {
    this.zaznmToEdit = zaznam;

  }



  /*setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }*/

}