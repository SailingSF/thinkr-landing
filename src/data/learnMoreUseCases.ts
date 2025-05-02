export interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string[];
  results: {
    metrics: { label: string; value: string; subtext: string }[];
  };
  imagePath: string;
}

export const useCases: UseCase[] = [
  {
    id: "scale-operations",
    title: "Scale Your Operations Without Growing Your Team",
    subtitle: "From 1,000 to 10,000 orders per day with the same team size",
    description: "See how Fashion Boutique X automated their operations and scaled their business without hiring additional staff.",
    challenge: "Managing increasing order volume was overwhelming their small team, leading to delays and errors.",
    solution: [
      "Automated 80% of customer service inquiries",
      "Reduced order processing time by 65%",
      "Automated inventory forecasting and reordering",
      "Streamlined fulfillment workflows"
    ],
    results: {
      metrics: [
        { label: "Orders Processed", value: "10x", subtext: "increase in daily orders" },
        { label: "Customer Response Time", value: "5min", subtext: "down from 4 hours" },
        { label: "Team Size", value: "Same", subtext: "no additional hires" }
      ]
    },
    imagePath: "/usecase1-operations.webp"
  },
  {
    id: "unified-data",
    title: "All Your Data in One Conversation",
    subtitle: "How Outdoor Gear Co. cut reporting time by 10+ hours every week",
    description: "See how one fast-growing ecommerce team used thinkr's all-in-one chat to get instant answers from Shopify, Meta Ads, Google Ads, Klaviyo, and more—without switching tools or exporting data.",
    challenge: "Manually checking performance across platforms took hours, delayed decisions, and led to missed opportunities.",
    solution: [
      "Unified chat for 300+ ecommerce tools",
      "Instant insights across all sales and ad channels",
      "Auto-generated performance reports",
      "Smart prompts to uncover trends and issues faster"
    ],
    results: {
      metrics: [
        { label: "Time Saved", value: "10hrs", subtext: "weekly on reporting" },
        { label: "Data Sources", value: "12+", subtext: "unified platforms" },
        { label: "Decision Speed", value: "90%", subtext: "faster insights" }
      ]
    },
    imagePath: "/usecase2-operations.webp"
  },
  {
    id: "cart-recovery",
    title: "Recover Abandoned Carts Instantly",
    subtitle: "How Candle Shop boosted sales by 9% with one click",
    description: "Learn how Candle Shop recovered abandoned carts and increased average order value by using thinkr's AI-powered suggestions—delivered directly to their inbox with one-click automation.",
    challenge: "Customers were frequently abandoning carts due to shipping costs, especially in the $65–$74 range—leading to missed revenue and lower AOV.",
    solution: [
      "AI detected cart drop-off thresholds using store data",
      "Suggested free shipping at $75 to recover lost sales",
      "Enabled in Shopify and Mailchimp in under 30 minutes",
      "Result: +9% revenue growth from a single one-click change"
    ],
    results: {
      metrics: [
        { label: "Revenue Growth", value: "+9%", subtext: "from one change" },
        { label: "Setup Time", value: "30min", subtext: "quick implementation" },
        { label: "Cart Recovery", value: "+42%", subtext: "abandoned cart saves" }
      ]
    },
    imagePath: "/usecases/ecommerce_agent_3.webp"
  }
]; 