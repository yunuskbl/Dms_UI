import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLaptopComponent } from './doc-laptop.component';

describe('DocLaptopComponent', () => {
  let component: DocLaptopComponent;
  let fixture: ComponentFixture<DocLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocLaptopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
