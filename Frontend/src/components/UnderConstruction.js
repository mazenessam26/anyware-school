import { useState } from "react";
import Lottie from "lottie-react";
import UnderConstructionAnimation from "../assets/animation.json";
import BasicCard from "./others/BasicCard";

export default function UnderConstruction() {
  const [text, setText] = useState("Under Construction");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={UnderConstructionAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Editable Text Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "black",
            background: "transparent",
            border: "2px solid transparent",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#007bff";
            e.target.style.background = "rgba(255, 255, 255, 0.8)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "transparent";
            e.target.style.background = "transparent";
          }}
        />
      </div>
    </div>
  );
}
