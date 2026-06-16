import { createLazyFileRoute } from '@tanstack/react-router'
import { ContactPage } from '../pages/ContactPage'

export const Route: any = createLazyFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactPage />
}
