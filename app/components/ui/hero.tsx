import { Button } from "@/app/components/ui/button"

interface HeroProps {
  title: string
  subtitle: string
  description: string
}

export function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl md:text-3xl mb-6">{subtitle}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Button size="lg">Mehr erfahren</Button>
      </div>
    </section>
  )
}

