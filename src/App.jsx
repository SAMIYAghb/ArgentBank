import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import User from './pages/User/User'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <User /> {/* Page protégée */}
                </ProtectedRoute>
              }
            />
            {/* <Route 
          path="/edit-name" 
          element={
            <ProtectedRoute>
              <EditName /> 
            </ProtectedRoute>
          } 
          /> */}
            {/* <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} /> */}
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
