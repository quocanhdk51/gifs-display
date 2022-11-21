import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGifsComponent } from './local-gifs.component';

describe('LocalGifsComponent', () => {
  let component: LocalGifsComponent;
  let fixture: ComponentFixture<LocalGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
