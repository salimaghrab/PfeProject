import { Outlet, Route, Routes } from "react-router-dom";
import { ReglementInterne } from "./component/ReglementInterne";
import { RecapCaisse } from "./component/RecapCaisse";
import { ChangerCaisse } from "./component/ChangerCaisse";



const GCaissePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="ReglementInternes"
                element={
                    <>
                    <ReglementInterne/>
                    
                    </>
                }
            />   
             <Route
                path="RecapCaisse"
                element={
                    <>
                    <RecapCaisse/>
                    </>
                }
            />    
             <Route
                path="ChangerCaisse"
                element={
                    <>
                    <ChangerCaisse/>
                    </>
                }
            />    
            
        </Route>
    </Routes>
)
export default GCaissePage;