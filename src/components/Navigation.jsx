import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    );
}