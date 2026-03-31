import { useRef, useState } from 'react'

export function useCardHover(videoId: string) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [origin, setOrigin] = useState<'left' | 'right' | null>(null)

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const windowWidth = window.innerWidth

    if (rect.left < 100) setOrigin('left')
    else if (rect.right > windowWidth - 100) setOrigin('right')
    else setOrigin(null)

    timeoutRef.current = setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`
      }
      setIsPlaying(true)
    }, 600)
  }

  function handleMouseLeave() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (iframeRef.current) iframeRef.current.src = ''
    setIsPlaying(false)
    setOrigin(null)
  }

  return { iframeRef, isPlaying, origin, handleMouseEnter, handleMouseLeave }
}