import BasicCard from "../others/BasicCard";
import { Typography, List, Box } from "@mui/material";
import MiniHeader from "../others/MiniHeader";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Button from "../others/Button";

export default function Schedule({ title, subtitle, items = [], loading = false, error = null }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getIcon = (type) => {
    if (type === "quiz") {
      return <QuizIcon sx={{ fontSize: "24px", color: "#1976d2" }} />;
    } else if (type === "assignment") {
      return <AssignmentIcon sx={{ fontSize: "24px", color: "#ed6c02" }} />;
    }
    return null;
  };

  // Safety check: ensure items is an array
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className="schedule-wrapper">
          <BasicCard>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minHeight: "400px",
                maxHeight: "600px",
                boxSizing: "border-box",
              }}
            >
              <MiniHeader title={title} subtitle={subtitle} />
              <div
                style={{ alignContent: "center", overflow: "auto", flex: 1 }}
              >
                {loading ? (
                  <Box sx={{ padding: "20px", textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "#888888" }}>
                      Loading...
                    </Typography>
                  </Box>
                ) : error ? (
                  <Box sx={{ padding: "20px", textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "#d32f2f" }}>
                      Error: {error.message || "Failed to load items"}
                    </Typography>
                  </Box>
                ) : safeItems.length === 0 ? (
                  <Box sx={{ padding: "20px", textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "#888888" }}>
                      No items to display
                    </Typography>
                  </Box>
                ) : (
                  <List sx={{ width: "100%", padding: 0 }}>
                    {safeItems.map(({ title, type, course, topic, dueto }, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "1.5rem",
                        gap: "8px",
                        paddingBottom: "1rem",
                        borderBottom:
                          index < safeItems.length - 1
                            ? "1px solid #e0e0e0"
                            : "none",
                      }}
                    >
                      {/* Icon and Title together */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {getIcon(type)}
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
                        >
                          {title}
                        </Typography>
                      </Box>

                      {/* Course */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#888888",
                          fontSize: "0.7rem",
                          marginLeft: "32px",
                        }}
                      >
                        {course}
                      </Typography>

                      {/* Topic */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#888888",
                          fontSize: "0.7rem",
                          lineHeight: 1.6,
                          marginLeft: "32px",
                        }}
                      >
                        {topic}
                      </Typography>

                      {/* Due Date */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1976d2",
                          fontSize: "0.7rem",
                          fontWeight: "500",
                          marginLeft: "32px",
                        }}
                      >
                        Due: {formatDate(dueto)}
                      </Typography>

                      {/* Button */}
                      <Box sx={{ marginLeft: "32px", marginTop: "4px" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: "#1976d2",
                            color: "#1976d2",
                            fontSize: "0.85rem",
                            padding: "4px 16px",
                            "&:hover": {
                              borderColor: "#1976d2",
                              backgroundColor: "#e3f2fd",
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>
                  ))}
                  </List>
                )}
              </div>
            </Box>
          </BasicCard>
    </div>
  );
}
