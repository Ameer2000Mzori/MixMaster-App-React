import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './component/Home.jsx'
import About from './component/About.jsx'

import NotFound from './component/NotFound.jsx'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'*'} element={<NotFound />}></Route>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/About'} element={<About />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
