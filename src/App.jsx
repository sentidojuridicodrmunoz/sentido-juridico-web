import { useState } from "react"
import Navbar from "./components/Navbar"
import AppointmentForm from "./components/AppointmentForm"
import AppRouter from "./router/AppRouter"
import ScrollToTop from "./components/ScrollToTop"
function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
  <Navbar />
  <ScrollToTop />
  <AppRouter onOpenForm={() => setShowForm(true)} />
  {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
</>
  )
}

export default App