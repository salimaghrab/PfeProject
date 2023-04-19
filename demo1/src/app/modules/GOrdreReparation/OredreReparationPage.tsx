import { Outlet, Route, Routes } from "react-router-dom";
import { OrdreReparation } from "./component/OrdreReparation";

const OrdreReparationPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="OR"
                element={
                    <>
              <OrdreReparation/>
                    </>
                }
            />    
        </Route>
    </Routes>
)
export default OrdreReparationPage;