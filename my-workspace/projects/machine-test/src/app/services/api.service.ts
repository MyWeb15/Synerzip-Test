import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';


@Injectable({providedIn : 'root'})
export class ApiService{
    
    constructor(private http : HttpClient)
    { }

    getPosts():Observable<any>{
        
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    } 

    getUserDetails(id : number):Observable<any>
    {
      return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id)
    }

    createPost(post_obj : Posts):Observable<any>{
      return this.http.post("https://jsonplaceholder.typicode.com/posts",post_obj)
    }

    updatePost(post_obj : Posts):Observable<any>{
        return this.http.put("https://jsonplaceholder.typicode.com/posts/1",post_obj)
    }
}