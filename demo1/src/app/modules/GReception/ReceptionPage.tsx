import { Outlet, Route, Routes } from "react-router-dom";
import { ReceptionVehicule } from "./component/ReceptionVehicule";
import { VehiculeReceptionne } from "./component/VehiculeReceptionne";



const ReceptionVPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="ReceptionVehicule"
                element={
                    <>
               <ReceptionVehicule/>
                    </>
                }
            />
             <Route
                path="vehiculereceptionner"
                element={
                    <>
                <VehiculeReceptionne/>
                    </>
                }
            /> 
            
        </Route>
    </Routes>
)
export default ReceptionVPage;