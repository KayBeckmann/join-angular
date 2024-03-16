import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineComponentComponent } from './headline-component.component';

describe('HeadlineComponentComponent', () => {
  let component: HeadlineComponentComponent;
  let fixture: ComponentFixture<HeadlineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlineComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadlineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
