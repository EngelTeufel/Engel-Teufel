import Link from 'next/link'
import { Logo } from '@/app/components/ui/logo'

export function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-4">
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Leistungen
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Über uns
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Kontakt
        </Link>
      </div>
    </nav>
  )
}

