import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';



export const ROUTES: Routes = [
  { path: '',      loadChildren: () => System.import('./+listings')},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
