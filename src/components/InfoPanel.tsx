import { useEffect, useState } from 'react'
import type { InfoContent } from '../core/types/SenseModule'

interface Props {
  content: InfoContent
  editMode: boolean
  onSave: (content: InfoContent) => void
  onReset: () => void
}

export function InfoPanel({ content, editMode, onSave, onReset }: Props) {
  const [draft, setDraft] = useState(content)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setDraft(content)
    setSaved(false)
  }, [content])

  const changeBullet = (index: number, value: string) => {
    const bullets = [...draft.bullets]
    bullets[index] = value
    setDraft({ ...draft, bullets })
  }

  if (!editMode) {
    return (
      <aside className="info-panel">
        <div className="info-eyebrow">{content.eyebrow}</div>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <div className="info-list">
          {content.bullets.map((bullet) => (
            <div className="info-item" key={bullet}>
              <span className="info-dot" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
        <div className="source-note">İçerik, proje için verilen 11. sınıf kaynak sunumunun kapsamına göre düzenlenmiştir.</div>
      </aside>
    )
  }

  return (
    <aside className="info-panel edit-panel">
      <div className="edit-mode-badge">DÜZENLEME MODU</div>

      <label>
        Üst başlık
        <input value={draft.eyebrow} onChange={(e) => setDraft({ ...draft, eyebrow: e.target.value })} />
      </label>

      <label>
        Başlık
        <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
      </label>

      <label>
        Açıklama
        <textarea rows={6} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
      </label>

      <div className="bullet-editor">
        <span className="edit-label">Bilgi maddeleri</span>
        {draft.bullets.map((bullet, index) => (
          <div className="bullet-row" key={index}>
            <input value={bullet} onChange={(e) => changeBullet(index, e.target.value)} />
            <button
              title="Maddeyi sil"
              onClick={() => setDraft({ ...draft, bullets: draft.bullets.filter((_, i) => i !== index) })}
            >×</button>
          </div>
        ))}
        <button className="add-bullet" onClick={() => setDraft({ ...draft, bullets: [...draft.bullets, 'Yeni bilgi'] })}>
          + Madde ekle
        </button>
      </div>

      <div className="edit-actions">
        <button className="reset-content" onClick={onReset}>Varsayılana dön</button>
        <button
          className="save-content"
          onClick={() => {
            onSave(draft)
            setSaved(true)
            window.setTimeout(() => setSaved(false), 1600)
          }}
        >
          {saved ? 'Kaydedildi ✓' : 'Değişiklikleri kaydet'}
        </button>
      </div>
      <p className="local-note">Bu sürümde değişiklikler bu tarayıcıda kalıcı olarak saklanır.</p>
    </aside>
  )
}
