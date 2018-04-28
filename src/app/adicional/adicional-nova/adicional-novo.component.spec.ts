import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalNovoComponent } from './adicional-novo.component';

describe('AdicionalNovoComponent', () => {
  let component: AdicionalNovoComponent;
  let fixture: ComponentFixture<AdicionalNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionalNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionalNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
