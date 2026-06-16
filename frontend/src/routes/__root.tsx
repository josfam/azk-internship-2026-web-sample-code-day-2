import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen">
        <Nav />
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
      <Footer />
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
