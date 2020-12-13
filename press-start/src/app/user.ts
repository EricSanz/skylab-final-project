import { Videogame } from './videogame';

export interface User {
    uid: string,
    displayName?: string,
    email: string,
    photoUrl?: string,
    favorites: Videogame[],
}