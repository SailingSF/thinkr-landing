import Image from "next/image"

const tools = [
  {
    title: "Autopilot.",
    description: "Automate everyday tasks",
    image: "/features/autopilot_feature.webp",
  },
  {
    title: "Chat.",
    description: "AI-powered customer support",
    image: "/features/chat_feature.webp",
  },
  {
    title: "Scheduler.",
    description: "Smart campaign and content scheduling",
    image: "/features/scheduler_feature.webp",
  },
  {
    title: "Deep Analysis.",
    description: "Research reports connected to the web",
    image: "/features/deep_search_feature.webp",
  },
]

export default function AIFeatures() {
  return (
    <section className="pt-16 md:pt-32 pb-24 md:pb-48">
      <div className="w-full container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium mb-4 text-center">
            The latest AI features, for your Shopify store.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="group flex flex-col h-full justify-between">
              <div className="mb-6">
                <h3 className="text-2xl font-medium mb-3">{tool.title}</h3>
                <p className="text-muted-foreground text-lg">{tool.description}</p>
              </div>
              <div className="relative h-[250px] md:h-0 md:pb-[61.3%] w-full overflow-hidden rounded-lg">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

