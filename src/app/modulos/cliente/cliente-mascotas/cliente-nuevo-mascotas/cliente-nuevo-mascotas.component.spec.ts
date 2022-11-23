import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNuevoMascotasComponent } from './cliente-nuevo-mascotas.component';

describe('ClienteNuevoMascotasComponent', () => {
  let component: ClienteNuevoMascotasComponent;
  let fixture: ComponentFixture<ClienteNuevoMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteNuevoMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteNuevoMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
