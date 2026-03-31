import { getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../../utils/catalog'

interface CardDetailProps {
  hasProgress?: number
}

export function CardDetail({ hasProgress }: CardDetailProps) {
  const ageBadge = getRandomAgeBadge()
  const score = getRandomMatchScore()
  const duration = getRandomDuration(hasProgress)

  return (
    <div className="absolute top-full left-0 w-full bg-[#181818] rounded-b-[6px] px-4 py-[18px] opacity-0 invisible transition-all duration-200 shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex flex-col gap-3 z-[2] group-hover:opacity-100 group-hover:visible group-hover:delay-[600ms]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-white text-black border-none flex justify-center items-center cursor-pointer hover:bg-[#e6e6e6] transition-colors">
            <i className="fas fa-play ml-0.5 text-sm" />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#2b2b2b] border border-white/50 text-white flex justify-center items-center cursor-pointer hover:border-white hover:bg-white/20 transition-all text-sm">
            <i className={`fas ${hasProgress ? 'fa-check' : 'fa-plus'}`} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#2b2b2b] border border-white/50 text-white flex justify-center items-center cursor-pointer hover:border-white hover:bg-white/20 transition-all text-sm">
            <i className="fas fa-thumbs-up" />
          </button>
        </div>
        <button className="w-8 h-8 rounded-full bg-[#2b2b2b] border border-white/50 text-white flex justify-center items-center cursor-pointer hover:border-white hover:bg-white/20 transition-all text-sm">
          <i className="fas fa-chevron-down" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] font-bold">
        <span className="text-[#46d369]">{score}% relevante</span>
        <span className={`px-1 py-0.5 rounded-sm text-[11px] ${ageBadge.className}`}>
          {ageBadge.text}
        </span>
        <span className="text-white/90">{duration}</span>
        <span className="border border-white/40 px-1 py-0.5 rounded-sm text-white/90">HD</span>
      </div>

      <div className="flex gap-1.5 text-[11px] text-white/90">
        {['Empolgante', 'Animação', 'Ficção'].map((tag, i, arr) => (
          <span key={tag}>
            {tag}{i < arr.length - 1 && <span className="text-[#666] ml-1.5">•</span>}
          </span>
        ))}
      </div>
    </div>
  )
}