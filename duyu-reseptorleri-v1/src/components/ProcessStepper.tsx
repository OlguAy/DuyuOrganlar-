import type { LearningStage } from '../core/types/SenseModule'

interface Props {
  stages: LearningStage[]
  activeIndex: number
  onChange: (index: number) => void
}

export function ProcessStepper({ stages, activeIndex, onChange }: Props) {
  return (
    <nav className="stepper" aria-label="Öğrenme aşamaları">
      {stages.map((stage, index) => (
        <button
          key={stage.id}
          className={`step ${index === activeIndex ? 'active' : ''} ${
            index < activeIndex ? 'done' : ''
          }`}
          onClick={() => onChange(index)}
        >
          <span>{index + 1}</span>
          <strong>{stage.shortLabel}</strong>
        </button>
      ))}
    </nav>
  )
}
