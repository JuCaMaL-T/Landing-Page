import { Brain, Laptop, Handshake } from "lucide-react"
import type { CardProps } from "../../components/ui/Card"

export const services: CardProps[] = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Aquí va a ir una frase que describa un poquito del producto y que genere intriga en la gente, para que hagan click en el enlace para ver toda la info.",
    href: "/services",
  },
  {
    icon: Laptop,
    title: "Desarrollo de Software",
    description:
      "Aquí va a ir una frase que describa un poquito del producto y que genere intriga en la gente, para que hagan click en el enlace para ver toda la info.",
    href: "/services",
  },
  {
    icon: Handshake,
    title: "Consultoría Tecnológica",
    description:
      "Aquí va a ir una frase que describa un poquito del producto y que genere intriga en la gente, para que hagan click en el enlace para ver toda la info.",
    href: "/services",
  },
]