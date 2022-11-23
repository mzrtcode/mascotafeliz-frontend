import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPlanComponent } from './nuevo-plan.component';

describe('NuevoPlanComponent', () => {
  let component: NuevoPlanComponent;
  let fixture: ComponentFixture<NuevoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
