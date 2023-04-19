import { Outlet, Route, Routes } from "react-router-dom";
import { GestionRemede } from "./component/GestionRemede";

const RemedePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionRemedes"
                element={
                    <>
                 <GestionRemede/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default RemedePage;