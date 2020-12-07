import { Description } from './description';
import { Platform } from './plataforma';

export interface Videogame {
    id: string,
    name: string,
    genre: string[],
    developer: string,
    images: string[],
    pegi: string,
    price: number,
    salePrice: number,
    stock: boolean,
    release: string,
    comments: string[],
    platform: Platform,
    description: Description[],
}