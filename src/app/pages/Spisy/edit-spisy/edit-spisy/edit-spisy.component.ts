import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RkServiceService } from 'src/app/services/rk-service.service';
import { Spis } from 'src/app/models/Spis';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-spisy',
  templateUrl: 'edit-spisy.component.html',
  styles: [
  ]
})
export class EditSpisyComponent implements OnInit{
@Input() spis?: Spis;
@Output() spisUpdated = new EventEmitter<Spis[]>();


constructor(private rkserviceService: RkServiceService) {}

ngOnInit(): void {

  }

  //metódy na input údajov pre spis

updateSpise(spis: Spis) {
  this.rkserviceService
  .updateSpis(spis)
  .subscribe((spis: Spis[]) =>{ this.spisUpdated.emit(spis)
    window.alert('Bol upravený spis.'); 
  }, error => {
    console.log(error);
  }, () => {
    console.log('completed');
  });
}

deleteSpise(spis: Spis) {
  this.rkserviceService
  .deleteSpis(spis)
  .subscribe((spis: Spis[]) => { this.spisUpdated.emit(spis)
    window.alert('Bol vymazaný spis.'); 
  }, error => {
    console.log(error);
  }, () => {
    console.log('completed');
  });
}



createSpise(spis: Spis) {
  this.rkserviceService
  .createSpis(spis)
  .subscribe((spis: Spis[]) => { this.spisUpdated.emit(spis)
    window.alert('Bol vytvorený spis.' + JSON.stringify(spis)); 
  }, error => {
    console.log(error);
  }, () => {
    console.log('completed');
  });
}


}