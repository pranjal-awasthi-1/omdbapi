import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMoviesWithPagesComponent } from './DisplayMoviesWithPages.component';

describe('DisplayMoviesWithPagesComponent', () => {
  let component: DisplayMoviesWithPagesComponent;
  let fixture: ComponentFixture<DisplayMoviesWithPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMoviesWithPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMoviesWithPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
