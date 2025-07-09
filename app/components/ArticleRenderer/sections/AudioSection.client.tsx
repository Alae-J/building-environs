"use client"

import type { AudioSection } from '@/app/types/article'
import dynamic from 'next/dynamic'

// Dynamically import the server section component with no SSR
const AudioSectionComp = dynamic(
  () => import('./AudioSection').then((mod) => mod.AudioSectionComp),
  { ssr: false }
)

interface AudioSectionClientProps {
  section: AudioSection
}

export default function AudioSectionClient({ section }: AudioSectionClientProps) {
  return <AudioSectionComp section={section} />
}