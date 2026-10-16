import { FormEvent, useMemo, useState } from 'react'
import { senseModules } from './core/registry/senseRegistry'
import { ProcessStepper } from './components/ProcessStepper'
import { InfoPanel } from './components/InfoPanel'
import { EyeScene } from './components/EyeScene'
import './App.css'

type Screen = 'welcome' | 'menu' | 'senses' | 'learning'

interface Student {
  name: string
  className: string
}

function App() {
  const saved = localStorage.getItem('duyu-student')
  const [student, setStudent] = useState<Student>(() =>
    saved ? JSON.parse(saved) : { name: '', className: '' },
  )
  const [screen, setScreen] = useState<Screen>(saved ? 'menu' : 'welcome')
  const [stage, setStage] = useState(0)

  const eye = useMemo(() => senseModules.find((sense) => sense.id === 'eye')!, [])

  const start = (event: FormEvent) => {
    event.preventDefault()
    if (!student.name.trim() || !student.className.trim()) return
    localStorage.setItem('duyu-student', JSON.stringify(student))
    setScreen('menu')
  }

  const resetStudent = () => {
    localStorage.removeItem('duyu-student')
    setStudent({ name: '', className: '' })
    setScreen('welcome')
  }

  if (screen === 'welcome') {
    return (
      <main className="welcome-shell">
        <section className="welcome-copy">
          <div className="brand-mark">DR</div>
          <div className="eyebrow">11. SINIF BİYOLOJİ · ETKİLEŞİMLİ ÖĞRENME</div>
          <h1>Duyu Reseptörlerini<br /><em>keşfet.</em></h1>
          <p>Uyaranın reseptör tarafından algılanmasından sinir sistemine iletilmesine kadar olan süreci etkileşimli sahnelerle incele.</p>
          <div className="flow-preview"><span>UYARAN</span><b>→</b><span>RESEPTÖR</span><b>→</b><span>NÖRON</span><b>→</b><span>MSS</span></div>
        </section>
        <form className="student-card" onSubmit={start}>
          <span className="card-index">01</span>
          <h2>Başlamaya hazır mısın?</h2>
          <p>İlerlemeni bu cihazda tutabilmek için bilgilerini gir.</p>
          <label>Ad Soyad<input value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} placeholder="Örn. Deniz Yılmaz" /></label>
          <label>Sınıf<input value={student.className} onChange={(e) => setStudent({ ...student, className: e.target.value })} placeholder="Örn. 11-A" /></label>
          <button className="primary" type="submit">Uygulamaya Başla <span>→</span></button>
        </form>
      </main>
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="logo-button" onClick={() => setScreen('menu')}>DR</button>
        <div className="top-title"><strong>Duyu Reseptörleri</strong><span>İnteraktif Biyoloji</span></div>
        <div className="student-chip"><span>{student.name.split(' ')[0]}</span><b>{student.className}</b><button onClick={resetStudent}>×</button></div>
      </header>

      {screen === 'menu' && (
        <main className="dashboard">
          <div className="dashboard-head"><span className="eyebrow">MERHABA, {student.name.toLocaleUpperCase('tr-TR')}</span><h1>Bugün ne yapmak istersin?</h1><p>Duyu sistemini adım adım öğren veya bilgilerini oyunla test et.</p></div>
          <div className="mode-grid">
            <button className="mode-card learn" onClick={() => setScreen('senses')}>
              <span className="mode-no">01</span><div className="mode-icon">◎</div><h2>Öğren</h2><p>Duyu organlarını, reseptörleri ve sinirsel iletimi etkileşimli animasyonlarla keşfet.</p><strong>KEŞFETMEYE BAŞLA →</strong>
            </button>
            <button className="mode-card game disabled" disabled>
              <span className="mode-no">02</span><div className="mode-icon">◆</div><h2>Oyun</h2><p>Öğrendiklerini farklı görevlerle test edeceğin oyun bölümü sonraki aşamada eklenecek.</p><strong>YAKINDA</strong>
            </button>
          </div>
        </main>
      )}

      {screen === 'senses' && (
        <main className="senses-page">
          <button className="back" onClick={() => setScreen('menu')}>← Ana menü</button>
          <div className="page-head"><span className="eyebrow">DUYU ORGANLARI</span><h1>Bir duyu sistemi seç</h1><p>Her modül, uyaranın algılanmasından nörona aktarılmasına kadar aynı öğrenme akışını izler.</p></div>
          <div className="sense-grid">
            {senseModules.map((sense, index) => (
              <button key={sense.id} className={`sense-card ${sense.available ? '' : 'locked'}`} disabled={!sense.available} onClick={() => { setStage(0); setScreen('learning') }}>
                <span className="sense-number">0{index + 1}</span><div className="sense-icon">{sense.icon}</div><h2>{sense.name}</h2><strong>{sense.receptor}</strong><p>{sense.description}</p><span className="sense-status">{sense.available ? 'MODÜLÜ AÇ →' : 'SONRAKİ MODÜL'}</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {screen === 'learning' && (
        <main className="learning-page">
          <div className="learning-nav">
            <button className="back" onClick={() => setScreen('senses')}>← Duyu organları</button>
            <ProcessStepper stages={eye.stages} activeIndex={stage} onChange={setStage} />
          </div>
          <div className="learning-grid">
            <section className="animation-stage">
              <EyeScene stage={stage} onAdvance={() => setStage((current) => Math.min(current + 1, eye.stages.length - 1))} />
              <div className="scene-controls">
                <button disabled={stage === 0} onClick={() => setStage(stage - 1)}>← Önceki</button>
                <span>{stage + 1} / {eye.stages.length}</span>
                <button disabled={stage === eye.stages.length - 1} onClick={() => setStage(stage + 1)}>Sonraki →</button>
              </div>
            </section>
            <InfoPanel content={eye.stages[stage].content} />
          </div>
        </main>
      )}
    </div>
  )
}

export default App
