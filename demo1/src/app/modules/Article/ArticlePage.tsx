import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { UniteStock } from "./component/UniteStock";
import { Gammes } from "./component/Gammes";
import { ModelSerie } from "./component/ModelSerie";
import { ParamPrixArt } from "./component/ParamPrixArt";
import { Natures } from "./component/Natures";
import { ConfigRemise } from "./component/ConfigRemise";
import { ReglageCMUP } from "./component/ReglageCMUP";

const ArticlePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path='Gammes'
                element={
                    <>
                        <Gammes />
                    </>
                }

            />
            <Route
                path="UniteStock"
                element={
                    <>
                        <UniteStock />
                    </>
                }
            />
              <Route
                path="ModelSerie"
                element={
                    <>
                        <ModelSerie />
                    </>
                }
            />
               <Route
                path="ParamPrixArt"
                element={
                    <>
                        <ParamPrixArt />
                    </>
                }
            />
             <Route
                path="Natures"
                element={
                    <>
                        <Natures />
                    </>
                }
            />
              <Route
                path="ConfigRemise"
                element={
                    <>
                        <ConfigRemise/>
                    </>
                }
            />
                  <Route
                path="ReglageCMUP"
                element={
                    <>
                        <ReglageCMUP/>
                    </>
                }
            />
            

            <Route index element={<Navigate to='/Structure/Article/Gammes' />} />
        </Route>
    </Routes>
)
export default ArticlePage;
