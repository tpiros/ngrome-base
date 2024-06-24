import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WizardInfoComponent } from './wizard-info/wizard-info.component';
import { ProfileComponent } from './profile/profile.component';
import { TrailerComponent } from './trailer/trailer.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wizard/:id',
    component: WizardInfoComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'trailer',
    component: TrailerComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];
