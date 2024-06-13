import './App.css'

import Sidebar from './components/siderbar/Sidebar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AddProduct from './components/Product/AddProduct'
import ListProduct from './components/Product/ListProduct'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/Forms/SignIn'
import SignUp from './components/Forms/SignUp'
import ForgotPassword from './components/Forms/ForgotPassword'
import Layout from './Layout'

function App() {

  return (

    <div className="wrapper">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Dashboard />} />
            <Route path='listProduct' element={<ListProduct />} />
            <Route path='addProduct' element={<AddProduct />} />
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
