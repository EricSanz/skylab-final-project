import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public toggle: boolean = false;

  openCloseSearchBar(): any {
    this.toggle = !this.toggle;
    const openSearchBar = <HTMLDivElement>document.getElementById('search-feature');

    this.toggle ? openSearchBar.style.transform = 'translateY(80px)' : openSearchBar.style.transform = 'translateY(0px)';
  }

}
