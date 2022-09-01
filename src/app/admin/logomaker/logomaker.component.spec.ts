import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogomakerComponent } from './logomaker.component';

describe('LogomakerComponent', () => {
  let component: LogomakerComponent;
  let fixture: ComponentFixture<LogomakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogomakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogomakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
