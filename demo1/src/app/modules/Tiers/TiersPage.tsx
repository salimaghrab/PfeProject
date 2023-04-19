import { Outlet, Route, Routes } from "react-router-dom";
import { ActivationSolvabilite } from "./component/ActivationSolvabilite";
import { AffectationCompteG } from "./component/AffectationCompteG";
import { CalculeEcheance } from "./component/CalculeEcheance";
import { CalculeSoldeClient } from "./component/CalculeSoldeClient";
import { CategorieTarifaire } from "./component/CategorieTarifaire";
import { ConditionLivraison } from "./component/ConditionLivraison";
import { GestionFonction } from "./component/GestionFonction";
import { GestionSoucheClient } from "./component/GestionSoucheTiers";
import { ModeExpedition } from "./component/ModeExpedition";
import { QualificationEmployee } from "./component/QualificationEmployee";
import { QualificationTiers } from "./component/QualificationTiers";
import { TypeColisage } from "./component/TypeColisage";
import { ParametrageCreationTier } from "./component/ParametrageCreationTier";

const TiersPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }


        >
            <Route
                path="ConditionLivraison"
                element={
                    <>
                        <ConditionLivraison />
                    </>
                }
            />
            <Route
                path="CategorieTarifaire"
                element={
                    <>
                        <CategorieTarifaire />
                    </>
                }
            />
            <Route
                path="QualificationTiers"
                element={
                    <>
                        <QualificationTiers />
                    </>
                }
            />
              <Route
                path="GestionSoucheClient"
                element={
                    <>
                        <GestionSoucheClient />
                    </>
                }
            />
             <Route
                path="QualificationEmployee"
                element={
                    <>
                        <QualificationEmployee />
                    </>
                }
            />
            <Route
                path="ModeExpedition"
                element={
                    <>
                        <ModeExpedition />
                    </>
                }
            />
            <Route
                path="TypeColisage"
                element={
                    <>
                        <TypeColisage />
                    </>
                }
            />
              <Route
                path="GestionFonction"
                element={
                    <>
                        <GestionFonction />
                    </>
                }
            />
               <Route
                path="AffectationCompteG"
                element={
                    <>
                        <AffectationCompteG />
                    </>
                }
            />
               <Route
                path="ActivationSolvabilite"
                element={
                    <>
                        <ActivationSolvabilite />
                    </>
                }
            />
             <Route
                path="CalculeEcheance"
                element={
                    <>
                        <CalculeEcheance />
                    </>
                }
            />
             <Route
                path="CalculeSoldeClient"
                element={
                    <>
                        <CalculeSoldeClient />
                    </>
                }
            />
              <Route
                path="ParametrageCreationTier"
                element={
                    <>
                        <ParametrageCreationTier />
                    </>
                }
            />            
        </Route>
    </Routes>
)
export default TiersPage;