export interface ChatLine {
  role: 'user' | 'ai'
  text: string
  isHtml?: boolean
  delay?: number
}

export interface Scenario {
  id: string
  title: string
  lines: ChatLine[]
}

export const chatScenarios: Scenario[] = [
  {
    id: 'top-selling-products',
    title: 'Product Analytics',
    lines: [
      {
        role: 'user',
        text: 'What are my highest selling products this week?',
        delay: 1500
      },
      {
        role: 'ai',
        text: 'Here are your top-performing products this week:',
        delay: 2000
      },
      {
        role: 'ai',
        text: `<div>
          <div class="mb-3">
            🥇 <strong>Wireless Bluetooth Earbuds</strong> - 347 units sold ($24,290 revenue)<br/>
            🥈 <strong>Premium Coffee Blend</strong> - 298 units sold ($8,944 revenue)<br/>
            🥉 <strong>Organic Cotton T-Shirt</strong> - 276 units sold ($8,280 revenue)
          </div>
          <div class="mt-3 pt-3 border-t border-gray-600">
            📈 <strong>Growth leaders</strong>: Earbuds (+45% vs last week), Coffee Blend (+32%)<br/>
            💡 <strong>Opportunity</strong>: Consider bundling top performers for higher AOV
          </div>
        </div>`,
        isHtml: true,
        delay: 4000
      }
    ]
  },
  {
    id: 'conversion-analysis',
    title: 'Conversion Analytics',
    lines: [
      {
        role: 'user',
        text: 'How is my store converting visitors to customers?',
        delay: 1500
      },
      {
        role: 'ai',
        text: 'I&apos;ve analyzed your store&apos;s conversion performance:',
        delay: 2000
      },
      {
        role: 'ai',
        text: `<div>
          <div class="mb-3">
            📊 <strong>Overall Conversion Rate</strong>: 3.2% (up from 2.8% last month)<br/>
            👥 <strong>Total Sessions</strong>: 12,347 this month<br/>
            🛒 <strong>Conversions</strong>: 395 purchases
          </div>
          <div class="my-3 py-2">
            <strong>By Traffic Source</strong>:<br/>
            <div class="ml-2 mt-1">
              • Organic Search: 4.1% conversion<br/>
              • Facebook Ads: 2.9% conversion<br/>
              • Email: 6.8% conversion
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-600">
            💡 <strong>Recommendation</strong>: Your email traffic converts best - consider increasing email campaigns.
          </div>
        </div>`,
        isHtml: true,
        delay: 4500
      }
    ]
  },
  {
    id: 'facebook-ad-campaigns',
    title: 'Facebook Ad Analysis',
    lines: [
      {
        role: 'user',
        text: 'Analyze my Facebook ad campaigns from the last 30 days',
        delay: 1500
      },
      {
        role: 'ai',
        text: 'I&apos;ve analyzed your Facebook ad performance over the last 30 days:',
        delay: 2000
      },
      {
        role: 'ai',
        text: `<div>
          <div class="mb-3">
            📊 <strong>Overall Performance</strong>:<br/>
            • Total Spend: $8,450<br/>
            • Conversions: 127 purchases<br/>
            • Conversion Rate: 1.5%<br/>
            • Average Cost per Click: $2.34
          </div>
          <div class="my-3 py-2">
            <strong>Top Performing Ads</strong>:<br/>
            <div class="ml-2 mt-1">
              🥇 <strong>"Summer Collection Launch"</strong> - 3.2% conversion, $1.89 CPC<br/>
              🥈 <strong>"Free Shipping Offer"</strong> - 2.8% conversion, $2.12 CPC<br/>
              🥉 <strong>"Customer Reviews"</strong> - 2.1% conversion, $2.67 CPC
            </div>
          </div>
          <div class="my-3 py-2">
            <strong>Platform Performance</strong>:<br/>
            <div class="ml-2 mt-1">
              📱 <strong>Instagram Feed</strong>: 2.4% CTR, $2.18 CPC<br/>
              📘 <strong>Facebook Feed</strong>: 1.8% CTR, $2.45 CPC<br/>
              📺 <strong>Instagram Stories</strong>: 1.2% CTR, $1.95 CPC
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-600">
            💡 <strong>Recommendation</strong>: Scale "Summer Collection Launch" and increase Instagram Feed budget - it has the best CTR and conversion rate.
          </div>
        </div>`,
        isHtml: true,
        delay: 4500
      }
    ]
  },
  {
    id: 'customer-reengagement-agent',
    title: 'Smart Agent Creation',
    lines: [
      {
        role: 'user',
        text: 'Create an agent to find VIP customers and suggest personalized re-engagement strategies',
        delay: 1500
      },
      {
        role: 'ai',
        text: '✨ VIP Customer Re-engagement Agent Created!',
        delay: 2000
      },
      {
        role: 'ai',
        text: `<div>
          <div class="mb-2">Your new AI agent will:</div>
          <div class="space-y-1 ml-2">
            🔍 <strong>Identify</strong> your top 20% customers by lifetime value<br/>
            📧 <strong>Detect</strong> customers who haven&apos;t purchased in 30+ days<br/>
            💡 <strong>Generate</strong> personalized win-back campaigns<br/>
            📅 <strong>Send you</strong> detailed insights every Monday at 9 AM<br/>
            🎯 <strong>Automate</strong> email sequences based on purchase history
          </div>
          <div class="mt-3 pt-3 border-t border-gray-600">
            First report with 15+ VIP customers ready for re-engagement will arrive Monday!
          </div>
        </div>`,
        isHtml: true,
        delay: 4500
      }
    ]
  },
  {
    id: 'facebook-roas-alert',
    title: 'Performance Monitoring',
    lines: [
      {
        role: 'user',
        text: 'Monitor my Facebook ad performance and alert me if ROAS drops below 2.0x',
        delay: 1500
      },
      {
        role: 'ai',
        text: '🚨 Facebook ROAS Monitor Agent Activated!',
        delay: 2000
      },
      {
        role: 'ai',
        text: `<div>
          <div class="mb-2">Your performance monitor is now live:</div>
          <div class="space-y-1 ml-2 mb-3">
            📈 <strong>Tracking</strong>: Facebook Ads ROAS across all campaigns<br/>
            ⚠️ <strong>Alert Threshold</strong>: Below 2.0x return<br/>
            ⏱️ <strong>Check Frequency</strong>: Every 2 hours<br/>
            📧 <strong>Instant Alerts</strong>: Email + SMS notifications<br/>
            🔧 <strong>Auto-suggestions</strong>: Budget reallocation recommendations
          </div>
          <div class="my-3 py-2 bg-green-900/20 rounded px-2">
            <strong>Current Status</strong>: ✅ ROAS is healthy at 3.1x
          </div>
          <div class="mt-3 pt-3 border-t border-gray-600">
            I&apos;ll notify you immediately if performance drops, with actionable optimization steps.
          </div>
        </div>`,
        isHtml: true,
        delay: 4500
      }
    ]
  }
] 