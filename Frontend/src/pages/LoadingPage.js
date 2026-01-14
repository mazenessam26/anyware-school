import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
      }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
}
