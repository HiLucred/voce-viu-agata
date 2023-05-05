import { styled } from "../../../stitches.config";
import { PlayIcon, PlusIcon } from "@radix-ui/react-icons";

export const Container = styled("header", {
  paddingBottom: "2rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
});

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid $white",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  transition: "all 0.5s",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$black",
    transition: "all 0.5s",
    borderColor: "$red",

    h2: {
      transition: "all 0.5s",
      color: "$red",
    },

    [`${PlayIcon}`]: {
      color: "$red",
      backgroundColor: "$red",
    },
  },
});

export const ActionBox = styled("div", {
  display: "flex",
  gap: "1rem",
});
