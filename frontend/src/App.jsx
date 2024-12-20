import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'
import { CreatePage } from './pages/CreatePage.jsx'
import { Navbar } from './Components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
