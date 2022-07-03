import { styled } from "@tres-ui/stitches";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontFamily: "$untitled",
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      "6": {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      "7": {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "8": {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "9": {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    colorScheme: {
      red: {
        color: "$red11",
      },
      blue: {
        color: "$blue11",
      },
      green: {
        color: "$green11",
      },
      yellow: {
        color: "$yellow11",
      },
      gray: {
        color: "$slate11",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
  },
  defaultVariants: {
    size: "3",
    colorScheme: "contrast",
  },
});
