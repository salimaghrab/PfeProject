import { Outlet, Route, Routes } from "react-router-dom";
import { DocVente } from "./component/DocVente";
import { AvoirFinance } from "./component/AvoirFinance";

const VentePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="DocVente"
                element={
                    <>
                        <DocVente/>
                    </>
                }
            />
            <Route
                path="AvoirFinance"
                element={
                    <>
                        <AvoirFinance/>
                    </>
                }
            />
        </Route>
    </Routes>
)
export default VentePage;