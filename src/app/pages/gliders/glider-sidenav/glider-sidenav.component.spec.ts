import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GliderSidenavComponent } from './glider-sidenav.component';

describe('GliderSidenavComponent', () => {
  let component: GliderSidenavComponent;
  let fixture: ComponentFixture<GliderSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GliderSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GliderSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
