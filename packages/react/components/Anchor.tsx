import { styled } from "../stitches.config";
import { Text } from "./Text";

export const Anchor = styled("a", {
  alignItems: "center",
  gap: "$1",
  flexShrink: 0,
  outline: "none",
  textDecorationLine: "none",
  textUnderlineOffset: "3px",
  textDecorationColor: "$slate4",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "inherit",
  fontFamily: "$untitled",
  "@hover": {
    "&:hover": {
      textDecorationLine: "underline",
      cursor: "pointer",
    },
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    textDecorationLine: "none",
  },
  [`& ${Text}`]: {
    color: "inherit",
  },
  variants: {
    colorScheme: {
      blue: {
        color: "$blue11",
        textDecorationColor: "$blue4",
        "&:focus": {
          outlineColor: "$blue8",
        },
      },
      subtle: {
        color: "$slate11",
        textDecorationColor: "$slate4",
        "&:focus": {
          outlineColor: "$slate8",
        },
      },
      contrast: {
        color: "$hiContrast",
        textDecoration: "underline",
        textDecorationColor: "$slate4",
        "@hover": {
          "&:hover": {
            textDecorationColor: "$slate7",
          },
        },
        "&:focus": {
          outlineColor: "$slate8",
        },
      },
    },
  },
  defaultVariants: {
    colorScheme: "contrast",
  },
});
