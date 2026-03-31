import { type Profile } from '../../types/profile'
import { ProfileCard } from './profileCard'

interface ProfileListProps {
  profiles: Profile[]
  onSelect: (profile: Profile) => void
}

export function ProfileList({ profiles, onSelect }: ProfileListProps) {
  return (
    <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-[2vw] mb-8 sm:mb-10 md:mb-12 list-none p-0">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onClick={() => onSelect(profile)}
        />
      ))}
    </ul>
  )
}