'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ChevronDown } from 'lucide-react'
import { Logo } from "@/app/components/ui/logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo variant="full" className="hidden md:block" />
            <Logo variant="icon" className="md:hidden" />
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="#services" className="text-sm font-medium hover:text-[#997B4D] transition-colors">Services</Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#997B4D] transition-colors">About</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#997B4D] transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#242828] via-[#57371D] to-[#997B4D] text-[#F8EFEE] overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4 md:px-6 relative z-10"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#F8EFEE]">
                Willkommen bei Engel & Teufel
              </h1>
              <p className="mx-auto max-w-[700px] text-[#F8EFEE] md:text-xl">
                Dein Partner für Erfolg in der Erotikbranche. Wir bringen deine Träume auf das nächste Level!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-[#997B4D] text-[#F8EFEE] hover:bg-[#57371D] transition-colors" asChild>
                  <Link href="#apply">Jetzt Bewerben</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_104583038%20(2)-6pxskFUs0HVc7nmpo34b2TL1BC6K0x.jpeg"
              alt="Elegantes Model"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay"
            />
            <div className="absolute top-4 right-4 z-10">
              <Logo variant="icon" className="w-16 h-16" />
            </div>
          </div>
        </section>

        <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-[#997B4D] via-[#F8EFEE] to-[#F8EFEE] text-[#242828]">
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Unsere Leistungen im Überblick
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Content-Planung & Produktion",
                  description: "Professionelle Fotoshootings und Videoproduktionen, die deine Persönlichkeit hervorheben.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/383061072_867366951473754_992488425586435083_n.jpg-yQh5CkmZZbWIJ5cooqERXj8hI6DbEk.jpeg"
                },
                {
                  title: "Social-Media-Management",
                  description: "Wir kümmern uns um deine Accounts und erstellen zielgerichtete Strategien, um deine Reichweite zu maximieren.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/382961678_693176198972678_1438973076286812442_n.jpg-bV9UdyqrsAU53PKhIiNFzbtJk5URRL.jpeg"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-[#F8EFEE]/90 text-[#242828] border-[#57371D] hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-[#242828]/80">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[#F8EFEE]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_FFlXPxSIZM?si=YoRferltra2GLG-U"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="border-0"
              ></iframe>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-[#F8EFEE] via-[#997B4D] to-[#57371D] text-[#F8EFEE]">
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#F8EFEE]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Warum Engel & Teufel?
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "All-in-One-Lösungen", description: "Von Fotoshootings über Social-Media-Management bis hin zu rechtlicher Beratung – wir decken alles ab." },
                { title: "Individuelle Betreuung", description: "Wir arbeiten mit dir Hand in Hand, um deine Karriereziele zu erreichen." },
                { title: "Transparenz und Vertrauen", description: "Klare Strukturen, offene Kommunikation und absolute Verlässlichkeit." }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-[#F8EFEE]/90 text-[#242828] border-[#57371D] hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <CardTitle>{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-[#242828]/80">{reason.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="py-24 md:py-32 bg-gradient-to-b from-[#57371D] to-[#242828] text-[#F8EFEE] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_392974348%20(1)-J8twR6D7z2536qWcVyi7dgRf1R5Onx.jpeg"
              alt="Elegantes Model"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div 
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F8EFEE]">
                Starte jetzt mit Engel & Teufel
              </h2>
              <p className="mx-auto max-w-[700px] text-[#F8EFEE] md:text-xl">
                Bist du bereit für den nächsten Schritt? Lass uns gemeinsam deine Karriere gestalten.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-[#997B4D] text-[#F8EFEE] hover:bg-[#242828] transition-colors" asChild>
                  <Link href="/apply">Jetzt Bewerben</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-[#242828] via-[#57371D] to-[#997B4D] text-[#F8EFEE]">
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#F8EFEE]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Kontakt
            </motion.h2>
            <motion.div 
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mx-auto max-w-[700px] text-[#F8EFEE] md:text-xl">
                Noch Fragen? Wir sind für dich da! Kontaktiere uns per E-Mail oder buche direkt einen Termin mit einem unserer Experten.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="bg-[#997B4D] text-[#F8EFEE] hover:bg-[#57371D] transition-colors" asChild>
                  <Link href="mailto:contact@engelundteufel.com">Kontakt aufnehmen</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#57371D] bg-[#242828] text-[#F8EFEE
]">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-[#F8EFEE]">© 2023 Engel & Teufel. Alle Rechte vorbehalten.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-[#F8EFEE] hover:text-[#997B4D] transition-colors" href="#">
              Datenschutz
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-[#F8EFEE] hover:text-[#997B4D] transition-colors" href="#">
              Impressum
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-[#F8EFEE] hover:text-[#997B4D] transition-colors" href="#">
              AGB
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

