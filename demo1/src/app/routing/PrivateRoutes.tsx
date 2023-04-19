import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import ParametresAccessPage from '../modules/ParametresAccess/ParametresAccessPage'
import DeviseComptpage from '../modules/Devise&Comptabilite/DeviseComptpage'
import ArticlePage from '../modules/Article/ArticlePage'
import DocumentPage from '../modules/Document/DocumentPage'
import TiersPage from '../modules/Tiers/TiersPage'
import DepotPage from '../modules/Depot/DepotPage'
import FamilleArticlePage from '../modules/FamilleArticle/FamilleArticlePage'
import StructureTiersPage from '../modules/StructureTiers/StructureTiersPage'
import CaissePage from '../modules/Caisse/CaissePage'
import CollaborateurPage from '../modules/Collaborateur/CollaborateurPage'
import ComptabilitePage from '../modules/Comptabilite/ComptabilitePage'
import ProjetPage from '../modules/Projet/ProjetPage'
import ClientPage from '../modules/Client/ClientPage'
import VehiculePage from '../modules/GGVehicule/VehiculePage'
import AtelierPage from '../modules/GGAtelier/AtelierPage'
import SymptomePage from '../modules/GGSymptomes/SymptomePage'
import RemedePage from '../modules/GGRemedes/RemedePage'
import GammePage from '../modules/GGamme/GammePage'
import InterventionPage from '../modules/GGIntervention/InterventionPage'
import RendezVPage from '../modules/GGRendezVous/RendezVPage'
import ReceptionPage from '../modules/GReception/ReceptionPage'
import OrdreReparationPage from '../modules/GOrdreReparation/OredreReparationPage'
import ReglementPage from '../modules/Reglement/ReglementPage'
import GCaissePage from '../modules/GestionCaisse/GCaissePage'
import RetenuePage from '../modules/GCRetenue/RetenuePage'
import VentePage from '../modules/GVVente/VentePage'
import EcheancePage from '../modules/GVEcheance/EcheancePage'
import VComptabilitePage from '../modules/GVComptabilite/VComptabilitePage'
const PrivateRoutes = () => {
  const IdentificationSocietePage = lazy(() => import('../modules/IdentificationSociete/IdentificationSocietepage'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='admin/IdentificationSociete/*'
          element={
            <SuspensedView>
              <IdentificationSocietePage />
            </SuspensedView>
          }
        />
        <Route
          path='admin/ParametresAccess/*'
          element={
            <SuspensedView>
              <ParametresAccessPage />
            </SuspensedView>
          }
        />
        <Route
          path='admin/Devisecompt/*'
          element={
            <SuspensedView>
              <DeviseComptpage />
            </SuspensedView>
          }
        />
        <Route
          path='/admin/Article/*'
          element={
            <SuspensedView>
              <ArticlePage />
            </SuspensedView>
          }
        />
        <Route
          path='/admin/Document/*'
          element={
            <SuspensedView>
              <DocumentPage />
            </SuspensedView>
          }
        />
        <Route
          path='/admin/Tiers/*'
          element={
            <SuspensedView>
              <TiersPage />
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Depot/*'
          element={
            <SuspensedView>
              <DepotPage />
            </SuspensedView>
          }
        />
        <Route
          path='/Structure/FamillesArticles/*'
          element={
            <SuspensedView>
              <FamilleArticlePage />
            </SuspensedView>
          }
        />
        <Route
          path='/Structure/Tiers/*'
          element={
            <SuspensedView>
              <StructureTiersPage />
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Caisse/*'
          element={
            <SuspensedView>
              <CaissePage />
            </SuspensedView>
          }
        />
            <Route
          path='/Structure/Employes/*'
          element={
            <SuspensedView>
            <CollaborateurPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Comptabilite/*'
          element={
            <SuspensedView>
              <ComptabilitePage/>
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Projet/*'
          element={
            <SuspensedView>
              <ProjetPage/>
            </SuspensedView>
          }
        />
           <Route
          path='/GestionVente/Clients/*'
          element={
            <SuspensedView>
              <ClientPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionVente/Vente/*'
          element={
            <SuspensedView>
              <ProjetPage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionGarage/vehicule/*'
          element={
            <SuspensedView>
              <VehiculePage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionGarage/Atelier/*'
          element={
            <SuspensedView>
              <AtelierPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionGarage/Symptomes/*'
          element={
            <SuspensedView>
              <SymptomePage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionGarage/Remedes/*'
          element={
            <SuspensedView>
              <RemedePage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionGarage/GammeOperatoire/*'
          element={
            <SuspensedView>
              <GammePage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionGarage/Intervention/*'
          element={
            <SuspensedView>
              <InterventionPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionGarage/RendezVous/*'
          element={
            <SuspensedView>
              <RendezVPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionGarage/Reception/*'
          element={
            <SuspensedView>
              <ReceptionPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionGarage/OrdreReparation/*'
          element={
            <SuspensedView>
              <OrdreReparationPage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionCaisse/GestionReglements/*'
          element={
            <SuspensedView>
              <ReglementPage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionCaisse/GestionCaisse/*'
          element={
            <SuspensedView>
              <GCaissePage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionCaisse/GestionRetenue/*'
          element={
            <SuspensedView>
              <RetenuePage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionV/Vente/*'
          element={
            <SuspensedView>
              <VentePage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionV/Echeance/*'
          element={
            <SuspensedView>
              <EcheancePage/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionV/Comptabilite/*'
          element={
            <SuspensedView>
              <VComptabilitePage/>
            </SuspensedView>
          }
        />
        
        
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
