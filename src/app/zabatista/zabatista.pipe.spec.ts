import { ZabatistaPipe } from './zabatista.pipe';

describe('ZabatistaPipe', () => {

  it('create an instance', () => {
    const pipe = new ZabatistaPipe();
    expect(pipe).toBeTruthy();
  });

  it('test convert seconds to Date', () => {
    const pipe = new ZabatistaPipe();
    const time = 30000;
    const formatDate = pipe.transform(time);
    expect(formatDate).toBe('08:20:00');
  });

});
