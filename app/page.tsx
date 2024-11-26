import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Logo } from '@/app/components/ui/logo'
import { Nav } from '@/app/components/ui/nav'
import { Section } from '@/app/components/ui/section'
import { Hero } from '@/app/components/ui/hero'
import { Footer } from '@/app/components/ui/footer'
import { Testimonial } from '@/app/components/ui/testimonial'
import { ServiceCard } from '@/app/components/ui/service-card'
import { Newsletter } from '@/app/components/ui/newsletter'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background py-4">
        <div className="container mx-auto px-4">
          <Nav />
        </div>
      </header>
      <main className="flex-grow">
        <Hero 
          title="Willkommen bei Engel & Teufel"
          subtitle="Dein Partner für Erfolg in der Erotikbranche"
          description="Wir bringen deine Träume auf das nächste Level!"
        />
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-center">Warum Engel & Teufel?</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Unsere Leidenschaft ist dein Erfolg. Egal, ob du Anfänger bist oder schon erste Schritte gemacht hast – bei Engel & Teufel bist du genau richtig. Wir nehmen dir die Last der Organisation ab, sodass du dich voll und ganz auf deinen Erfolg konzentrieren kannst.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>All-in-One-Lösungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Von Fotoshootings über Social-Media-Management bis hin zu rechtlicher Beratung – wir decken alles ab.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Individuelle Betreuung</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Wir arbeiten mit dir Hand in Hand, um deine Karriereziele zu erreichen.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transparenz und Vertrauen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Klare Strukturen, offene Kommunikation und absolute Verlässlichkeit.</p>
              </CardContent>
            </Card>
          </div>
        </Section>
        <Section className="bg-muted">
          <h2 className="text-3xl font-bold mb-6 text-center">Unsere Leistungen im Überblick</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              title="Content-Planung & Produktion"
              description="Professionelle Fotoshootings und Videoproduktionen, die deine Persönlichkeit hervorheben."
            />
            <ServiceCard 
              title="Social-Media-Management"
              description="Wir kümmern uns um deine Accounts und erstellen zielgerichtete Strategien, um deine Reichweite zu maximieren."
            />
            <ServiceCard 
              title="Rechtsberatung"
              description="Schutz vor Urheberrechtsverletzungen und juristische Unterstützung bei Verträgen."
            />
            <ServiceCard 
              title="Marketing & Branding"
              description="Wir machen dich zu einer unverwechselbaren Marke."
            />
          </div>
        </Section>
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-center">Deine Reise beginnt hier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Bewerben</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fülle unser Bewerbungsformular aus.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Kennenlernen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Wir besprechen deine Ziele und erstellen eine individuelle Strategie.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Erfolge feiern</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gemeinsam bringen wir dich an die Spitze der Branche.</p>
              </CardContent>
            </Card>
          </div>
        </Section>
        <Section className="bg-muted">
          <h2 className="text-3xl font-bold mb-6 text-center">Feedback unserer Models</h2>
          <Testimonial 
            quote="Engel & Teufel hat meine Karriere in der Erotikbranche neu definiert. Das Team ist professionell, zuverlässig und immer für mich da!"
            author="Sophie L."
          />
        </Section>
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-center">Starte jetzt mit Engel & Teufel</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Bist du bereit für den nächsten Schritt? Lass uns gemeinsam deine Karriere gestalten. Mit einem Team, das dich unterstützt, und einer Strategie, die dich nach vorne bringt, bist du bei Engel & Teufel in den besten Händen.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Jetzt Bewerben</Button>
            <Newsletter />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

