import { styled } from "../stitches.config";

export const Banner = styled("div", {
  // Reset
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",

  variants: {
    size: {
      "1": {
        py: "$1",
        px: "$4",
      },
    },
    colorScheme: {
      gray: {
        backgroundColor: "$slate3",
      },
      contrast: {
        backgroundColor: "$slate12",
        color: "white",
      },
      blue: {
        backgroundColor: "$blue3",
      },
    },
    rounded: {
      true: {
        borderRadius: "$pill",
      },
    },
  },
  defaultVariants: {
    size: "1",
    colorScheme: "gray",
  },
});
