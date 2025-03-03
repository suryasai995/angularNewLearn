import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { HttpclientService } from '../../services/httpclient.service';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  inputText:any;
  signalInpuTest:any;
constructor(public signalService: HttpclientService){
  effect(() => {
    console.log('Signal State Changed:', this.signalService.state);
    this.signalInpuTest =this.signalService.state;
  });
}
  
  subMitSignal(){
    this.signalService.toggleSignal(this.inputText);
  }
}
