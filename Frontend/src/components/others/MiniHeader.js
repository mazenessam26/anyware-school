import { Box, Button, Typography } from "@mui/material";
import BasicCard from "./BasicCard";
export default function MiniHeader({ title, subtitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        marginBottom: "15px",
        marginTop: "-10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "3px" }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h6"
            sx={{ fontSize: "0.85rem", color: "#888888", marginTop: "0" }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      <Button>
      <Typography
        variant="h5"
        color="turquoise"
        sx={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        All
      </Typography>
      </Button>
      
    </Box>
  );
}
