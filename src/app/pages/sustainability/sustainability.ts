import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaCard } from '../../components/mediacard/mediacard';

@Component({
  selector: 'app-sustainability',
  imports: [CommonModule, MediaCard],
  templateUrl: './sustainability.html',
  styleUrl: './sustainability.scss',
})
export class Sustainability {

}
