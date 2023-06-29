import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import {MainStoreService} from "../main.store.service";


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mainStoreService: jasmine.SpyObj<MainStoreService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MainStoreService', ['selectAllTasks', 'getTasks', 'addTask', 'removeTask']);

    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        { provide: MainStoreService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    mainStoreService = TestBed.inject(MainStoreService) as jasmine.SpyObj<MainStoreService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
