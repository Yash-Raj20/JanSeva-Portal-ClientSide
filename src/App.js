import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/User/AuthContext";
import CustomLoader from "./components/User/CustomLoader";

// Layouts
import UserWrapper from "./layout/User/WraperLayout";
import Layout from "./layout/User/Layout";

// Public User Pages
import Home from "./pages/User/WebPages/Home";
import AboutUs from "./pages/User/WebPages/AboutUs";
import ContactUs from "./pages/User/WebPages/ContactUs";
import Login from "./pages/User/AuthPage/Login";
import Register from "./pages/User/AuthPage/Register";
import SubmitProblem from "./pages/User/ProblemPage/SubmitProblem";
import AllProblems from "./pages/User/ProblemPage/AllProblems";
import ProblemDetails from "./pages/User/ProblemPage/ProblemDetails";
import AllCommunity from "./pages/Community/DashboardPages/AllCommunity";

// Protected User Dashboard Pages
import Dashboard from "./pages/User/UserDashboardPage/Dashboard";
import Profile from "./pages/User/UserDashboardPage/Profile";
import MyIssue from "./pages/User/UserDashboardPage/MyIssue";
import SolvedIssue from "./pages/User/UserDashboardPage/SolvedIssue";
import Notifications from "./pages/User/UserDashboardPage/Notifications";

// Components
import SocketNotification from "./components/User/NotificationSection/SocketNotification";
import ProtectedRoute from "./components/User/ProtectedRoute";

// Error Pages
import Unauthorized from "./pages/Unauthorized ";
import NotFoundPage from "./NotFoundPage ";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CustomLoader />
      </div>
    );
  }

  const userId = localStorage.getItem("userId");

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} autoClose={3000} />

      <Routes>
        {/* === USER ROUTES === */}
        <Route element={<UserWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit" element={<SubmitProblem />} />
          <Route path="/all-problems" element={<AllProblems />} />
          <Route path="/problems/:id" element={<ProblemDetails />} />
          <Route path="/all-community" element={<AllCommunity />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="my-issues" element={<MyIssue />} />
              <Route path="solved-issues" element={<SolvedIssue />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {userId && <SocketNotification userId={userId} />}
    </>
  );
}

export default App;