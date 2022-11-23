import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditarMascotaComponent } from './cliente-editar-mascota.component';

describe('ClienteEditarMascotaComponent', () => {
  let component: ClienteEditarMascotaComponent;
  let fixture: ComponentFixture<ClienteEditarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditarMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteEditarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
