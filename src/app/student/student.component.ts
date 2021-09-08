import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  approved: any;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.isApproved();
  }

  isApproved() {
    this.studentService.isApproved().subscribe(x => {
      debugger;
      console.log(x);
      this.approved = x;
      this.isLoading = false;
    })
  }

}
