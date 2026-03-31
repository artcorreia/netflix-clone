import { useNavigate } from 'react-router-dom'
import { ProfileList } from '../components/profile/ProfileList'
import { useProfile } from '../hooks/useProfile'
import { profiles } from '../data/profiles'
import { type Profile } from '../types/profile'

export function ProfilePage() {
  const navigate = useNavigate()
  const { selectProfile } = useProfile()

  function handleSelectProfile(profile: Profile) {
    selectProfile({ name: profile.name, avatar: profile.avatar })
    navigate('/catalog')
  }

  return (
    <main className="bg-[#141414] text-white min-h-screen flex items-center justify-center font-['Geist',sans-serif] px-4">
      <div className="text-center w-full max-w-300 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5vw] font-light mb-6 sm:mb-8 tracking-wide">
          Quem está assistindo?
        </h1>

        <ProfileList profiles={profiles} onSelect={handleSelectProfile} />

        <section className="mt-4 sm:mt-5">
          <button
            type="button"
            className="bg-transparent border border-gray-500 text-gray-500 px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg lg:text-[1vw] uppercase tracking-widest cursor-pointer font-light transition-all duration-300 hover:border-[#e5e5e5] hover:text-[#e5e5e5]"
          >
            Gerenciar perfis
          </button>
        </section>
      </div>
    </main>
  )
}