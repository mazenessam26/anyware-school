import "./App.css";
import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import requireAuth from "./components/hoc/requireAuth";
import { dashboardRoutes } from "./routes/DashboardRoutes";

const HomePage = lazy(()=>(import("./pages/HomePage")));
const Dashboard = lazy(()=>(import("./pages/Dashboard")));
const LoadingPage = lazy(()=>(import("./pages/LoadingPage")));
const UnderConstructionPage = lazy(()=>(import("./pages/UnderConstruction")));



// Protect the Dashboard component
const ProtectedDashboard = requireAuth(Dashboard);
const ProtectedUnderConstruction = requireAuth(UnderConstructionPage);

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/dashboard" element={<ProtectedDashboard />}>
          {dashboardRoutes.children.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="/schedule" element={<ProtectedUnderConstruction />} />
        <Route path="/courses" element={<ProtectedUnderConstruction />} />
        <Route path="/gradebook" element={<ProtectedUnderConstruction />} />
        <Route path="/performance" element={<ProtectedUnderConstruction />} />
        <Route path="/announcement" element={<ProtectedUnderConstruction />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
