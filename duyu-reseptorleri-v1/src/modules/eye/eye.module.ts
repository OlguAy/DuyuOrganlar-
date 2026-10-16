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
        bullets: [
          'Uyaran: Işık',
          'Duyu organı: Göz',
          'Hedef bölge: Retina',
        ],
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
          'Reseptör tipi: Elektromanyetik reseptör / fotoreseptör',
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
        eyebrow: '3. AŞAMA · İLETİM',
        title: 'Sinirsel iletinin taşınması',
        description:
          'Reseptörde oluşan sinyal, nöronlar aracılığıyla merkezi sinir sistemine iletilir. Böylece uyaran sinir sistemi tarafından değerlendirilebilir.',
        bullets: [
          'Dendrit: Uyarının alınmasına katkı sağlar',
          'Akson: İletinin taşındığı uzun uzantıdır',
          'Akson ucu: Sonraki hücreyle iletişimin kurulduğu bölgedir',
        ],
      },
    },
  ],
}
