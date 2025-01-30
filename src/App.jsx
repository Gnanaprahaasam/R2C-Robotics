
import { HashRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Robotics from './pages/Robotics/Robotics'

function App() {


  return (
    <>
      <HashRouter>
        <Header />
        <Robotics />
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
