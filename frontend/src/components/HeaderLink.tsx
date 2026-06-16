import { Link, useLocation } from "@tanstack/react-router";
// type-check routes
import type { FileRouteTypes } from "../routeTree.gen";

interface headerLinkProps {
  text: string;
  to: FileRouteTypes["fullPaths"];
  openInNewTab?: boolean;
}

export const HeaderLink = ({
  text,
  to,
  openInNewTab = false,
}: headerLinkProps) => {
  const location = useLocation().pathname;
  const isActive = location === to;

  return (
    <Link
      to={to}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`w-full rounded-[calc(var(--nav-rounding)-var(--nav-padding))] py-2 text-center text-2xl font-semibold text-(--primary-900) transition-colors duration-100 hover:cursor-pointer hover:text-(--primary-800) sm:w-35 ${isActive ? "bg-linear-to-b from-(--primary-600) from-30% to-(--primary-700) text-white text-shadow-sm transition-normal duration-200 hover:bg-(--primary-600) hover:text-white" : "hover:bg-linear-to-b from-(--primary-100) from-30% to-(--primary-200) hover:outline-1 hover:outline-(--primary-500)"} `}
    >
      {text}
    </Link>
  );
};
