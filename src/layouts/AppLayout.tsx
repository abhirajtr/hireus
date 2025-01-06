import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export const AppLayout = () => {
    return (
        <div>
            <div className="grid-background" />
            <main className="min-h-screen container px-4">
                <Header />
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Soon the footer will be create
            </div>
        </div>
    )
}
