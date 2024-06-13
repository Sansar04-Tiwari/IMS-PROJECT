import './App.css'

import Sidebar from './components/siderbar/Sidebar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AddProduct from './components/Product/AddProduct'
import ListProduct from './components/Product/ListProduct'
import Dashboard from './components/Dashboard/Dashboard'
import ListCategory from './components/Categories/ListCategory'
import AddCategory from './components/Categories/AddCategory'


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (

    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes >
          <Route path='/' element={<Dashboard />} />
          <Route path='listProduct' element={<ListProduct/>}/>
          <Route path='addProduct' element={<AddProduct/>}/>
          <Route path='listcategory' element={<ListCategory/>}/>
          <Route path='addcategory' element={<AddCategory/>}/>


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
