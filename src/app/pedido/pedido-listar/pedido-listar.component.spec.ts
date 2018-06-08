import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaListarComponent } from './mesa-listar.component';

describe('MesaListarComponent', () => {
  let component: MesaListarComponent;
  let fixture: ComponentFixture<MesaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
