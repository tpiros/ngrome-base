// image-gallery.component.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { WizardService } from '../wizard.service';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [GalleryImageComponent],
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  wizardService = inject(WizardService);

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.images = this.wizardService.getAllHogwartsImages();
  }
}
