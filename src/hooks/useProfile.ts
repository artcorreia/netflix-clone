import { useProfileContext } from '../context/ProfileContext'
import { type ActiveProfile } from '../types/profile'

export function useProfile() {
  const { activeProfile, setActiveProfile } = useProfileContext()

  function selectProfile(profile: ActiveProfile) {
    setActiveProfile(profile)
  }

  return { activeProfile, selectProfile }
}