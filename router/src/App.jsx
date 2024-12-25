import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Navigation from "./Navigation.jsx";
import PriceAndPlan from "./Components/PriceAndPlan.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import InvestorRelation from "./Components/InvestorRelation.jsx";
import Investors from "./Components/InvestorRelation/Investors.jsx";
import StartMulter from "./multer/StartMulter.jsx";


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navigation />}>
                <Route path="priceandplan" element={<PriceAndPlan/>} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="investorRelation" element={<InvestorRelation />} />
                <Route path="investorRelation/:id" element={<Investors />} />
                <Route path="multer" element={<StartMulter />} />
            </Route>
        )
    )
    return <>
        <div className="app">
            <RouterProvider router={router}></RouterProvider>
        </div>
    </>
}

export default App
