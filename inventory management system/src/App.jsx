import './App.css'

import Sidebar from './components/siderbar/Sidebar'
import Header from './components/Header/Header'
import  Footer from './components/Footer/Footer'
import  AddProduct from './components/Product/AddProduct'




function App() {

  return (

    <div className="wrapper">
      <Header />
      <Sidebar />
      <AddProduct/>
      <Footer/>

    </div>
  )
}

export default App
