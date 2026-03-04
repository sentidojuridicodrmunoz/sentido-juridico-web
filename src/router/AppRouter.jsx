import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import AreaPage from "../pages/AreaPage"

function AppRouter({ onOpenForm }) {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenForm={onOpenForm} />} />
      <Route path="/areas/:slug" element={<AreaPage onOpenForm={onOpenForm} />} />
    </Routes>
  )
}

export default AppRouter