import { useState } from 'react'
import { senseModules } from './core/registry/senseRegistry'
import { contentRepository } from './core/content/contentRepository'
import type { InfoContent } from './core/types/SenseModule'
import { ProcessStepper } from './components/ProcessStepper'
import { InfoPanel } from './components/InfoPanel'
import { EyeScene } from './components/EyeScene'
import { EarScene } from './components/EarScene'
import { SenseBodyMap } from './components/SenseBodyMap'
import './App.css'

type Screen = 'menu' | 'senses' | 'learning'
const EDIT_PIN = '12911'

function App() {
  const [screen, setScreen] = useState<Screen>('menu')
  const [stage, setStage] = useState(0)
  const [selectedSenseId, setSelectedSenseId] = useState<'eye' | 'ear'>('eye')
  const [editMode, setEditMode] = useState(false)
  const [showPin, setShowPin] = useState(false)
  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState(false)
  const [, forceContentRefresh] = useState(0)

  const activeSense = senseModules.find((sense) => sense.id === selectedSenseId)!
  const activeStage = activeSense.stages[stage]
  const contentKey = `${activeSense.id}.${activeStage.id}`
  const activeContent = contentRepository.get(contentKey, activeStage.content)

  const enterEditMode = () => {
    if (pin === EDIT_PIN) {
      setEditMode(true)
      setShowPin(false)
      setPin('')
      setPinError(false)
    } else {
      setPinError(true)
    }
  }

  const saveContent = (content: InfoContent) => {
    contentRepository.update(contentKey, content)
    forceContentRefresh((v) => v + 1)
  }

  const resetContent = () => {
    contentRepository.reset(contentKey)
    forceContentRefresh((v) => v + 1)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="logo-button" onClick={() => setScreen('menu')}>DR</button>
        <div className="top-title"><strong>Duyu Reseptörleri</strong><span>İnteraktif Biyoloji</span></div>
        {editMode && <div className="global-edit-badge">DÜZENLEME MODU</div>}
        <button
          className={`settings-button ${editMode ? 'editing' : ''}`}
          title={editMode ? 'Düzenleme modundan çık' : 'İçerik yönetimi'}
          onClick={() => editMode ? setEditMode(false) : setShowPin(true)}
        >
          {editMode ? '✓' : '⚙'}
        </button>
      </header>

      {screen === 'menu' && (
        <main className="dashboard">
          <div className="dashboard-head">
            <span className="eyebrow">11. SINIF BİYOLOJİ</span>
            <h1>Duyu sistemini keşfet.</h1>
            <p>Uyaranların reseptörler tarafından algılanmasından sinirsel iletime kadar olan süreci etkileşimli sahnelerle incele.</p>
          </div>
          <div className="mode-grid">
            <button className="mode-card learn" onClick={() => setScreen('senses')}>
              <span className="mode-no">01</span><div className="mode-icon">◎</div><h2>Öğren</h2>
              <p>Duyu organlarını, reseptörleri ve sinirsel iletimi etkileşimli animasyonlarla keşfet.</p><strong>KEŞFETMEYE BAŞLA →</strong>
            </button>
            <button className="mode-card game disabled" disabled>
              <span className="mode-no">02</span><div className="mode-icon">◆</div><h2>Oyun</h2>
              <p>Öğrendiklerini farklı görevlerle test edeceğin oyun bölümü sonraki aşamada eklenecek.</p><strong>YAKINDA</strong>
            </button>
          </div>
        </main>
      )}

      {screen === 'senses' && (
        <main className="senses-page">
          <button className="back" onClick={() => setScreen('menu')}>← Ana menü</button>
          <SenseBodyMap
            senses={senseModules}
            onSelect={(id) => {
              if (id === 'eye' || id === 'ear') {
                setSelectedSenseId(id)
                setStage(0)
                setScreen('learning')
              }
            }}
          />
        </main>
      )}

      {screen === 'learning' && (
        <main className="learning-page">
          <div className="learning-nav">
            <button className="back" onClick={() => setScreen('senses')}>← Duyu organları</button>
            <ProcessStepper stages={activeSense.stages} activeIndex={stage} onChange={setStage} />
          </div>
          <div className="learning-grid">
            <section className="animation-stage">
              {selectedSenseId === 'eye'
                ? <EyeScene stage={stage} onAdvance={() => setStage((current) => Math.min(current + 1, activeSense.stages.length - 1))} />
                : <EarScene stage={stage} onAdvance={() => setStage((current) => Math.min(current + 1, activeSense.stages.length - 1))} />}
              <div className="scene-controls">
                <button disabled={stage === 0} onClick={() => setStage(stage - 1)}>← Önceki</button>
                <span>{stage + 1} / {activeSense.stages.length}</span>
                <button disabled={stage === activeSense.stages.length - 1} onClick={() => setStage(stage + 1)}>Sonraki →</button>
              </div>
            </section>
            <InfoPanel content={activeContent} editMode={editMode} onSave={saveContent} onReset={resetContent} />
          </div>
        </main>
      )}

      {showPin && (
        <div className="modal-backdrop" onMouseDown={() => setShowPin(false)}>
          <div className="pin-modal" onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPin(false)}>×</button>
            <span className="eyebrow">İÇERİK YÖNETİMİ</span>
            <h2>Düzenleme modunu aç</h2>
            <p>Bu alan öğretmen/içerik düzenleyicisi içindir.</p>
            <input
              autoFocus
              type="password"
              inputMode="numeric"
              value={pin}
              onChange={(e) => { setPin(e.target.value); setPinError(false) }}
              onKeyDown={(e) => e.key === 'Enter' && enterEditMode()}
              placeholder="PIN"
            />
            {pinError && <span className="pin-error">PIN hatalı.</span>}
            <button className="save-content" onClick={enterEditMode}>Düzenleme moduna geç</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
