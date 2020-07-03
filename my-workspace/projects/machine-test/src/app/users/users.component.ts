import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Posts } from '../classes/posts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api_service : ApiService) { }

   posts_list : Posts[];
   post_data:Posts;
   put_obj:Posts;

  ngOnInit() {
   
  // listing post data with GET Method
    this.api_service.getPosts()
     .subscribe
      (
       data => {
         this.posts_list = data;
        });

    // creating a Post with POST Method
    
    var post_obj = new Posts();
    post_obj.body = 'Test Body';
    post_obj.title = 'Test Title';
    post_obj.userId = 5;

    this.api_service.createPost(post_obj)
     .subscribe(
       data => {
         this.post_data = data;
       }
     )

     post_obj = new Posts();
     post_obj.body = 'Updating Body';
     post_obj.title = 'Updating Title';
     post_obj.userId = 5;
 
     this.api_service.updatePost(post_obj)
     .subscribe(
       data => {
         this.put_obj = data;
       }
     )

  }

}
