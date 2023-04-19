import { Outlet, Route, Routes } from "react-router-dom";
import { GrandLivreClient } from "./component/GrandLivreClient";
import { ChiffreAffaires } from "./component/ChiffreAffaires";
import { SoldeClient } from "./component/SoldeClient";


const EcheancePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="GrandLivreC"
                element={
                    <>
                        <GrandLivreClient/>
                    </>
                }
            />
            <Route
                path="chiffreaffaires"
                element={
                    <>
                      <ChiffreAffaires/>  
                    </>
                }
            />
            <Route
                path="Soldeclient"
                element={
                    <>
                      <SoldeClient/>  
                    </>
                }
            />
            
        </Route>
    </Routes>
)
export default EcheancePage;