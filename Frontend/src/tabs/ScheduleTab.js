import Schedule from "../components/dashboards/Schedule";

export default function ScheduleTab({
  items,
  title = "What's Due",
  subtitle = "upcoming activities",
  loading = false,
  error = null,
}) {
  return (
    <div className="schedule-tab-container">
      <Schedule
        title={title}
        subtitle={subtitle}
        items={items}
        loading={loading}
        error={error}
      />
    </div>
  );
}
