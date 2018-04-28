import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaNovoComponent } from './mesa-novo.component';

describe('MesaNovoComponent', () => {
  let component: MesaNovoComponent;
  let fixture: ComponentFixture<MesaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
