import { ChangeDetectorRef, EventEmitter, Component, OnInit, OnChanges } from '@angular/core';
//import { WeatherForecast } from 'src/models/WeatherForecast';
import { RkServiceService } from 'src/app/services/rk-service.service';
//import { AccountService } from 'src/services/account.service';
//import { User } from 'src/models/user';
import { Zaznam } from 'src/app/models/Zaznam';
import { Reziser } from 'src/app/models/Reziser';
import { ActivatedRoute } from '@angular/router';
import { EditEntryComponent } from 'src/app/pages/Zaznamy/edit-entry/edit-entry.component';
//import { Film } from 'src/app/models/Film';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator , MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-zaznamysolo',
  templateUrl: './zaznamysolo.component.html',
  styleUrls: ['./zaznamysolo.component.css']
})
export class ZaznamysoloComponent {
  title = 'store';
  users: any;
  dataSource = new MatTableDataSource<Zaznam>([]);
  filteredData: Zaznam[] = [];
  zaznamy: Zaznam[] = [];
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
  displayedColumns: string[] = ['id', 'adresa', 'adresat', 'datumCreate', 'datumDue','stav', 'spisId','actions'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort = {} as MatSort;


  constructor(public rkServiceService: RkServiceService, private cdr: ChangeDetectorRef) { // private route: ActivatedRoute, private liveAnnouncer: LiveAnnouncer
    
  } 

  
  ngOnInit(): void {
    
   
   this.getUpdated();
   this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    //this.getUpdated();

  }

 /* ngOnChanges() {
    this.getUpdated();
    
    this.dataSource.paginator = this.paginator;
}*/

  getUpdated(): void {
    this.rkServiceService
    .getZaznam()
    .subscribe((result: Zaznam[]) => 
      {

        this.cdr.detectChanges();
        this.zaznamy = result.slice(this.startIndex,this.endIndex);//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  /*updateDataSource(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.getUpdated();
    //this.dataSource.data = this.zaznamy.slice(startIndex, endIndex);
  }
  onPageChange(event: PageEvent) {
    console.log("Page changed:", event);
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDataSource();
  }*/

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

  page30() {
    this.startIndex = 30;
    this.endIndex = 40;
    this.getUpdated();
  }

  page40 () {
    this.startIndex = 40;
    this.endIndex = 50;
    this.getUpdated();
  }

  filterOtvoreny() {
    this.rkServiceService
    .getZaznam()
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.zaznamy = result.filter((zaznam: Zaznam) => zaznam.stav == 0 );//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  filterVybaveny() {
    this.rkServiceService
    .getZaznam()
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.zaznamy = result.filter((zaznam: Zaznam) => zaznam.stav == 1 );//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  filterUzavrety() {
    this.rkServiceService
    .getZaznam()
    .subscribe((result: Zaznam[]) => 
      {
        this.cdr.detectChanges();
        this.zaznamy = result.filter((zaznam: Zaznam) => zaznam.stav == 2 );//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.totalItems = this.filteredData.length;
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
        this.zaznamy = result.sort();//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.totalItems = this.filteredData.length;
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
        this.zaznamy = result.sort((a,b) => this.zaznamy.length );//result;//.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.zaznamy;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.totalItems = this.filteredData.length;
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }
  
  nextPage() {
    const startIndex = this.startIndex * this.pageSize;
    const endIndex = this.endIndex * this.pageSize;
  }

  pageUp() {

      this.rkServiceService
      .getZaznam()
      .subscribe((result: Zaznam[]) => 
        {
          this.cdr.detectChanges();
          this.zaznamy = result.slice(10,25);//result;//.slice(this.startIndex,this.endIndex);
          this.dataSource.data = this.zaznamy;
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.totalItems = this.filteredData.length;
          console.log("Data fetched successfully:", this.dataSource);
          this.cdr.detectChanges();
        }, error => {
          console.error("Error fetching data:", error);
        });
      
      
      
      
  }

  pageDown() {

    const startIndex = this.startIndex-5;
    const endIndex = this.endIndex -5;
    this.getUpdated();
    console.log(startIndex,endIndex);
    
    
    
  }

  onPageFired(event: PageEvent){
    this.getUpdated();
    this.cdr.detectChanges();
  }

  apply(){
    window.location.reload()
  }


  updateWeatherForecastList(zaznam: Zaznam[]) {
    this.zaznamy = zaznam;

  }


  initNewWeatherForecast() {
    this.zaznamToEdit = new Zaznam();

  }

  editWeatherForecast(zaznam: Zaznam) {
    this.zaznamToEdit = zaznam;
    
  }

  /*setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }*/

}
