import { type Movie } from '../../types/catalog'
import { useCardHover } from '../../hooks/useCardHover'
import { getYouTubeId } from '../../utils/youtube'
import { CardDetail } from './CardDetail'
import { MovieBadge } from './MovieBadge'
import { ProgressBar } from './ProgressBar'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const videoId = getYouTubeId(movie.youtube)
  const { iframeRef, isPlaying, origin, handleMouseEnter, handleMouseLeave } = useCardHover(videoId)

  const originClass = {
    left: 'origin-left',
    right: 'origin-right',
    null: '',
  }[String(origin)]

  return (
    <div
      className={`group relative min-w-[250px] w-[250px] h-[140px] bg-[#222] rounded-[4px] cursor-pointer z-[1] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.6] hover:-translate-y-[5%] hover:z-[99] hover:rounded-[6px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.9)] hover:delay-[600ms] ${originClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        ref={iframeRef}
        className={`absolute inset-0 w-full h-full rounded-[4px] pointer-events-none transition-opacity duration-300 ${
          isPlaying ? 'opacity-100 z-[3] rounded-t-[6px] rounded-b-none' : 'opacity-0 z-[1]'
        }`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />

      <img
        src={movie.img}
        alt="Capa do filme"
        className={`absolute inset-0 w-full h-full object-cover rounded-[4px] z-[2] transition-all duration-300 group-hover:rounded-t-[6px] group-hover:rounded-b-none ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {movie.top10 && (
        <div className="absolute top-0 right-0 w-[22px] h-[28px] bg-[#E50914] text-white flex flex-col justify-center items-center font-bold z-[4] rounded-bl-sm shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
          <span className="text-[7px] tracking-[0.5px] leading-[8px]">TOP</span>
          <span className="text-[13px] leading-[13px]">10</span>
        </div>
      )}

      {movie.badge && (
        <MovieBadge
          text={movie.badge.text}
          color={movie.badge.color}
          hasProgress={!!movie.progress}
        />
      )}

      {movie.progress !== undefined && movie.progress > 0 && (
        <ProgressBar progress={movie.progress} />
      )}

      <CardDetail hasProgress={movie.progress} />
    </div>
  )
}