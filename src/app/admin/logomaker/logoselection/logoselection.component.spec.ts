import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoselectionComponent } from './logoselection.component';

describe('LogoselectionComponent', () => {
  let component: LogoselectionComponent;
  let fixture: ComponentFixture<LogoselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
