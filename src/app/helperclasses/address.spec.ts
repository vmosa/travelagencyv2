import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address(1, '', '', '', '', '')).toBeTruthy();
  });
});
