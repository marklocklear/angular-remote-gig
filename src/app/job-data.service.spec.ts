import { TestBed, async, inject } from '@angular/core/testing';
import { Job } from "./job";
import { JobDataService } from './job-data.service';

describe('JobDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobDataService = TestBed.get(JobDataService);
    expect(service).toBeTruthy();
  });

  it('should return all Jobs', inject([JobDataService], (service: JobDataService) => {
    let job1 = new Job({title: 'Hello 1', complete: false});
    let job2 = new Job({title: 'Hello 2', complete: true});
    service.addJob(job1);
    service.addJob(job2);
    expect(service.getAllJobs()).toEqual([job1, job2]);
  }));
});

describe('#getAllJobs()', () => {

  it('should return an empty array by default', inject([JobDataService],
    (service: JobDataService) => {
      expect(service.getAllJobs()).toEqual([]);
  }));
});