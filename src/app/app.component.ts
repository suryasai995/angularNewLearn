import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {appConfig} from "./configDetails"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularLates';
  constructor(){
    console.log(">>>>appConfig",appConfig);
  }
}
