import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import { AppLayout } from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onboarding from "./pages/Onboarding"
import JobListing from "./pages/JobListing"
import Job from "./pages/Job"
import PostJob from "./pages/PostJob"
import SavedJob from "./pages/SavedJobs"
import MyJobs from "./pages/MyJobs"
import { ThemeProvider } from "./components/theme-provider"
import ProtectedRoute from "./components/ProtectedRoute"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/jobs',
        element:
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
      },
      {
        path: '/job/:id',
        element:
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
      },
      {
        path: '/post-job',
        element:
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
      },
      {
        path: '/saved-jobs',
        element:
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
      },
      {
        path: '/my-jobs',
        element:
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
      },
    ]
  }
])

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App