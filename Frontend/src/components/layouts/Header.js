import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "../others/SearchBar";
import BasicBox from "../others/BasicCard";

export default function Header({ title, items }) {
  const navigate = useNavigate();

  return (
    <BasicBox>
      {/* Left: Title */}
      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>

      {/* Middle: Search */}
      <SearchBar onSearch={(value) => console.log(value)} />

      {/* Right: Icons */}
      <Box sx={{ display: "flex", gap: 1 }}>
        {items.map(({ id, icon: Icon, path }) => (
          <IconButton key={id} onClick={() => navigate(path)}>
            <Icon />
          </IconButton>
        ))}
      </Box>
    </BasicBox>
  );
}
