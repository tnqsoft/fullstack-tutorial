import { CustomEmailPipe } from './custom-email.pipe';

describe('CustomEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
