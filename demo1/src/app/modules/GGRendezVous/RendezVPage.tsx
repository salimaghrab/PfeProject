import { Outlet, Route, Routes } from "react-router-dom";
import { PRendezvous } from "./component/PRendezvous";
import { PriseRendezVous } from "./component/PriseRendezVous";


const RendezVPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="PRendezvous"
                element={
                    <>
                 <PRendezvous/>
                    </>
                }
            />
             <Route
                path="PriseRendezVous"
                element={
                    <>
                 <PriseRendezVous/>
                    </>
                }
            /> 
            
        </Route>
    </Routes>
)
export default RendezVPage;