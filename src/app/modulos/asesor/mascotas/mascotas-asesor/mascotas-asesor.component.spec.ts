import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAsesorComponent } from './mascotas-asesor.component';

describe('MascotasAsesorComponent', () => {
  let component: MascotasAsesorComponent;
  let fixture: ComponentFixture<MascotasAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
