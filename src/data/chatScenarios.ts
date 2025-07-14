export interface ChatLine {
  role: 'user' | 'ai'
  text: string
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
        text: 'What are my highest selling products?',
        delay: 1000
      },
      {
        role: 'ai',
        text: 'Here are your top-performing products this month:',
        delay: 1500
      },
      {
        role: 'ai',
        text: '🥇 **Wireless Bluetooth Earbuds** - 347 units sold ($24,290 revenue)\n🥈 **Premium Coffee Blend** - 298 units sold ($8,944 revenue)\n🥉 **Organic Cotton T-Shirt** - 276 units sold ($8,280 revenue)\n\n📈 **Growth leaders**: Earbuds (+45% vs last month), Coffee Blend (+32%)\n💡 **Opportunity**: Consider bundling top performers for higher AOV',
        delay: 2200
      }
    ]
  },
  {
    id: 'conversion-analysis',
    title: 'Conversion Analytics',
    lines: [
      {
        role: 'user',
        text: 'What is my conversion ratio based on user sessions on my store?',
        delay: 1000
      },
      {
        role: 'ai',
        text: 'I\'ve analyzed your store\'s conversion performance:',
        delay: 1500
      },
      {
        role: 'ai',
        text: '📊 **Overall Conversion Rate**: 3.2% (up from 2.8% last month)\n👥 **Total Sessions**: 12,347 this month\n🛒 **Conversions**: 395 purchases\n\n**By Traffic Source**:\n• Organic Search: 4.1% conversion\n• Facebook Ads: 2.9% conversion\n• Email: 6.8% conversion\n\n💡 **Recommendation**: Your email traffic converts best - consider increasing email campaigns.',
        delay: 2500
      }
    ]
  },
  {
    id: 'customer-reengagement-agent',
    title: 'Agent Creation',
    lines: [
      {
        role: 'user',
        text: 'Create an agent to find my top customers and propose how to re-engage with them',
        delay: 1000
      },
      {
        role: 'ai',
        text: '✅ **Customer Re-engagement Agent Created!**',
        delay: 1500
      },
      {
        role: 'ai',
        text: 'Your new agent will:\n\n🔍 **Analyze** your top 20% customers by lifetime value\n📧 **Identify** customers who haven\'t purchased in 30+ days\n💡 **Generate** personalized re-engagement strategies\n📅 **Email you** every Monday morning with actionable recommendations\n\nFirst report will arrive this Monday at 9 AM with your top 10 customers ready for re-engagement!',
        delay: 2200
      }
    ]
  },
  {
    id: 'facebook-roas-alert',
    title: 'Alert Agent',
    lines: [
      {
        role: 'user',
        text: 'Create an alert to monitor if my ROAS from facebook ads drops below 1.0',
        delay: 1000
      },
      {
        role: 'ai',
        text: '🚨 **Facebook ROAS Alert Agent Created!**',
        delay: 1500
      },
      {
        role: 'ai',
        text: 'Your alert is now active and monitoring:\n\n📈 **Metric**: Facebook Ads ROAS\n⚠️ **Threshold**: Below 1.0x return\n⏱️ **Check Frequency**: Every 4 hours\n📧 **Notification**: Instant email alert\n\n**Current Status**: ✅ ROAS is healthy at 2.3x\n\nI\'ll email you immediately if ROAS drops below 1.0, including suggested actions to improve performance.',
        delay: 2200
      }
    ]
  }
] 