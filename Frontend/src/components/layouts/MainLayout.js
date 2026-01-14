import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnnouncements } from "../../redux/announcement";
import { fetchQuizzes } from "../../redux/quiz";

import "../../App.css";
import Header from "./Header";
import MiniSidebar from "./Sidebar";
import { sidebarItems } from "../../props/sidebar";
import { header } from "../../props/header";
import DashboardCard from "./DashboardCard";
import AnnouncementTab from "../../tabs/AnnouncementTab";
import ScheduleTab from "../../tabs/ScheduleTab";
import UnderConstruction from "../UnderConstruction";

const underConstructionRoutes = [
  "/schedule",
  "/courses",
  "/gradebook",
  "/performance",
  "/announcement",
];

export default function MainLayout({ children, title = "Welcome Mazen," }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // Check if current route is an under construction route
  const isUnderConstructionRoute = underConstructionRoutes.includes(
    location.pathname
  );

  // Get data from Redux store
  const announcements = useSelector((state) => state.announcements.items);
  const announcementsLoading = useSelector(
    (state) => state.announcements.loading
  );
  const announcementsError = useSelector((state) => state.announcements.error);
  const quizzes = useSelector((state) => state.quizzes.items);
  const quizzesLoading = useSelector((state) => state.quizzes.loading);
  const quizzesError = useSelector((state) => state.quizzes.error);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchQuizzes());
  }, [dispatch]);

  return (
    <div className="App">
      <MiniSidebar items={sidebarItems} onNavigate={navigate} />
      <div className="content-area">
        <Header title={title} items={header}></Header>
        <main>
          {isUnderConstructionRoute ? (
            <UnderConstruction />
          ) : (
            <>
              <DashboardCard />
              <div className="announcement-schedule-container">
                <AnnouncementTab
                  items={announcements}
                  loading={announcementsLoading}
                  error={announcementsError}
                />
                <ScheduleTab
                  title="What's Due"
                  subtitle="upcoming activities"
                  items={quizzes}
                  loading={quizzesLoading}
                  error={quizzesError}
                />
              </div>
              <Outlet />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
