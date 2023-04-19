import { Outlet, Route, Routes } from "react-router-dom";
import { ConfigDA } from "./component/ConfigDA";
import { ConfigMail } from "./component/ConfigMail";
import { ConfigVC } from "./component/ConfigVC";
import { ListDocReglement } from "./component/ListDocReglement";
import { ParametrageDocument } from "./component/ParametrageDocument";
import { ProcessDA } from "./component/ProcessDA";
import { RefFournisseur } from "./component/RefFournisseur";
import { WebService } from "./component/WebService";

const DocumentPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }


        >
            <Route
                path="ConfigMail"
                element={
                    <>
                        <ConfigMail />
                    </>
                }
            />
            <Route
                path="ParametrageDocument"
                element={
                    <>
                        <ParametrageDocument />
                    </>
                }
            />
            <Route
                path="RefFournisseur"
                element={
                    <>
                        <RefFournisseur />
                    </>
                }
            />
            <Route
                path="ConfigVC"
                element={
                    <>
                        <ConfigVC />
                    </>
                }
            />
             <Route
                path="ListDocReglement"
                element={
                    <>
                        <ListDocReglement />
                    </>
                }
            />
              <Route
                path="WebService"
                element={
                    <>
                        <WebService />
                    </>
                }
            />
                <Route
                path="ConfigDA"
                element={
                    <>
                        <ConfigDA />
                    </>
                }
            />
               <Route
                path="ProcessDA"
                element={
                    <>
                        <ProcessDA />
                    </>
                }
            />
            
            
        </Route>
    </Routes>
)
export default DocumentPage;