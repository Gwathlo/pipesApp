import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'alex';
  nameUpper: string = 'ALEX';
  fullName: string = 'aLeX A g';
}
