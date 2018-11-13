import { Injectable } from '@angular/core';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  lastId: number = 0;
  jobs: Job[] = [];

  constructor() { }

   // Simulate POST /jobs
   addJob(job: Job): JobDataService {
    if (!job.id) {
      job.id = ++this.lastId;
    }
    this.jobs.push(job);
    return this;
  }

  // Simulate DELETE /jobs/:id
  deleteJobById(id: number): JobDataService {
    this.jobs = this.jobs
      .filter(job => job.id !== id);
    return this;
  }

  // Simulate PUT /jobs/:id
  updateJobById(id: number, values: Object = {}): Job {
    let job = this.getJobById(id);
    if (!job) {
      return null;
    }
    Object.assign(job, values);
    return job;
  }

  // Simulate GET /jobs
  getAllJobs(): Job[] {
    return this.jobs;
  }

  // Simulate GET /jobs/:id
  getJobById(id: number): Job {
    return this.jobs
      .filter(job => job.id === id)
      .pop();
  }

}
