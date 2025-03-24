import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    title: "Manage inventory.",
    description:
      "Automate inventory tracking, get low stock alerts, and optimize reorder points with AI-driven predictions based on historical sales data and seasonality.",
    href: "/learn-more#manage-inventory",
    image: "/4introslides/ecommerce_agent_1.png"
  },
  {
    title: "Update orders.",
    description:
      "Automatically process and update order statuses, sync shipping information, and manage fulfillment across multiple sales channels in real-time.",
    href: "/learn-more#update-orders",
    image: "/4introslides/ecommerce_agent_3.png"
  },
  {
    title: "Run promotions.",
    description:
      "Automatically generate and optimize promotional campaigns based on customer segments, purchase history, and market trends.",
    href: "/learn-more#run-promotions",
    image: "/4introslides/ecommerce_agent_2.png"
  },
  {
    title: "Create Collections.",
    description:
      "Use AI to automatically group and organize products into dynamic collections based on attributes, performance data, and seasonal trends.",
    href: "/learn-more#create-collections",
    image: "/4introslides/ecommerce_agent_4.png"
  },
]

export default function Features() {
  return (
    <section className="py-4 md:py-12 px-4 md:px-32">
      <div className="w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium text-center mb-4">AI that goes beyond search and chat.</h2>
          <p className="text-[18px] sm:text-[25px] font-normal text-center text-muted-foreground">Run multiple tasks and actions in seconds, across apps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative h-[200px] sm:h-[250px] w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-base mb-6">{feature.description}</p>
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

