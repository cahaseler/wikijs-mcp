import { describe, it, expect } from '@jest/globals';
import { getVersion } from '../util/version.js';

describe('getVersion', () => {
  it('should return a version string', () => {
    const version = getVersion();
    expect(version).toBeDefined();
    expect(typeof version).toBe('string');
    expect(version).toMatch(/^\d+\.\d+\.\d+$/);
  });
});