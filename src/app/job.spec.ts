import { Job } from './job';

describe('Job', () => {
  it('should create an instance', () => {
    expect(new Job()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let job = new Job({
      title: 'hello',
      complete: true
    });
    expect(job.title).toEqual('hello');
  });
});
