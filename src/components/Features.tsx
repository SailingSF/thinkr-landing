import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Manage inventory.",
    description:
      "Automate inventory tracking, get low stock alerts, and optimize reorder points with AI-driven predictions based on historical sales data and seasonality.",
  },
  {
    title: "Update orders.",
    description:
      "Automatically process and update order statuses, sync shipping information, and manage fulfillment across multiple sales channels in real-time.",
  },
  {
    title: "Store analysis.",
    description:
      "Get deep insights into your store's performance with AI-powered analytics, automated report tracking, and actionable recommendations for growth.",
  },
  {
    title: "Create promotions.",
    description:
      "Automatically generate and optimize promotional campaigns based on customer segments, purchase history, and market trends.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[50px] font-medium text-center mb-4">AI that goes beyond search and chat.</h2>
          <p className="text-[25px] font-medium text-center text-muted-foreground">Run multiple tasks and actions in seconds, across apps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary/50 rounded-xl p-6 flex flex-col">
              <h3 className="font-semibold text-2xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{feature.description}</p>
              <Button variant="outlineCustom" textColor="hsl(var(--primary))" className="w-fit hover:bg-secondary/80">
                See Use Case
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

