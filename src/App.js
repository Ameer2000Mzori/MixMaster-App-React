import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import NotFound from './component/NotFound.jsx'
import NewsLetter from './component/NewsLetter.jsx'
import Navbar from './component/Navbar.jsx'
function App() {
  return (
    <>
      <Router>
        <div className="bg-zinc-200">
          <Navbar />
          <Routes>
            <Route path={'*'} element={<NotFound />}></Route>
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/about'} element={<About />}></Route>
            <Route path={'/newsletter'} element={<NewsLetter />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin
export default App
