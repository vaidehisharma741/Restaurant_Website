import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import PageNotFound from './Pages/PageNotFound'


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Services' element={<Services/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='Menu' element={<Menu/>}/>
            <Route path='*' element={<PageNotFound/>}/>
         </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
