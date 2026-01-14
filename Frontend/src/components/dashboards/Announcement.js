import BasicCard from "../others/BasicCard";
import { Typography, List, Box, Avatar } from "@mui/material";
import MiniHeader from "../others/MiniHeader";
import Pfp from "@mui/icons-material/AccountCircle";

export default function AnnouncementBox({ 
  title, 
  subtitle, 
  items = [], 
  loading = false, 
  error = null 
}) {
  // Safety check: ensure items is an array
  const safeItems = Array.isArray(items) ? items : [];
  console.log(items)
  return (
    <div className="announcement-wrapper">
      <BasicCard>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <MiniHeader title={title} subtitle={subtitle} />
          <div style={{ alignContent: "center" }}>
            {loading ? (
              <Box sx={{ padding: "20px", textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "#888888" }}>
                  Loading...
                </Typography>
              </Box>
            ) : error ? (
              <Box sx={{ padding: "20px", textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "#d32f2f" }}>
                  Error: {error.message || "Failed to load announcements"}
                </Typography>
              </Box>
            ) : safeItems.length === 0 ? (
              <Box sx={{ padding: "20px", textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "#888888" }}>
                  No announcements to display
                </Typography>
              </Box>
            ) : (
              <List sx={{ width: "100%", padding: 0 }}>
                {safeItems.map(({ _id, teacher, course, description, teacherProfile }, index) => (
                  <Box
                    key={_id || index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "1.5rem",
                      gap: "2px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        flex: 1,
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "50px",
                            marginTop: "2px",
                          }}
                        >
                          {/* ✅ UPDATED: Use Avatar with teacherProfile */}
                          {teacherProfile ? (
                            <Avatar
                              src={teacherProfile}
                              alt={teacher}
                              sx={{ 
                                width: 50, 
                                height: 50,
                                border: "2px solid #e0e0e0"
                              }}
                            />
                          ) : (
                            <Pfp sx={{ fontSize: "50px", color: "#888888" }} />
                          )}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "4px",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "bold", fontSize: "1rem" }}
                          >
                            {teacher}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#888888",
                              fontSize: "0.9rem",
                            }}
                          >
                            {course}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "1px",
                        height: "60px",
                        backgroundColor: "#999999",
                        margin: "0 px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#888888",
                        flex: 2,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        marginLeft: "0",
                      }}
                    >
                      {description}
                    </Typography>
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