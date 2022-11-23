import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePlanesComponent } from './cliente-planes.component';

describe('ClientePlanesComponent', () => {
  let component: ClientePlanesComponent;
  let fixture: ComponentFixture<ClientePlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
