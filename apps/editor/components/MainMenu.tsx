import { styled } from "@rimuru/ui";

export const MainMenu = styled("nav", {
  width: "100%",
  height: 30,
  background: "#b4a7d6",
  alignItems: "center",
  display: "flex",
  gap: 5,
  textAlign: "left",
  "& > a": {
    color: "white",
    textDecoration: "none",
  },
});

export default MainMenu;
