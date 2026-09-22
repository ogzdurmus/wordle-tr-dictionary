import fs from 'fs';
import path from 'path';

const sourcesPath = path.resolve(__dirname, '../data/sources/tdk.json');
const outputPath = path.resolve(__dirname, '../data/generated/words.json');

function removeHats(word: string): string {
  return word
    .replace(/Â/g, 'A')
    .replace(/Î/g, 'İ')
    .replace(/Û/g, 'U')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/û/g, 'u');
}

function build() {
  console.log('Building dictionary...');
  
  if (!fs.existsSync(sourcesPath)) {
    console.error('Source file not found at', sourcesPath);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
  const targetWords: string[] = data.target_words || [];
  let acceptedWords: string[] = data.accepted_words || [];

  console.log(`Initial targets: ${targetWords.length}, Initial accepted: ${acceptedWords.length}`);

  const allWords = new Set([...targetWords, ...acceptedWords]);
  
  allWords.forEach(word => {
    const unhatted = removeHats(word);
    if (unhatted !== word) {
      acceptedWords.push(unhatted);
    }
  });

  acceptedWords.push(...targetWords);

  const uniqueAccepted = Array.from(new Set(acceptedWords)).sort((a, b) => a.localeCompare(b, 'tr-TR'));
  const uniqueTargets = Array.from(new Set(targetWords)).sort((a, b) => a.localeCompare(b, 'tr-TR'));

  const outputData = {
    target_words: uniqueTargets,
    accepted_words: uniqueAccepted
  };

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
  console.log(`Build complete! Targets: ${uniqueTargets.length}, Accepted: ${uniqueAccepted.length}`);
}

build();
