import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { login, logout } from "../redux/auth";
import { Box, Button, Typography, Container } from "@mui/material";
import background from "../assets/STUDENT.json";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Redirect to dashboard if already logged in
  

  const handleLogin = () => {
    dispatch(login());
    navigate("/loading");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Lottie Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <Lottie animationData={background} loop={true} autoplay={true} />
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            gap: 3,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Anyware Software
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {isAuthenticated
              ? "You are currently logged in"
              : "Please log in to access the dashboard"}
          </Typography>
          {isAuthenticated ? (
            <Button
              variant="contained"
              color="error"
              size="large"
              onClick={handleLogout}
              sx={{ minWidth: 200 }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleLogin}
              sx={{ minWidth: 200 }}
            >
              Login
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
