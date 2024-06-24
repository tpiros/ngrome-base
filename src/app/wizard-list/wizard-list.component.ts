import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Wizard } from '../wizard';
@Component({
  selector: 'app-wizard-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './wizard-list.component.html',
  styleUrl: './wizard-list.component.css',
})
export class WizardListComponent {
  @Input() wizard!: Wizard;
  photo: string = '';

  ngOnInit() {
    this.photo = this.getPhotoUrl(this.wizard.name);
  }

  getPhotoUrl(name: string): string {
    return `/assets/${name.toLowerCase().replace(' ', '-')}.webp`;
  }

  checkRender(): void {
    console.log('Angular rendered something');
  }
}
