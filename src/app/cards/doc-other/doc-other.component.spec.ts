import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocOtherComponent } from './doc-other.component';

describe('DocOtherComponent', () => {
  let component: DocOtherComponent;
  let fixture: ComponentFixture<DocOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
