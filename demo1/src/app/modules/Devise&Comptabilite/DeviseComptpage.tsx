import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { CategorieComptable } from "./Component/CategorieComptable"
import { ConfigComptabilite } from "./Component/ConfigComptabilite"
import {  Devises } from "./Component/Devises"
import { Devisesociete } from "./Component/DeviseSociete"
import { GestionExo } from "./Component/GestionExo"
import { SuiviEcart } from "./Component/SuiviEcart"
    const DeviseComptpage = () => (
        <Routes>
          <Route
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route
              path='Devises'
              element={
                <>
                  <Devises/>
                </>
              }
              
            />
             <Route
              path='DeviseSociete'
              element={
                <>
                  <Devisesociete/>
                </>
              }
              
            /> 
              <Route
              path='SuiviEcart'
              element={
                <>
                  <SuiviEcart/>
                </>
              }
            />
               <Route
              path='CategorieComptable'
              element={
                <>
                  <CategorieComptable/>
                </>
              }
            />
             <Route
              path='GestionExo'
              element={
                <>
                  <GestionExo/>
                </>
              }
            />
              <Route
              path='ConfigComptabilite'
              element={
                <>
                  <ConfigComptabilite/>
                </>
              }
            />
              

            <Route index element={<Navigate to='/Structure/Devisecompt/Devises' />} />
          </Route>
        </Routes>
      )
      
      export default DeviseComptpage
