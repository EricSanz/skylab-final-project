import { Component } from '@angular/core';
import { Videogame } from '../videogame';
import { ActivatedRoute } from '@angular/router';
import { VideogameService } from '../videogame.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  get videogameId () {
    return this.route.snapshot.paramMap.get('videogameId')!;
  }
  
  videogame$: Observable<Videogame> = this.videogameService.getVideogame(this.videogameId);
  //preguntar a gilbe sobre interface segundo nivel array objetos y 
  videogame: any = this.videogameService.getVideogame(this.videogameId)
  .subscribe((info: Videogame) => {this.videogame = info })

  coverIndex:number = 0;

  constructor(
    public route: ActivatedRoute,
    public videogameService: VideogameService
  ) { }

  handleOnChange(event: any): void {
    console.log(this.videogame)
    switch (event.target.value) {
      case 'PlayStation 4':
        this.coverIndex = 0;
        break;
      case 'Xbox One':
        this.coverIndex = 1;
        break;
      case 'Nintendo Switch':
        this.coverIndex = 2;
        break;
      default:
        this.coverIndex = 0;
        break;
    }
  }
}
