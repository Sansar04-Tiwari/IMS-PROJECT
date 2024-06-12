import './App.css'

import Sidebar from './components/siderbar/Sidebar'
import Header from './components/Header/Header'
import  Footer from './components/Footer/Footer'
import  AddProduct from './components/Product/AddProduct'
import  ListProduct from './components/Product/ListProduct'
import Dashboard from './components/Dashboard/Dashboard'


import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {

  return (

<div className="wrapper">

<Sidebar/>
<Header/>
<BrowserRouter>
<Routes>
  
<Route path='/' element={<Dashboard/>}/>
<Route path='/addproduct' element={<AddProduct/>}/>
<Route path='/listproduct' element={<ListProduct/>}/>

        
</Routes> 
</BrowserRouter>
<Footer/>


   
    
    </div>
  )
}

export default App
