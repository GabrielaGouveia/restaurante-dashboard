
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Menu } from '../pages/Menu'
import { Customers } from '../pages/Customers'
import { Profits } from '../pages/Profits'
import { Orders } from '../pages/Orders'
import { Navbar } from '../components/Navbar'
import { PageContent } from '../assets/css/style'

export const RoutesApp = () => {
  return (
    <Router>
       <Navbar />
       <PageContent>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/Profits" element={<Profits/>} />
        </Routes>
      </PageContent>
    </Router>
  )
}