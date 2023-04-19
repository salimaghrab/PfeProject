import { Outlet, Route, Routes } from "react-router-dom";
import { GammeOper } from "./component/GammeOper";


const GammePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionGammeO"
                element={
                    <>
                 <GammeOper/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default GammePage;