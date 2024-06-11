import './App.css'

import Sidebar from './components/siderbar/Sidebar'
import Header from './components/Header/Header'
import SaleList from './components/Sale/SaleList'


function App() {

  return (
   <div className="wrapper">
    {/* <Header/>
   <Sidebar/> */}
   <SaleList/>
  
   </div>
  )
}

export default App
