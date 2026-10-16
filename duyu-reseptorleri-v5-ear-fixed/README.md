# Duyu Reseptörleri — V2

11. sınıf biyoloji için etkileşimli React + TypeScript uygulaması.

## Çalıştırma

```bash
npm install
npm run dev
```

## V2 değişiklikleri

- Öğrenci adı / sınıf girişi kaldırıldı; uygulama doğrudan ana menüden açılır.
- Sağ üstteki küçük dişli ile içerik düzenleme modu açılır.
- Düzenleme PIN'i: `12911`
- Sağ bilgi paneli bulunduğu ekran üzerinde düzenlenebilir.
- Başlık, üst başlık, açıklama ve bilgi maddeleri değiştirilebilir.
- Değişiklikler bu sürümde `localStorage` içinde kalıcı tutulur.
- Her aşama için "Varsayılana dön" desteği vardır.
- Göz akışı artık 4 aşamadır:
  1. Göz
  2. Fotoreseptör
  3. Nöron
  4. Kimyasal İletim / Sinaps
- Kimyasal iletim için nörotransmitterlerin sinaptik aralıkta hareketini gösteren yeni animasyon sahnesi eklendi.
- Storage katmanı `contentRepository` üzerinden soyutlandı; sonraki aşamada Supabase/API ile değiştirilebilir.

## İçerik yapısı

Varsayılan içerikler `src/modules/eye/eye.module.ts` içinde bulunur.
Kullanıcı tarafından yapılan düzenlemeler `src/core/content/contentRepository.ts` üzerinden saklanır.


## V3 revizyonları

- Fotoreseptör sahnesi retina bağlamına alındı; çubuk ve koni hücreleri artık retina tabakası içinde gösteriliyor.
- Nöron sahnesine 0–100 uyarı şiddeti slider'ı eklendi.
- Eşik değer 35: eşik altında impuls animasyonu yok.
- Eşik aşıldığında impuls Ranvier boğumları arasında sıçrayarak ilerliyor.
- Uyarı şiddeti yükseldikçe görsel iletim hızı artıyor; Hz/frekans sayısal göstergeleri özellikle eklenmedi.
- Nöron görseline tıklamak Kimyasal İletim aşamasına geçiriyor.
- Kimyasal iletim sahnesinin alt açıklama ve özet satırları ayrıldı; üst üste binme giderildi.
- Edit Mode ve PIN 12911 korunuyor.

## V4 revizyonları

- Öğren akışının başına insan yüzü/üst gövdesi üzerinde duyu organı seçimi eklendi.
- Göz hotspot'u aktif; kulak, burun, dil ve deri bir sonraki modüller için görünür ancak kilitli.
- Nöronda tek impuls yerine uyarı şiddetine göre 2–5 eşzamanlı/ardışık impuls treni kullanılıyor.
- Uyarı yükseldikçe impulslar hem daha sık üretiliyor hem de Ranvier boğumları arasında daha hızlı sıçrıyor.
- Sonraki geliştirme için organ seçim katmanı ayrı `SenseBodyMap` bileşenine ayrıldı.

## V5 — Kulak modülü

- İnsan haritasındaki Kulak aktif hale getirildi.
- Kulak için 4 aşamalı akış eklendi: Kulak → Mekanoreseptör → Nöron → Kimyasal İletim.
- İlk sahnede sesin dış kulak, kulak zarı, kemikçikler ve salyangoza ilerlemesi animasyonla gösteriliyor.
- İkinci sahnede iç kulaktaki tüy hücreleri ve mekanik bükülme etkileşimli olarak gösteriliyor.
- Nöron ve kimyasal iletim sahneleri organlar arası ortak akış olarak yeniden kullanılıyor.
- Edit Mode artık seçili organ/aşama için doğru content key üzerinden çalışıyor; Kulak metinleri de PIN 12911 ile düzenlenebilir.

## V5.1 hotfix

- V5'te öğrenme ekranında kalan eski `eye.stages.length` referansı kaldırıldı.
- Sayaç artık seçili modülün `activeSense.stages.length` değerini kullanıyor.
- EarScene içindeki CSSProperties tipi açıkça import edildi.
- Göz/Kulak seçiminden sonra öğrenme ekranının render edilmesini engelleyen hata düzeltildi.
