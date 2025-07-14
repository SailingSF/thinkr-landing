'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowUp, Sparkles } from 'lucide-react'
import { useViewportTrigger, useReducedMotion } from '@/lib/hooks'
import { chatScenarios, type ChatLine } from '@/data/chatScenarios'

interface MessageBubbleProps {
  message: ChatLine
  isVisible: boolean
  isTyping?: boolean
}

function MessageBubble({ message, isVisible }: MessageBubbleProps) {
  if (!isVisible) return null
  
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4 transform transition-all duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div
        className={`max-w-[85%] px-5 py-3 rounded-2xl shadow-lg transition-all duration-200 ${
          message.role === 'user'
            ? 'bg-gradient-to-r from-[#7B6EF6] to-[#9D8DF8] text-white shadow-purple-500/20 scale-100 hover:scale-105'
            : 'bg-gradient-to-r from-[#2C2C2E] to-[#343437] text-white border border-[#404040] shadow-white/5'
        }`}
      >
        <div className="text-sm leading-relaxed">
          {message.isHtml ? (
            <div dangerouslySetInnerHTML={{ __html: message.text }} />
          ) : (
            <div className="whitespace-pre-wrap">{message.text}</div>
          )}
        </div>
      </div>
    </div>
  )
}

interface TypingIndicatorProps {
  isVisible: boolean
}

