import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import(`./modules/auth/auth.module`).then((m) => m.AuthModule), //A este nivel de approuting solo estarán los componentes que destruten otros componentes al hacer la renderización
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () =>
      import(`./modules/home/home.module`).then((m) => m.HomeModule), //A este nivel de approuting solo estarán los componentes que destruten otros componentes al hacer la renderización
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
