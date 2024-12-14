import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Navigation from "./Navigation.jsx";


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route index element={<Navigation />}>

            </Route>
        )
    )
    return <>
        <RouterProvider router={router}></RouterProvider>
    </>
}

export default App
