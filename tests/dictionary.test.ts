import { describe, it, expect } from 'vitest';
import { TARGET_WORDS, ACCEPTED_WORDS } from '../src/index';

describe('Dictionary Sets', () => {
  it('TARGET_WORDS should be a subset of ACCEPTED_WORDS', () => {
    const acceptedSet = new Set(ACCEPTED_WORDS);
    for (const target of TARGET_WORDS) {
      expect(acceptedSet.has(target)).toBe(true);
    }
  });

  it('TARGET_WORDS should not have duplicates', () => {
    const unique = new Set(TARGET_WORDS);
    expect(unique.size).toBe(TARGET_WORDS.length);
  });

  it('ACCEPTED_WORDS should not have duplicates', () => {
    const unique = new Set(ACCEPTED_WORDS);
    expect(unique.size).toBe(ACCEPTED_WORDS.length);
  });

  it('should include unaccented versions of words with accents in ACCEPTED_WORDS', () => {
    const acceptedSet = new Set(ACCEPTED_WORDS);
    const hasAccentedKabus = TARGET_WORDS.includes('KÂBUS') || ACCEPTED_WORDS.includes('KÂBUS');
    if (hasAccentedKabus) {
      expect(acceptedSet.has('KABUS')).toBe(true);
    }
  });
});
