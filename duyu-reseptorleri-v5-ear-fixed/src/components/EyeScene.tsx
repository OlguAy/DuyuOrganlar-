import { useState, type CSSProperties } from 'react'

interface Props {
  stage: number
  onAdvance: () => void
}

const THRESHOLD = 35

export function EyeScene({ stage, onAdvance }: Props) {
  const [stimulus, setStimulus] = useState(0)
  const active = stimulus >= THRESHOLD
  const intensity = active ? (stimulus - THRESHOLD) / (100 - THRESHOLD) : 0
  const jumpDuration = Math.max(0.16, 1.15 - intensity * 0.99)
  const impulseCount = !active ? 0 : stimulus < 50 ? 2 : stimulus < 70 ? 3 : stimulus < 85 ? 4 : 5

  if (stage === 0) {
    return (
      <div className="scene-card eye-scene">
        <div className="scene-heading">
          <span className="scene-kicker">ETKİLEŞİMLİ SAHNE</span>
          <h2>Işığı retinaya ulaştır</h2>
          <p>Animasyonu başlatmak için ışık kaynağına tıkla.</p>
        </div>
        <button className="sun-button" onClick={onAdvance} aria-label="Işık animasyonunu başlat">
          <span className="sun-core">☀</span>
        </button>
        <div className="eye-visual">
          <div className="eye-shell">
            <div className="iris"><div className="pupil" /></div>
            <div className="lens" />
            <button className="retina" onClick={onAdvance} title="Retinaya ilerle">
              <span>RETİNA</span>
            </button>
          </div>
          <div className="light-path"><span /><span /><span /></div>
        </div>
        <div className="path-labels">
          <span>Işık</span><b>→</b><span>Kornea</span><b>→</b><span>Göz bebeği</span><b>→</b><span>Mercek</span><b>→</b><span>Retina</span>
        </div>
      </div>
    )
  }

  if (stage === 1) {
    return (
      <div className="scene-card receptor-scene">
        <div className="scene-heading">
          <span className="scene-kicker">RETİNAYA YAKINLAŞTIK</span>
          <h2>Retinadaki fotoreseptörler</h2>
          <p>Retina tabakasındaki çubuk ve koni hücrelerinden birine tıkla.</p>
        </div>

        <div className="retina-context">
          <div className="retina-layer layer-light"><span>Işığın geldiği yön</span></div>
          <div className="retina-layer layer-neural" />
          <div className="photoreceptor-row">
            {[0,1,2,3,4,5].map((i) => (
              <button className="photo-cell rod-cell" key={`rod-${i}`} onClick={onAdvance} aria-label="Çubuk hücresi">
                <i className="outer-segment" /><i className="cell-body" /><i className="cell-terminal" />
              </button>
            ))}
            {[0,1,2].map((i) => (
              <button className="photo-cell cone-cell" key={`cone-${i}`} onClick={onAdvance} aria-label="Koni hücresi">
                <i className="outer-segment" /><i className="cell-body" /><i className="cell-terminal" />
              </button>
            ))}
          </div>
          <div className="retina-layer layer-pigment"><span>Retina</span></div>
          <div className="receptor-signal"><i /><i /><i /></div>
        </div>

        <div className="receptor-footer">
          <div className="receptor-key">
            <span><i className="rod-key" /> Çubuk hücresi</span>
            <span><i className="cone-key" /> Koni hücresi</span>
          </div>
          <strong>Işık → Fotoreseptör → Sinirsel sinyal</strong>
        </div>
      </div>
    )
  }

  if (stage === 2) {
    return (
      <div className="scene-card neuron-scene">
        <div className="scene-heading">
          <span className="scene-kicker">ORTAK İLETİM AŞAMASI</span>
          <h2>Nöronda sinyal iletimi</h2>
          <p>Uyarı şiddetini artır. Eşik aşılınca impulsun Ranvier boğumları arasında sıçrayarak ilerlemesini izle.</p>
        </div>

        <button className="neuron-interactive" onClick={onAdvance} aria-label="Kimyasal iletime geç">
          <div className="neuron-v3">
            <div className="nv3-dendrite nd1" /><div className="nv3-dendrite nd2" /><div className="nv3-dendrite nd3" /><div className="nv3-dendrite nd4" />
            <div className="nv3-soma"><div className="nv3-nucleus" /></div>
            <div className="nv3-axon">
              <i className="nv3-myelin nm1" /><i className="nv3-myelin nm2" /><i className="nv3-myelin nm3" /><i className="nv3-myelin nm4" />
              <span className="node node0" /><span className="node node1" /><span className="node node2" /><span className="node node3" /><span className="node node4" />
              {active && Array.from({ length: impulseCount }).map((_, index) => (
                <span
                  key={index}
                  className="saltatory-impulse"
                  style={{
                    '--jump-duration': `${jumpDuration}s`,
                    '--impulse-delay': `${-(index * jumpDuration * 1.05)}s`,
                  } as CSSProperties}
                />
              ))}
            </div>
            <div className="nv3-terminal ntm1" /><div className="nv3-terminal ntm2" /><div className="nv3-terminal ntm3" />
            <span className="terminal-click-hint">Akson ucuna tıkla →</span>
          </div>
        </button>

        <div className="neuron-part-labels">
          <span>Dendrit</span><span>Hücre gövdesi</span><span>Miyelin kılıf / Ranvier boğumları</span><span>Akson ucu</span>
        </div>

        <div className="stimulus-control">
          <div className="stimulus-head">
            <strong>⚡ Uyarı şiddeti</strong>
            <span>{stimulus}</span>
          </div>
          <input
            aria-label="Uyarı şiddeti"
            type="range"
            min="0"
            max="100"
            value={stimulus}
            onChange={(e) => setStimulus(Number(e.target.value))}
          />
          <div className="range-labels"><span>Zayıf (0)</span><span>Güçlü (100)</span></div>
          <div className="threshold-track">
            <span style={{ left: `${THRESHOLD}%` }}>Eşik: {THRESHOLD}</span>
          </div>
          <div className={`stimulus-status ${active ? 'active' : ''}`}>
            {active
              ? `⚡ Eşik aşıldı — impulslar iletiliyor${stimulus > 70 ? '; uyarı arttıkça impulslar daha sık ve hızlı ilerliyor' : ''}.`
              : `Uyarı eşik değerin altında — impuls oluşmuyor.`}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="scene-card synapse-scene">
      <div className="scene-heading">
        <span className="scene-kicker">SİNAPSA YAKINLAŞTIK</span>
        <h2>Kimyasal iletim</h2>
        <p>Nörotransmitterlerin iki hücre arasındaki sinaptik aralıktan geçişini izle.</p>
      </div>

      <div className="synapse-visual">
        <div className="axon-terminal">
          <span className="vesicle v1" /><span className="vesicle v2" /><span className="vesicle v3" />
          <span className="vesicle v4" /><span className="vesicle v5" />
        </div>
        <div className="synaptic-gap">
          <i className="transmitter nt1" /><i className="transmitter nt2" /><i className="transmitter nt3" />
          <i className="transmitter nt4" /><i className="transmitter nt5" />
          <span>Sinaptik aralık</span>
        </div>
        <div className="next-cell">
          <i className="syn-receptor sr1" /><i className="syn-receptor sr2" /><i className="syn-receptor sr3" />
          <i className="syn-receptor sr4" />
        </div>
      </div>

      <div className="synapse-bottom">
        <div className="synapse-labels">
          <span>Akson ucu</span><b>→</b><span>Nörotransmitter</span><b>→</b><span>Sinaptik aralık</span><b>→</b><span>Sonraki hücre</span>
        </div>
        <div className="synapse-summary">Elektriksel ileti → Kimyasal aktarım → Sonraki hücre</div>
      </div>
    </div>
  )
}
