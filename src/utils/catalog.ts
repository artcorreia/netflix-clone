interface AgeBadge {
  text: string
  className: string
}

export function getRandomMatchScore(): number {
  return Math.floor(Math.random() * 20 + 80)
}

export function getRandomDuration(hasProgress?: number): string {
  return hasProgress ? '10 temporadas' : `2h ${Math.floor(Math.random() * 59)}m`
}

export function getRandomAgeBadge(): AgeBadge {
  return Math.random() > 0.5
    ? { text: 'A16', className: 'bg-red-700 text-white font-bold border-none' }
    : { text: '16', className: 'border border-white/40 text-white' }
}