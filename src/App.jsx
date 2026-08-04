import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Work from './pages/Work'
import Navbar from './components/Navbar'
import { Route, Routes, Link} from "react-router-dom"




export default function App() {
  return (
    <div id="outer-container">
      <Navbar />
      <div id="page-wrap">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  )

}