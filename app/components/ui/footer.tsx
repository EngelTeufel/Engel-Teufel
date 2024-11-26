import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#57371D] bg-[#242828] text-[#F8EFEE]">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs">© 2023 Engel & Teufel. Alle Rechte vorbehalten.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 hover:text-[#997B4D] transition-colors" href="#">
            Datenschutz
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 hover:text-[#997B4D] transition-colors" href="#">
            Impressum
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 hover:text-[#997B4D] transition-colors" href="#">
            AGB
          </Link>
        </nav>
      </div>
    </footer>
  )
}

