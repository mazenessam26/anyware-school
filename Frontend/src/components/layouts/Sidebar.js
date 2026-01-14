import React from "react";
import { Box, List, ListItemButton, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth";
import Button from "../others/Button";
import MiniHeader from "../others/MiniHeader";

function MiniSidebar({ items, onNavigate }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 130,
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,rgb(6, 41, 79) 0%,rgb(4, 138, 143) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 1,
        flexShrink: 0,
        justifyContent: "space-between",
        pb: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Typography
          sx={{ color: "white", fontSize: "1.3rem", marginBottom: "25px" }}
        >
          Coligo
        </Typography>
        <List sx={{ width: "100%", mt: 1 }}>
          {items.map(({ id, label, icon: Icon, path }) => (
            <Tooltip key={id} title={label} placement="right" arrow>
              <ListItemButton
                onClick={() => onNavigate(path)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 1.5,
                  color: "#e5e7eb",
                  "&:hover": {
                    bgcolor: "rgb(253, 253, 253)",
                    color: "#1976d2",
                    "& .MuiSvgIcon-root": {
                      color: "turquoise",
                    },
                    "& .MuiTypography-root": {
                      color: "turquoise",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    mb: 0.5,
                  }}
                >
                  <Icon sx={{ fontSize: 24 }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    textAlign: "center",
                    mt: 0.5,
                  }}
                >
                  {label}
                </Typography>
              </ListItemButton>
            </Tooltip>
          ))}
        </List>
      </Box>
      <Box sx={{ width: "100%", px: 1 }}>
        <Button
          onClick={handleLogout}
          variant="outlined"
          sx={{
            width: "100%",
            color: "#e5e7eb",
            borderColor: "#e5e7eb",
            "&:hover": {
              borderColor: "turquoise",
              color: "turquoise",
              bgcolor: "rgba(64, 224, 208, 0.1)",
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default MiniSidebar;
