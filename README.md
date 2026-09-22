# 🇹🇷 Wordle TR Dictionary

[![NPM Version](https://img.shields.io/npm/v/wordle-tr-dictionary)](https://www.npmjs.com/package/wordle-tr-dictionary)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Türkçe Wordle (ve benzeri 5 harfli kelime oyunları) geliştirenler için optimize edilmiş, temizlenmiş ve kullanıma hazır **NPM Paketi** ve veri havuzu.

## ✨ Özellikler

* **🎯 İki Farklı Kelime Havuzu:**
  * `TARGET_WORDS` (~1.900 Kelime): Oyunda "günün kelimesi" (cevap) olarak çıkabilecek, nispeten daha yaygın ve bilindik kelimeler.
  * `ACCEPTED_WORDS` (~5.600 Kelime): Kullanıcıların tahmin olarak klavyeden girebileceği, TDK sözlüğünde yer alan geçerli tüm 5 harfli kelimeler.
* **🎩 Şapkalı Harf Desteği (Normalizasyon):** 
  * Kullanıcılar `kabus` veya `kâbus` yazsa bile sistem bunu otomatik algılar. Şapkalı harfler (`Â, Î, Û`) arkaplanda standart karakterlere eşlenir.
* **🧪 CI/CD ve Test Altyapısı:**
  * Vitest kullanılarak tüm veri seti kurallara göre (uzunluk, karakter, alt-küme ilişkisi) test edilir.
* **📦 TypeScript Uyumlu:**
  * Projelerinde doğrudan tip desteği ile güvenle kullanabilirsin.

---

## 🚀 Kurulum

Modülü projenize dâhil etmek için:

```bash
npm install wordle-tr-dictionary
```

## 💻 Kullanım Örnekleri

### 1. Kelime Listelerini Çekmek
```typescript
import { TARGET_WORDS, ACCEPTED_WORDS } from 'wordle-tr-dictionary';

// Rastgele bir hedef kelime (cevap) seçme
const randomIndex = Math.floor(Math.random() * TARGET_WORDS.length);
const dailyWord = TARGET_WORDS[randomIndex];

console.log(`Toplam hedef kelime sayısı: ${TARGET_WORDS.length}`);
```

### 2. Doğrulama (Validation) Araçları
Kullanıcının girdiği kelime geçerli bir Wordle tahmini mi?

```typescript
import { isValidWord, isTargetWord, normalizeWord } from 'wordle-tr-dictionary/src/validation';

// Geçerli kelime kontrolü (ACCEPTED_WORDS içinde var mı?)
console.log(isValidWord('KÂBUS')); // true (KABUS ile eşleşir)
console.log(isValidWord('ASDFG')); // false

// Günün kelimesi olmaya aday mı?
console.log(isTargetWord('BEYİN')); // true
console.log(isTargetWord('MARKİ')); // false (Geçerli kelimedir ama çok bilinmez, hedef olamaz)

// İki kelimeyi kıyaslama / normalleştirme
console.log(normalizeWord('kâbus')); // "KABUS" çıktısını verir
```

---

## 🛠 Geliştiriciler İçin (Repoya Katkıda Bulunma)

Bu veri setini geliştirmek istersen:

1. Repoyu klonla:
   ```bash
   git clone https://github.com/ogzdurmus/wordle-tr-dictionary.git
   cd wordle-tr-dictionary
   npm install
   ```
2. Yeni kelimeleri `data/sources/tdk.json` dosyasına ekle.
3. Otomatik şapka dönüşümü ve sıralama işlemleri için Build komutunu çalıştır:
   ```bash
   npm run build
   ```
4. Verinin bozulmadığından emin olmak için testleri çalıştır:
   ```bash
   npm test
   ```

## 📄 Lisans
Bu proje **ISC** lisansı ile lisanslanmıştır. Dilediğiniz gibi kullanabilir, projelerinizde (ticari dahil) ücretsiz olarak değerlendirebilirsiniz.
