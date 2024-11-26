import Image from 'next/image'
import { cn } from "@/app/lib/utils"

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
}

export function Logo({ variant = 'full', className }: LogoProps) {
  const logoSrc = variant === 'full' 
    ? '/images/Logo-PNG-01.png'  // Gold full version
    : '/images/Logo-ICON-01.png' // Gold icon version
    
  return (
    <div className={cn("relative", className)}>
      <Image
        src={logoSrc}
        alt="Engel & Teufel"
        width={variant === 'full' ? 300 : 40}
        height={variant === 'full' ? 80 : 40}
        className="object-contain"
        priority
      />
    </div>
  )
}

