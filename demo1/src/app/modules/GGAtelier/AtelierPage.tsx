import { Outlet, Route, Routes } from "react-router-dom";
import { GestionAtelier } from "./component/GestionAtelier";

;

const AtelierPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionAtelier"
                element={
                    <>
                 <GestionAtelier/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default AtelierPage;