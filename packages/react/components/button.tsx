import { styled } from "../stitches.config";

export const Button: React.FC = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",
  px: "$2",
  fontFamily: "$untitled",
  fontSize: "$2",
  fontWeight: 500,
  fontVariantNumeric: "tabular-nums",

  "&:disabled": {
    backgroundColor: "$slate2",
    boxShadow: "inset 0 0 0 1px $colors$slate7",
    color: "$slate8",
    pointerEvents: "none",
  },

  variants: {
    size: {
      sm: {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      md: {
        borderRadius: "$1",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      lg: {
        borderRadius: "$1",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      default: {
        backgroundColor: "$loContrast",
        boxShadow: "inset 0 0 0 1px $colors$slate7",
        color: "$hiContrast",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$slate8",
          },
        },
        "&:active": {
          backgroundColor: "$slate2",
          boxShadow: "inset 0 0 0 1px $colors$slate8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$slate4",
            boxShadow: "inset 0 0 0 1px $colors$slate8",
          },
      },
      primary: {
        backgroundColor: "$hiContrast",
        boxShadow: "inset 0 0 0 1px $colors$hiContrast",
        color: "$loContrast",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$slate11",
          },
        },
        "&:active": {
          backgroundColor: "$slate11",
          boxShadow: "inset 0 0 0 1px $colors$slate10",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px $colors$slate10, 0 0 0 1px $colors$slate10",
        },
        // TODO: style this with popover/dropdown implementation
        /* '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$slate4",
            boxShadow: "inset 0 0 0 1px $colors$slate8",
          }, */
      },
      success: {
        backgroundColor: "$green2",
        boxShadow: "inset 0 0 0 1px $colors$green7",
        color: "$green11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$green8",
          },
        },
        "&:active": {
          backgroundColor: "$green3",
          boxShadow: "inset 0 0 0 1px $colors$green8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$green4",
            boxShadow: "inset 0 0 0 1px $colors$green8",
          },
      },
      danger: {
        backgroundColor: "$loContrast",
        boxShadow: "inset 0 0 0 1px $colors$slate7",
        color: "$red11",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$slate8",
          },
        },
        "&:active": {
          backgroundColor: "$red3",
          boxShadow: "inset 0 0 0 1px $colors$red8",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$red4",
            boxShadow: "inset 0 0 0 1px $colors$red8",
          },
      },
      transparentWhite: {
        backgroundColor: "hsla(0,100%,100%,.2)",
        color: "white",
        "@hover": {
          "&:hover": {
            backgroundColor: "hsla(0,100%,100%,.25)",
          },
        },
        "&:active": {
          backgroundColor: "hsla(0,100%,100%,.3)",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)",
        },
      },
      transparentBlack: {
        backgroundColor: "hsla(0,0%,0%,.2)",
        color: "black",
        "@hover": {
          "&:hover": {
            backgroundColor: "hsla(0,0%,0%,.25)",
          },
        },
        "&:active": {
          backgroundColor: "hsla(0,0%,0%,.3)",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)",
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  compoundVariants: [
    {
      variant: "default",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        color: "$hiContrast",
        "@hover": {
          "&:hover": {
            backgroundColor: "$slateA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$slateA4",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$slateA4",
            boxShadow: "none",
          },
      },
    },
    {
      variant: "success",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            backgroundColor: "$greenA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$greenA4",
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px $colors$greenA8, 0 0 0 1px $colors$greenA8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$greenA4",
            boxShadow: "none",
          },
      },
    },
    {
      variant: "danger",
      ghost: "true",
      css: {
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            backgroundColor: "$redA3",
            boxShadow: "none",
          },
        },
        "&:active": {
          backgroundColor: "$redA4",
        },
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$redA8, 0 0 0 1px $colors$redA8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$redA4",
            boxShadow: "none",
          },
      },
    },
  ],
  defaultVariants: {
    size: "sm",
    variant: "default",
  },
});
