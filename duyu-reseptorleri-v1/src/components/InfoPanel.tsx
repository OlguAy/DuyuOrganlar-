import type { InfoContent } from '../core/types/SenseModule'

export function InfoPanel({ content }: { content: InfoContent }) {
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
