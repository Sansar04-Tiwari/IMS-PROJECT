import './App.css'
import Header from './components/Header/Header'
import AddProduct from './components/Product/AddProduct'
import ListProduct from './components/Product/ListProduct'
import Sidebar from './components/siderbar/Sidebar'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
    </div>
  )
}

export default App
