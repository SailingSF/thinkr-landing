import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "Manage inventory.",
    description:
      "Automate inventory tracking, get low stock alerts, and optimize reorder points with AI-driven predictions based on historical sales data and seasonality.",
    href: "/learn-more#manage-inventory"
  },
  {
    title: "Update orders.",
    description:
      "Automatically process and update order statuses, sync shipping information, and manage fulfillment across multiple sales channels in real-time.",
    href: "/learn-more#update-orders"
  },
  {
    title: "Store analysis.",
    description:
      "Get deep insights into your store's performance with AI-powered analytics, automated report tracking, and actionable recommendations for growth.",
    href: "/learn-more#store-analysis"
  },
  {
    title: "Create promotions.",
    description:
      "Automatically generate and optimize promotional campaigns based on customer segments, purchase history, and market trends.",
    href: "/learn-more#create-promotions"
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium text-center mb-4">AI that goes beyond search and chat.</h2>
          <p className="text-[18px] sm:text-[25px] font-normal text-center text-muted-foreground">Run multiple tasks and actions in seconds, across apps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6 flex flex-col">
              <h3 className="font-medium text-[25px] mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-[15px] font-normal mb-6 flex-grow">{feature.description}</p>
              <Link href={feature.href}>
                <Button variant="outlineCustom" textColor="hsl(var(--primary))" className="w-fit hover:bg-secondary/80 bg-gray-100">
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

