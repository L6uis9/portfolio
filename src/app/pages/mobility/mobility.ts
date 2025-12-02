import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCard } from '../../components/mediacard/mediacard';

@Component({
  selector: 'app-mobility',
  imports: [CommonModule, MediaCard],
  templateUrl: './mobility.html',
  styleUrl: './mobility.scss',
})
export class Mobility {

}
