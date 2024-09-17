import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/index'
import { HeroesRoutes } from '../heroes'
type Props = {}

export default function AppRouter({ }: Props) {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}