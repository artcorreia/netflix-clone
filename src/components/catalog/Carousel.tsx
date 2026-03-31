import { type Category } from '../../types/catalog'
import { MovieCard } from './MovieCard'
import { useCarouselDrag } from '../../hooks/useCarouselDrag'

interface CarouselProps {
  category: Category
}

export function Carousel({ category }: CarouselProps) {
  const { containerRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } = useCarouselDrag()

  return (
    <section className="mb-4 md:mb-6 lg:mb-[3.5vw]">
      <div className="flex justify-between items-end mb-2 md:mb-3">
        <h2 className="text-lg md:text-xl lg:text-[1.25vw] font-bold text-[#e5e5e5] leading-tight lg:leading-[1.25vw]">
          {category.title}
        </h2>
      </div>

      <div
        ref={containerRef}
        className="flex gap-2 px-[4%] pb-12.5 mx-[-4%] scroll-smooth cursor-grab select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {category.items.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  )
}