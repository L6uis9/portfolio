import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Icon {
  name: string;
  url: string;
  imgPath: string;
}

interface Detail {
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  details: Detail[] = [
    {
      label: 'Tel',
      value: '+33 7 69 40 65 71',
      href: 'tel:+33769406571'
    },
    {
      label: 'E-mail',
      value: 'louisdavid\u200B.duman\u200B@etu\u200B.inp-n7\u200B.fr',
      href: 'mailto:louisdavid.duman@etu.inp-n7.fr'
    }
  ];

  icons: Icon[] = [
    {
      name: 'l0uisd',
      url: 'https://www.linkedin.com/in/l0uisd/',
      imgPath: 'assets/pictures/linkedin.png'
    },
    {
      name: 'L6uis9',
      url: 'https://github.com/L6uis9',
      imgPath: 'assets/pictures/github.png'
    }
  ];
}
