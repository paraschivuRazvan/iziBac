import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }