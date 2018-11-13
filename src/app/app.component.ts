import { Component } from '@angular/core';
import { Job } from "./job";
import { JobDataService } from "./job-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JobDataService]
})

export class AppComponent {

  newJob: Job = new Job();

  constructor(private jobDataService: JobDataService) {

  }

  addJob() {
    this.jobDataService.addJob(this.newJob);
    this.newJob = new Job();
  }

  removejob(job) {
    this.jobDataService.deleteJobById(job.id);
  }

  get jobs() {
    return this.jobDataService.getAllJobs();
  }
}
