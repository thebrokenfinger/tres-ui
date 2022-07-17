import React from "react";
import { styled, CSS } from "../stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: "block",
});

const StyledRadioButton = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$round",
  width: 25,
  height: 25,
  flexShrink: 0,
  mr: "$3",

  variants: {
    colorScheme: {
      gray: {
        boxShadow: "inset 0 0 0 1px $colors$slate7",
      },
      blue: {
        boxShadow: "inset 0 0 0 1px $colors$blue7",
      },
    },
  },

  defaultVariants: {
    colorScheme: "gray",
  },
});

const StyledRadioIndicator = styled("div", {
  borderRadius: "$round",
  width: 15,
  height: 15,
  transform: "scale(0)",

  variants: {
    colorScheme: {
      gray: {
        backgroundColor: "$slate9",
      },
      blue: {
        backgroundColor: "$blue9",
      },
    },
  },

  defaultVariants: {
    colorScheme: "gray",
  },
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "flex",
  alignItems: "center",
  borderRadius: "$2",
  boxShadow: "inset 0 0 0 1px $colors$slate7",
  p: "$3",
  "@hover": {
    "&:hover": {
      boxShadow: "inset 0 0 0 1px $colors$slate8",
    },
  },
  '&[data-state="checked"]': {
    [`& ${StyledRadioIndicator}`]: {
      transform: "scale(1)",
    },
  },

  variants: {
    colorScheme: {
      gray: {
        '&[data-state="checked"]': {
          boxShadow:
            "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8 !important",
        },
      },
      blue: {
        '&[data-state="checked"]': {
          boxShadow:
            "inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8 !important",
        },
      },
    },
  },

  defaultVariants: {
    colorScheme: "gray",
  },
});

type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>;
type RadioCardProps = RadioGroupItemPrimitiveProps & {
  css?: CSS;
  colorScheme?: "gray" | "blue";
};

export const RadioCard = React.forwardRef<
  React.ElementRef<typeof StyledRadio>,
  RadioCardProps
>((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    <StyledRadioButton colorScheme={props.colorScheme}>
      <StyledRadioIndicator colorScheme={props.colorScheme} />
    </StyledRadioButton>
    {props.children}
  </StyledRadio>
));
