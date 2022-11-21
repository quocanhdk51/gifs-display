import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFocusComponent } from './card-focus.component';

describe('CardFocusComponent', () => {
  let component: CardFocusComponent;
  let fixture: ComponentFixture<CardFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
