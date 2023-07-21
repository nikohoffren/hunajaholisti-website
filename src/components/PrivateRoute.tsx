import { ReactElement, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CartContext } from "./CartContext";

interface PrivateRouteProps {
    element: ReactElement;
    path: string;
    redirectTo: string;
}

function PrivateRoute({ element, path, redirectTo }: PrivateRouteProps) {
    const { state } = useContext(CartContext);
    const cartIsEmpty = state.cartItems.length === 0;

    const userHasPurchased =
        localStorage.getItem("userHasPurchased") === "true";

    let condition;

    if (path === "/checkout") {
        condition = !cartIsEmpty;
    } else if (path === "/success") {
        condition = userHasPurchased;
    } else {
        condition = true;
    }

    const location = useLocation();

    return condition ? (
        element
    ) : (
        <Navigate to={redirectTo} state={{ from: location }} replace />
    );
}

export default PrivateRoute;
