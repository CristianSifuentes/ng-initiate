import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { StandaloneComponent } from './pages/standalone-component/standalone-component';
import { DragonBallComponent } from './components/shared/dragonball-page/dragonball.component';
import { DragonballPage2Component } from './components/shared/dragonball-page2/dragonball-page2.component';

export const routes: Routes = [
  {
    path: '',component: CounterPageComponent

  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  }, {
    path: 'standalone',
    component: StandaloneComponent
  }, {
    path: 'dragonball',
    component: DragonBallComponent
  }, {
    path: 'dragonball2',
    component: DragonballPage2Component
  }


];
