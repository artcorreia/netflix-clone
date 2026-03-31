interface MovieBadgeProps {
  text: string
  color: 'red' | 'white' | 'green'
  hasProgress?: boolean
}

export function MovieBadge({ text, color, hasProgress }: MovieBadgeProps) {
  const colorClass = {
    red: 'bg-[#E50914] text-white',
    white: 'bg-white text-black',
    green: 'bg-green-600 text-white',
  }[color]

  return (
    <span
      className={`absolute left-1/2 -translate-x-1/2 px-1 py-0.5 text-[10px] font-bold rounded-sm z-[4] whitespace-nowrap uppercase ${colorClass} ${
        hasProgress ? 'bottom-3' : 'bottom-2'
      }`}
    >
      {text}
    </span>
  )
}