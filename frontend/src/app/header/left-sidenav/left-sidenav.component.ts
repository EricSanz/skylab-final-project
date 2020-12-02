import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent {
  categories: Category[];

  openLeftSidenav(): any {
    const openButton = <HTMLDivElement>document.getElementById('toogleLeftSideNav');
    openButton.style.transform = 'translateX(0px)';
  }

  closeLeftSidenav(): any {
    const closeButton = <HTMLDivElement>document.getElementById('toogleLeftSideNav');
    closeButton.style.transform = 'translateX(-400px)';
  }
}
