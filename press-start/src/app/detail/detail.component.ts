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
  videogame: any = this.videogameService.getVideogame(this.videogameId)
  .subscribe((info: Videogame) => {this.videogame = info })

  coverIndex:number = 0;

  toggleDescription: boolean = false;
  togglePictures: boolean = false;
  toggleComments: boolean = false;

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

  seeDescription(): any {
    this.toggleDescription = !this.toggleDescription;
    const descriptionOn = <HTMLDivElement>document.getElementById('see-description')
    this.toggleDescription ? descriptionOn.style.display = 'block' : descriptionOn.style.display = 'none';
    this.toggleDescription = false;
  }

  seePictures(): any {
    this.togglePictures = !this.togglePictures;
    const picturesOn = <HTMLDivElement>document.getElementById('see-pictures');
    this.togglePictures ? picturesOn.style.display = 'block' : picturesOn.style.display = 'none';
    this.togglePictures = false;
  }

  seeComments(): any {
    this.toggleComments = !this.toggleComments;
    const commentsOn = <HTMLDivElement>document.getElementById('see-comments');
    this.toggleComments ? commentsOn.style.display = 'block' : commentsOn.style.display = 'none';
    this.toggleComments = false;
  }
}
