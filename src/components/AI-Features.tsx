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
    <section className="pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 px-4">
      <div className="container mx-auto">
        {/* AI Tools Section */}
        <div className="py-2">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[50px] font-medium mb-8 sm:mb-12">
            The latest AI features,
            <br />
            for your shopify store.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col">
                {/* Fixed height text container */}
                <div className="min-h-[80px] sm:min-h-[90px] lg:min-h-[100px] mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold">{tool.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2">{tool.description}</p>
                </div>
                
                {/* Image container */}
                <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center mx-auto w-full max-w-[280px]">
                  <div className="w-full h-[185px] sm:h-[210px] flex items-center justify-center">
                    <Image
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.title}
                      width={210}
                      height={210}
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                      {...(index < 2 ? { priority: true } : { loading: 'lazy' })}
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

