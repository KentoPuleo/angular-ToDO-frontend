import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdoneComponent } from './listdone.component';

describe('ListdoneComponent', () => {
  let component: ListdoneComponent;
  let fixture: ComponentFixture<ListdoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
