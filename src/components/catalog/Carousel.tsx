import { type Category } from '../../types/catalog'
import { MovieCard } from './MovieCard'

interface CarouselProps {
  category: Category
}

export function Carousel({ category }: CarouselProps) {
  return (
    <section className="mb-[3.5vw]">
      <div className="flex justify-between items-end mb-3">
        <h2 className="text-[1.25vw] font-bold text-[#e5e5e5] leading-[1.25vw]">
          {category.title}
        </h2>
      </div>

      <div className="flex gap-2 overflow-x-visible px-[4%] pb-[50px] mx-[-4%] scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {category.items.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  )
}