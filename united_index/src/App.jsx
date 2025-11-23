import './App.css'
import './index.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PDFPreview from "./pages/PDFPreview";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/preview" element={<PDFPreview />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </>
    </Router>
  )
}

export default App;
