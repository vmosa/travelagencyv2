import { Payment } from './payment';

describe('Payment', () => {
  it('should create an instance', () => {
    expect(new Payment(1, 2, '', new Date(), 50.7)).toBeTruthy();
  });
});
