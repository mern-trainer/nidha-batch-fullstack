import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import { ProtectedRoute } from "./Protected"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
                <Route path="signup" element={
                    <ProtectedRoute auth={true}>
                            <Signup />
                        </ProtectedRoute>
                    }
                />
                <Route path="login" element={
                        <ProtectedRoute auth={true}>
                            <Login />
                        </ProtectedRoute>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Router
