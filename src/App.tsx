import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Loader, Footer, About } from './Components'
import { Home } from "./pages"


function App() {
  return (
    <BrowserRouter data-scroll >
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App