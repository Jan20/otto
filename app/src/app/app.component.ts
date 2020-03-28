import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public theme: HTMLAudioElement

  public constructor() {

    this.theme = new Audio('assets/audio/forest_theme.mp3')
    this.theme.play()
    
  }


  title = 'app';
}
