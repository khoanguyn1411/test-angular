import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Input() color = 'yellow';
  @Input() size = 'small';

  @Output() click = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
