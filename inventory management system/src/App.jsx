import './App.css'

import Sidebar from './components/siderbar/Sidebar'
import Header from './components/Header/Header'
import  Footer from './components/Footer/Footer'
import  ListProduct from './components/Product/ListProduct'
import Dashboard from './components/Dashboard/Dashboard'





function App() {

  return (

    <div className="wrapper">
      
     
      
      <Sidebar/>
      <Header/>
      <Dashboard/>
      <Footer/> 

    
    </div>
  )
}

export default App
