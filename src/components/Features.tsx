const features = [
  {
    title: "Manage inventory.",
    description: "Automate inventory tracking, get low stock alerts, and optimize reorder points using AI-driven predictions based on historical sales data and seasonal trends."
  },
  {
    title: "Updating orders.",
    description: "Automatically process and update order statuses, sync shipping information, and manage fulfillment across multiple sales channels in real-time."
  },
  {
    title: "Store analysis.",
    description: "Get deep insights into your store's performance with AI-powered analytics, customer behavior tracking, and actionable recommendations for growth."
  },
  {
    title: "Creating promotions.",
    description: "Automatically generate and optimize promotional campaigns based on customer segments, purchase history, and market trends."
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background-dark text-text-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">AI that goes beyond search and chat.</h2>
        <p className="text-center text-gray-500 mb-12">Run multiple tasks and actions in seconds, across apps.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1C1C1C] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
  
  