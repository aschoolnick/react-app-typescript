import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Page1 } from './Pages/Page1'
import { Page2 } from './Pages/Page2'
import { Sandbox } from './Pages/Sandbox'

export default function App() {

  return (
    <BrowserRouter basename='/react-app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page-1" element={<Page1/>}/>
        <Route path="/page-2" element={<Page2/>}/>
        <Route path="/sandbox" element={<Sandbox/>}/>
      </Routes>
    </BrowserRouter>
  )
}