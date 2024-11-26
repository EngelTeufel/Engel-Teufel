import { cn } from "@/app/lib/utils"

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-24 md:py-32", className)}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  )
}

