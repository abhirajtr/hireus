import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const Header = () => {
    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link to="/" >
                    <span>HIREUS</span>
                </Link>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </nav>
        </>
    )
}

export default Header