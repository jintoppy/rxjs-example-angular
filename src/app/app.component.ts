import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from './github.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: FormControl = new FormControl();
  result = '';
  constructor(private service: GithubService) {

  }
  ngOnInit() {
    this.username.valueChanges
      .debounceTime(500)
      .filter(value => !value || value.length > 2)
      .distinctUntilChanged()
      .switchMap(val => this.service.getUser(val))
      .subscribe(val => this.result = val);
  }

}
