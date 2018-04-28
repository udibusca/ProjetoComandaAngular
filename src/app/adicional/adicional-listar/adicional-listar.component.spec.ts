import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalListarComponent } from './adicional-listar.component';

describe('AdicionalListarComponent', () => {
  let component: AdicionalListarComponent;
  let fixture: ComponentFixture<AdicionalListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionalListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
