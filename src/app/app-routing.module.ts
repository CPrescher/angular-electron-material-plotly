import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { PlotComponent } from './plot/plot.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'plot',
    pathMatch: 'full'
  },
  {
    path: 'plot',
    component: PlotComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
