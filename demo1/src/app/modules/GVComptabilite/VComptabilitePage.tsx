import { Outlet, Route, Routes } from "react-router-dom";
import { BalenceClient } from "./component/BalenceClient";

const VComptabilitePage= () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="BalanceClient"
                element={
                    <>
                        <BalenceClient/>
                    </>
                }
            />
            <Route
                path="chiffreaffaires"
                element={
                    <>
                        
                    </>
                }
            />
        </Route>
    </Routes>
)
export default VComptabilitePage;