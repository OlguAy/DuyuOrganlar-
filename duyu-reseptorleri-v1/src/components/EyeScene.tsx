interface Props {
  stage: number
  onAdvance: () => void
}

export function EyeScene({ stage, onAdvance }: Props) {
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
          <span className="light-ray ray-1" />
          <span className="light-ray ray-2" />
          <span className="light-ray ray-3" />
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
          <h2>Fotoreseptörler</h2>
          <p>Çubuk veya koni hücresine tıklayarak sinyalin oluşumunu başlat.</p>
        </div>
        <div className="receptor-field">
          {[0,1,2,3,4,5,6].map((i) => (
            <button className={`receptor rod r${i}`} key={`r${i}`} onClick={onAdvance}>
              <span />
            </button>
          ))}
          {[0,1,2,3].map((i) => (
            <button className={`receptor cone c${i}`} key={`c${i}`} onClick={onAdvance}>
              <span />
            </button>
          ))}
          <div className="signal-line"><i /><i /><i /><i /></div>
        </div>
        <div className="legend"><span>● Çubuk</span><span>▲ Koni</span><strong>Işık → Fotoreseptör → Sinirsel sinyal</strong></div>
      </div>
    )
  }

  return (
    <div className="scene-card neuron-scene">
      <div className="scene-heading">
        <span className="scene-kicker">ORTAK İLETİM AŞAMASI</span>
        <h2>Nöronda sinyal iletimi</h2>
        <p>Parlayan sinyali dendritten akson ucuna kadar takip et.</p>
      </div>
      <div className="neuron">
        <div className="dendrites d1" /><div className="dendrites d2" /><div className="dendrites d3" />
        <div className="soma"><div className="nucleus" /></div>
        <div className="axon">
          <i className="myelin m1" /><i className="myelin m2" /><i className="myelin m3" /><i className="myelin m4" />
          <span className="impulse" />
        </div>
        <div className="terminal t1" /><div className="terminal t2" /><div className="terminal t3" />
      </div>
      <div className="neuron-labels"><span>Dendrit</span><span>Hücre gövdesi</span><span>Akson / Miyelin</span><span>Akson ucu</span></div>
      <div className="complete-badge">Uyaran → Reseptör → Nöron → Merkezi Sinir Sistemi</div>
    </div>
  )
}
