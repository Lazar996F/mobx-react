import { getInitials } from './helpers';

test('getInitials method', () => {
  expect(getInitials('Test Name')).toBe('TN');
})
