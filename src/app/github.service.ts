import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService {
  url = 'https://api.github.com/users/';
  constructor(private http: Http) { }

  getUser(username: string){
    console.log(username);
    if(username){
      return this.http
        .get(`${this.url}${username}`)
        .map(res => res.json())
        .catch(error => {
          console.log("Caught Error, continuing")
          return Observable.of('No user found')
        })
    }
    return Observable.of('Enter some username')
    

  }

}
