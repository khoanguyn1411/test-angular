import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testing';
  onHeaderButtonClick() {
    console.log('Header button clicked');
  }

  onFooterButtonClick() {
    console.log('Footer button clicked');
  }
}
