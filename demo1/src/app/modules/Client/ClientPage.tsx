import { Outlet, Route, Routes } from "react-router-dom";
import { Client } from "./component/Client";

const ClientPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionClient"
                element={
                    <>
                    <Client/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default ClientPage;