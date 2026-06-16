export const Footer = () => {
  return (
    <footer className="p-4 flex items-center justify-center h-40 bg-linear-to-b from-(--primary-700) from-50% to-(--primary-900) text-center text-sm text-body text-(--primary-50)">
      &copy; {new Date().getFullYear()} Template footer. Free to use.
    </footer>
  )
}
