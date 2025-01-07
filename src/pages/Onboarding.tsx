import { useUser } from "@clerk/clerk-react"
import { SyncLoader } from "react-spinners";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Role } from "../utils/types";
import { useEffect } from "react";

const Onboarding = () => {

    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.unsafeMetadata?.role) {
            navigate(user.unsafeMetadata.role === "recruiter" ? "/post-job" : "/jobs")
        }
    }, [user, navigate]);
    if (!isLoaded) {
        return (
            <div className="flex h-[100vh] items-center justify-center">
                <SyncLoader className="mb-4" size={20} color="#ffff" />
            </div>
        )
    }


    const handleRoleSelection = async (role: Role) => {
        await user?.update({
            unsafeMetadata: { role }
        }).then(() => {
            navigate(role === "recruiter" ? "/post-job" : "/jobs");
        }).catch((err) => {
            console.error("Error updating role:", err);
        })
    }

    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">I am a...</h2>
            <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
                <Button variant="blue" className="h-36 text-2xl"
                    onClick={() => handleRoleSelection("candidate")}
                >
                    Candidate
                </Button>
                <Button variant="destructive" className="h-36 text-2xl"
                    onClick={() => handleRoleSelection("recruiter")}
                >
                    Recruiter
                </Button>
            </div>
        </div>
    )
}

export default Onboarding