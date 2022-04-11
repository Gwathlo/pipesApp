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

  clients: string[] = ['Mary', 'Peter', 'Alex', 'Fernando', 'Miguel'];
  clientsMap = {
    '=0': " don't have any clients waiting",
    '=1': 'have a client waiting',
    '=2': 'have two clients waiting',
    other: 'have several clients waiting',
  };

  person = {
    name: 'Alex',
    age: 46,
    adress: 'Bcn, Cat',
  };

  changeGender() {
    if (this.name == 'Alex') {
      this.name = 'Noemí';
      this.gender = 'femenine';
    } else {
      this.name = 'Alex';
      this.gender = 'male';
    }
  }

  eraseClient() {
    if (this.clients.length > 0) {
      this.clients.pop();
    }
  }
}
