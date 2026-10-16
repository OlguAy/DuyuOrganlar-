import type { SenseModule } from '../core/types/SenseModule'

interface Props {
  senses: SenseModule[]
  onSelect: (id: string) => void
}

export function SenseBodyMap({ senses, onSelect }: Props) {
  const available = new Set(senses.filter((s) => s.available).map((s) => s.id))
  const select = (id: string) => available.has(id as never) && onSelect(id)

  return (
    <div className="body-map-layout">
      <section className="body-map-card">
        <div className="body-map-heading">
          <span className="eyebrow">DUYU ORGANLARI</span>
          <h1>Duyu organlarını insan üzerinde keşfet</h1>
          <p>Bir duyu organına dokun. Aktif modüller doğrudan öğrenme akışını açar.</p>
        </div>

        <div className="human-map" aria-label="İnsan yüzü üzerinde duyu organları">
          <svg className="human-silhouette" viewBox="0 0 520 590" role="img" aria-label="İnsan başı ve üst gövdesi">
            <path className="body-fill" d="M151 590c4-76 26-116 82-135v-55c-53-13-91-63-91-137V166C142 70 194 18 260 18s118 52 118 148v97c0 74-38 124-91 137v55c56 19 78 59 82 135H151Z"/>
            <path className="ear-shape" d="M143 183c-29-5-42 20-35 58 6 34 23 52 43 43" />
            <path className="ear-shape" d="M377 183c29-5 42 20 35 58-6 34-23 52-43 43" />
            <path className="brow" d="M184 163c23-14 45-14 65-3M271 160c20-11 42-11 65 3"/>
            <ellipse className="eye-shape" cx="216" cy="190" rx="28" ry="15"/>
            <ellipse className="eye-shape" cx="304" cy="190" rx="28" ry="15"/>
            <circle className="pupil-shape" cx="216" cy="190" r="7"/>
            <circle className="pupil-shape" cx="304" cy="190" r="7"/>
            <path className="nose-shape" d="M260 191c-3 38-10 64-17 83 10 9 24 12 34 1"/>
            <path className="mouth-shape" d="M221 319c27 17 51 17 78 0M229 319c20-7 42-8 62 0"/>
          </svg>

          <button className={`organ-hotspot eye-hotspot ${available.has('eye') ? 'active' : 'locked'}`} disabled={!available.has('eye')} onClick={() => select('eye')} aria-label="Göz modülünü aç">
            <span className="hotspot-dot" /><strong>Göz</strong><small>Fotoreseptör</small>
          </button>
          <button className={`organ-hotspot ear-hotspot ${available.has('ear') ? 'active' : 'locked'}`} disabled={!available.has('ear')} onClick={() => select('ear')} aria-label="Kulak modülünü aç">
            <span className="hotspot-dot" /><strong>Kulak</strong><small>Mekanoreseptör{available.has('ear') ? '' : ' · Yakında'}</small>
          </button>
          <button className="organ-hotspot nose-hotspot locked" disabled aria-label="Burun modülü yakında">
            <span className="hotspot-dot" /><strong>Burun</strong><small>Kemoreseptör · Yakında</small>
          </button>
          <button className="organ-hotspot tongue-hotspot locked" disabled aria-label="Dil modülü yakında">
            <span className="hotspot-dot" /><strong>Dil</strong><small>Kemoreseptör · Yakında</small>
          </button>
          <button className="organ-hotspot skin-hotspot locked" disabled aria-label="Deri modülü yakında">
            <span className="hotspot-dot" /><strong>Deri</strong><small>Birden fazla reseptör · Yakında</small>
          </button>
        </div>
      </section>

      <aside className="body-map-guide">
        <span className="scene-kicker">NASIL KULLANILIR?</span>
        <h2>Organın üzerine tıkla</h2>
        <p>Öğrenme akışı seçtiğin duyu organından başlar; ardından reseptör, nöron ve kimyasal iletim aşamalarına ilerler.</p>
        <div className="body-flow">
          <span>Duyu organı</span><b>→</b><span>Reseptör</span><b>→</b><span>Nöron</span><b>→</b><span>Kimyasal iletim</span>
        </div>
        <div className="available-note"><i /> Göz ve Kulak modülleri aktif. Diğer duyu organları sonraki aşamalarda eklenecek.</div>
      </aside>
    </div>
  )
}
