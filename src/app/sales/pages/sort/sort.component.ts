import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  upperBoolean: boolean = true;

  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green,
    },
  ];

  changeCase() {
    this.upperBoolean = !this.upperBoolean;
  }

  changeOrderby(orderBy: string) {
    this.orderBy = orderBy;
  }
}
