import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KewpaComponent } from './kewpa.component';

describe('KewpaComponent', () => {
  let component: KewpaComponent;
  let fixture: ComponentFixture<KewpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KewpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KewpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
