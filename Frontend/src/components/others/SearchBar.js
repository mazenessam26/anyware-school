import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder = "Search...", onSearch }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#f1f5f9",
        px: 2,
        py: 0.5,
        borderRadius: 2,
        width: 280
      }}
    >
      <SearchIcon sx={{ color: "#64748b", mr: 1 }} />
      <InputBase
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        sx={{ flex: 1, fontSize: 14 }}
      />
    </Box>
  );
}

export default SearchBar;
