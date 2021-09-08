import { RequestViewModel } from './request-view-model';
import { Component, OnInit } from '@angular/core';
import { RequestListService } from './request-list.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: RequestViewModel[] = [];
  constructor(private requestListService : RequestListService) { }

  ngOnInit(): void {
    debugger;
    this.getRequests();
  }

  getRequests(){
    this.requestListService.getRequests().subscribe(x=>{
      this.requests = x;
    })
  }

  update(request:RequestViewModel){
    this.requestListService.update(request.userId).subscribe(x=>{
      request.isApproved = !request.isApproved;
    })
  }
}
