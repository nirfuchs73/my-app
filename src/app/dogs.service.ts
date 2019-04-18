import { Injectable } from '@angular/core';
import Dog from './models/Dog';

@Injectable({
    providedIn: 'root'
})
export class DogsService {
    private _dogs: Array<Dog> = [new Dog('dog1', 3, 'owner1'), new Dog('dog2', 4, 'owner2'), new Dog('dog3', 5, 'owner3')];

    public get dogs(): Array<Dog> {
        return this._dogs;
    }

    constructor() {

    }
}
