import { Outlet, Route, Routes } from "react-router-dom";
import { Intervention } from "./component/Intervention";

const InterventionPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="ProchaineIntervention"
                element={
                    <>
                 <Intervention/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default InterventionPage;