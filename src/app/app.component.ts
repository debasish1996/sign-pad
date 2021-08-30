import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signature-demo';
  showPad = true;
  signImage = '';

  constructor() {

  }

  onClose() {
    this.showPad = true;
    console.log('I have done some work here..!!');
  }

  onUse(image) {
    this.signImage = image;
  }
}
