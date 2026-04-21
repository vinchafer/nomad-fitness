// AI_VIDEO_SLOT: When AI-generated videos are available, add aiVideoUrl prop and render <video> tag here

interface VideoEmbedProps {
  youtubeId?: string
  title?: string
  // AI_VIDEO_SLOT: aiVideoUrl?: string
}

export default function VideoEmbed({ youtubeId, title = 'Workout Video' }: VideoEmbedProps) {
  if (youtubeId) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl shadow-card" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  // AI_VIDEO_SLOT: Replace YouTube embed with AI-generated video URL here
  // When aiVideoUrl is provided, render:
  // <video src={aiVideoUrl} controls className="w-full rounded-2xl" />

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-border border-2 border-dashed border-border" style={{ paddingBottom: '56.25%' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-4 shadow-card">
          <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <p className="font-semibold text-dark mb-1">Video kommt bald</p>
        <p className="text-sm text-muted max-w-xs">
          Ein Video zu diesem Workout wird bald verfügbar sein.
        </p>
      </div>
    </div>
  )
}
