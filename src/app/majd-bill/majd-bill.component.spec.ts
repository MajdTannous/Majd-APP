import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajdBillComponent } from './majd-bill.component';

describe('MajdBillComponent', () => {
  let component: MajdBillComponent;
  let fixture: ComponentFixture<MajdBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajdBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajdBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
