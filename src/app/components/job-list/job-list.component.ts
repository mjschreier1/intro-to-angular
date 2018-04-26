import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Array<Job>;

  constructor(private _httpService: HttpServiceService) { }

  ngOnInit(): void {
    this._httpService.getJobs().subscribe(jobs => {
      this.jobs = jobs
    })
    setTimeout(() => { console.log(this.jobs) }, 2000)
  }

}
