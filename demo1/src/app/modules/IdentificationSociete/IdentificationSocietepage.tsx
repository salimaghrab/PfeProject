import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { ConfigMultiSociete } from './components/ConfigMultiSociete'
import {Identification} from './components/Identification'

const IdentificationBreadCrumbs: Array<PageLink> = [
  {
    title: 'Identification societe',
    path: '/structure/IdentificationSociete/Identification',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const IdentificationSocietepage = () => (
  <Routes>
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route
        path='Identification'
        element={
          <>
            <Identification />
          </>
        }
      />
      <Route
        path='ConfigMultiSociete'
        element={
          <>
            <ConfigMultiSociete />
          </>
        }
      />

     
     
      <Route index element={<Navigate to='/structure/IdentificationSociete/Identification' />} />
    </Route>
  </Routes>
)

export default IdentificationSocietepage
