import type { SenseModule } from '../../core/types/SenseModule'

export const earModule: SenseModule = {
  id: 'ear',
  name: 'Kulak',
  icon: '◔',
  receptor: 'Mekanoreseptör',
  description: 'Ses titreşimlerinin kulakta mekanik uyarıya ve sinirsel sinyale dönüşmesini incele.',
  available: true,
  stages: [
    {
      id: 'organ',
      label: 'Kulak',
      shortLabel: 'KULAK',
      content: {
        eyebrow: '1. AŞAMA · DUYU ORGANI',
        title: 'Sesin kulak içindeki yolculuğu',
        description:
          'Ses dalgaları dış kulak tarafından alınır. Titreşim kulak zarına ulaşır, orta kulaktaki kemikçikler üzerinden iç kulağa aktarılır ve salyangozdaki sıvı hareketini oluşturur.',
        bullets: [
          'Uyaran: Ses titreşimleri',
          'Duyu organı: Kulak',
          'Hedef bölge: İç kulak / salyangoz',
        ],
      },
    },
    {
      id: 'receptor',
      label: 'Mekanoreseptör',
      shortLabel: 'MEKANORESEPTÖR',
      content: {
        eyebrow: '2. AŞAMA · RESEPTÖR',
        title: 'Tüy hücreleri mekanik hareketi algılar',
        description:
          'İç kulaktaki sıvı hareketi, duyu epiteli üzerindeki tüy hücrelerinin uzantılarını büker. Bu mekanik uyarı sinirsel sinyalin oluşmasına katkı sağlar.',
        bullets: [
          'Reseptör tipi: Mekanoreseptör',
          'Reseptör yapısı: Tüy hücreleri',
          'Algılanan uyaran: Mekanik titreşim / hareket',
        ],
      },
    },
    {
      id: 'neuron',
      label: 'Nöron',
      shortLabel: 'NÖRON',
      content: {
        eyebrow: '3. AŞAMA · NÖRON',
        title: 'Elektriksel iletinin taşınması',
        description:
          'Reseptör düzeyinde oluşan sinirsel sinyal nöron boyunca taşınır. Miyelinli bölgelerde ileti Ranvier boğumları arasında sıçrayarak ilerler.',
        bullets: [
          'Eşik altında impuls oluşmaz',
          'Miyelin kılıf iletimin hızlanmasına katkı sağlar',
          'İleti akson ucuna doğru ilerler',
        ],
      },
    },
    {
      id: 'synapse',
      label: 'Kimyasal İletim',
      shortLabel: 'KİMYASAL İLETİM',
      content: {
        eyebrow: '4. AŞAMA · SİNAPTİK İLETİM',
        title: 'Nöronlar arasındaki kimyasal iletim',
        description:
          'Akson ucuna ulaşan sinirsel ileti, nörotransmitterlerin sinaptik aralığa salınmasını sağlar. Nörotransmitterler sonraki hücrenin zarındaki reseptörlere bağlanarak iletinin aktarılmasına katkı sağlar.',
        bullets: [
          'Akson ucu: Nörotransmitterlerin salındığı bölge',
          'Sinaptik aralık: İki hücre arasındaki boşluk',
          'Nörotransmitter: Hücreler arası iletişimde görev alan kimyasal madde',
        ],
      },
    },
  ],
}
