import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  name: string = 'Alex';
  gender: string = 'male';

  invitation = {
    male: 'Benvingut',
    femenine: 'Benvinguda',
  };
}
