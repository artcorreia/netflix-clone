import { Link } from 'react-router-dom'
import { useNavbar } from '../../hooks/useNavbar'
import { useProfile } from '../../hooks/useProfile'

const NAV_LINKS = [
  'Início', 'Séries', 'Filmes', 'Jogos',
  'Bombando', 'Minha lista', 'Melhores da Alura',
]

export function Navbar() {
  const { isScrolled } = useNavbar()
  const { activeProfile } = useProfile()

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-[4%] h-16 sm:h-20 md:h-[70px] z-[1000] transition-colors duration-300 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        <img
          className="w-16 sm:w-20 md:w-[92px] mr-2 sm:mr-3 md:mr-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
        <nav className="hidden sm:block">
          <ul className="flex gap-3 md:gap-5 text-xs sm:text-sm md:text-[13px] list-none">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#e5e5e5] hover:text-[#b3b3b3] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        <button className="bg-transparent border-none cursor-pointer text-white">
          <i className="fas fa-search text-base sm:text-lg md:text-[20px]" />
        </button>

        <span className="text-xs sm:text-sm md:text-[14px] text-[#e5e5e5]">
          {activeProfile?.name ?? 'Perfil'}
        </span>

        <div className="relative cursor-pointer">
          <i className="fas fa-bell text-base sm:text-lg md:text-[20px] text-white" />
          <span className="absolute -top-1 -right-2 bg-[#E50914] text-white text-[9px] sm:text-[10px] font-bold rounded-full w-4 h-4 flex justify-center items-center">
            42
          </span>
        </div>

        <Link to="/" className="flex items-center gap-1 no-underline text-[#e5e5e5]">
          <img
            className="w-6 sm:w-7 md:w-8 rounded-sm"
            src={activeProfile?.avatar ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'}
            alt="Perfil ativo"
          />
          <i className="fas fa-caret-down text-xs sm:text-sm md:text-[14px]" />
        </Link>
      </div>
    </header>
    )
}