import { keyframes, styled } from "../../../../stitches.config";
import * as Accordion from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});


export const Container = styled(Accordion.Root, {
  flex: 1,
  h2: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
});

export const Item = styled(Accordion.Item, {});

export const Trigger = styled(Accordion.Trigger, {
  marginBottom: '0.5rem',
  textAlign: "initial",
  backgroundColor: "$black",
  borderTop: "1px solid $red",
  borderBottom: "1px solid $red",
  borderLeft: "none",
  borderRight: "none",

  width: "100%",
  padding: "1rem",
  color: "$white",
  fontFamily: "Iosevka, mono-space",
  fontSize: "1.125rem",
  fontWeight: "bold",
  transition: "all 1s",
  "[data-state=open] &": {
    color: "$red",
    transition: "all 1s",
    fontSize: "1.25rem",
  },
});

export const Content = styled(Accordion.Content, {
  backgroundColor: "$black",
  color: "$white",
  padding: "1.25rem",
  marginBottom: '0.5rem',
  transition: "all 0.3s",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

});
