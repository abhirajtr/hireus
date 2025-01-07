import { useUser } from "@clerk/clerk-react"
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const ProtectedRoute = ({ children }: Props) => {

    const { isSignedIn, user, isLoaded } = useUser();
    const { pathname } = useLocation();

    if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to={`${pathname}?sign-in=true`} />;
    }
    if (user !== undefined && !user.unsafeMetadata?.role && pathname !== "/onboarding") {
        return <Navigate to="/onboarding" />
    }
    return children;
}

export default ProtectedRoute