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
    <main className="bg-[#141414] text-white min-h-screen flex items-center justify-center font-['Geist',sans-serif]">
      <div className="text-center w-full max-w-300 px-5">
        <h1 className="text-[3.5vw] font-light mb-8 tracking-wide">
          Quem está assistindo?
        </h1>

        <ProfileList profiles={profiles} onSelect={handleSelectProfile} />

        <section className="mt-5">
          <button
            type="button"
            className="bg-transparent border border-gray-500 text-gray-500 px-8 py-2.5 text-[1vw] uppercase tracking-widest cursor-pointer font-light transition-all duration-300 hover:border-[#e5e5e5] hover:text-[#e5e5e5]"
          >
            Gerenciar perfis
          </button>
        </section>
      </div>
    </main>
  )
}