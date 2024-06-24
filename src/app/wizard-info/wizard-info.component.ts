import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Wizard } from '../wizard';
import { WizardService } from '../wizard.service';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-wizard-info',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './wizard-info.component.html',
  styleUrl: './wizard-info.component.css',
})
export class WizardInfoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  wizardService = inject(WizardService);
  wizard$: Observable<Wizard | undefined> = this.route.params.pipe(
    switchMap((params) => {
      const wizardId = Number(params['id']);
      return this.wizardService.getWizardById(wizardId);
    })
  );
  photo = '';

  ngOnInit() {
    this.wizard$.subscribe((wizard) => {
      if (wizard) {
        this.photo = this.getPhotoUrl(wizard.name);
      }
    });

  }

  getPhotoUrl(name: string): string {
    return `/assets/${name.toLowerCase().replace(' ', '-')}.webp`;
  }
}
