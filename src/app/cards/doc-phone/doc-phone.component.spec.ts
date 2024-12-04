import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPhoneComponent } from './doc-phone.component';

describe('DocPhoneComponent', () => {
  let component: DocPhoneComponent;
  let fixture: ComponentFixture<DocPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
