import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './engineering.html',
  styleUrls: ['./engineering.scss'],
})
export class Engineering {
  semesters = [
    {
      term: 'Semester 6',
      courses: [
        'Soft and Human Skills',
        'Probabilities',
        'Integration & Applications',
        'Imperative Programming',
        'Statistics',
        'Numerical Analysis',
        'Automatics',
        'Data Analysis',
        'Architecture'
      ],
      projects: ['Creation of an Eportfolio',
        'Implementation of a Sorting Algorithm in logic programming',
        'Implementation of Huffman Coding / Decoding Algorithm in Ada',
        'Mandelbrot in C',
        'Stabilisation of a Robot modelised by Pendulum']
    },
    {
      term: 'Semester 7',
      courses: ['Soft and Human Skills', 'Signal Processing', 'Telecommunications', 'Networks', "Scientific Computing", 'Machine Learning', 'Object-oriented Programming', 'Architecture', 'Systems'],
      projects: ['Creation of a Project Charter',
        'Implementations of Egalisers in MATLAB to reduce impact of multitarget interference',
        'Creation of a RogueLike in Java',
        'Implementation of a Shell in C',
        'Creation of a mini-Craps in logic programming',
        'Study of performance of several algorithms of calculation of biggest eigenvalue, and application to image compression by SVD',
        'Impentation of a simplified FAI network'
      ]
    },
    {
      term: 'Semester 8',
      courses: [
        'Soft and Human Skills',
        'Concurrent and Communicating Systems',
        'Automata and Language Theory',
        'Graph Theory',
        'Software and Systems Engineering',
        'Optimization and Operations Research',
        'Functional Programming'
      ],
      projects: ['Implementation of a platform of mobile agents in Java',
        "Creation of Tools to modelise and validate Electronic Circuits based on EMD and Eclipse"]
    },
  ];
}
