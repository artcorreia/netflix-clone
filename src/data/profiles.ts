import { type Profile } from '../types/profile'

import perfil1 from '../assets/perfil1.png'
import perfil2 from '../assets/perfil2.png'
import perfil4 from '../assets/perfil4.png'

export const profiles: Profile[] = [
  { id: '1', name: 'Arthur',  avatar: perfil1, alt: 'Perfil de Arthur'  },
  { id: '2', name: 'Gabriel', avatar: perfil2, alt: 'Perfil de Gabriel' },
  { id: '3', name: 'José',    avatar: perfil4, alt: 'Perfil de José'    },
]