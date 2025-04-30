import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AllInOneChatPage() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full container mx-auto px-4 py-12 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight">
              Unify Your E-commerce World with All-In-One Chat
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mt-2 mb-8 sm:mb-12">
              Connect Shopify, Facebook Ads, Klaviyo, Google Analytics, Gorgias, and 300+ other integrations to chat directly with your entire store universe using AI.
            </p>
            <Button asChild size="lg">
              <Link href="https://www.thinkrapp.com/">
                Get Started Now 
              </Link>
            </Button>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center mt-12 md:mt-16 lg:mt-20">
            <Image 
              src="/thinkr chat.png"
              alt="Thinkr chat interface showing connected apps like Shopify, Klaviyo, Facebook Ads, and a chat input field"
              width={1000}
              height={250}
              className="rounded-lg shadow-xl w-full h-auto border border-gray-200"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto text-center mt-12 md:mt-16 lg:mt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8">
              thinkr seamlessly integrates with your essential e-commerce tools. Simply connect your accounts, and our AI-powered chat becomes your central hub for insights, analysis, and control. Ask questions, get summaries, identify trends, and even trigger actions across your connected apps – all from one intuitive interface.
            </p>
            <h3 className="text-xl sm:text-2xl font-medium mb-3 mt-8">Key Benefits:</h3>
            <ul className="list-disc list-inside text-gray-600 text-base sm:text-lg text-left max-w-2xl mx-auto space-y-2">
              <li><span className="font-medium text-gray-800">Centralized Insights:</span> Stop juggling tabs. Get a holistic view of your business performance.</li>
              <li><span className="font-medium text-gray-800">AI-Powered Analysis:</span> Leverage AI to understand complex data and receive actionable recommendations.</li>
              <li><span className="font-medium text-gray-800">Effortless Integration:</span> Connect to hundreds of apps with just a few clicks.</li>
              <li><span className="font-medium text-gray-800">Streamlined Workflow:</span> Ask questions and get answers without digging through multiple dashboards.</li>
              <li><span className="font-medium text-gray-800">Proactive Monitoring:</span> Let Thinkr keep an eye on your key metrics and alert you to important changes.</li>
            </ul>
             <div className="mt-10">
               <Button variant="link" asChild>
                 <Link href="https://www.thinkrapp.com/">
                   Explore the thinkr chat →
                 </Link>
               </Button>
             </div>
          </div>

          {/* Revenue-First Agencies Section */}
          <div className="max-w-4xl mx-auto text-center mt-16 md:mt-20 lg:mt-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4">
              The Only AI Built for Revenue-First Agencies.
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-1/2 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <ul className="w-full md:w-1/2 list-disc list-inside text-gray-600 text-base sm:text-lg space-y-2">
                <li><span className="font-medium text-gray-800">One source of truth:</span> No more bouncing between dashboards.</li>
                <li><span className="font-medium text-gray-800">Agent-powered intelligence:</span> Thinkr spots risks and opportunities automatically.</li>
                <li><span className="font-medium text-gray-800">Chat-driven insights:</span> Just ask — and act instantly.</li>
                <li><span className="font-medium text-gray-800">Designed for real outcomes:</span> Revenue, retention, profitability.</li>
              </ul>
            </div>
          </div>

          {/* Integrations Section */}
          <div className="max-w-6xl mx-auto mt-16 md:mt-20 lg:mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-10 md:mb-16">
              Chat with Your Favorite Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ // Array of integration data
                {
                  logo: "/integration-logos/meta-icon-2.png",
                  name: "Facebook (Meta) Ads",
                  description: "Analyze ad spend, track campaign performance, and get AI insights on ROAS without leaving the chat.",
                },
                {
                  logo: "/integration-logos/google-ads-icon-2.png",
                  name: "Google Ads",
                  description: "Ask about keyword performance, cost-per-click, conversion rates, and optimize bids with AI suggestions.",
                },
                {
                  logo: "/integration-logos/google-analytics-icon.png",
                  name: "Google Analytics",
                  description: "Get quick summaries of website traffic, user behavior, top landing pages, and conversion funnels.",
                },
                {
                  logo: "/integration-logos/klaviyo-icon-black.png",
                  name: "Klaviyo",
                  description: "Check email campaign metrics, segment performance, and identify top-performing flows through simple chat commands.",
                },
                {
                  logo: "/integration-logos/gorgias-icon.png",
                  name: "Gorgias",
                  description: "Summarize support tickets, track response times, and understand customer sentiment with AI analysis.",
                },
                {
                  logo: "/integration-logos/pinterest-icon.png",
                  name: "Pinterest Ads",
                  description: "Monitor pin performance, audience engagement, and ad spend effectiveness directly within the chat interface.",
                },
                {
                  logo: "/integration-logos/mailchimp-icon-2.png",
                  name: "Mailchimp",
                  description: "Retrieve campaign results, list growth trends, and audience engagement metrics effortlessly via chat.",
                },
                // Add more integrations here as needed
              ].map((integration) => (
                <div key={integration.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center">
                  <Image 
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={48} // Standardized logo size
                    height={48}
                    className="mb-4 h-12 w-12 object-contain"
                  />
                  <h4 className="text-lg font-medium mb-2">{integration.name}</h4>
                  <p className="text-gray-600 text-sm">{integration.description}</p>
                </div>
              ))}
              {/* Placeholder for the '300+' card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
                 <h4 className="text-lg font-medium mb-2">More on the way</h4>
                 <p className="text-gray-600 text-sm">Connect to your entire e-commerce stack.</p>
                 <Button variant="outline" size="sm" className="mt-4" asChild>
                   <Link href="#contact">
                     Request an integration
                   </Link>
                 </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
