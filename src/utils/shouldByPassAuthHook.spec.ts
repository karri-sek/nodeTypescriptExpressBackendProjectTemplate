import { shouldByPassAuthHook } from './shouldByPassAuthHook';
import 'mocha';
import { expect } from 'chai';
describe('shouldByPassAuthHook', () => {
  it('should return true for health Check GET /health', async () => {
    expect(shouldByPassAuthHook('GET', '/health')).equal(true);
  });
  it('should return false for health Check GET /users', async () => {
    expect(shouldByPassAuthHook('GET', '/users')).equal(false);
  });
});
