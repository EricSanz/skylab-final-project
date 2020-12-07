import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../videogame.service';
import { Videogame } from '../videogame';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  videogames$: Observable<Videogame[]> | undefined;

  constructor (
    private videogameService: VideogameService
  ) { }

  ngOnInit(): void {
    this.videogames$ = this.videogameService.videogames$;
  }
}
