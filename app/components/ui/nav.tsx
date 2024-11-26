import Link from 'next/link'
import { cn } from "@/app/lib/utils"

interface NavItemProps {
  href: string
  children: React.ReactNode
}

const NavItem = ({ href, children }: NavItemProps) => (
  <Link 
    href={href} 
    className="text-sm font-medium hover:text-[#997B4D] transition-colors"
  >
    {children}
  </Link>
)

interface NavProps {
  className?: string
}

export function Nav({ className }: NavProps) {
  return (
    <nav className={cn("flex gap-4", className)}>
      <NavItem href="#services">Services</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </nav>
  )
}

