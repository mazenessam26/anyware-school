import AnnouncementBox from "../components/dashboards/Announcement";

export default function AnnouncementTab({
  items,
  title = "Announcements",
  subtitle = "Latest updates",
  loading = false,
  error = null,
}) {
  return (
    <div className="announcement-tab-container">
      <AnnouncementBox
        title={title}
        subtitle={subtitle}
        items={items}
        loading={loading}
        error={error}
      />
    </div>
  );
}