function TypingIndicator({ isVisible }: TypingIndicatorProps) {
  if (!isVisible) return null

  return (
    <div className={`flex justify-start mb-4 transform transition-all duration-200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
      <div className="bg-gradient-to-r from-[#2C2C2E] to-[#343437] text-white border border-[#404040] px-5 py-3 rounded-2xl shadow-lg">
        <div className="flex space-x-1 items-center">
          <Sparkles className="h-3 w-3 text-[#7B6EF6] animate-pulse" />
          <div className="w-2 h-2 bg-[#7B6EF6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-[#7B6EF6] rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
          <div className="w-2 h-2 bg-[#7B6EF6] rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  )
}

function IntegrationsDisplay() {
  const integrations = [
    { name: 'Shopify', logo: '/integration-logos/shopify_glyph_white.svg' },
    { name: 'Meta', logo: '/integration-logos/meta-icon-2.png' },
    { name: 'Google Ads', logo: '/integration-logos/google-ads-icon-2.png' },
    { name: 'Klaviyo', logo: '/integration-logos/klaviyo-white-icon.png' },
    { name: 'Google Analytics', logo: '/integration-logos/google-analytics-icon.png' },
  ]

  return (
    <div className="flex items-center justify-between mb-3 px-1">
      <div className="flex items-center space-x-1">
        <span className="text-xs text-gray-400">Integrations:</span>
        <div className="flex items-center space-x-2">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="relative w-5 h-5 flex items-center justify-center"
              title={integration.name}
            >
              <Image
                src={integration.logo}
                alt={integration.name}
                width={20}
                height={20}
                className="object-contain w-5 h-5"
                style={{ filter: 'drop-shadow(0 0 2px #000)' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-green-400">Active</span>
      </div>
    </div>
  )
}

export default function ChatHero() {
  const { ref, inView } = useViewportTrigger(0.2)
  const prefersReducedMotion = useReducedMotion()
  
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentScenario = chatScenarios[currentScenarioIndex]

  const resetAnimation = useCallback(() => {
    setVisibleMessages([])
    setShowTypingIndicator(false)
    setIsPlaying(false)
  }, [])

  const startNextScenario = useCallback(() => {
    const nextIndex = (currentScenarioIndex + 1) % chatScenarios.length
    setCurrentScenarioIndex(nextIndex)
    resetAnimation()
  }, [currentScenarioIndex, resetAnimation])

  const playScenario = useCallback(() => {
    if (!currentScenario || isPlaying) return
    
    setIsPlaying(true)
    let messageIndex = 0
    
    const showNextMessage = () => {
      if (messageIndex >= currentScenario.lines.length) {
        // Scenario complete, wait longer before starting next
        setTimeout(() => {
          startNextScenario()
        }, 4000) // Increased from 2200ms to 4000ms
        return
      }

      const message = currentScenario.lines[messageIndex]
      
      if (message.role === 'user') {
        // Show user message with smooth animation
        setVisibleMessages(prev => [...prev, messageIndex])
        
        // Wait for user message to settle, then show typing indicator
        setTimeout(() => {
          messageIndex++
          if (messageIndex < currentScenario.lines.length) {
            setShowTypingIndicator(true)
            // Show typing indicator for a while, then show AI response
            setTimeout(() => {
              setShowTypingIndicator(false)
              // Small delay before showing AI response
              setTimeout(() => {
                showNextMessage()
              }, 100)
            }, 1800) // Typing indicator duration
          } else {
            showNextMessage()
          }
        }, message.delay || 1200) // User message display time
      } else {
        // AI message - show with smooth animation
        setVisibleMessages(prev => [...prev, messageIndex])
        messageIndex++
        setTimeout(showNextMessage, message.delay || 3500) // AI message display time
      }
    }

    showNextMessage()
  }, [currentScenario, isPlaying, startNextScenario])

  // Start animation when in view
  useEffect(() => {
    if (inView && !prefersReducedMotion && !isPlaying) {
      const timer = setTimeout(() => {
        playScenario()
      }, 1200) // Slightly longer initial delay
      return () => clearTimeout(timer)
    } else if (!inView) {
      resetAnimation()
    }
  }, [inView, prefersReducedMotion, playScenario, resetAnimation, isPlaying])

  // Handle click to restart
  const handleClick = () => {
    if (!prefersReducedMotion) {
      resetAnimation()
      setTimeout(playScenario, 500)
    }
  }

  // Fallback for reduced motion or no JS
  if (prefersReducedMotion) {
    return (
      <div className="relative mx-auto w-full max-w-5xl px-4 py-12">
        <Image
          src="/hero_image_3.svg"
          alt="thinkr chat interface"
          width={1100}
          height={620}
          className="w-full h-auto rounded-3xl shadow-2xl"
          priority
        />
      </div>
    )
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the thinkr chat
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch how thinkr&apos;s AI agents help e-commerce businesses analyze data, automate tasks, and grow sales effortlessly.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="relative mx-auto w-full max-w-4xl"
          aria-label="thinkr chat preview"
        >
          <noscript>
            <Image
              src="/hero_image_3.svg"
              alt="thinkr chat interface"
              width={1100}
              height={620}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </noscript>
          
          {/* Ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10 animate-pulse" />
          
          <div 
            className="relative bg-gradient-to-br from-[#1a1a1b] via-[#181A1B] to-[#161718] rounded-3xl shadow-2xl border border-[#2a2a2c] w-full flex flex-col cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-500/20 hover:shadow-2xl group"
            style={{ height: '620px' }}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick()
              }
            }}
            aria-label="Click to restart chat demo"
          >
            {/* Header with enhanced logo and glow */}
            <div className="flex justify-center pt-6 pb-3 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                <Image
                  src="/thinkr-logo-white.png"
                  alt="thinkr"
                  width={140}
                  height={44}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
            
            {/* Enhanced greeting */}
            <div className="px-6 pb-4">
              <h3 className="text-white text-lg font-medium text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Good morning! How can I help your business today?
              </h3>
            </div>
            
            {/* Chat Messages with better spacing */}
            <div className="flex-1 px-6 overflow-hidden" style={{ minHeight: '240px' }}>
              <div className="space-y-4 h-full">
                {currentScenario?.lines.slice(0, 4).map((message, index) => (
                  <MessageBubble
                    key={`${currentScenarioIndex}-${index}`}
                    message={message}
                    isVisible={visibleMessages.includes(index)}
                  />
                ))}
                <TypingIndicator isVisible={showTypingIndicator} />
              </div>
            </div>
            
            {/* Enhanced input area with integrations */}
            <div className="p-4">
              <div className="bg-gradient-to-r from-[#232425] to-[#2a2a2c] rounded-2xl p-3 border border-[#3a3a3c] shadow-inner">
                <IntegrationsDisplay />
                <div className="bg-gradient-to-r from-[#2C2C2E] to-[#343437] rounded-xl p-3 flex items-center border border-[#404040]">
                  <div className="flex-1 text-gray-400 text-sm">
                    Create an Agent or ask anything...
                  </div>
                  <button
                    className="w-8 h-8 bg-gradient-to-r from-[#7B6EF6] to-[#9D8DF8] hover:from-[#6B5EE6] hover:to-[#8D7DE8] text-white rounded-xl flex items-center justify-center transition-all duration-200 ml-3 shadow-lg hover:shadow-purple-500/25 group-hover:scale-105"
                    disabled
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Enhanced scenario indicator */}
            <div className="flex justify-center pb-4">
              <div className="flex space-x-3 bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm">
                {chatScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentScenarioIndex 
                        ? 'bg-gradient-to-r from-[#7B6EF6] to-[#9D8DF8] shadow-lg shadow-purple-500/50' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    title={scenario.title}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Click hint */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm animate-pulse">
              Click to restart demo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 