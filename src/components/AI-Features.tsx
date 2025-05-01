import Image from "next/image"

const tools = [
  {
    title: "Autopilot",
    description: "Automate everyday tasks",
    image: "/features/autopilot_feature.webp",
  },
  {
    title: "Chat",
    description: "AI-powered customer support",
    image: "/features/chat_feature.webp",
  },
  {
    title: "Scheduler",
    description: "Smart campaign and content scheduling",
    image: "/features/scheduler_feature.webp",
  },
  {
    title: "Deep Reporting",
    description: "Research reports connected to the web",
    image: "/features/deep_search_feature.webp",
  },
]

export default function AIFeatures() {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-32 pb-12 sm:pb-16 md:pb-24 lg:pb-48">
      <div className="w-full container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium mb-4 text-center leading-tight">
            The latest AI features, for your Ecommerce store.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="group flex flex-col h-full justify-between bg-white rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-3">{tool.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{tool.description}</p>
              </div>
              <div className="relative h-[200px] sm:h-[220px] md:h-[250px] w-full overflow-hidden rounded-lg">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

