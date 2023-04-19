import { Outlet, Route, Routes } from "react-router-dom";
import { Retenue } from "./component/Retenue";



const RetenuePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="Retenue"
                element={
                    <>
                    <Retenue/>
                    </>
                }
            />    
            
            
        </Route>
    </Routes>
)
export default RetenuePage;