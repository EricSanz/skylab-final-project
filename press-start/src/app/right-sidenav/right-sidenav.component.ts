import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {

  constructor() { }

  @Input() public fieldTextType: boolean = false;
  @Input() public toggleSidenav: boolean = false;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    const seePassword = <HTMLDivElement>document.getElementById('eye');
    const noSeePassword = <HTMLDivElement>document.getElementById('eye-slash');

    this.fieldTextType ? noSeePassword.style.display = 'block' : noSeePassword.style.display = 'none';
    this.fieldTextType ? seePassword.style.display = 'none' : seePassword.style.display = 'block';
  }

  toggleRightSidenav(): any {
    this.toggleSidenav = !this.toggleSidenav;
    const openRightSidenav = <HTMLDivElement>document.getElementById('toogleRightSideNav');

    this.toggleSidenav ? openRightSidenav.style.transform = 'translateX(-400px)' : openRightSidenav.style.transform = 'translateX(0px)';
  }

  ngOnInit(): void {
  }

}
