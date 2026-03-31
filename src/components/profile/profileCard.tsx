import { type Profile } from '../../types/profile'

interface ProfileCardProps {
  profile: Profile
  onClick: () => void
}

export function ProfileCard({ profile, onClick }: ProfileCardProps) {
  return (
    <li className="group w-[10vw] min-w-[120px] max-w-[200px]">
      <button
        onClick={onClick}
        className="flex flex-col items-center gap-2 w-full bg-transparent border-none cursor-pointer"
      >
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={profile.avatar}
            alt={profile.alt}
            className="w-full h-full object-cover outline outline-2 outline-transparent group-hover:outline-white transition-all duration-300"
          />
        </div>
        <span className="text-[1.2vw] text-[#808080] group-hover:text-white transition-colors duration-300 font-normal">
          {profile.name}
        </span>
      </button>
    </li>
  )
}