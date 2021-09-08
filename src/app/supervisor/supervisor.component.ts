import { Component, OnInit } from '@angular/core';
import { RequestListService } from '../request-list/request-list.service';
import { RequestViewModel } from '../request-list/request-view-model';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

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

}
