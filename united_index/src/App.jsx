import './App.css'
import './index.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Navbar / Menu Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="mt-4">
        <Form />
      </div>

<Footer/>
      
    </>
  )
}

export default App
