import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Offer from './pages/Offer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Offer />} />
    </Routes>
  </Router>,
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
)
