import { Link } from "react-router-dom"
import { Button } from "./ui/button"
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const Header = () => {
    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link to="/" >
                    {/* <span>HIREUS</span> */}
                    <img src='public/logo.png' alt="logo"  className="h-10"/>
                </Link>
                <Button variant="outline" >Login</Button>
                {/* <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn> */}
            </nav>
        </>
    )
}

export default Header