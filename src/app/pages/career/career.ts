import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.html',
  styleUrl: './career.scss',
})
export class Career {
  currentLang: 'fr' | 'en' = 'fr';
  safeCvSrc!: SafeResourceUrl;
  safePppSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.updateSafeSrc();
  }

  private get cvPath(): string {
    return this.currentLang === 'fr' ? 'assets/cv/cv-fr.pdf' : 'assets/cv/cv-en.pdf';
  }

  private get pppPath(): string {
    return 'assets/cv/ppp.pdf';
  }

  private updateSafeSrc() {
    this.safeCvSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvPath);
    this.safePppSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.pppPath);
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this.updateSafeSrc();
  }
}
