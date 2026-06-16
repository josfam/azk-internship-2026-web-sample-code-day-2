import { createLazyFileRoute } from '@tanstack/react-router'
import { PortfolioPage } from '../pages/PortfolioPage'

export const Route: any = createLazyFileRoute('/portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PortfolioPage />
}
