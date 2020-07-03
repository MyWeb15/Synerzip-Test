import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:number;
  data:Observable<any>
  constructor(private route : ActivatedRoute ,private api_service : ApiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetails();
  }
  getDetails()
  {
    this.api_service.getUserDetails(this.id).subscribe(data=>{
      this.data = data;
    })
  }

}
