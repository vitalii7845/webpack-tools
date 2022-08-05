import { sum, mult } from '../calculator';

it('should check plus', () => {
  const result = sum(5, 5);
  expect(result).toEqual(10);
});

it('should check multyply', () => {
  const result = mult(5, 5);
  expect(result).toEqual(25);
});
