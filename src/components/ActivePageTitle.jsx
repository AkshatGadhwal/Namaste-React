import { useLocation } from "react-router-dom"

export const ActivePageTitle = () => {
    const pathname = useLocation().pathname;
    if (pathname === "/") {
        return "Home";
    } else if (pathname === "/about") {
        return "About";
    } else {
        return "Restaurant Details";
    }
    return pathname;
}
