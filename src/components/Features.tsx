import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    title: "inventory Manager Agent.",
    description:
      "Monitors inventory levels, predicts demand patterns, automates reordering processes, prevents stockouts and overstock situations across all your products 24/7.",
    href: "/learn-more#manage-inventory",
    image: "/usecases/ecommerce_agent_1.webp"
  },
  {
    title: "Growth Analyst Agent",
    description:
      "Analyzes multi-channel performance data, identifies high-impact growth opportunities, creates strategic recommendations with one-click implementation.e channels in real-time.",
    href: "/learn-more#update-orders",
    image: "/usecases/ecommerce_agent_3.webp"
  },
  {
    title: "Data Analyst Agent",
    description:
      "Answers business questions in natural language, creates ad-hoc reports through chat, automates routine reporting tasks across all platforms daily now.",
    href: "/learn-more#run-promotions",
    image: "/usecases/ecommerce_agent_2.webp"
  },
  {
    title: "Sales Agent (Soon)",
    description:
      "Recovers abandoned carts via personalized phone calls and SMS, engages customers with human-like conversations to convert lost sales revenue back 24/7.",
    href: "/learn-more#create-collections",
    image: "/usecases/ecommerce_agent_4.webp"
  },
]

export default function Features() {
  return (
    <section className="py-4 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-16">
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-lg mb-6">{feature.description}</p>
              <Link href={feature.href}>
                <Button variant="outlineCustom" textColor="hsl(var(--primary))" className="w-fit hover:bg-secondary/80">
                  See Use Case
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

