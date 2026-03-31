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

  const transformOrigin =
    origin === 'left' ? 'left center' :
    origin === 'right' ? 'right center' :
    'center center'

  return (
    <div
      className="relative w-40 sm:w-44 md:w-52 lg:w-62.5 min-w-40 sm:min-w-44 md:min-w-52 lg:min-w-62.5 h-24 sm:h-28 md:h-32 lg:h-35 bg-[#222] rounded-sm cursor-pointer shrink-0"
      style={{ transformOrigin }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        .movie-card-wrapper {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s,
                      z-index 0s 0s,
                      box-shadow 0.3s 0s;
        }
        
        .movie-card-wrapper:hover {
          transform: scale(1.55) translateY(-5%);
          z-index: 50;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8);
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s,
                      z-index 0s 0.4s,
                      box-shadow 0.3s 0.4s;
        }
        
        .card-details {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s 0s;
        }
        
        .movie-card-wrapper:hover .card-details {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.2s 0.4s;
        }
      `}</style>

      <div className="movie-card-wrapper relative w-full h-full rounded-sm" style={{ transformOrigin }}>
        <iframe
          ref={iframeRef}
          className={`absolute inset-0 w-full h-full rounded-sm pointer-events-none ${
            isPlaying ? 'opacity-100 z-30' : 'opacity-0 z-0'
          }`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />

        <img
          src={movie.img}
          alt="Capa do filme"
          className={`absolute inset-0 w-full h-full object-cover rounded-sm ${
            isPlaying ? 'opacity-0 z-0' : 'opacity-100 z-20'
          }`}
        />

        {movie.top10 && (
          <div className="absolute top-0 right-0 w-5.5 h-7 bg-[#E50914] text-white flex flex-col justify-center items-center font-bold z-40 rounded-bl-sm shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
            <span className="text-[7px] tracking-[0.5px] leading-2">TOP</span>
            <span className="text-[13px] leading-3.25">10</span>
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

        <div className="card-details absolute top-full left-0 w-full">
          <CardDetail hasProgress={movie.progress} />
        </div>
      </div>
    </div>
  )
}