import { createLazyFileRoute } from "@tanstack/react-router";
import { TeamPage } from "../pages/TeamPage";

export const Route: any = createLazyFileRoute("/team")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TeamPage />;
}
