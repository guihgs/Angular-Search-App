import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {
  user:any;
  repos: any;
  username: any;

  //title:string = 'Github Test';
  constructor(private _githubService: GithubService){
    this.user = false;

    this._githubService.getUser().subscribe(user => {
        this.user = user;
        console.log(this.user);
    });

    this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
    });

  }

  //search github user
  search(){
      this._githubService.updateUsername(this.username);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
        console.log(this.user);
        });

        this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
        });
  }
}
