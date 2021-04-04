import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GithubService{
    private username:string = 'guihgs';

    constructor(private _http: HttpClient){
        console.log('Github Service Started');
    }

    getUser(): Observable<any>{
        return this._http.get('https://api.github.com/users/'+this.username);
    }

    getRepos(): Observable<any> {
        return this._http.get('https://api.github.com/users/'+this.username+'/repos');
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}