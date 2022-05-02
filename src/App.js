import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateHealth from "./components/create-health.component"
import EditHealth from "./components/edit-health.component"
import HealthList from "./components/health-list.component"
import Navbar from "./components/navbar.component"
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route>
          <Route path='/' component={HealthList} />
          <Route path='/edit/:id' component={EditHealth} />
          <Route path='/create' component={CreateHealth} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
