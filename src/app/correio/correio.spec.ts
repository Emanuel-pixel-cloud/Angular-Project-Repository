import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correio } from './correio';

describe('Correio', () => {
  let component: Correio;
  let fixture: ComponentFixture<Correio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Correio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Correio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
