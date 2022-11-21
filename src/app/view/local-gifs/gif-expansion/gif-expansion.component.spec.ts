import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifExpansionComponent } from './gif-expansion.component';

describe('GifExpansionComponent', () => {
  let component: GifExpansionComponent;
  let fixture: ComponentFixture<GifExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
