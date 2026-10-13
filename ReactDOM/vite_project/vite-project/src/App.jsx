import './App.css'
import Details from './components/Details'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange' 
import MeAndCollege from './components/MeAndCollege'
import ImageManipulation from './components/ImageManipulation'
import BackgroundColorChange from './components/BackgroundColorChange'
import MyUseEffect from './components/MyUseEffect'
import FetchData from './components/FetchData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login  from './components/LDR/Login'
import Dashboard from "./components/LDR/Dashboard"
import Registration from "./components/LDR/Registration"
import Home from './components/LDR/Home'

function App() {
  return (
    <>
      {/* <ICardGallery /> */}
      {/* <MyState /> */}
      {/* <ColorChange /> */}
      {/* <MeAndCollege /> */}
      {/* <ImageManipulation /> */}
      {/* <BackgroundColorChange /> */}
      {/* <MyUseEffect /> */}
      {/* <FetchData /> */}


      {/* LDR */}
      
      <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
                <Route path='/registration' element={<Registration />}> </Route>
                <Route path='/dashboard' element={<Dashboard />}> </Route>
                </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
