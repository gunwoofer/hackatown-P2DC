import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class MapService {

    constructor(private http: Http) {}

    getLocation(address: string):Promise<any> {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address + 'CA&sensor=false')
             .toPromise()
             .then((response) => Promise.resolve(response.json()))
             .catch((error) => Promise.resolve(error.json()));
     }

}