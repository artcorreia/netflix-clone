interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1 bg-[rgba(100,100,100,0.7)] z-[5] rounded-b-[4px]">
      <div
        className="h-full bg-[#E50914] rounded-bl-[4px]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}