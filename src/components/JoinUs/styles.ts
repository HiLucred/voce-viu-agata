import { styled } from "../../../stitches.config";

export const Container = styled("section", {
  width: "100%",
  height: "100%",
  paddingTop: "6rem",
  marginBottom: "6rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  form: {
    width: 800,
  },

  h2: {
    marginBottom: "2rem",
  },

  p: {
    marginBottom: "3rem",
  },
});

export const Field = styled("label", {
  width: "100%",
  marginTop: "2rem",

  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const Input = styled("input", {
  flex: 1,
  border: "1px solid $white",
  padding: "1rem",
  backgroundColor: "transparent",
  fontFamily: "Iosevka, mono-space",
  color: "$white",

  "&:focus": {
    border: "1px solid $red",
    outline: "1px solid $red",
  },
});

export const ErrorMessage = styled("span", {
  fontSize: "0.8rem",
  color: "red",
});

export const TextArea = styled("textarea", {
  flex: 1,
  border: "1px solid $white",
  padding: "1rem",
  backgroundColor: "transparent",
  fontFamily: "Iosevka, mono-space",
  color: "$white",

  "&:focus": {
    border: "1px solid $red",
    outline: "1px solid $red",
  },
});

export const Button = styled("button", {
  width: "100%",
  height: "4rem",
  marginTop: "1rem",
  border: "none",
  backgroundColor: "$red200",
  cursor: "pointer",
  fontFamily: "Iosevka, mono-space",
  color: "$white",
  fontSize: "2rem",

  "&:hover": {
    opacity: 0.8,
  },
});
