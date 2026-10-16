import type { SenseModule } from '../../core/types/SenseModule'

export const eyeModule: SenseModule = {
  id: 'eye',
  name: 'Göz',
  icon: '◉',
  receptor: 'Fotoreseptör',
  description: 'Işığın gözden retinaya ve fotoreseptörlere ulaşmasını keşfet.',
  available: true,
  stages: [
    {
      id: 'organ',
      label: 'Göz',
      shortLabel: 'GÖZ',
      content: {
        eyebrow: '1. AŞAMA · DUYU ORGANI',
        title: 'Işığın göz içindeki yolculuğu',
        description:
          'Görme, çevreden gelen ışığın göz tarafından alınmasıyla başlar. Işık kornea, göz bebeği ve mercekten geçerek retinaya ulaşır.',
        bullets: ['Uyaran: Işık', 'Duyu organı: Göz', 'Hedef bölge: Retina'],
      },
    },
    {
      id: 'receptor',
      label: 'Fotoreseptör',
      shortLabel: 'FOTORESEPTÖR',
      content: {
        eyebrow: '2. AŞAMA · RESEPTÖR',
        title: 'Retinadaki fotoreseptörler',
        description:
          'Retinadaki çubuk ve koni hücreleri ışığa duyarlı fotoreseptörlerdir. Işık uyaranının sinirsel sinyale dönüştürülmesinde görev alırlar.',
        bullets: [
          'Reseptör tipi: Fotoreseptör',
          'Konum: Retina',
          'Temel hücreler: Çubuk ve koni',
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
          'Reseptörde oluşan sinirsel sinyal nöron boyunca taşınır. İleti, hücre gövdesinden aksona ve akson uçlarına doğru ilerler.',
        bullets: [
          'Dendrit: Uyarının alınmasına katkı sağlar',
          'Akson: İletinin taşındığı uzun uzantıdır',
          'Miyelin kılıf: İletimin hızlanmasına katkı sağlar',
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
          'Akson ucuna ulaşan sinirsel ileti, nörotransmitterlerin sinaptik aralığa salınmasını sağlar. Bu kimyasal maddeler sonraki hücrenin zarındaki reseptörlere bağlanarak iletinin aktarılmasına katkı sağlar.',
        bullets: [
          'Akson ucu: Nörotransmitterlerin salındığı bölge',
          'Sinaptik aralık: İki hücre arasındaki boşluk',
          'Nörotransmitter: Hücreler arası iletişimde görev alan kimyasal madde',
        ],
      },
    },
  ],
}
