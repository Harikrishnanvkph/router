import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Navigation from "./Navigation.jsx";
import PriceAndPlan from "./Components/PriceAndPlan.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import ReduxWindow from "./Redux/ReduxWindow.jsx";
import StartMulter from "./multer/StartMulter.jsx";
import {LongPollingNormal} from "./Long_Polling/LongPollingNormal.jsx";


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navigation />}>
                <Route path="priceandplan" element={<PriceAndPlan/>} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="redux" element={<ReduxWindow />} />
                <Route path="multer" element={<StartMulter />} />
                <Route path="long_polling" element={<LongPollingNormal />} />
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
