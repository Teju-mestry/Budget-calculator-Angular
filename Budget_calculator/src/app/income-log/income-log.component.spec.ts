import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeLogComponent } from './income-log.component';

describe('IncomeLogComponent', () => {
  let component: IncomeLogComponent;
  let fixture: ComponentFixture<IncomeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
