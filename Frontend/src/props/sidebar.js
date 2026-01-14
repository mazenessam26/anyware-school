import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GradeIcon from "@mui/icons-material/Grade";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CampaignIcon from "@mui/icons-material/Campaign";

export const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard"
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: ScheduleIcon,
    path: "/schedule"
  },
  {
    id: "courses",
    label: "Courses",
    icon: MenuBookIcon,
    path: "/courses"
  },
  {
    id: "gradebook",
    label: "Gradebook",
    icon: GradeIcon,
    path: "/gradebook"
  },
  {
    id: "performance",
    label: "Performance",
    icon: TrendingUpIcon,
    path: "/performance"
  },
  {
    id: "announcement",
    label: "Announcement",
    icon: CampaignIcon,
    path: "/announcement"
  }
];
