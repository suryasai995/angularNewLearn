import { Component } from '@angular/core';
import { HttpclientService } from '../../services/httpclient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-view',
  imports:[CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  userData:any=[]
constructor(private _http:HttpclientService){

}
ngOnInit(): void {
  this._http.getUserData().subscribe((res)=>{
    this.userData =res;
    console.log(res,"<<<<<< client Data");
  })
}
}
