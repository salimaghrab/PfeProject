import { Outlet, Route, Routes } from "react-router-dom";
import { GestionSymptome } from "./component/GestionSymptome";

const SymptomePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionSymptomes"
                element={
                    <>
                 <GestionSymptome/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default SymptomePage;