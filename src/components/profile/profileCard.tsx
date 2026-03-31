import { type Profile } from '../../types/profile'

interface ProfileCardProps {
  profile: Profile
  onClick: () => void
}

export function ProfileCard({ profile, onClick }: ProfileCardProps) {
  return (
    <li className="w-[10vw] min-w-30 max-w-50">
      <button
        onClick={onClick}
        className="flex flex-col items-center gap-2 w-full bg-transparent border-none cursor-pointer profile-btn"
      >
        <style>{`
          .profile-img-wrapper {
            transition: transform 0.3s ease-out, outline 0.3s ease-out;
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
          
          .profile-btn:hover .profile-img-wrapper {
            transform: scale(1.08);
            outline-color: white;
          }
          
          .profile-name {
            transition: color 0.3s ease-out;
          }
          
          .profile-btn:hover .profile-name {
            color: white;
          }
        `}</style>

        <div className="profile-img-wrapper w-full aspect-square overflow-hidden rounded-sm">
          <img
            src={profile.avatar}
            alt={profile.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="profile-name text-[1.2vw] text-[#808080] font-normal">
          {profile.name}
        </span>
      </button>
    </li>
  )
}