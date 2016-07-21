import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { PostInterface } from './post-interface';
import 'rxjs/Rx';

@Injectable()
export class PostService {
    
    private feedData : Observable<PostInterface>;
    private _url :string;
    
    constructor(private _http : Http){
        this._url = "http://jsonplaceholder.typicode.com/posts/";
    }    
    
 /*   getPosts()  : Observable<PostInterface> {
       
       return this.http.get(this.jsonURL)
       .flatMap((data) => data.json())
       .filter((person : PostInterface) => person.userId >= 10 )  
       .retry(3)
       .map((res : PostInterface) => res )
    }*/
    
   getPosts()  : Observable<PostInterface[]> {
       
       return this._http.get(this._url)
       .map((res : Response) => res.json())
    }

    postData(data:number ) : Observable<PostInterface> {
        let params = '?userId=' + data;
        let getURL   =  this._url + params;
       
        return this._http.get(getURL)
        .map((res : Response) => res.json());
    }
    
    postJSON(data : PostInterface) : Observable<PostInterface> {
        let params = JSON.stringify({
            title: data.title,
            body: data.body,
            userId: data.userId
        });
        let header = new Headers();
        header.append("Content-Type","application/json")
        return this._http.post(this._url,params,{
            headers : header
        }).map((res :Response) => res.json());
    }
}