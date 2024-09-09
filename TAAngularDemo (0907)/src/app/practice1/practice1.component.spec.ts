import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice1Component } from './practice1.component';

describe('Practice1Component', () => {
  let component: Practice1Component;
  let fixture: ComponentFixture<Practice1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practice1Component]
    });
    fixture = TestBed.createComponent(Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
