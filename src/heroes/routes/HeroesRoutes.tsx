import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, MarvelPage, SearchPage, HeroPage } from "../index"

type Props = {}

export function HeroesRoutes({ }: Props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero" element={<HeroPage />} />

        <Route path="/*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}