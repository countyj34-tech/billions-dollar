import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/packages")({
  component: () => <Navigate to="/destinations" replace />,
});
