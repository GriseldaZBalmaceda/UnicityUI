import { style } from "@vanilla-extract/css";

export const UnicityButton = style({
  width: "max-content",
  maxWidth: "100%",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  borderRadius: "34px",
  cursor: "pointer",
  fontFamily: "Poppins, sans-serif",
  margin: 0,
  fontSize: "20px",
  textTransform: "none",
  fontWeight: "600",
  padding: "6px 20px",
  ":hover": {
    background: "#82aeda",
    color: "#ffffff",
  },
  ":disabled": {
    color: "dark-gray",
    background: "gray",
  },
});
