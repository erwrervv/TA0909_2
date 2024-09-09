import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareInputComponent } from './share-input.component';

describe('ShareInputComponent', () => {
  let component: ShareInputComponent;
  let fixture: ComponentFixture<ShareInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareInputComponent]
    });
    fixture = TestBed.createComponent(ShareInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
