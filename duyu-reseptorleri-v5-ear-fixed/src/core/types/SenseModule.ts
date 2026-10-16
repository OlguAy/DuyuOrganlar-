export type SenseId = 'eye' | 'ear' | 'nose' | 'tongue' | 'skin'

export interface InfoContent {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
}

export interface LearningStage {
  id: string
  label: string
  shortLabel: string
  content: InfoContent
}

export interface SenseModule {
  id: SenseId
  name: string
  icon: string
  receptor: string
  description: string
  available: boolean
  stages: LearningStage[]
}

export type ContentMap = Record<string, InfoContent>
