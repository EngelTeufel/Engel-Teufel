import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export function Newsletter() {
  return (
    <form className="flex gap-2">
      <Input type="email" placeholder="Deine E-Mail-Adresse" className="max-w-xs" />
      <Button type="submit">Abonnieren</Button>
    </form>
  )
}

