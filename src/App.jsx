import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Routes>     
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
          path="/account" 
          element={
            <ProtectedRoute>
              <Account /> {/* Page protégée */}
            </ProtectedRoute>
          } 
        />

          {/* <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
