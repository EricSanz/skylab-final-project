import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {

  constructor() { }

  @Input() public fieldTextType: boolean = false;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    const seePassword = <HTMLDivElement>document.getElementById('eye');
    const noSeePassword = <HTMLDivElement>document.getElementById('eye-slash');

    this.fieldTextType ? noSeePassword.style.display = 'block' : noSeePassword.style.display = 'none';
    this.fieldTextType ? seePassword.style.display = 'none' : seePassword.style.display = 'block';
  }

  ngOnInit(): void {
  }

}
