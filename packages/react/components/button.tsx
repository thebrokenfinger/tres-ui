import * as React from "react";

export const Button: React.FC = ({
  children,
}: {
  children?: React.ReactElement;
}) => {
  return <button type="button">{children}</button>;
};
