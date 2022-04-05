import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'sort',
    component: SortComponent,
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent,
  },
  {
    path: '**',
    redirectTo: '', // al basicscomponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
