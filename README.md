# 🇹🇷 Wordle TR - Temiz Kelime Havuzu (Dictionary)

Bu depo, Türkçe Wordle benzeri oyunlar (Wordle TR klonları vb.) geliştirenler için özel olarak temizlenmiş, filtrelenmiş ve optimize edilmiş **5 harfli kelime havuzunu** içermektedir.

Açık kaynaklı diğer pek çok kelime listesinde karşılaşılan "hello, apple" gibi yabancı sözcüklerin veya "lldog, naler" gibi hatalı ayrıştırılmış rastgele harf dizilerinin oyuna sızması problemi, bu sözlükle tamamen çözülmüştür. 

##  İçerik Yapısı

Sözlük, oyun mantığına uygun olarak iki ayrı listeden (`TARGET_WORDS` ve `ACCEPTED_WORDS`) oluşmaktadır:

### 1. `TARGET_WORDS` (Çıkacak Hedef Kelimeler - ~1.900 Kelime)
Oyunun cevap olarak seçeceği kelimelerin listesidir. 
* **Nasıl Oluşturuldu?** Türk Dil Kurumu (TDK) sözlüğündeki 5 harfli kelimeler, Türkçe metinlerde ve altyazılarda geçen *en sık kullanılan 50.000 kelime frekans listesiyle* kesiştirildi.
* **Neden?** Sözlükte var olan ama günlük hayatta asla kullanılmayan, oyuncuyu sinir edecek derecede zor ("BALİĞ", "AFİFE", "AKAİT" vb.) kelimeler elenerek; sadece herkes tarafından bilinen, "cuk" oturan, yaygın kök kelimeler bırakıldı.

### 2. `ACCEPTED_WORDS` (Kabul Edilen Tahminler - ~5.500 Kelime)
Oyuncuların tahmin yaparken kullanabilecekleri tüm geçerli kelimelerin havuzudur. (Hedef kelimelerin tamamını da kapsar).
* **Nasıl Oluşturuldu?** Sadece ve kesinlikle **TDK Sözlüğü'ndeki** 5 harfli Türkçe kelimeler baz alındı. 
* **Neden?** Oyuncuların rastgele klavye vuruşlarıyla anlamsız şeyler ("LLDOG", "NADOL") yazarak oyunu kırmasını engellemek ve "HAYİR" gibi yazım yanlışlarını oyundan atmak için kelime havuzu sadece gerçek Türkçe kök kelimelerle sınırlandırıldı.

##  Kullanım (TypeScript / JavaScript / JSON)

### TypeScript
```typescript
import { TARGET_WORDS, ACCEPTED_WORDS } from './index';

const answer = TARGET_WORDS[Math.floor(Math.random() * TARGET_WORDS.length)];
const isValidGuess = (guess: string) => ACCEPTED_WORDS.includes(guess);
```

### JavaScript (Node.js)
```javascript
const { TARGET_WORDS, ACCEPTED_WORDS } = require('./index.js');
```

### API / Ham JSON Kullanımı
Eğer kelimeleri kendi sunucunuzdan veya uygulamanızdan çekecekseniz, ham JSON dosyasına doğrudan erişebilirsiniz:
[words.json](words.json) üzerinden ham veriyi parse edebilirsiniz.

##  Motivasyon
Bu veri setinin oluşturulma amacı, Türkçe kelime oyunları geliştirirken açık kaynakta bulunan standart veri setlerinin içindeki anlamsız hece kalıntılarını, fiil çekim hatalarını ve araya karışan İngilizce parazit kelimeleri temizleme zahmetinden geliştiricileri kurtarmaktır.
