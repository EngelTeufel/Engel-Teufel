import { Card, CardContent } from "@/app/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
}

export function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="text-center py-8">
        <blockquote className="text-xl italic mb-4">"{quote}"</blockquote>
        <cite className="font-bold">- {author}</cite>
      </CardContent>
    </Card>
  )
}

