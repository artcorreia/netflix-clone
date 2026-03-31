import { useRef } from 'react'

export function useCarouselDrag() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    isDown.current = true
    startX.current = e.pageX - containerRef.current.offsetLeft
    scrollLeft.current = containerRef.current.scrollLeft
    containerRef.current.style.cursor = 'grabbing'
  }

  const handleMouseLeave = () => {
    isDown.current = false
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseUp = () => {
    isDown.current = false
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    containerRef.current.scrollLeft = scrollLeft.current - walk
  }

  return {
    containerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  }
}
