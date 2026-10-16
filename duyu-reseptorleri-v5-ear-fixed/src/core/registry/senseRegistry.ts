import type { SenseModule } from '../types/SenseModule'
import { eyeModule } from '../../modules/eye/eye.module'
import { earModule } from '../../modules/ear/ear.module'

const planned: SenseModule[] = [
  {
    id: 'nose',
    name: 'Burun',
    icon: '⌁',
    receptor: 'Kemoreseptör',
    description: 'Koku moleküllerinin nasıl algılandığını incele.',
    available: false,
    stages: [],
  },
  {
    id: 'tongue',
    name: 'Dil',
    icon: '◡',
    receptor: 'Kemoreseptör',
    description: 'Tat moleküllerinin tat tomurcuklarında algılanmasını incele.',
    available: false,
    stages: [],
  },
  {
    id: 'skin',
    name: 'Deri',
    icon: '✋',
    receptor: 'Mekano · Termo · Nosiseptör',
    description: 'Dokunma, basınç, sıcaklık ve ağrı reseptörlerini incele.',
    available: false,
    stages: [],
  },
]

export const senseModules: SenseModule[] = [eyeModule, earModule, ...planned]
