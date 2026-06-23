
import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'

function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
