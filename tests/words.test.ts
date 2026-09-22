import { describe, it, expect } from 'vitest';
import { TARGET_WORDS, ACCEPTED_WORDS } from '../src/index';

describe('Dictionary Rules', () => {
  it('all target words should be exactly 5 letters long', () => {
    for (const word of TARGET_WORDS) {
      expect(word.length).toBe(5);
    }
  });

  it('all accepted words should be exactly 5 letters long', () => {
    for (const word of ACCEPTED_WORDS) {
      expect(word.length).toBe(5);
    }
  });

  it('all target words should be uppercase according to tr-TR locale', () => {
    for (const word of TARGET_WORDS) {
      expect(word).toBe(word.toLocaleUpperCase('tr-TR'));
    }
  });

  it('all accepted words should be uppercase according to tr-TR locale', () => {
    for (const word of ACCEPTED_WORDS) {
      expect(word).toBe(word.toLocaleUpperCase('tr-TR'));
    }
  });

  it('words should only contain valid characters (including şapkalı harfler)', () => {
    const validRegex = /^[ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZÂÎÛ]+$/;
    for (const word of TARGET_WORDS) {
      expect(word).toMatch(validRegex);
    }
    for (const word of ACCEPTED_WORDS) {
      expect(word).toMatch(validRegex);
    }
  });
});
