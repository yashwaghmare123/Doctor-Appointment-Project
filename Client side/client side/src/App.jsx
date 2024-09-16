import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Care from './Care'
import Doctor from './Doctor'
import About from './About'
import Blog from './Blog'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="Care" element={<Care />}></Route>
      <Route path="Doctor" element={<Doctor />}></Route>
      <Route path="About" element={<About />}></Route>
      <Route path="Blog" element={<Blog />}></Route>
      <Route path="Book" element={<Book />}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
