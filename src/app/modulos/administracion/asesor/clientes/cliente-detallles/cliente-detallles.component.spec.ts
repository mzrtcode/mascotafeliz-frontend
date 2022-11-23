import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetalllesComponent } from './cliente-detallles.component';

describe('ClienteDetalllesComponent', () => {
  let component: ClienteDetalllesComponent;
  let fixture: ComponentFixture<ClienteDetalllesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDetalllesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteDetalllesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
