import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
                <Route path="signup" Component={Signup} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Router
