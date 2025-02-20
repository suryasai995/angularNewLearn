import { Component } from '@angular/core';
import { HttpclientService } from '../../services/httpclient.service';

@Component({
  selector: 'main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
constructor(private _http:HttpclientService){

}
ngOnInit(): void {
  this._http.getUserData().subscribe((res)=>{

    console.log(res,"<<<<<< client Data");
  })
}
}
