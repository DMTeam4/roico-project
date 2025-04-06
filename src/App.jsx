import Navbar from "./Components/Navbar/Navbar.jsx"
import Settings from "./Pages/Settings/Settings.jsx"
import Controls from "./Pages/Controls/Controls.jsx"
import AdminPanel from "./Pages/AdminPanel/AdminPanel.jsx"
import Diagnostics from "./Pages/Diagnostics/Diagnostics.jsx"
import {Route, Routes, Navigate} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/controls" />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
