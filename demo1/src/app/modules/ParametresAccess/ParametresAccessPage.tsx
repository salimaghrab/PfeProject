import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import { Fonction } from './components/Fontcion'
import { Groupe } from './components/Groupe'
import { Profile } from './components/Profile'
import { Utilisateurs } from './components/Utilisateurs'

const ParametresAccessPage = () => (
  <Routes>
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
          <Route
        path='Groupe'
        element={
          <>
            <Groupe />
          </>
        }
      />
        <Route
        path='Profile'
        element={
          <>
            <Profile />
          </>
        }
        
      />
       
      <Route
        path='Utilisateurs'
        element={
          <>
            <Utilisateurs/>
          </>
        }
        
      />
      <Route
        path='Fonction'
        element={
          <>
            <Fonction/>
          </>
        }
        
      />
      <Route index element={<Navigate to='/structure/ParametresAccess/Groupe' />} />
    </Route>
  </Routes>
)

export default ParametresAccessPage
