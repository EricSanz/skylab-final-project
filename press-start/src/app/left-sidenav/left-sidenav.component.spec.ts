import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';

import { LeftSidenavComponent } from './left-sidenav.component';

describe('LeftSidenavComponent', () => {
  let component: LeftSidenavComponent;
  let fixture: ComponentFixture<LeftSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSidenavComponent, HeaderComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the openCloseLeftSidenav function', (done) => {
    spyOn(component, 'openCloseLeftSidenav');
    const fixture = TestBed.createComponent(LeftSidenavComponent);
    const fixtureHeader = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const compiled2 = fixtureHeader.nativeElement;
    const button = compiled2.getElementById('testButton')
    const openClose = compiled.getElementById('toogleLeftSideNav')
    button.click();
    expect(openClose.style.transform).toBe('translateX(400px)')
  });
});
