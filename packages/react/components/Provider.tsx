import React, { ReactFragment } from "react";
import { IdProvider } from "@radix-ui/react-id";

export const DesignSystemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <IdProvider>{children}</IdProvider>;
