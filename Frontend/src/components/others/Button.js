import { Button as MuiButton } from "@mui/material";

export default function Button({ children, onClick, variant = "contained", sx = {}, ...props }) {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{
        textTransform: "none",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

