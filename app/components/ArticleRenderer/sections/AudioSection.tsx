import AudioPlayer from '@/app/components/Audio/AudioPlayer'
import type { AudioSection } from '@/app/types/article'

export function AudioSectionComp({ section }: { section: AudioSection }) {
  const { title, subtitle, thumbnailUrl, audioUrl, duration } = section
  return (
    <div className="mb-8">
      <AudioPlayer
        title={title}
        subtitle={subtitle}
        thumbnailUrl={thumbnailUrl}
        audioUrl={audioUrl}
        duration={duration}
      />
    </div>
  )
}