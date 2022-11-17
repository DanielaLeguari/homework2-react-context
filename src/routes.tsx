import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthUserProvider } from "./context/AuthUserContext";
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute";

export const Router = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <AuthUserProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
            </AuthUserProvider>
        </BrowserRouter>
    )
}