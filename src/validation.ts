import { ACCEPTED_WORDS, TARGET_WORDS } from './index';

// Şapkalı harfleri düz hallerine dönüştüren yardımcı fonksiyon
export function normalizeWord(word: string): string {
  return word
    .replace(/Â/g, 'A')
    .replace(/Î/g, 'İ')
    .replace(/Û/g, 'U')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/û/g, 'u')
    .toLocaleUpperCase('tr-TR');
}

// İki kelimenin (şapkalı/şapkasız durumlarını göz ardı ederek) aynı olup olmadığını kontrol eder
export function isSameWord(word1: string, word2: string): boolean {
  return normalizeWord(word1) === normalizeWord(word2);
}

export function isValidWord(word: string): boolean {
  const normalizedInput = normalizeWord(word);
  return ACCEPTED_WORDS.some(w => normalizeWord(w) === normalizedInput);
}

export function isTargetWord(word: string): boolean {
  const normalizedInput = normalizeWord(word);
  return TARGET_WORDS.some(w => normalizeWord(w) === normalizedInput);
}
