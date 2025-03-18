import Image from "next/image"

const tools = [
  {
    title: "Autopilot.",
    description: "Automated inventory and pricing management",
    image: "/features/autopilot.png",
  },
  {
    title: "Chat.",
    description: "AI-powered customer support",
    image: "/features/chat01.png",
  },
  {
    title: "Scheduler.",
    description: "Smart campaign and content scheduling",
    image: "/features/scheduler01.png",
  },
  {
    title: "Deep Analysis.",
    description: "Research reports connected to the web",
    image: "/features/deepsearch01.png",
  },
]

export default function AIFeatures() {
  return (
    <section className="pt-20 pb-32 px-4">
      <div className="container mx-auto">
        {/* AI Tools Section */}
        <div className="py-2">
          <h2 className="text-[36px] md:text-[50px] font-medium mb-12">
            The latest AI features,
            <br />
            for your shopify store.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-semibold">{tool.title}</h3>
                  <p className="text-gray-600 min-h-[48px]">{tool.description}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 aspect-square flex items-center justify-center mt-auto">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.title}
                    width={300}
                    height={200}
                    className='w-full h-auto'
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

