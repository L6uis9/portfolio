import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCard } from './mediacard';

describe('Mediacard', () => {
  let component: MediaCard;
  let fixture: ComponentFixture<MediaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
