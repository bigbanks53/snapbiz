import { MotionConfig } from 'framer-motion'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'
import HomePage from './pages/HomePage'
import IdeaPage from './pages/IdeaPage'

function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="idea" element={<IdeaPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}
