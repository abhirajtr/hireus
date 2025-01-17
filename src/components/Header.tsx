import { Link, useSearchParams } from "react-router-dom"
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "./ui/button"
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react"
import { useState, useEffect, SyntheticEvent } from "react"

const Header = () => {

    const [showSignIn, setShowSignIn] = useState<boolean>(false);
    const [search, setSearch] = useSearchParams();
    const { user } = useUser();
    console.log(search);

    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSignIn(true);
        }
    }, [search]);
    const handleOverlayClick = (event: SyntheticEvent<EventTarget>) => {
        if (event.target === event.currentTarget) {
            setShowSignIn(false);
            setSearch({});
        }
    }

    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link to="/" >
                    {/* <span>HIREUS</span> */}
                    <img src='/logo.png' alt="logo" className="h-10" />
                </Link>
                <div className="flex gap-8">
                    <SignedOut>
                        <Button variant="outline"
                            onClick={() => setShowSignIn(true)}
                        >Login</Button>
                        {/* <SignInButton /> */}
                    </SignedOut>
                    <SignedIn>
                        {/* show only if the user is a recruiter */}
                        {user?.unsafeMetadata?.role === "recruiter" &&
                            <Link to="/post-job">
                                <Button variant="destructive" className="rounded-full">
                                    <PenBox size={20} className="mr-2" />
                                    Post a Job
                                </Button>
                            </Link>
                        }
                        <UserButton
                            appearance={{ elements: { avatarBox: "w-10 h-10" } }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="My Jobs"
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href="my-jobs"
                                />
                                <UserButton.Link
                                    label="Saved Jobs"
                                    labelIcon={<Heart size={15} />}
                                    href="saved-jobs"
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>
                </div>
            </nav>

            {showSignIn &&
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
                    onClick={handleOverlayClick}
                >
                    <SignIn
                        // forceRedirectUrl={}
                        signUpForceRedirectUrl="/onboarding"
                        fallbackRedirectUrl="/onboarding"
                    />
                </div>
            }
        </>
    )
}

export default Header