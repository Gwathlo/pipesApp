import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  upperBoolean: boolean = true;

  changeCase() {
    this.upperBoolean = !this.upperBoolean;
  }
}
