import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mediacard.html',
  styleUrl: './mediacard.scss',
})
export class MediaCard {
  private _pictures: string[] = [];

  @Input() set pictures(value: string[]) {
    this._pictures = value.slice(0, 10); // max 10 images
  }
  get pictures() {
    return this._pictures;
  }

  @Input() title = '';
  @Input() text = '';
  @Input() imagesRight = true;

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
