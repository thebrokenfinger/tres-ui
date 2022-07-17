import { styled } from "../stitches.config";

export const Code = styled("code", {
  fontFamily: "$mono",
  fontSize: "max(12px, 85%)",
  whiteSpace: "nowrap",
  padding: "0 3px 2px 3px",

  variants: {
    colorScheme: {
      gray: {
        backgroundColor: "$slate3",
        color: "$slate11",
      },
      blue: {
        backgroundColor: "$blue3",
        color: "$blue11",
      },
    },
  },
  defaultVariants: {
    colorScheme: "gray",
  },
});
