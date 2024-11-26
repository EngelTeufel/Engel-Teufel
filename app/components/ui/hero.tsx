import { motion } from 'framer-motion'
import { Button } from "./button"
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from "./logo"

interface HeroProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export function Hero({ title, description, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#242828] via-[#57371D] to-[#997B4D] text-[#F8EFEE] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] md:text-xl">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-[#997B4D] text-[#F8EFEE] hover:bg-[#57371D] transition-colors" asChild>
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <div className="absolute top-4 right-4 z-10">
          <Logo variant="icon" className="w-16 h-16" />
        </div>
      </div>
    </section>
  )
}

