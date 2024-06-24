import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [],
  templateUrl: './gallery-image.component.html',
  styleUrl: './gallery-image.component.css',
})
export class GalleryImageComponent {
  @Input({ required: true }) image!: string;
}
