import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CatalogPage from "./pages/CatalogPage"
import InsuranceDetailsPage from "./pages/InsuranceDetailsPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CreateRequestPage from "./pages/CreateRequestPage"
import MyRequestsPage from "./pages/MyRequestsPage"
import RequestDetailsPage from "./pages/RequestDetailsPage"
import AllRequestsPage from "./pages/AllRequestsPage"
import NotFoundPage from "./pages/NotFoundPage"
import Navigation from "./components/Navigation"


function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/insurances/:insuranceId" element={<InsuranceDetailsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/requests/create" element={<CreateRequestPage />} />
                <Route path="/requests/my" element={<MyRequestsPage />} />
                <Route path="/requests/:requestId" element={<RequestDetailsPage />} />
                <Route path="/requests/all" element={<AllRequestsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default App
