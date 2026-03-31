import { createContext, useContext, useState, type ReactNode } from 'react'
import { type ActiveProfile } from '../types/profile'

interface ProfileContextType {
  activeProfile: ActiveProfile | null
  setActiveProfile: (profile: ActiveProfile) => void
}

const ProfileContext = createContext<ProfileContextType | null>(null)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [activeProfile, setActiveProfile] = useState<ActiveProfile | null>(null)

  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfileContext() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfileContext must be used within ProfileProvider')
  return ctx
}