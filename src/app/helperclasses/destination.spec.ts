import { Destination } from './destination';
import { Country } from './country';

describe('Destination', () => {
  it('should create an instance', () => {
    expect(new Destination(1, '', new Country(1, '', ''))).toBeTruthy();
  });
});
