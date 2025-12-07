import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class Activities {
  activities = [
    { title: 'Hiking', img: 'assets/pictures/randonnee.jpg', alt: 'Hiking' },
    { title: 'Cycling', img: 'assets/pictures/velo.jpeg', alt: 'Cycling' },
    { title: 'Cooking', img: 'assets/pictures/oyakodon.jpg', alt: 'Cooking' },
    { title: 'Board Games', img: 'assets/pictures/chess.jpg', alt: 'Board Games' },
    { title: 'Puzzles & Strategy games', img: 'assets/pictures/puzzle.jpg', alt: 'Puzzles' },
    { title: 'Travelling', img: 'assets/pictures/voyage.jpg', alt: 'Travelling' },
    { title: 'Reading', img: 'assets/pictures/reading.jpeg', alt: 'Reading' },
    { title: 'Japanese Culture', img: 'assets/pictures/japan.jpg', alt: 'Japanese Culture' },
    { title: 'Videos-games', img: 'assets/pictures/videogames.jpg', alt: 'Videos-games' }
  ];
}