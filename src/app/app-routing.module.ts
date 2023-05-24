import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkyTvComponent } from './Components/sky-tv/sky-tv.component';

const routes: Routes = [{ path: 'sky', component: SkyTvComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
