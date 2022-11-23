import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMascotasComponent } from './cliente-mascotas.component';

describe('ClienteMascotasComponent', () => {
  let component: ClienteMascotasComponent;
  let fixture: ComponentFixture<ClienteMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
