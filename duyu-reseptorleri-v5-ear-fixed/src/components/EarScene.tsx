import { useState } from 'react'
import type { CSSProperties } from 'react'
import { EyeScene } from './EyeScene'

interface Props {
  stage: number
  onAdvance: () => void
}

export function EarScene({ stage, onAdvance }: Props) {
  const [soundActive, setSoundActive] = useState(false)
  const [hairActive, setHairActive] = useState(false)

  if (stage >= 2) {
    return <EyeScene stage={stage} onAdvance={onAdvance} />
  }

  if (stage === 0) {
    return (
      <div className="scene-card ear-scene">
        <div className="scene-heading">
          <span className="scene-kicker">ETKİLEŞİMLİ SAHNE</span>
          <h2>Ses dalgasını iç kulağa ulaştır</h2>
          <p>Ses kaynağına tıkla; titreşimin dış kulaktan salyangoza kadar izlediği yolu takip et.</p>
        </div>

        <button
          className={`sound-source ${soundActive ? 'playing' : ''}`}
          onClick={() => setSoundActive(true)}
          aria-label="Ses dalgasını başlat"
        >
          <span>♪</span>
          <i /><i /><i />
        </button>

        <div className={`ear-anatomy ${soundActive ? 'sound-active' : ''}`}>
          <svg viewBox="0 0 860 330" aria-label="Kulağın şematik kesiti">
            <path className="pinna" d="M95 65c-49 8-68 66-53 126 13 51 47 80 84 61 25-13 22-41 4-51-20-11-38 4-35 23 3 15 19 18 29 10"/>
            <path className="ear-canal" d="M112 174 C185 166 240 169 305 174"/>
            <path className="eardrum" d="M308 130 L325 218"/>
            <g className="ossicles">
              <circle cx="351" cy="163" r="12"/><circle cx="382" cy="151" r="10"/><circle cx="412" cy="169" r="9"/>
              <path d="M324 164L342 163M363 159L373 154M392 157L405 165M418 170L447 174"/>
            </g>
            <path className="cochlea" d="M520 185c5-58 92-70 123-24 31 47-12 105-62 88-38-13-39-61-6-76 26-12 51 13 39 35-9 16-32 13-35-3"/>
            <path className="vestibular" d="M516 157c-31-42-12-93 28-101 38-7 60 30 39 57M537 145c-2-45 42-71 76-50 29 18 25 61-5 73"/>
            <path className="auditory-nerve" d="M638 194c55 0 94 12 150 38"/>
            <path className="eustachian" d="M449 190c18 48 47 78 79 106"/>
          </svg>

          <div className="ear-label el-outer">Dış kulak</div>
          <div className="ear-label el-drum">Kulak zarı</div>
          <div className="ear-label el-middle">Kemikçikler</div>
          <button className="ear-label el-cochlea clickable" onClick={onAdvance}>Salyangoz →</button>

          <div className="sound-route">
            {Array.from({ length: 9 }).map((_, i) => <i key={i} style={{ '--route-i': i } as CSSProperties} />)}
          </div>
        </div>

        <div className="ear-path">
          <span>Ses</span><b>→</b><span>Dış kulak</span><b>→</b><span>Kulak zarı</span><b>→</b><span>Kemikçikler</span><b>→</b><span>Salyangoz</span>
        </div>
        {soundActive && <div className="ear-action-note">Titreşim iç kulağa ulaştı. Salyangoza tıklayarak reseptörlere yaklaş.</div>}
      </div>
    )
  }

  return (
    <div className="scene-card hair-cell-scene">
      <div className="scene-heading">
        <span className="scene-kicker">İÇ KULAĞA YAKINLAŞTIK</span>
        <h2>Mekanoreseptör tüy hücreleri</h2>
        <p>Sıvı hareketini başlat; tüylerin bükülmesiyle mekanik uyaranın nasıl algılandığını izle.</p>
      </div>

      <button
        className={`fluid-control ${hairActive ? 'active' : ''}`}
        onClick={() => setHairActive(true)}
      >
        ≋ <span>Sıvı hareketini başlat</span>
      </button>

      <div className={`hair-cell-visual ${hairActive ? 'active' : ''}`}>
        <div className="fluid-layer">
          <i /><i /><i /><i />
        </div>
        <div className="tectorial-layer">Sıvı hareketi</div>
        <div className="hair-bundle">
          {[0,1,2,3,4,5,6].map(i => <i key={i} style={{ '--hair-i': i } as CSSProperties} />)}
        </div>
        <button className="hair-cell-body" onClick={onAdvance} aria-label="Nöron aşamasına geç">
          <span>Tüy hücresi</span>
        </button>
        <div className="afferent-fiber"><i /><span>Sinirsel sinyal</span></div>
      </div>

      <div className="hair-process">
        <span>Mekanik hareket</span><b>→</b><span>Tüylerin bükülmesi</span><b>→</b><span>Reseptörün uyarılması</span><b>→</b><span>Sinirsel sinyal</span>
      </div>
      {hairActive && <div className="ear-action-note receptor-note">Tüy hücresine tıklayarak nörondaki iletime geç.</div>}
    </div>
  )
}
