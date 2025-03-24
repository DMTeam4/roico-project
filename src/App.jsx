import Navbar from "./Components/Navbar/Navbar.jsx"
import Settings from "./Pages/Settings.jsx"
import Controls from "./Pages/Controls/Controls.jsx"
import AdminPanel from "./Pages/AdminPanel.jsx"
import Diagnostics from "./Pages/Diagnostics.jsx"
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/controls" element={<Controls />}></Route>
        <Route path="/diagnostics" element={<Diagnostics />}></Route>
        <Route path="/adminPanel" element={<AdminPanel />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </>
  )
}

export default App
