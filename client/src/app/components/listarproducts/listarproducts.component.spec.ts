import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductsComponent } from './listarproducts.component';

describe('ListarproductsComponent', () => {
  let component: ListarproductsComponent;
  let fixture: ComponentFixture<ListarproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
