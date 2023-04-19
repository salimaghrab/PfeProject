import { Outlet, Route, Routes } from "react-router-dom";
import { GestionVehicule } from "./component/GestionVehicule";
;

const VehiculePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionVehicule"
                element={
                    <>
                 <GestionVehicule/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default VehiculePage;