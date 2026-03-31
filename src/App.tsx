import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProfileProvider } from './context/ProfileContext'
import { ProfilePage } from './pages/ProfilePage'
import { CatalogPage } from './pages/CatalogPage'

export default function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  )
}