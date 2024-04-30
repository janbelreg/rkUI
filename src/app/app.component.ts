import { Component, OnInit } from '@angular/core';
import { RkServiceService } from 'src/app/services/rk-service.service';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  users: any;
  spisy: Spis[] = [];
  spisToEdit?: Spis;
  zazToEdit?: Zaznam;
  rezID = this.zazToEdit?.spisId;
  print: any;
  premenna: string = "";
  public rkServiceService2?: RkServiceService;
  abc: string ="";
 
  
  

  constructor(public rkServiceService: RkServiceService, ) { 
    
  } 

//prepojovacie metody so službou rkservice
  ngOnInit(): void {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => (this.spisy = result));
  }

  updateSpissList(spis: Spis[]) {
    this.spisy = spis;
  }


  initNewSpiss() {
    this.spisToEdit = new Spis();
  }

  editSpiss(spis: Spis) {
    this.spisToEdit = spis;
  }

  priradHodnotu(hodnota: string) {
      
  }
}
