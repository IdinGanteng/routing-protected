import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Pagelayout } from './Pages/PageLayout';
import { Login } from './Auth/Login';
import { Registration } from './Auth/Registration';
import { PublicRoute } from './Routes/PublicRoute';
import { ProtectedRoute } from './Routes/ProtectedRoute';
import { AuthLayout } from './Auth/AuthLayout';
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';

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
          <Route path='/' element={<Pagelayout />}>
            <Route index path='/dashboard' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
          <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;