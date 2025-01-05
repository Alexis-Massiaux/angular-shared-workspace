import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaHeaderComponent } from './eva-header.component';

describe('EvaHeaderComponent', () => {
  let component: EvaHeaderComponent;
  let fixture: ComponentFixture<EvaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
