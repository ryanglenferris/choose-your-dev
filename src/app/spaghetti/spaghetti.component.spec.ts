import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaghettiComponent } from './spaghetti.component';

describe('SpaghettiComponent', () => {
  let component: SpaghettiComponent;
  let fixture: ComponentFixture<SpaghettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaghettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaghettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
