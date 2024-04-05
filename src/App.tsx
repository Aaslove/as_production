import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Loader } from './Components'
import { Home, About } from "./pages"

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App