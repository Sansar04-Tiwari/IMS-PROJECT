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
import SignIn from './components/Forms/SignIn'
import SignUp from './components/Forms/SignUp'
import ForgotPassword from './components/Forms/ForgotPassword'
import Layout from './Layout'
import AddPurchases from './components/Purchases/AddPurchases'
import ListPurchases from './components/Purchases/ListPurchases'
import AddSupplier from './components/People/AddSupplier'
import Supplier from './components/People/Supplier'

function App() {

  return (

    <div className="wrapper">
      <BrowserRouter>
        <Routes >

          <Route path='/' element={<Layout />}>
            <Route path='' element={<Dashboard />} />
            <Route path='listProduct' element={<ListProduct />} />
            <Route path='addProduct' element={<ListCategory />} />
            <Route path='listcategory' element={<AddProduct />} />
            <Route path='addcategory' element={<AddCategory />} />
            <Route path='addcategory' element={<AddPurchases />} />
            <Route path='addcategory' element={<ListPurchases />} />
            <Route path='addsupplier' element={<AddSupplier />} />
            <Route path='supplier' element={<Supplier/>} />




          </Route>
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
