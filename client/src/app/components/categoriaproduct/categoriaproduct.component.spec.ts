import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaproductComponent } from './categoriaproduct.component';

describe('CategoriaproductComponent', () => {
  let component: CategoriaproductComponent;
  let fixture: ComponentFixture<CategoriaproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
