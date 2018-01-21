import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Task } from './task';

@Injectable()
export class TaskManagerService {

    constructor(private http: Http) { }

    public sendTask(task: Task): Promise<any> {
        return this.http.post('http://localhost:3000/description', task)
                        .toPromise()
                        .then((reponse: Response) => reponse.json())
                        .catch((erreur: Response) => Observable.throw(erreur.json()));
    }
}
