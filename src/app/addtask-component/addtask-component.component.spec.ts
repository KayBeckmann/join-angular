import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskComponentComponent } from './addtask-component.component';

describe('AddtaskComponentComponent', () => {
  let component: AddtaskComponentComponent;
  let fixture: ComponentFixture<AddtaskComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtaskComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
