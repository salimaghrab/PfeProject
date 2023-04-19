import { Outlet, Route, Routes } from "react-router-dom";
import { ReglementColure } from "./component/ReglementColure";
import { ReglementTransfert } from "./component/ReglementTransfert";
import { ReglementAvoir } from "./component/ReglementAvoir";
import { ReglementGeneral } from "./component/ReglementGeneral";


const ReglementPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="ReglementColure"
                element={
                    <>
                    <ReglementColure/>
                    </>
                }
            />   
             <Route
                path="ReglementTransferes"
                element={
                    <>
                    <ReglementTransfert/>
                    </>
                }
            />  
             <Route
                path="ReglementAvoir"
                element={
                    <>
                    <ReglementAvoir/>
                    </>
                }
            /> 
               <Route
                path="ReglementGeneral"
                element={
                    <>
                    <ReglementGeneral/>
                    </>
                }
            /> 
            
            
        </Route>
    </Routes>
)
export default ReglementPage;