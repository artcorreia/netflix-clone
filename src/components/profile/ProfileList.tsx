import { type Profile } from '../../types/profile'
import { ProfileCard } from './profileCard'

interface ProfileListProps {
  profiles: Profile[]
  onSelect: (profile: Profile) => void
}

export function ProfileList({ profiles, onSelect }: ProfileListProps) {
  return (
    <ul className="flex justify-center flex-wrap gap-[2vw] mb-12 list-none p-0">
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