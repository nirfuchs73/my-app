import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import Dog from '../models/Dog';

@Component({
    selector: 'app-dogs',
    templateUrl: './dogs.component.html',
    styleUrls: ['./dogs.component.sass']
})
export class DogsComponent implements OnInit {
    dogs: Array<Dog> = [];

    constructor(private dogsServcie: DogsService) { }

    ngOnInit() {
        this.dogs = this.dogsServcie.dogs;
    }

}
