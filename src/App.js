import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateHealth from "./components/create-health.component"
import EditHealth from "./components/edit-health.component"
import Footer from "./components/footer.component"
import HealthList from "./components/health-list.component"
import Navbar from "./components/navbar.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<HealthList />} />
        <Route path='/edit/:id' element={<EditHealth />} />
        <Route path='/create' element={<CreateHealth />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
