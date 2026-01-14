import { Box, Typography, Button } from "@mui/material";
import minimalist from "../../assets/minimalist.png";
import BasicCard from "../others/BasicCard";

export default function DashboardCard() {
  return (
    <div className="dashboard-card-container">
      <BasicCard>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          <Box sx={{ flexDirection: "column", flex: 1, textAlign: "left" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "3rem",
                marginBottom: "2px",
                background: "linear-gradient(120deg,rgb(8, 22, 27),turquoise)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textAlign: "left",
              }}
            >
              EXAMS TIME
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "normal",
                marginBottom: "15px",
                lineHeight: 1.6,
                textAlign: "left",
              }}
            >
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </Typography>
            <Typography
              sx={{
                color: "#888",
                fontSize: "0.9rem",
                fontStyle: "italic",
                marginBottom: "20px",
                lineHeight: 1.5,
                textAlign: "left",
              }}
            >
              "Nothing happens until something moves" - Albert Einstein
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#40E0D0",
                color: "white",
                textTransform: "none",
                padding: "10px 25px",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#00CED1",
                },
              }}
            >
              View exams tips
            </Button>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <img
              src={minimalist}
              alt="laptop"
              style={{ width: "400px", height: "auto" }}
            />
          </Box>
        </Box>
      </BasicCard>
    </div>
  );
}
