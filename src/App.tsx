import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BlogArticlePage from './pages/BlogArticlePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog/:slug" element={<BlogArticlePage />} />
    </Routes>
  )
}
