import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Dashboard } from './Pages/Dashboard';
import { Login } from './Auth/Login';
import { Registration } from './Auth/Registration';
import { PublicRoute } from './Routes/PublicRoute';
import { ProtectedRoute } from './Routes/ProtectedRoute';
import { AuthLayout } from './Auth/AuthLayout';
import Home from './Pages/Home';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<PublicRoute />} >
          <Route path='/' element={<AuthLayout />} >
            <Route index path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/' element={<Navigate to={'/login'} replace />} />
          </Route>
        </Route>
        <Route path='/' element={<ProtectedRoute />} >
          <Route index path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} replace />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;