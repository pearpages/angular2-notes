import { CarsListComponent } from './../../components/cars-list/cars-list.component';
import { CarsService } from './../../services/cars.service';
import { CarComponent } from './../car/car.component';
import { DriverComponent } from './../driver/driver.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPanelComponent } from './cars-panel.component';

describe('CarsPanelComponent', () => {
  let component: CarsPanelComponent;
  let fixture: ComponentFixture<CarsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsPanelComponent, DriverComponent, CarComponent, CarsListComponent ],
      providers: [CarsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
